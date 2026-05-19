import Link from "next/link";

export default function Kontak() {
  return (
    <section id="kontak" className="py-20 px-4 bg-yellow">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-2">Ngobrol Dulu, Yuk</h2>
        <p className="text-lg text-black/60 mb-12 max-w-xl">
          Masih ragu? Punya pertanyaan khusus? Langsung aja kontak kami.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Kontak Langsung</h3>
            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/6281234567890?text=Halo%20CumaCode!%20Saya%20mau%20tanya%20soal%20jasa%20coding..."
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn brutal-btn-black brutal-shadow-sm justify-start gap-3"
              >
                <span className="text-xl">💬</span>
                <span>WhatsApp: 0812-3456-7890</span>
              </a>

              <a
                href="mailto:halo@cumacode.id"
                className="brutal-btn brutal-shadow-sm justify-start gap-3"
              >
                <span className="text-xl">✉️</span>
                <span>halo@cumacode.id</span>
              </a>

              <a
                href="https://instagram.com/cumacode"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn brutal-shadow-sm justify-start gap-3"
              >
                <span className="text-xl">📸</span>
                <span>Instagram: @cumacode</span>
              </a>

              <a
                href="https://linkedin.com/company/cumacode"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn brutal-shadow-sm justify-start gap-3"
              >
                <span className="text-xl">💼</span>
                <span>LinkedIn: CumaCode</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Atau, langsung pesan aja</h3>
            <p className="text-sm text-black/60 mb-4">
              Nggak perlu basa-basi. Isi form order, ceritain kebutuhanmu, dan kami bakal respon
              dalam 1x24 jam.
            </p>
            <Link href="/pesan" className="brutal-btn brutal-btn-black brutal-shadow text-lg w-full sm:w-auto">
              Pesan Sekarang →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
