import Link from "next/link";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/cumacode" },
  { label: "TikTok", href: "https://tiktok.com/@cumacode" },
  { label: "Twitter / X", href: "https://twitter.com/cumacode" },
  { label: "LinkedIn", href: "https://linkedin.com/company/cumacode" },
];

const sitemapLinks = [
  { label: "Beranda", href: "/" },
  { label: "Layanan", href: "/#layanan" },
  { label: "Portofolio", href: "/#portofolio" },
  { label: "Pesan", href: "/pesan" },
  { label: "Kontak", href: "/#kontak" },
];

export default function Footer() {
  return (
    <footer className="brutal-border bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-2">
              <span className="bg-yellow text-black px-2 py-1">CumaCode</span>
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              #BayarCumaCuma — Jasa coding bayar seikhlasnya.
              <br />
              Semua kalangan. Semua tech stack.
              <br />
              Harga: terserah kamu.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-3 text-yellow">
              Navigasi
            </h4>
            <ul className="flex flex-col gap-2">
              {sitemapLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-yellow text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-3 text-yellow">
              Ikuti Kami
            </h4>
            <ul className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-yellow text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t-3 border-white/20 text-center text-white/50 text-xs">
          Dibangun dengan kepercayaan di Indonesia &copy; {new Date().getFullYear()} CumaCode
        </div>
      </div>
    </footer>
  );
}
