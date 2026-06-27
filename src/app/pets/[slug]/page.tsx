import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getPetBySlug } from "@/lib/pets";

interface PetPageProps {
  params: Promise<{ slug: string }>;
}

// Pets are added/edited through /admin, so always fetch fresh - no static
// generation/caching here (that's what generateStaticParams would do).
export const dynamic = "force-dynamic";

export default async function PetSubPage({ params }: PetPageProps) {
  const { slug } = await params;
  const pet = await getPetBySlug(slug);

  if (!pet) {
    notFound();
  }

  return (
    <>
      <Nav />
      <main className="flex-1 bg-surface-soft">
        <div className="mx-auto max-w-2xl px-6 py-12">
          <article className="overflow-hidden rounded-lg border border-black/10 bg-white">
            <div className="aspect-[16/9] w-full bg-surface-muted">
              {pet.imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={pet.imageUrl}
                  alt={pet.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-2xl font-medium text-foreground/40">
                  Pet Image
                </div>
              )}
            </div>

            <div className="space-y-6 p-8">
              <div>
                <h1 className="text-2xl font-bold text-brand-900">Meet {pet.name}</h1>
                <p className="mt-1 text-sm text-foreground/60">
                  {pet.age} {pet.age === 1 ? "year" : "years"} old
                  {pet.breed ? ` · ${pet.breed}` : ""}
                </p>
              </div>

              {pet.shortBio && (
                <section>
                  <h2 className="text-sm font-semibold text-brand-700">Short Bio</h2>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/70">
                    {pet.shortBio}
                  </p>
                </section>
              )}

              {pet.whereFrom && (
                <section>
                  <h2 className="text-sm font-semibold text-brand-700">Where {"They're"} From</h2>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/70">
                    {pet.whereFrom}
                  </p>
                </section>
              )}

              {pet.careInstructions.length > 0 && (
                <section>
                  <h2 className="text-sm font-semibold text-brand-700">Care Instructions</h2>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-sm leading-relaxed text-foreground/70">
                    {pet.careInstructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ul>
                </section>
              )}

              {pet.personalityTraits && (
                <section>
                  <h2 className="text-sm font-semibold text-brand-700">Personality Traits</h2>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/70">
                    {pet.personalityTraits}
                  </p>
                </section>
              )}

              {pet.funFact && (
                <section>
                  <h2 className="text-sm font-semibold text-brand-700">Fun Fact</h2>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/70">
                    {pet.funFact}
                  </p>
                </section>
              )}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}

