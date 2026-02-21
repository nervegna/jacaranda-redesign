"use client";

import { TextReveal } from "./AnimationWrappers";
import { Instagram, Facebook, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream pt-20 md:pt-30 pb-8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Big tagline */}
        <TextReveal>
          <h2 className="font-display text-3xl md:text-[4rem] leading-[1.1] mb-16 md:mb-24 max-w-3xl">
            Dove ogni bambino
            <br />
            <em className="font-light text-sage">fiorisce</em>
          </h2>
        </TextReveal>

        {/* Multi-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-16 border-b border-cream/10">
          {/* Column 1: About */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/assets/jacaranda-logo-original.jpg"
                alt="Nido Scuola Jacarandà"
                width={180}
                height={65}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-sm text-cream/70 leading-relaxed">
              Asilo nido e scuola dell&apos;infanzia bilingue a Milano.
              Educazione ispirata al Reggio Approach.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-cream/60 font-medium mb-6">
              Esplora
            </p>
            <nav className="space-y-3">
              {[
                { label: "La filosofia", href: "#filosofia" },
                { label: "I nostri spazi", href: "#spazi" },
                { label: "Reggio Approach", href: "#reggio" },
                { label: "Percorsi per età", href: "#eta" },
                { label: "Contatti", href: "#contatti" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-cream/60 hover:text-sage transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-cream/60 font-medium mb-6">
              Contatti
            </p>
            <div className="space-y-3 text-sm text-cream/60">
              <p>
                Corso Sempione, 34/2
                <br />
                20154 Milano (MI)
              </p>
              <a
                href="tel:+390236697450"
                className="block hover:text-sage transition-colors"
              >
                +39 02 3669 7450
              </a>
              <a
                href="mailto:info@nidoscuolajacaranda.com"
                className="block hover:text-sage transition-colors"
              >
                info@nidoscuolajacaranda.com
              </a>
            </div>
          </div>

          {/* Column 4: Social + CTA */}
          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-cream/60 font-medium mb-6">
              Seguici
            </p>
            <div className="flex gap-4 mb-8">
              <a
                href="https://www.instagram.com/nidoscuolajacaranda/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-sage hover:border-sage transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/nidoscuolajacaranda/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-sage hover:border-sage transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>

            <a
              href="#contatti"
              className="inline-flex items-center gap-2 text-sm text-cream border border-cream/20 rounded-full px-6 py-3 hover:bg-sage hover:border-sage transition-all duration-300"
            >
              Prenota una visita
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8">
          <p className="text-xs text-cream/60">
            &copy; {new Date().getFullYear()} Nido Scuola Jacarandà — Scuola
            Innovativa S.r.l. Tutti i diritti riservati.
          </p>
          <div className="flex gap-6 text-xs text-cream/60">
            <a href="#" className="hover:text-cream/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cream/60 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
