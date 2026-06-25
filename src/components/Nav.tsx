import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/pets", label: "Find Pets" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className=" sticky top-0 z-50 border-b border-white/20 bg-white/10 backdrop-blur-xl supports-[backdrop-filter]:bg-white/10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-slate-800">
          <span className="text-2xl">🐾</span>
          <span>PetAdopt</span>
        </Link>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-pink-500"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/pets"
          className="
            rounded-full
            bg-pink-400
            px-5
            py-2
            text-sm
            font-semibold
            text-white
            transition-all
            hover:scale-105
            hover:bg-pink-500
          "
        >
          Adopt Now
        </Link>
      </nav>
    </header>
  );
}

