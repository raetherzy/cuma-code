import Hero from "./components/Hero";
import Layanan from "./components/Layanan";
import CaraKerja from "./components/CaraKerja";
import Portfolio from "./components/Portfolio";
import Testimoni from "./components/Testimoni";
import FAQ from "./components/FAQ";
import Kontak from "./components/Kontak";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Layanan />
      <CaraKerja />
      <Portfolio />
      <Testimoni />
      <FAQ />
      <Kontak />
    </main>
  );
}
