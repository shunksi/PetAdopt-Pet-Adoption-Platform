import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Body from "@/components/Body";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero
          title="Welcome to Our Website"
          subtitle="We provide the best services to help you succeed."
          ctaLabel="Get Started"
          ctaHref="/pets"
        />
        <Body
          title="Stunning Landscapes"
          paragraphs={[
            "Explore the beauty of nature through breathtaking landscapes. From majestic mountains to serene beaches, each view offers a unique perspective that captivates the heart and soul.",
            "Nature has a way of inspiring us, reminding us of the wonders that exist beyond our daily lives. Embrace the tranquility and awe that these stunning landscapes provide.",
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
