import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 bg-surface-soft">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <div className="overflow-hidden rounded-lg border border-black/10 bg-white">
            <div className="px-8 py-6 text-center">
              <h1 className="text-2xl font-bold text-brand-900">Contact Us 🐾</h1>
            </div>

            <div className="grid grid-cols-1 gap-8 px-8 pb-8 md:grid-cols-2">
              <div className="space-y-5">
                <div>
                  <h2 className="text-sm font-semibold text-brand-700">Get in Touch</h2>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/70">
                    We would love to hear from you. Please reach out to us using the
                    information below.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground">Address:</h3>
                  <p className="text-sm text-foreground/70">
                    123 Cat Street, Feline City, CA 90210
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground">Phone:</h3>
                  <p className="text-sm text-foreground/70">(123) 456-7890</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground">Email:</h3>
                  <p className="text-sm text-foreground/70">
                    contact@ourcompany.com
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    Follow us on social media:
                  </h3>
                  <div className="mt-1 flex gap-3 text-brand-600">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">𝕏</a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
