import PetForm from "@/components/admin/PetForm";
import { createPet } from "../actions";

interface NewPetPageProps {
  searchParams: Promise<{ error?: string }>;
}

export default async function NewPetPage({ searchParams }: NewPetPageProps) {
  const { error } = await searchParams;

  return (
    <div className="mx-auto max-w-2xl px-6 py-10">
      <h1 className="mb-6 text-2xl font-bold text-brand-900">Add a pet</h1>
      {error && (
        <p className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      )}
      <PetForm action={createPet} submitLabel="Save pet" />
    </div>
  );
}
