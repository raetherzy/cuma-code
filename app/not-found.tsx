import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1 bg-yellow flex items-center justify-center px-4">
      <div className="text-center max-w-lg py-20">
        <p className="text-7xl md:text-9xl font-bold mb-4">404</p>
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-lg text-black/60 mb-8">
          Mungkin belum dibuat — seperti project kamu sebelum pesan di CumaCode.
        </p>
        <Link href="/" className="brutal-btn brutal-btn-black brutal-shadow">
          ← Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}
