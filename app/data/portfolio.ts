import { PortfolioProject } from "./types";

export const portfolioItems: PortfolioProject[] = [
  {
    title: "Website UMKM Batik",
    description:
      "Toko online untuk pemilik UMKM batik di Klaten. Dibangun dengan Next.js + Tailwind, terintegrasi dengan Supabase untuk manajemen produk dan pesanan.",
    category: "Frontend",
    stacks: ["Next.js", "Tailwind", "Supabase"],
    link: "#",
  },
  {
    title: "Sistem Informasi Akademik",
    description:
      "Website untuk tugas akhir mahasiswa. CRUD data mahasiswa, dosen, dan mata kuliah dengan role-based access.",
    category: "Backend",
    stacks: ["Laravel", "MySQL", "Bootstrap"],
    link: "#",
  },
  {
    title: "Landing Page Startup",
    description:
      "Landing page profesional untuk startup early-stage di bidang edutech. Optimasi performa dan SEO.",
    category: "Frontend",
    stacks: ["Next.js", "Tailwind", "Vercel"],
    link: "#",
  },
  {
    title: "Bot WhatsApp Auto-Reply",
    description:
      "Bot otomatis untuk customer service UMKM. Auto-reply, menu interaktif, dan integrasi database.",
    category: "Lainnya",
    stacks: ["Node.js", "WhatsApp Web.js", "Supabase"],
    link: "#",
  },
  {
    title: "Aplikasi Kasir Sederhana",
    description:
      "Point of sale app untuk warung makan. Fitur: input pesanan, cetak struk, laporan harian.",
    category: "Mobile",
    stacks: ["React Native", "Firebase"],
    link: "#",
  },
  {
    title: "Website Blog Pribadi",
    description:
      "Blog portofolio untuk content creator. Custom WordPress theme dengan optimasi SEO dan speed.",
    category: "CMS",
    stacks: ["WordPress", "PHP", "MySQL"],
    link: "#",
  },
  {
    title: "Dashboard Admin Toko",
    description:
      "Dashboard admin untuk manajemen stok, pesanan, dan laporan penjualan toko retail.",
    category: "Frontend",
    stacks: ["Vue.js", "Tailwind", "Node.js", "PostgreSQL"],
    link: "#",
  },
  {
    title: "REST API Marketplace",
    description:
      "Backend API untuk marketplace lokal. Autentikasi, product CRUD, cart, dan payment gateway.",
    category: "Backend",
    stacks: ["FastAPI", "PostgreSQL", "Docker", "Railway"],
    link: "#",
  },
  {
    title: "Scraper Harga Kompetitor",
    description:
      "Automation script untuk memantau harga produk kompetitor di beberapa marketplace.",
    category: "Lainnya",
    stacks: ["Python", "Selenium", "Supabase"],
    link: "#",
  },
];
