"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Nav() {
  const pathname = usePathname();
  const isProject = pathname.startsWith("/projetos/");
  const [open, setOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const textColor = isProject ? "text-white" : "text-[#1a1a1a]";
  const bg = isProject
    ? "bg-gradient-to-b from-black/40 to-black/0"
    : "bg-white/95 backdrop-blur-sm";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 ${bg}`}>
        <nav className="max-w-7xl mx-auto px-6 py-7 flex items-center justify-between">
          <Link
            href="/"
            className={`font-serif text-xl tracking-wide font-medium ${textColor} hover:opacity-60 transition-opacity ease-smooth`}
          >
            Viviana Figueiredo
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-xs tracking-[0.15em] uppercase ${textColor} hover:opacity-60 transition-opacity ease-smooth`}
              >
                {label}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/vivianafigueiredo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={`-m-2 p-2 ${textColor} hover:opacity-60 transition-opacity ease-smooth`}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden -m-2 p-2 ${textColor} hover:opacity-60 transition-opacity`}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="3" y1="8" x2="21" y2="8" />
                <line x1="3" y1="16" x2="21" y2="16" />
              </svg>
            )}
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-10 md:hidden">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-serif text-4xl font-light text-[#1a1a1a] hover:opacity-60 transition-opacity"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://www.instagram.com/vivianafigueiredo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-[#1a1a1a] hover:opacity-60 transition-opacity mt-2"
            onClick={() => setOpen(false)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
          </a>
        </div>
      )}
    </>
  );
}
