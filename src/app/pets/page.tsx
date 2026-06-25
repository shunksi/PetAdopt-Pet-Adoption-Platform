import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PetCard from "@/components/PetCard";
import { getPets } from "@/lib/pets";




export default async function PetsPage() {
  const pets = await getPets();
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-brand-900">
              Meet Our Pets
            </h1>
            <p className="mt-2 text-sm text-foreground/60">
              Every one of them is looking for a forever home.
            </p>
          </div>
          {pets.length === 0 ? (
            <p className="text-center text-sm text-foreground/50">
              No pets Yet - add one from admin dashboard.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
              {pets.map((pet) => (
                <PetCard key={pet.id} pet={pet} />
              ))}

            </div>
          )}
        </section >
      </main >
      <Footer />
    </>
  );
}
