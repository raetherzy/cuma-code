"use client";

import { useState } from "react";
import { portfolioItems } from "../data/portfolio";

export default function PortofolioPage() {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = portfolioItems.filter((item) => {
    const matchFilter =
      activeFilter === "Semua" || item.category === activeFilter;
    const matchSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.stacks.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchFilter && matchSearch;
  });

  const filters = ["Semua", "Frontend", "Backend", "Mobile", "CMS", "Lainnya"];

  return (
    <main className="flex-1">
      <section className="bg-yellow brutal-border border-t-0 border-x-0 py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl md:text-6xl font-bold mb-2">Portofolio</h1>
          <p className="text-lg text-black/60 max-w-xl">
            Project beneran, hasil nyata. Dari UMKM, startup, sampai tugas akhir.
            Semua dikerjakan dengan #BayarCumaCuma.
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <input
              type="text"
              placeholder="Cari project atau tech stack..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="brutal-border border-2 p-3 font-mono text-sm flex-1 focus:outline-none focus:border-black"
            />
            <div className="flex flex-wrap gap-2">
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
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-black/40">
              <p className="text-2xl font-bold">Nggak ada hasil</p>
              <p className="mt-2">Coba keyword atau filter lain.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filtered.map((item) => (
                <div key={item.title} className="brutal-card">
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="font-bold text-xl">{item.title}</h2>
                    <span className="text-xs font-bold bg-yellow px-2 py-0.5 shrink-0 ml-2">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-sm text-black/60 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.stacks.map((s) => (
                      <span
                        key={s}
                        className="text-xs font-bold brutal-border border-2 px-2 py-0.5"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  {item.link && item.link !== "#" && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold underline hover:text-yellow transition-colors"
                    >
                      Lihat Project →
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
