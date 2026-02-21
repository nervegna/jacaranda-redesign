"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed inset-0 z-[100] bg-cream flex flex-col items-center justify-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/assets/jacaranda-logo-original.jpg"
              alt="Nido Scuola Jacarandà"
              width={400}
              height={150}
              className="h-32 md:h-40 w-auto object-contain"
              priority
            />
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 h-px bg-charcoal/10 mt-8 overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-terracotta rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-xs tracking-[0.2em] uppercase text-charcoal/40"
          >
            Nido Scuola · Milano
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
