"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-display text-[8rem] md:text-[12rem] leading-none text-terracotta/20 font-light">
            404
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-display text-2xl md:text-3xl text-charcoal -mt-8 mb-4"
        >
          Pagina non trovata
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-base text-charcoal/60 mb-10"
        >
          Sembra che questa pagina sia andata a giocare in giardino.
          <br />
          Torniamo insieme all&apos;ingresso.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 bg-charcoal text-cream text-sm tracking-[0.06em] uppercase font-medium rounded-full hover:bg-terracotta transition-colors duration-500"
          >
            Torna alla Homepage
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
