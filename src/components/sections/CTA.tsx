"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-accent-700/30 via-ink-900 to-ink-950 p-10 sm:p-14"
        >
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="aurora opacity-50" />

          {/* floating orbs */}
          <motion.div
            aria-hidden
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-accent-500/30 blur-3xl"
          />
          <motion.div
            aria-hidden
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -bottom-16 -left-12 h-60 w-60 rounded-full bg-gold-500/20 blur-3xl"
          />

          <div className="relative grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <span className="eyebrow">Pasul următor</span>
              <h2 className="h-display mt-3 text-3xl text-white sm:text-5xl">
                Ai un proiect, o provocare financiară sau o nevoie de
                <span className="text-gradient"> consultanță fiscală</span>?
              </h2>
              <p className="mt-5 max-w-2xl text-base text-white/65">
                Trimite-ne câteva detalii, iar echipa AMT poate realiza o analiză
                preliminară a situației tale.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <a href="#contact" className="btn-primary w-full justify-center lg:w-auto">
                Programează o discuție
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m13 5 7 7-7 7" />
                </svg>
              </a>
              <span className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                Răspuns în 1–3 zile lucrătoare
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
