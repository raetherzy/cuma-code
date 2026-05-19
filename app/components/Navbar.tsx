"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Beranda", href: "/" },
    { label: "Layanan", href: "/#layanan" },
    { label: "Portofolio", href: "/#portofolio" },
    { label: "Kontak", href: "/#kontak" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white brutal-border border-t-0 border-x-0">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="brutal-shadow-sm brutal-border px-3 py-1 select-none">
          <span className="font-bold text-xl tracking-tight">CumaCode</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-bold text-sm uppercase tracking-wider hover:text-yellow transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/pesan" className="brutal-btn brutal-btn-yellow brutal-shadow-sm text-sm">
            Pesan Sekarang
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden brutal-border p-2"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            {isOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden brutal-border border-x-0 border-b-0 bg-white px-4 pb-4">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-bold text-sm uppercase tracking-wider py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/pesan"
              onClick={() => setIsOpen(false)}
              className="brutal-btn brutal-btn-yellow brutal-shadow-sm text-sm mt-2"
            >
              Pesan Sekarang
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
