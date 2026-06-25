import { notFound } from "next/navigation";
import PetForm from "@/components/admin/PetForm";
import { getPetById } from "@/lib/pets";
import { updatePet } from "../../actions";

interface EditPetPageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ error?: string }>;
}

export const dynamic = "force-dynamic";

export default async function EditPetPage({ params, searchParams }: EditPetPageProps) {
  const { id } = await params;
  const { error } = await searchParams;
  const pet = await getPetById(id);

  if (!pet) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-10">
      <h1 className="mb-6 text-2xl font-bold text-brand-900">Edit {pet.name}</h1>
      {error && (
        <p className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      )}
      <PetForm
        action={updatePet.bind(null, pet.id)}
        defaultValues={pet}
        submitLabel="Save changes"
      />
    </div>
  );
}
