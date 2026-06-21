import Link from "next/link";
import { Pet } from "@/types/pet";

interface PetCardProps {
  pet: Pet;
}

export default function PetCard({ pet }: PetCardProps) {
  return (
    <Link
      href={`/pets/${pet.slug}`}
      className="block w-full max-w-sm overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="aspect-[3/2] w-full bg-surface-muted">
        {pet.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={pet.imageUrl}
            alt={pet.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-lg font-medium text-foreground/40">
            Pet Image
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="font-semibold text-brand-900">{pet.name}</p>
        <p className="text-sm text-foreground/60">
          Age: {pet.age} {pet.age === 1 ? "year" : "years"}
        </p>
      </div>
    </Link>
  );
}
