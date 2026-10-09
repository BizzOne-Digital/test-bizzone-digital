import BrandMark from "./BrandMark";
import { navLinks, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="container-page">
      <div className="flex flex-col items-center gap-4 border-t border-line py-8 sm:flex-row sm:justify-between">
        <a href="#home" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
          <BrandMark className="h-7 w-7" />
          <span className="font-bold tracking-tight text-ink">{site.name}</span>
        </a>
        <nav aria-label="Footer">
          <ul className="flex gap-6 text-sm font-medium text-ink/80">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="inline-block py-2 transition-colors duration-150 hover:text-brand">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
