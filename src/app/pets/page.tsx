import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PetCard from "@/components/PetCard";
import { pets } from "@/lib/pets";

export default function PetsPage() {
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {pets.map((pet) => (
              <PetCard key={pet.slug} pet={pet} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
