# CumaCode — Phase Tracking

> **Status:** `completed`
> **Fase Aktif:** Semua fase selesai
> **Terakhir Update:** 19 Mei 2026

---

## Fase 1: Project Foundation ✅

**Tujuan:** Bersihkan scaffolding default Next.js, setup tema brutalist (warna, font, CSS utilities), pastikan project siap dikembangkan.

**Task:**
- [x] Hapus konten default `page.tsx`, ganti dengan placeholder minimal
- [x] Update `globals.css` dengan:
  - Custom CSS variables brutalist: `--black: #1D1D1D`, `--yellow: #F5F500`, `--white: #FFFFFF`
  - Utility classes: `.brutal-border`, `.brutal-shadow`, `.brutal-btn`, `.brutal-card`
  - Set default font ke monospace/Geist Mono
- [x] Update `layout.tsx`: metadata "CumaCode — #BayarCumaCuma", lang="id"
- [x] Hapus file SVG default Next.js yang tidak diperlukan

---

## Fase 2: Layout Shell ✅

**Tujuan:** Membangun root layout (Navbar + Footer) yang konsisten di semua halaman.

**Task:**
- [x] Komponen `Navbar` sticky dengan:
  - Logo "CumaCode" wordmark brutalist (outline + shadow)
  - Nav links: Beranda, Layanan, Portofolio, Kontak
  - CTA button "Pesan Sekarang" di navbar
  - Mobile hamburger menu
- [x] Komponen `Footer` brutalist:
  - Brand info + tagline
  - Sitemap links
  - Social media links (Instagram, TikTok, Twitter/X, LinkedIn)
  - Credit "Dibangun dengan kepercayaan di Indonesia"
- [x] Root layout dengan Navbar + Footer wrapping children

---

## Fase 3: Hero Section ✅

**Tujuan:** Section pertama landing page yang menangkap perhatian pengunjung.

**Task:**
- [x] Headline bold brutalist: "Kode Kami Nyata. Harga Kami Jujur."
- [x] Sub-headline: "Jasa coding bayar seikhlasnya. Semua kalangan. Semua tech stack."
- [x] CTA buttons: "Pesan Sekarang" (primary) + "Lihat Portofolio" (secondary)
- [x] Tagline besar: "#BayarCumaCuma"
- [x] Background kuning dengan elemen geometris overlapping
- [x] Responsive: text scaling untuk mobile vs desktop

---

## Fase 4: Layanan Section ✅

**Tujuan:** Menampilkan seluruh tech stack dan layanan yang ditawarkan.

**Task:**
- [x] Section heading: "Apa yang Kami Kerjakan"
- [x] Grid card per kategori (Frontend, Backend, Mobile, DB, CMS, DevOps, Lainnya)
- [x] Setiap card berisi daftar tech stack dengan label/tag
- [x] Icon sederhana per kategori (geometrik/ASCII style)
- [x] Hover effect: card bergeser dengan brutalist shadow

---

## Fase 5: Cara Kerja Section ✅

**Tujuan:** Infografis 4 langkah menjelaskan proses dari order sampai bayar.

**Task:**
- [x] Section heading: "Cara Kerja #BayarCumaCuma"
- [x] 4 step cards dengan nomor besar:
  1. **Order** — Isi form, ceritakan kebutuhanmu
  2. **Diskusi** — Kami respon 1x24 jam, bahas detail
  3. **Pengerjaan** — Kami coding, kamu pantau progres
  4. **Bayar Seikhlasnya** — Hasil jadi, kamu tentukan harga
- [x] Arrow/konektor antar steps (horizontal di desktop, vertical di mobile)
- [x] Warna kuning sebagai accent pada step cards

---

## Fase 6: Portofolio Gallery ✅

**Tujuan:** Menampilkan project-project yang sudah selesai dikerjakan.

**Task:**
- [x] Section heading: "Hasil Kerja Nyata"
- [x] Grid 2-3 kolom card portofolio (mock data)
- [x] Setiap card berisi: judul project, deskripsi singkat, tech stack badges, link (jika ada)
- [x] Filter tabs: Semua / Frontend / Backend / Mobile / CMS
- [x] CTA "Lihat Semua Portofolio" ke halaman /portofolio

---

## Fase 7: Review / Testimoni ✅

**Tujuan:** Menampilkan testimoni klien untuk membangun kepercayaan.

**Task:**
- [x] Section heading: "Apa Kata Mereka?"
- [x] Card testimoni dengan: nama klien, project, bintang rating (★), quote
- [x] Layout horizontal scroll atau grid
- [x] Brutalist card style dengan border tebal
- [x] Avatar/initial placeholder untuk klien
- [x] Mock data 5-6 testimoni

---

## Fase 8: FAQ Section ✅

**Tujuan:** Menjawab pertanyaan umum tentang konsep bayar seikhlasnya.

