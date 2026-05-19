import { steps } from "../data/steps";

export default function CaraKerja() {
  return (
    <section id="cara-kerja" className="py-20 px-4 bg-black text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-2">
          Cara Kerja <span className="text-yellow">#BayarCumaCuma</span>
        </h2>
        <p className="text-lg text-white/60 mb-12 max-w-xl">
          Empat langkah simpel dari order sampai project jadi.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              <div className="brutal-border border-white bg-black p-6 h-full">
                <span className={`inline-block text-3xl font-bold px-3 py-1 mb-4 ${step.accent}`}>
                  {step.number}
                </span>
                <h3 className="font-bold text-xl mb-2 text-yellow">{step.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-yellow text-2xl font-bold z-10">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
