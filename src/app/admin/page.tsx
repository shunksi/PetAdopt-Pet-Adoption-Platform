import Link from "next/link";
import { getPets } from "@/lib/pets";
import { deletePet } from "./actions";

// Always show the latest data - this page is the source of truth for what's
// live on the public site, so it should never serve a cached/stale list.
export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const pets = await getPets();

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-brand-900">Pets</h1>
        <Link
          href="/admin/new"
          className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
        >
          Add pet
        </Link>
      </div>

      {pets.length === 0 ? (
        <p className="text-sm text-foreground/60">No pets yet. Add your first one.</p>
      ) : (
        <ul className="divide-y divide-black/10 rounded-lg border border-black/10 bg-white">
          {pets.map((pet) => (
            <li key={pet.id} className="flex items-center justify-between gap-4 p-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 shrink-0 overflow-hidden rounded-md bg-surface-muted">
                  {pet.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={pet.imageUrl}
                      alt={pet.name}
                      className="h-full w-full object-cover"
                    />
                  ) : null}
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-900">{pet.name}</p>
                  <p className="text-xs text-foreground/60">
                    {pet.age} {pet.age === 1 ? "year" : "years"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <Link
                  href={`/admin/${pet.id}/edit`}
                  className="font-medium text-brand-600 hover:underline"
                >
                  Edit
                </Link>
                <form action={deletePet.bind(null, pet.id, pet.imagePath)}>
                  <button
                    type="submit"
                    className="font-medium text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </form>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
