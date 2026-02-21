"use client";

import { TextReveal, ImageReveal } from "./AnimationWrappers";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contatti" className="py-24 md:py-38 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-lavender-light/10 to-cream pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-5">
            <TextReveal>
              <p className="text-sm tracking-[0.2em] uppercase text-sage font-medium mb-6">
                Contattaci
              </p>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h2 className="font-display text-3xl md:text-[3.5rem] leading-[1.1] text-charcoal mb-8">
                Vieni a
                <br />
                <em className="font-light">conoscerci</em>
              </h2>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="text-base text-charcoal/60 leading-relaxed max-w-md mb-12">
                Siamo felici di accoglierti per una visita. Scopri i nostri
                spazi, incontra gli educatori e immagina il percorso del tuo
                bambino.
              </p>
            </TextReveal>

            {/* Contact Info */}
            <div className="space-y-6">
              <TextReveal delay={0.3}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={18} className="text-sage-dark" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-charcoal">
                      Indirizzo
                    </p>
                    <p className="text-sm text-charcoal/60 mt-1">
                      Corso Sempione, 34/2
                      <br />
                      20154 Milano (MI)
                    </p>
                  </div>
                </div>
              </TextReveal>

              <TextReveal delay={0.35}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-lavender-light/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone size={18} className="text-sage" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-charcoal">
                      Telefono
                    </p>
                    <a
                      href="tel:+390236697450"
                      className="text-sm text-charcoal/60 mt-1 hover:text-sage transition-colors"
                    >
                      +39 02 3669 7450
                    </a>
                  </div>
                </div>
              </TextReveal>

              <TextReveal delay={0.4}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-lavender-light/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail size={18} className="text-charcoal/60" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-charcoal">Email</p>
                    <a
                      href="mailto:info@nidoscuolajacaranda.com"
                      className="text-sm text-charcoal/60 mt-1 hover:text-sage transition-colors"
                    >
                      info@nidoscuolajacaranda.com
                    </a>
                  </div>
                </div>
              </TextReveal>

              <TextReveal delay={0.45}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock size={18} className="text-sage-dark" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-charcoal">Orari</p>
                    <p className="text-sm text-charcoal/60 mt-1">
                      Lun — Ven: 7:30 — 18:30
                    </p>
                  </div>
                </div>
              </TextReveal>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-6 md:col-start-7">
            <ImageReveal delay={0.2}>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-sm">
                <h3 className="font-display text-xl text-charcoal mb-8">
                  Richiedi informazioni
                </h3>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs tracking-[0.1em] uppercase text-charcoal/70 font-medium block mb-2">
                        Nome
                      </label>
                      <input
                        type="text"
                        className="w-full bg-transparent border-b border-charcoal/15 pb-3 text-base text-charcoal focus:outline-none focus:border-sage transition-colors placeholder:text-charcoal/30"
                        placeholder="Il tuo nome"
                      />
                    </div>
                    <div>
                      <label className="text-xs tracking-[0.1em] uppercase text-charcoal/70 font-medium block mb-2">
                        Cognome
                      </label>
                      <input
                        type="text"
                        className="w-full bg-transparent border-b border-charcoal/15 pb-3 text-base text-charcoal focus:outline-none focus:border-sage transition-colors placeholder:text-charcoal/30"
                        placeholder="Il tuo cognome"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs tracking-[0.1em] uppercase text-charcoal/70 font-medium block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full bg-transparent border-b border-charcoal/15 pb-3 text-base text-charcoal focus:outline-none focus:border-sage transition-colors placeholder:text-charcoal/30"
                      placeholder="la.tua@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="eta-bambino"
                      className="text-xs tracking-[0.1em] uppercase text-charcoal/70 font-medium block mb-2"
                    >
                      Età del bambino
                    </label>
                    <select
                      id="eta-bambino"
                      className="w-full bg-transparent border-b border-charcoal/15 pb-3 text-base text-charcoal focus:outline-none focus:border-sage transition-colors appearance-none"
                    >
                      <option value="">Seleziona...</option>
                      <option value="6-12">6 — 12 mesi</option>
                      <option value="1-3">1 — 3 anni</option>
                      <option value="3-6">3 — 6 anni</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs tracking-[0.1em] uppercase text-charcoal/70 font-medium block mb-2">
                      Messaggio
                    </label>
                    <textarea
                      rows={4}
                      className="w-full bg-transparent border-b border-charcoal/15 pb-3 text-base text-charcoal focus:outline-none focus:border-sage transition-colors resize-none placeholder:text-charcoal/30"
                      placeholder="Raccontaci cosa cerchi per il tuo bambino..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-charcoal text-cream text-sm tracking-[0.06em] uppercase font-medium rounded-full hover:bg-sage transition-colors duration-500 mt-4"
                  >
                    Invia Richiesta
                    <ArrowUpRight size={16} />
                  </button>
                </form>
              </div>
            </ImageReveal>
          </div>
        </div>

        {/* Map Section */}
        <TextReveal delay={0.3}>
          <div className="mt-16 md:mt-24 rounded-2xl overflow-hidden h-[300px] md:h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.5!2d9.1715!3d45.4773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c14f3c2c1a1d%3A0x0!2sCorso+Sempione+34%2C+Milano!5e0!3m2!1sit!2sit!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "saturate(0.8) brightness(1.05)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa Nido Scuola Jacarandà"
            />
          </div>
        </TextReveal>
      </div>
    </section>
  );
}