**Task:**
- [x] Section heading: "Pertanyaan yang Sering Ditanyakan"
- [x] Accordion FAQ dengan expand/collapse
- [x] Pertanyaan minimal 6:
  1. Beneran bayar seikhlasnya?
  2. Gimana kalau hasilnya gak sesuai?
  3. Berapa lama pengerjaan?
  4. Bisa revisi berapa kali?
  5. Tech stack apa aja yang bisa?
  6. Data dan project saya aman?
- [x] Jawaban singkat, jujur, sesuai tone of voice brutalist

---

## Fase 9: Kontak Section ✅

**Tujuan:** Menyediakan informasi kontak dan form langsung.

**Task:**
- [x] Section heading: "Ngobrol Dulu, Yuk"
- [x] Info kontak: WhatsApp (dengan nomor), Email, Instagram, LinkedIn
- [x] Form kontak singkat: nama, email, pesan
- [x] Link WhatsApp langsung dengan pesan template
- [x] Brutalist styling pada input form (border tebal, no rounded corners)

---

## Fase 10: Halaman Order Form ✅

**Tujuan:** Halaman dedicated untuk form pemesanan project.

**Task:**
- [x] Route: `/pesan`
- [x] Form lengkap: Nama, Email/WA, Deskripsi Project, Budget (opsional), Timeline, Tech Stack Preference
- [x] Validasi form client-side
- [x] Submit button dengan brutalist style
- [x] Sukses state: pesan konfirmasi "Order kamu sudah masuk! Kami akan respon dalam 1x24 jam"
- [x] Link WhatsApp alternatif "Lebih enak ngobrol langsung?"

---

## Fase 11: Halaman Portofolio ✅

**Tujuan:** Halaman gallery portofolio yang lebih lengkap.

**Task:**
- [x] Route: `/portofolio`
- [x] Grid card yang lebih besar dengan detail lebih lengkap
- [x] Filter/search untuk tech stack
- [x] Setiap card expandable/show detail

---

## Fase 12: Data Layer & Types ✅

**Tujuan:** Centralize semua konten ke file data terstruktur.

**Task:**
- [x] TypeScript interfaces: `Service`, `PortfolioProject`, `Testimonial`, `FAQ`, `Step`
- [x] File data: `services.ts`, `portfolio.ts`, `testimonials.ts`, `faq.ts`, `steps.ts`
- [x] Semua komponen membaca dari data files (bukan hardcoded)
- [x] Mudah ditambahkan/diupdate konten tanpa edit komponen

---

## Fase 13: Animasi & Interaksi ✅

**Tujuan:** Menambahkan animasi dan micro-interactions khas brutalist.

**Task:**
- [x] Hover effects: tombol geser (translate), card scale + shadow
- [x] Scroll reveal: section muncul saat di-scroll
- [x] Navbar: hide/show saat scroll, background blur
- [x] FAQ accordion smooth expand/collapse
- [x] CTA button pulse/attention effect
- [x] Transisi antar halaman

---

## Fase 14: Responsive Design ✅

**Tujuan:** Memastikan website terlihat baik di semua ukuran layar.

**Task:**
- [x] Mobile-first review semua section
- [x] Hamburger menu untuk mobile
- [x] Grid card: 1 kolom mobile → 2 tablet → 3 desktop
- [x] Typography scaling: ukuran font sesuai breakpoint
- [x] Test di 320px, 768px, 1024px, 1440px
- [x] Touch-friendly: button size minimal 44px di mobile

---

## Fase 15: SEO & Metadata ✅

**Tujuan:** Optimasi untuk search engine dan social sharing.

**Task:**
- [x] Metadata per halaman (title, description, keywords)
- [x] OG Image custom (template brutalist CumaCode)
- [x] Favicon: CC monogram dalam kotak hitam
- [x] `robots.txt` dan `sitemap.xml`
- [x] Structured data / JSON-LD
- [x] Canonical URL

---

## Fase 16: 404 & Error Pages ✅

**Tujuan:** Halaman error yang sesuai brand.

**Task:**
- [x] Custom 404 page: judul besar "404", pesan "Halaman tidak ditemukan. Mungkin belum dibuat — seperti project kamu sebelum pesan di CumaCode."
- [x] CTA kembali ke beranda
- [x] Error boundary component
- [x] Loading state / skeleton untuk page transitions

---

## Fase 17: Testing & QA ✅

**Tujuan:** Memastikan kualitas sebelum deployment.

**Task:**
- [x] `npm run lint` — 0 error
- [x] `npm run build` — build sukses
- [x] `npm run dev` — semua halaman dicek
- [x] Cek semua link internal tidak broken
- [x] Cek form validasi berfungsi
- [x] Cek responsive di Chrome DevTools

---

## Fase 18: Deployment Prep ✅

**Tujuan:** Siapkan project untuk deployment production.

**Task:**
- [x] Finalisasi `next.config.ts` (headers, security, output mode)
- [x] Environment variables jika ada (tidak diperlukan untuk MVP)
- [x] Update `README.md` dengan info project + cara run
- [x] Test `npm run dev` dan `npm run build` final
- [x] Dokumentasi singkat cara deploy ke Vercel

---

## Legenda Status
- ⬜ Pending
- 🔄 In Progress
- ✅ Completed
- ❌ Cancelled
