"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TextReveal, ImageReveal } from "./AnimationWrappers";
import { X } from "lucide-react";

const spaces = [
  {
    src: "/assets/atrio.jpg",
    title: "L'Agorà",
    description:
      "La piazza centrale luminosa dove tutte le sezioni convergono. Uno spazio di incontro e condivisione.",
    size: "large",
  },
  {
    src: "/assets/aula-terrazza.jpg",
    title: "Le Aule",
    description:
      "Ambienti accoglienti con ampie terrazze verdi e vetrate che connettono interno ed esterno.",
    size: "medium",
  },
  {
    src: "/assets/piscina.jpg",
    title: "Le Piscine",
    description:
      "Tre piscine riscaldate per attività acquatiche, sport e benessere fin dai primi mesi.",
    size: "medium",
  },
  {
    src: "/assets/terrazza-giardino.jpg",
    title: "I Giardini",
    description:
      "600 mq di spazi esterni con terrazze, verde e aree gioco per l'esplorazione all'aria aperta.",
    size: "small",
  },
  {
    src: "/assets/mensa.jpg",
    title: "La Cucina",
    description:
      "Cucina interna a vista con prodotti biologici e di stagione. Il cibo come esperienza educativa.",
    size: "small",
  },
];

export default function Spaces() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="spazi" className="py-24 md:py-38 bg-softgray/30">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24">
          <div>
            <TextReveal>
              <p className="text-sm tracking-[0.2em] uppercase text-terracotta font-medium mb-6">
                I Nostri Spazi
              </p>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h2 className="font-display text-3xl md:text-[3.5rem] leading-[1.1] text-charcoal">
                Architettura
                <br />
                <em className="font-light">che ispira</em>
              </h2>
            </TextReveal>
          </div>
          <TextReveal delay={0.2}>
            <p className="text-base text-charcoal/60 max-w-md mt-6 md:mt-0 leading-relaxed">
              Un ex garage degli anni &apos;50 trasformato in 2.700 mq di spazi
              progettati dallo studio Labics di Roma — dove luce naturale, vetrate
              e verde si intrecciano per creare ambienti che stimolano curiosità e
              meraviglia.
            </p>
          </TextReveal>
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {/* Large — spans 7 cols */}
          <ImageReveal className="md:col-span-7 md:row-span-2">
            <button
              onClick={() => setLightbox(0)}
              className="relative w-full aspect-[4/3] md:aspect-[3/4] rounded-xl overflow-hidden group cursor-pointer block"
            >
              <Image
                src={spaces[0].src}
                alt={spaces[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="font-display text-2xl text-cream">
                  {spaces[0].title}
                </h3>
                <p className="text-cream/70 text-sm mt-2 max-w-xs">
                  {spaces[0].description}
                </p>
              </div>
            </button>
          </ImageReveal>

          {/* Medium top right */}
          <ImageReveal className="md:col-span-5" delay={0.15}>
            <button
              onClick={() => setLightbox(1)}
              className="relative w-full aspect-[3/2] rounded-xl overflow-hidden group cursor-pointer block"
            >
              <Image
                src={spaces[1].src}
                alt={spaces[1].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="font-display text-xl text-cream">
                  {spaces[1].title}
                </h3>
              </div>
            </button>
          </ImageReveal>

          {/* Medium bottom right */}
          <ImageReveal className="md:col-span-5" delay={0.25}>
            <button
              onClick={() => setLightbox(2)}
              className="relative w-full aspect-[3/2] rounded-xl overflow-hidden group cursor-pointer block"
            >
              <Image
                src={spaces[2].src}
                alt={spaces[2].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="font-display text-xl text-cream">
                  {spaces[2].title}
                </h3>
              </div>
            </button>
          </ImageReveal>

          {/* Two small — bottom row */}
          <ImageReveal className="md:col-span-6" delay={0.3}>
            <button
              onClick={() => setLightbox(3)}
              className="relative w-full aspect-[16/9] rounded-xl overflow-hidden group cursor-pointer block"
            >
              <Image
                src={spaces[3].src}
                alt={spaces[3].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="font-display text-xl text-cream">
                  {spaces[3].title}
                </h3>
              </div>
            </button>
          </ImageReveal>

          <ImageReveal className="md:col-span-6" delay={0.35}>
            <button
              onClick={() => setLightbox(4)}
              className="relative w-full aspect-[16/9] rounded-xl overflow-hidden group cursor-pointer block"
            >
              <Image
                src={spaces[4].src}
                alt={spaces[4].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="font-display text-xl text-cream">
                  {spaces[4].title}
                </h3>
              </div>
            </button>
          </ImageReveal>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-charcoal/95 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-cream/70 hover:text-cream transition-colors"
              onClick={() => setLightbox(null)}
              aria-label="Chiudi"
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative max-w-5xl w-full max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[70vh] rounded-xl overflow-hidden">
                <Image
                  src={spaces[lightbox].src}
                  alt={spaces[lightbox].title}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="font-display text-2xl text-cream">
                  {spaces[lightbox].title}
                </h3>
                <p className="text-cream/60 mt-2 max-w-md mx-auto">
                  {spaces[lightbox].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
