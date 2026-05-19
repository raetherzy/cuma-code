import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portofolio",
  description:
    "Lihat hasil kerja nyata CumaCode. Kumpulan project yang sudah kami selesaikan: website, aplikasi mobile, bot, scraper, dan banyak lagi.",
};

export default function PortofolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
