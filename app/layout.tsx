import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CumaCode — #BayarCumaCuma",
    template: "%s | CumaCode",
  },
  description:
    "Jasa coding bayar seikhlasnya. Semua kalangan. Semua tech stack. Harga: terserah kamu. Kode kami nyata, harga kami jujur.",
  keywords: [
    "jasa coding",
    "bayar seikhlasnya",
    "web developer indonesia",
    "jasa pembuatan website",
    "freelance indonesia",
    "Next.js",
    "React",
    "Laravel",
  ],
  authors: [{ name: "CumaCode" }],
  openGraph: {
    title: "CumaCode — #BayarCumaCuma",
    description:
      "Jasa coding bayar seikhlasnya. Semua kalangan. Semua tech stack. Harga: terserah kamu.",
    type: "website",
    locale: "id_ID",
    siteName: "CumaCode",
  },
  twitter: {
    card: "summary_large_image",
    title: "CumaCode — #BayarCumaCuma",
    description:
      "Jasa coding bayar seikhlasnya. Semua kalangan. Semua tech stack. Harga: terserah kamu.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <JsonLd />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
