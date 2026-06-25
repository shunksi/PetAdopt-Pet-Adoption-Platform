import { createClient } from "@/lib/supabase/server";
import { Pet, PetRow } from "@/types/pet";
import { SupabaseClient } from "@supabase/supabase-js";

const BUCKET = "pet-photos";

function mapRowToPet(row: PetRow, publicUrl: (path: string) => string): Pet {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    age: row.age,
    species: row.species,
    breed: row.breed,
    imagePath: row.image_path,
    imageUrl: row.image_path ? publicUrl(row.image_path) : null,
    shortBio: row.short_bio,
    whereFrom: row.where_from,
    careInstructions: row.care_instructions
      ? row.care_instructions.split("\n").map((line) => line.trim()).filter(Boolean)
      : [],
    personalityTraits: row.personality_traits,
    funFact: row.fun_fact,
  }
}

export async function getPets(): Promise<Pet[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("pets")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to load pets :", error.message);
    return [];
  }

  const getPublicUrl = (path: string) =>
    supabase.storage.from(BUCKET).getPublicUrl(path).data.publicUrl;

  return (data as PetRow[]).map((row) => mapRowToPet(row, getPublicUrl));
}

export async function getPetBySlug(slug: string): Promise<Pet | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("pets")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error || !data) {
    if (error) console.error("Failed to load pet:", error.message);
    return null;
  }

  const getPublicUrl = (path: string) =>
    supabase.storage.from(BUCKET).getPublicUrl(path).data.publicUrl;
  return mapRowToPet(data as PetRow, getPublicUrl);
}


export async function getPetById(id: string): Promise<Pet | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("pets")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error || !data) {
    if (error) console.error("Failed to load pet:", error.message);
    return null;
  }

  const getPublicUrl = (path: string) =>
    supabase.storage.from(BUCKET).getPublicUrl(path).data.publicUrl;

  return mapRowToPet(data as PetRow, getPublicUrl);
}





























































