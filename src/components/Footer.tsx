const currentYear = new Date().getFullYear();

const socialLinks = [
  { href: "https://facebook.com", label: "Facebook" },
  { href: "https://twitter.com", label: "Twitter" },
  { href: "https://instagram.com", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-brand-900 text-brand-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-8 text-center">
        <span className="text-base font-semibold text-white">Brand</span>
        <p className="text-sm text-brand-100/80">
          &copy; {currentYear} Brand. All rights reserved.
        </p>
        <ul className="flex items-center gap-4 pt-1">
          {socialLinks.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="text-brand-100/80 transition-colors hover:text-white"
              >
                {/* simple glyphs keep the starter dependency-free; swap in an icon library if you like */}
                <span className="text-sm">
                  {social.label === "Facebook" && "f"}
                  {social.label === "Twitter" && "𝕏"}
                  {social.label === "Instagram" && "◎"}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
