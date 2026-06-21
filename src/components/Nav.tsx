import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/pets", label: "Pets" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="bg-white border-b border-black/10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-brand-900">
          Brand
        </Link>
        <ul className="flex items-center gap-8 text-sm font-medium text-foreground/80">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-brand-600"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
