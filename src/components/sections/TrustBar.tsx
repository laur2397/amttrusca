"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { trustPillars, metrics } from "@/lib/content";

export function TrustBar() {
  return (
    <section id="trust" className="relative py-20 sm:py-24">
      <div className="container-x">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] sm:grid-cols-2 lg:grid-cols-4"
        >
          {trustPillars.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              custom={i}
              className="group relative bg-ink-950/40 p-7 transition hover:bg-white/[0.03]"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-[11px] tracking-widest text-accent-200">
                  0{i + 1}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
              </div>
              <h3 className="font-display text-lg leading-tight text-white">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                {p.description}
              </p>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-500/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4"
        >
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              variants={fadeUp}
              custom={i}
              className="relative"
            >
              <div className="font-display text-4xl text-gradient sm:text-5xl">
                {m.value}
              </div>
              <div className="mt-2 text-[12px] uppercase tracking-[0.2em] text-white/55">
                {m.label}
              </div>
              {m.placeholder && (
                <div className="mt-2 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-gold-400/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                  valoare editabilă
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
