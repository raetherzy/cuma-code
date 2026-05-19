import { services } from "../data/services";

export default function Layanan() {
  return (
    <section id="layanan" className="py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-2">Apa yang Kami Kerjakan</h2>
        <p className="text-lg text-black/60 mb-12 max-w-xl">
          Semua tech stack, semua kebutuhan. Dari web simpel sampai aplikasi kompleks.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <div key={service.category} className="brutal-card">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-bold bg-yellow px-2 py-0.5">
                  {service.icon}
                </span>
                <h3 className="font-bold text-lg">{service.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {service.stacks.map((stack) => (
                  <span
                    key={stack}
                    className="text-xs font-bold px-2 py-1 brutal-border border-2"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
