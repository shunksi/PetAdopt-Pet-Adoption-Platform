"use server";

import { randomUUID } from "crypto";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { slugify } from "@/lib/slug";

const BUCKET = "pet-photos";

// ---- Auth ----

export async function signIn(formData: FormData) {
  const email = (formData.get("email") as string)?.trim();
  const password = formData.get("password") as string;
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    return redirect(`/admin/login?error=${encodeURIComponent(error.message)}`);
  }

  return redirect("/admin");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return redirect("/admin/login");
}

// ---- Helpers ----

type Supabase = Awaited<ReturnType<typeof createClient>>;

/** Appends -2, -3, etc. until it finds a slug nobody's using yet. */
async function uniqueSlug(supabase: Supabase, base: string): Promise<string> {
  const root = base || "pet";
  let candidate = root;
  let suffix = 2;

  // Small loop, fine for a low-volume admin tool. For high-traffic inserts
  // you'd want a database-level uniqueness retry instead.
  for (;;) {
    const { data } = await supabase
      .from("pets")
      .select("id")
      .eq("slug", candidate)
      .maybeSingle();
    if (!data) return candidate;
    candidate = `${root}-${suffix}`;
    suffix += 1;
  }
}

function readPetFields(formData: FormData) {
  return {
    name: (formData.get("name") as string)?.trim() ?? "",
    age: Number(formData.get("age")),
    species: ((formData.get("species") as string) || "").trim() || null,
    breed: ((formData.get("breed") as string) || "").trim() || null,
    shortBio: ((formData.get("shortBio") as string) || "").trim() || null,
    whereFrom: ((formData.get("whereFrom") as string) || "").trim() || null,
    careInstructions:
      ((formData.get("careInstructions") as string) || "").trim() || null,
    personalityTraits:
      ((formData.get("personalityTraits") as string) || "").trim() || null,
    funFact: ((formData.get("funFact") as string) || "").trim() || null,
  };
}

async function requireUser(supabase: Supabase) {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    // Belt-and-braces: middleware already blocks unauthenticated page loads,
    // but Server Actions can be invoked directly, so we check again here.
    redirect("/admin/login");
  }
  return user;
}

// ---- Pet CRUD ----

export async function createPet(formData: FormData) {
  const supabase = await createClient();
  await requireUser(supabase);

  const fields = readPetFields(formData);
  if (!fields.name || Number.isNaN(fields.age)) {
    return redirect(
      `/admin/new?error=${encodeURIComponent("Name and age are required.")}`
    );
  }

  const photo = formData.get("photo") as File | null;
  let imagePath: string | null = null;

  if (photo && photo.size > 0) {
    const ext = photo.name.split(".").pop() || "jpg";
    const path = `${randomUUID()}.${ext}`;
    const { error: uploadError } = await supabase.storage
      .from(BUCKET)
      .upload(path, photo);
    if (uploadError) {
      return redirect(`/admin/new?error=${encodeURIComponent(uploadError.message)}`);
    }
    imagePath = path;
  }

  const slug = await uniqueSlug(supabase, slugify(fields.name));

  const { error } = await supabase.from("pets").insert({
    slug,
    name: fields.name,
    age: fields.age,
    species: fields.species,
    breed: fields.breed,
    image_path: imagePath,
    short_bio: fields.shortBio,
    where_from: fields.whereFrom,
    care_instructions: fields.careInstructions,
    personality_traits: fields.personalityTraits,
    fun_fact: fields.funFact,
  });

  if (error) {
    return redirect(`/admin/new?error=${encodeURIComponent(error.message)}`);
  }

  // Tells Next.js "the data behind these paths changed, drop the cache" -
  // otherwise the public /pets page could keep showing stale data.
  revalidatePath("/admin");
  revalidatePath("/pets");
  return redirect("/admin");
}

export async function updatePet(id: string, formData: FormData) {
  const supabase = await createClient();
  await requireUser(supabase);

  const fields = readPetFields(formData);
  if (!fields.name || Number.isNaN(fields.age)) {
    return redirect(
      `/admin/${id}/edit?error=${encodeURIComponent("Name and age are required.")}`
    );
  }

  const updates: Record<string, unknown> = {
    name: fields.name,
    age: fields.age,
    species: fields.species,
    breed: fields.breed,
    short_bio: fields.shortBio,
    where_from: fields.whereFrom,
    care_instructions: fields.careInstructions,
    personality_traits: fields.personalityTraits,
    fun_fact: fields.funFact,
  };

  const photo = formData.get("photo") as File | null;
  if (photo && photo.size > 0) {
    const { data: existing } = await supabase
      .from("pets")
      .select("image_path")
      .eq("id", id)
      .maybeSingle();

    const ext = photo.name.split(".").pop() || "jpg";
    const path = `${randomUUID()}.${ext}`;
    const { error: uploadError } = await supabase.storage
      .from(BUCKET)
      .upload(path, photo);
    if (uploadError) {
      return redirect(
        `/admin/${id}/edit?error=${encodeURIComponent(uploadError.message)}`
      );
    }
    updates.image_path = path;

    // Clean up the old photo so the storage bucket doesn't fill up with
    // orphaned files every time someone swaps a pet's picture.
    if (existing?.image_path) {
      await supabase.storage.from(BUCKET).remove([existing.image_path]);
    }
  }

  const { error } = await supabase.from("pets").update(updates).eq("id", id);
  if (error) {
    return redirect(`/admin/${id}/edit?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath("/admin");
  revalidatePath("/pets");
  return redirect("/admin");
}

export async function deletePet(
  id: string,
  imagePath: string | null,
  _formData: FormData
) {
  const supabase = await createClient();
  await requireUser(supabase);

  if (imagePath) {
    await supabase.storage.from(BUCKET).remove([imagePath]);
  }
  await supabase.from("pets").delete().eq("id", id);

  revalidatePath("/admin");
  revalidatePath("/pets");
}
