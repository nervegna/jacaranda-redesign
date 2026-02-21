"use client";

import Image from "next/image";
import { TextReveal, ImageReveal, LineReveal } from "./AnimationWrappers";

export default function Philosophy() {
  return (
    <section id="filosofia" className="py-24 md:py-38 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Label */}
        <TextReveal>
          <p className="text-sm tracking-[0.2em] uppercase text-terracotta font-medium mb-16 md:mb-24">
            La Nostra Filosofia
          </p>
        </TextReveal>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-start">
          {/* Text Column — 5 cols */}
          <div className="md:col-span-5 md:col-start-1">
            <TextReveal>
              <h2 className="font-display text-3xl md:text-[3.5rem] leading-[1.1] text-charcoal mb-8">
                Un luogo dove
                <br />
                <em className="font-light text-terracotta">l&apos;infanzia</em>
                <br />
                è al centro
              </h2>
            </TextReveal>

            <TextReveal delay={0.2}>
              <p className="editorial-dropcap text-base md:text-lg text-charcoal/70 leading-relaxed mb-6 max-w-md">
                Il progetto del Nido Scuola Jacarandà nasce dalla volontà di
                offrire ai bambini un nuovo spazio di incontro, di ricerca e di
                scoperta — un luogo dove l&apos;apprendimento, la creatività e la
                meraviglia di imparare sono al centro di ogni giornata.
              </p>
            </TextReveal>

            <TextReveal delay={0.3}>
              <p className="text-base md:text-lg text-charcoal/70 leading-relaxed max-w-md">
                In un contesto educativo bilingue, proponiamo un&apos;educazione
                partecipativa orientata alle relazioni quotidiane tra bambini,
                insegnanti e genitori — perché crescere è un viaggio che si
                percorre insieme.
              </p>
            </TextReveal>

            <TextReveal delay={0.4}>
              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-px bg-terracotta" />
                <span className="text-sm tracking-[0.1em] uppercase text-charcoal/50">
                  Fondato nel 2018
                </span>
              </div>
            </TextReveal>
          </div>

          {/* Image Column — 6 cols, offset */}
          <div className="md:col-span-6 md:col-start-7 md:-mt-12">
            <ImageReveal delay={0.2}>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/assets/aula-terrazza.jpg"
                  alt="Aula con terrazza al Nido Scuola Jacarandà"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-sage/20 to-transparent" />
              </div>
            </ImageReveal>

            {/* Floating stat card */}
            <TextReveal delay={0.5}>
              <div className="relative md:-mt-20 md:ml-[-60px] bg-cream/90 backdrop-blur-sm p-8 rounded-xl shadow-lg max-w-xs">
                <p className="font-display text-[3rem] leading-none text-terracotta font-semibold">
                  2700
                </p>
                <p className="text-sm text-charcoal/60 mt-2 tracking-wide">
                  metri quadri dedicati alla crescita e alla scoperta
                </p>
              </div>
            </TextReveal>
          </div>
        </div>

        <LineReveal className="mt-24 md:mt-38" delay={0.3} />
      </div>
    </section>
  );
}
