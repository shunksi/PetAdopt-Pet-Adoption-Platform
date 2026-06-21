interface HeroProps {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function Hero({ title, subtitle, ctaLabel, ctaHref }: HeroProps) {
  return (
    <section className="bg-brand-500 px-6 py-20 text-center text-white">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        {subtitle && (
          <p className="text-base text-brand-50/90 sm:text-lg">{subtitle}</p>
        )}
        {ctaLabel && ctaHref && (
          <a
            href={ctaHref}
            className="mt-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
          >
            {ctaLabel}
          </a>
        )}
      </div>
    </section>
  );
}
