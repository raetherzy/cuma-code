import { testimonials } from "../data/testimonials";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? "text-yellow" : "text-black/20"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimoni() {
  return (
    <section id="testimoni" className="py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-2">Apa Kata Mereka?</h2>
        <p className="text-lg text-black/60 mb-12 max-w-xl">
          Testimoni asli dari klien yang sudah pakai jasa kami.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div key={t.name} className="brutal-card">
              <Stars count={t.stars} />
              <blockquote className="text-sm text-black/70 my-3 leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t-3 border-black">
                <div className="w-10 h-10 brutal-border bg-yellow flex items-center justify-center font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-black/50">{t.project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
