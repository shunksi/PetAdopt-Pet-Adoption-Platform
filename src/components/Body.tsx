interface BodyProps {
  title: string;
  paragraphs: string[];
  imageAlt?: string;
  /** Optional real image; falls back to a labeled placeholder box like the wireframe */
  imageSrc?: string;
  imageLabel?: string;
  reverse?: boolean;
}

export default function Body({
  title,
  paragraphs,
  imageAlt = "",
  imageSrc,
  imageLabel = "600 x 400",
  reverse = false,
}: BodyProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div
        className={`flex flex-col items-center gap-10 md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="aspect-[3/2] w-full flex-1 overflow-hidden rounded-lg bg-surface-muted">
          {imageSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={imageSrc} alt={imageAlt} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm font-medium text-foreground/40">
              {imageLabel}
            </div>
          )}
        </div>
        <div className="flex-1 space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-brand-900">
            {title}
          </h2>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-sm leading-relaxed text-foreground/70">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
