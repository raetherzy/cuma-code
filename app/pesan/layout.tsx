import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pesan Project",
  description:
    "Pesan project coding kamu di CumaCode. Isi form, ceritakan kebutuhanmu, dan kami akan respon dalam 1x24 jam. Bayar seikhlasnya.",
};

export default function PesanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
