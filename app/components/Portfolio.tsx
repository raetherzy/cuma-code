"use client";

import { useState } from "react";

import { portfolioItems } from "../data/portfolio";

const filters = ["Semua", "Frontend", "Backend", "Mobile", "CMS", "Lainnya"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const filtered =
    activeFilter === "Semua"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portofolio" className="py-20 px-4 bg-yellow">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-2">Hasil Kerja Nyata</h2>
        <p className="text-lg text-black/60 mb-8 max-w-xl">
          Project beneran yang sudah kami selesaikan. Bukan template, bukan dummy.
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`brutal-border border-2 px-4 py-1.5 font-bold text-sm uppercase tracking-wider transition-colors ${
                activeFilter === f
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-black hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item) => (
            <a
              key={item.title}
              href={item.link}
              className="brutal-card bg-white block group"
            >
              <h3 className="font-bold text-lg mb-2 group-hover:underline">{item.title}</h3>
              <p className="text-sm text-black/60 mb-4 leading-relaxed">{item.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {item.stacks.map((s) => (
                  <span key={s} className="text-xs font-bold bg-yellow px-2 py-0.5">
                    {s}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="/portofolio" className="brutal-btn brutal-btn-black brutal-shadow inline-flex">
            Lihat Semua Portofolio →
          </a>
        </div>
      </div>
    </section>
  );
}
