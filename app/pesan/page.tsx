"use client";

import { useState } from "react";
import Link from "next/link";

export default function PesanPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nama: "",
    kontak: "",
    deskripsi: "",
    budget: "",
    timeline: "",
    techStack: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="flex-1 bg-yellow">
        <div className="mx-auto max-w-2xl px-4 py-20 text-center">
          <div className="brutal-card bg-white inline-block">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Order Kamu Sudah Masuk!
            </h2>
            <p className="text-lg text-black/60 mb-6">
              Kami akan merespon dalam 1x24 jam ke kontak yang kamu berikan.
            </p>
            <p className="text-sm text-black/40 mb-8">
              Sambil nunggu, follow Instagram kami{" "}
              <a
                href="https://instagram.com/cumacode"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline"
              >
                @cumacode
              </a>
            </p>
            <Link href="/" className="brutal-btn brutal-btn-black brutal-shadow-sm">
              ← Kembali ke Beranda
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 bg-yellow">
      <div className="mx-auto max-w-2xl px-4 py-12 md:py-20">
        <div className="brutal-card bg-white">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">Pesan Project</h1>
          <p className="text-black/60 mb-8">
            Ceritakan kebutuhanmu. Nggak perlu ragu — konsultasi gratis, bayar belakangan.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block font-bold text-sm mb-1.5" htmlFor="nama">
                Nama <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                required
                value={formData.nama}
                onChange={handleChange}
                placeholder="Nama kamu atau brand"
                className="w-full brutal-border border-2 p-3 font-mono text-sm bg-white focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block font-bold text-sm mb-1.5" htmlFor="kontak">
                Kontak (Email / WhatsApp) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="kontak"
                name="kontak"
                required
                value={formData.kontak}
                onChange={handleChange}
                placeholder="email@domain.com atau 08xxxxxxxxxx"
                className="w-full brutal-border border-2 p-3 font-mono text-sm bg-white focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block font-bold text-sm mb-1.5" htmlFor="deskripsi">
                Deskripsi Project <span className="text-red-500">*</span>
              </label>
              <textarea
                id="deskripsi"
                name="deskripsi"
                required
                rows={5}
                value={formData.deskripsi}
                onChange={handleChange}
                placeholder="Ceritakan project yang mau kamu buat. Semakin detail semakin baik — misalnya: fitur yang diinginkan, referensi website, target pengguna, dll."
                className="w-full brutal-border border-2 p-3 font-mono text-sm bg-white focus:outline-none focus:border-black resize-y"
              />
            </div>

            <div>
              <label className="block font-bold text-sm mb-1.5" htmlFor="techStack">
                Tech Stack Preference (opsional)
              </label>
              <input
                type="text"
                id="techStack"
                name="techStack"
                value={formData.techStack}
                onChange={handleChange}
                placeholder="Contoh: Next.js, Laravel, WordPress, dll. Kosongkan kalau nggak yakin."
                className="w-full brutal-border border-2 p-3 font-mono text-sm bg-white focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block font-bold text-sm mb-1.5" htmlFor="timeline">
                Timeline (opsional)
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full brutal-border border-2 p-3 font-mono text-sm bg-white focus:outline-none focus:border-black"
              >
                <option value="">Pilih timeline...</option>
                <option value="segera">Secepatnya (&lt; 1 minggu)</option>
                <option value="1-2-minggu">1-2 minggu</option>
                <option value="2-4-minggu">2-4 minggu</option>
                <option value="1-bulan-plus">Lebih dari 1 bulan</option>
                <option value="fleksibel">Fleksibel / Santai</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-sm mb-1.5" htmlFor="budget">
                Budget (opsional)
              </label>
              <input
                type="text"
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="Estimasi budget kamu. Boleh dikosongkan — ingat, bayarnya seikhlasnya."
                className="w-full brutal-border border-2 p-3 font-mono text-sm bg-white focus:outline-none focus:border-black"
              />
            </div>

            <button
              type="submit"
              className="brutal-btn brutal-btn-black brutal-shadow text-base mt-2 w-full sm:w-auto"
            >
              Kirim Order →
            </button>
          </form>

          <div className="mt-8 pt-6 border-t-3 border-black text-center">
            <p className="text-sm text-black/50 mb-2">
              Lebih enak ngobrol langsung?
            </p>
            <a
              href="https://wa.me/6281234567890?text=Halo%20CumaCode!%20Saya%20mau%20tanya%20soal%20jasa%20coding..."
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-btn brutal-btn-yellow brutal-shadow-sm text-sm inline-flex"
            >
              💬 Chat WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
