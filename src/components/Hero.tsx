"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[700px] flex items-end overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y, scale }}>
        <Image
          src="/assets/atrio.jpg"
          alt="Nido Scuola Jacarandà - Spazi interni luminosi"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Strong gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      </motion.div>

      {/* Mesh gradient accent */}
      <div className="absolute top-0 right-0 w-[60%] h-[40%] opacity-30">
        <div className="w-full h-full bg-gradient-radial from-peach/40 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pb-16 md:pb-24 w-full"
      >
        <div className="max-w-3xl">
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-cream/80 text-sm md:text-base tracking-[0.2em] uppercase font-medium mb-6"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.7)' }}
          >
            Asilo Nido Bilingue · Milano
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-4xl md:text-3xl lg:text-4xl text-cream leading-[1.05] mb-8"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.7)' }}
          >
            <span className="block text-[clamp(2.5rem,7vw,6rem)] font-light italic">
              Dove ogni bambino
            </span>
            <span className="block text-[clamp(3rem,8vw,7rem)] font-semibold -mt-2">
              fiorisce
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-cream/70 text-lg md:text-xl max-w-lg leading-relaxed font-light"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.7)' }}
          >
            Un luogo dove curiosità, creatività e meraviglia guidano
            l&apos;apprendimento, dai 6 mesi ai 6 anni.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <a
              href="#contatti"
              className="inline-flex items-center px-8 py-4 bg-cream text-charcoal text-sm tracking-[0.06em] uppercase font-medium rounded-full hover:bg-terracotta hover:text-cream transition-all duration-500"
            >
              Scopri di più
            </a>
            <a
              href="#spazi"
              className="inline-flex items-center px-8 py-4 border border-cream/40 text-cream text-sm tracking-[0.06em] uppercase font-medium rounded-full hover:bg-cream/10 transition-all duration-500"
            >
              I nostri spazi
            </a>
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
}
