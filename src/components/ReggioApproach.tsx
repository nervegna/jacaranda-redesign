"use client";

import { TextReveal, LineReveal, ImageReveal } from "./AnimationWrappers";
import Image from "next/image";

const principles = [
  {
    title: "Il bambino come protagonista",
    description:
      "Ogni bambino è un soggetto attivo, portatore di forti potenzialità di sviluppo. Apprende e cresce nella relazione con gli altri.",
  },
  {
    title: "L'ambiente come terzo educatore",
    description:
      "Gli spazi sono progettati per stimolare curiosità ed esplorazione — luce naturale, materiali autentici, connessione con il verde.",
  },
  {
    title: "I cento linguaggi",
    description:
      "I bambini si esprimono e conoscono attraverso molteplici linguaggi: arte, musica, movimento, parole, costruzione.",
  },
  {
    title: "Documentazione e ascolto",
    description:
      "L'osservazione attenta e la documentazione rendono visibile il pensiero dei bambini e guidano il progetto educativo.",
  },
];

export default function ReggioApproach() {
  return (
    <section id="reggio" className="py-24 md:py-38 relative">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-powder/20 to-cream pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Label */}
        <TextReveal>
          <p className="text-sm tracking-[0.2em] uppercase text-terracotta font-medium mb-8">
            Il Metodo
          </p>
        </TextReveal>

        {/* Editorial Quote — Large Centered */}
        <div className="mb-20 md:mb-30">
          <TextReveal delay={0.1}>
            <blockquote className="font-display text-2xl md:text-3xl lg:text-[3.2rem] leading-[1.15] text-charcoal max-w-4xl">
              <span className="text-terracotta/40">&ldquo;</span>
              Il bambino è fatto di cento.
              <br />
              Il bambino ha cento lingue, cento mani,
              <br />
              <em className="font-light">cento modi di pensare</em>
              <span className="text-terracotta/40">&rdquo;</span>
            </blockquote>
          </TextReveal>
          <TextReveal delay={0.3}>
            <p className="mt-6 text-sm text-charcoal/50 tracking-wide">
              — Loris Malaguzzi, fondatore del Reggio Approach
            </p>
          </TextReveal>
        </div>

        <LineReveal />

        {/* Two-column layout: principles + image */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mt-16 md:mt-24">
          {/* Principles */}
          <div className="md:col-span-7 space-y-12">
            <TextReveal>
              <h3 className="font-display text-xl md:text-2xl text-charcoal mb-8">
                I principi che guidano
                <br />
                <em className="font-light">il nostro percorso educativo</em>
              </h3>
            </TextReveal>

            <div className="space-y-10">
              {principles.map((principle, i) => (
                <TextReveal key={i} delay={0.1 * (i + 1)}>
                  <div className="flex gap-6 items-start">
                    <span className="font-display text-3xl text-terracotta/30 font-light leading-none mt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4 className="font-display text-xl text-charcoal mb-2">
                        {principle.title}
                      </h4>
                      <p className="text-base text-charcoal/60 leading-relaxed max-w-md">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </TextReveal>
              ))}
            </div>

            {/* Reggio Children badge */}
            <TextReveal delay={0.6}>
              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-charcoal/10">
                <div className="w-10 h-10 rounded-full bg-sage/30 flex items-center justify-center">
                  <span className="font-display text-lg text-sage-dark font-semibold">
                    R
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-charcoal">
                    In collaborazione con Reggio Children
                  </p>
                  <p className="text-xs text-charcoal/50">
                    Centro Internazionale per i diritti dell&apos;infanzia
                  </p>
                </div>
              </div>
            </TextReveal>
          </div>

          {/* Image */}
          <div className="md:col-span-5 md:col-start-8">
            <ImageReveal delay={0.3}>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/assets/terrazza-giardino.jpg"
                  alt="Bambini che esplorano il giardino"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage/30 to-transparent" />
              </div>
            </ImageReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
