"use client";

import { useState } from "react";

import { faqItems } from "../data/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 px-4 bg-black text-white">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-2">
          Pertanyaan yang <span className="text-yellow">Sering Ditanyakan</span>
        </h2>
        <p className="text-lg text-white/60 mb-10">
          Karena kami tahu model #BayarCumaCuma bikin banyak orang penasaran (dan skeptis). Wajar.
        </p>

        <div className="flex flex-col gap-3">
          {faqItems.map((faq, i) => (
            <div key={i} className="brutal-border border-white">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left font-bold"
              >
                <span>{faq.q}</span>
                <span className="text-yellow text-xl ml-4 shrink-0">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-4 pb-4 text-white/70 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
