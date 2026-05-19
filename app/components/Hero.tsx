import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-yellow brutal-border border-t-0 border-x-0 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-32 relative">
        <div className="absolute top-10 right-10 w-32 h-32 border-3 border-black rotate-12 opacity-20 hidden md:block" />
        <div className="absolute bottom-10 left-5 w-24 h-24 border-3 border-black -rotate-6 opacity-20 hidden md:block" />
        <div className="absolute top-20 left-1/2 w-16 h-16 border-3 border-black rotate-45 opacity-20 hidden md:block" />

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Kode Kami Nyata.
            <br />
            Harga Kami Jujur.
          </h1>

          <p className="text-lg md:text-xl max-w-xl mb-8 text-black/80">
            Jasa coding bayar seikhlasnya. Semua kalangan. Semua tech stack.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/pesan" className="brutal-btn brutal-btn-black brutal-shadow text-base">
              Pesan Sekarang
            </Link>
            <Link
              href="/#portofolio"
              className="brutal-btn brutal-shadow text-base"
            >
              Lihat Portofolio
            </Link>
          </div>

          <p className="text-5xl md:text-7xl font-bold tracking-tighter text-black/15 select-none">
            #BayarCumaCuma
          </p>
        </div>
      </div>
    </section>
  );
}
