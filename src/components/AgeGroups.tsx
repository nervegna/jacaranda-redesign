"use client";

import { motion } from "framer-motion";
import { TextReveal, StaggerContainer, staggerChild, LineReveal } from "./AnimationWrappers";

const groups = [
  {
    age: "6 — 12 mesi",
    name: "Piccoli Esploratori",
    description:
      "I primi passi verso la scoperta sensoriale. Ambienti sicuri e stimolanti per gattonare, toccare, esplorare il mondo con tutti i sensi.",
    color: "bg-peach/40",
    accent: "text-terracotta",
    features: ["Spazi morbidi", "Stimolazione sensoriale", "Routine dolci"],
  },
  {
    age: "1 — 3 anni",
    name: "Costruttori di Mondi",
    description:
      "L'età della conquista dell'autonomia. Linguaggio, movimento, relazioni: ogni giorno è una nuova avventura di crescita e scoperta.",
    color: "bg-powder/40",
    accent: "text-charcoal",
    features: ["Atelier espressivi", "Gioco simbolico", "Primi linguaggi"],
  },
  {
    age: "3 — 6 anni",
    name: "Pensatori Creativi",
    description:
      "La scuola dell'infanzia bilingue dove pensiero critico, creatività e collaborazione fioriscono attraverso progetti ed esperienze condivise.",
    color: "bg-sage/20",
    accent: "text-sage-dark",
    features: ["Progetti di gruppo", "Bilinguismo attivo", "Pre-scrittura e logica"],
  },
];

export default function AgeGroups() {
  return (
    <section id="eta" className="py-24 md:py-38">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <TextReveal>
            <p className="text-sm tracking-[0.2em] uppercase text-terracotta font-medium mb-6">
              Percorsi per Età
            </p>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-[3.5rem] leading-[1.1] text-charcoal mb-6">
              Ogni età,
              <br />
              <em className="font-light">un mondo da scoprire</em>
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-base text-charcoal/60 leading-relaxed">
              Dal nido alla scuola dell&apos;infanzia, ogni percorso è pensato
              per rispettare i tempi naturali di crescita e le curiosità uniche
              di ogni bambino.
            </p>
          </TextReveal>
        </div>

        {/* Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {groups.map((group, i) => (
            <motion.div
              key={i}
              variants={staggerChild}
              className={`${group.color} rounded-2xl p-8 md:p-10 group hover:shadow-lg transition-shadow duration-500 relative overflow-hidden`}
            >
              {/* Decorative circle */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/20 blur-2xl" />

              <div className="relative">
                {/* Age label */}
                <p
                  className={`font-display text-[2.5rem] md:text-[3rem] font-semibold leading-none ${group.accent} opacity-80`}
                >
                  {group.age}
                </p>

                {/* Name */}
                <h3 className="font-display text-xl md:text-2xl text-charcoal mt-4 mb-4">
                  {group.name}
                </h3>

                {/* Description */}
                <p className="text-base text-charcoal/60 leading-relaxed mb-8">
                  {group.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {group.features.map((feature, j) => (
                    <span
                      key={j}
                      className="text-xs tracking-[0.05em] uppercase font-medium px-3 py-1.5 bg-white/50 rounded-full text-charcoal/70"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Bilingualism callout */}
        <TextReveal delay={0.3}>
          <div className="mt-16 md:mt-24 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 p-8 md:p-12 bg-charcoal rounded-2xl">
            <div className="flex-shrink-0">
              <div className="flex gap-3">
                <span className="text-[2rem] leading-none">🇮🇹</span>
                <span className="text-[2rem] leading-none">🇬🇧</span>
              </div>
            </div>
            <div>
              <h3 className="font-display text-xl md:text-2xl text-cream mb-2">
                Educazione Bilingue
              </h3>
              <p className="text-base text-cream/60 leading-relaxed max-w-2xl">
                La presenza costante di un&apos;insegnante anglofona e
                un&apos;insegnante italiana in ogni sezione garantisce
                un&apos;immersione linguistica naturale. I benefici del
                bilinguismo si manifestano già a partire dai tre anni.
              </p>
            </div>
          </div>
        </TextReveal>

        <LineReveal className="mt-24 md:mt-38" delay={0.3} />
      </div>
    </section>
  );
}
