"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import BrandMark from "./BrandMark";
import { ButtonLink } from "./Button";
import { navLinks, site } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur">
      <div className="container-page flex h-[72px] items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
          <BrandMark />
          <span className="text-lg font-bold tracking-tight text-ink">{site.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-8 text-sm font-medium text-ink/80">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative py-2 transition-colors duration-150 hover:text-brand ${
                    i === 0
                      ? "text-brand after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded after:bg-brand"
                      : ""
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink href="#contact">Let&rsquo;s Talk</ButtonLink>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink hover:bg-lavender md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      <nav id="mobile-nav" aria-label="Mobile" hidden={!open} className="border-t border-line bg-white md:hidden">
        <ul className="container-page flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 font-medium text-ink hover:bg-lavender"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <ButtonLink href="#contact" className="w-full" onClick={() => setOpen(false)}>
              Let&rsquo;s Talk
            </ButtonLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
