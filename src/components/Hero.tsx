import Link from "next/link";
import Image from "next/image";


interface HeroProps {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-50 px-6 py-24">
      {/* Background Glow Effects */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-pink-300/40 blur-3xl" />

      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-slate-400/30 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-16 lg:flex-row lg:justify-between">
        {/* Left Side */}
        <div className="max-w-xl text-center lg:text-left">
          <span className="rounded-full border border-pink-200 bg-pink-100 px-4 py-1 text-sm font-medium text-pink-600">
            🐾 Find Your Forever Friend
          </span>

          <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-800 md:text-6xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              {subtitle}
            </p>
          )}

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            {ctaLabel && ctaHref && (
              <Link
                href={ctaHref}
                className="
                  rounded-full
                  bg-pink-500
                  px-7
                  py-3
                  font-semibold
                  text-white
                  transition-all
                  hover:scale-105
                  hover:bg-pink-600
                "
              >
                {ctaLabel}
              </Link>
            )}

            <Link
              href="/pets"
              className="
                rounded-full
                border
                border-slate-300
                bg-white/60
                px-7
                py-3
                font-semibold
                text-slate-700
                backdrop-blur-md
                transition
                hover:bg-white
              "
            >
              Browse Pets
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 lg:justify-start">
            <div>
              <h3 className="text-2xl font-bold text-slate-800">1200+</h3>
              <p className="text-sm text-slate-500">Successful Adoptions</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800">350+</h3>
              <p className="text-sm text-slate-500">Pets Available</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800">50+</h3>
              <p className="text-sm text-slate-500">Partner Shelters</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex items-center justify-center">
          <div
            className="
              flex
              h-[400px]
              w-[350px]
              items-center
              justify-center
              rounded-[2rem]
              border
              border-white/50
              bg-white/40
              backdrop-blur-xl
              shadow-2xl
            "
          >
            <span className="text-center text-slate-400">
              <Image src="/cutie.jpeg" alt="funny cat" fill className="object-cover" />
            </span>
          </div>

          {/* Floating Cards */}
          <div className="absolute -left-12 top-2 rounded-2xl bg-white p-4 shadow-xl">
            <p className="text-sm font-semibold text-slate-700">
              Loving Homes
            </p>
          </div>

          <div className="absolute -right-8 bottom-10 rounded-2xl bg-white p-4 shadow-xl">
            <p className="text-sm font-semibold text-slate-700">
              Happy Pets
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
