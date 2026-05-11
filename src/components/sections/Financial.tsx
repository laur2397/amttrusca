"use client";

import { motion } from "framer-motion";
import { financialPillars } from "@/lib/content";
import { fadeUp, stagger } from "@/lib/motion";
import { LazyFloatingDocs } from "@/components/three/LazyScene";

export function Financial() {
  return (
    <section id="financiar-contabil" className="section relative overflow-hidden">
      <div className="container-x grid gap-16 lg:grid-cols-12 lg:items-center">
        <div className="order-2 lg:order-1 lg:col-span-6">
          <div className="relative aspect-square w-full max-w-[560px]">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-900/40 to-transparent blur-2xl" />
            <LazyFloatingDocs />

            {/* HUD overlay */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/70 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                Cash-flow · Q[#]
              </div>
              <div className="absolute right-6 top-6 rounded-md border border-white/10 bg-black/40 px-3 py-1.5 text-[11px] text-white/70 backdrop-blur">
                EBITDA Δ <span className="text-gold-400">+[%]</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between rounded-xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.24em] text-white/55">
                    Raport lunar
                  </div>
                  <div className="font-display text-base text-white">Stabilitate financiară</div>
                </div>
                <div className="text-right text-[11px] text-white/55">
                  KPI · placeholder
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="order-1 lg:order-2 lg:col-span-6"
        >
          <span className="eyebrow">Servicii financiar-contabile</span>
          <h2 className="h-display mt-3 text-4xl text-white sm:text-5xl">
            Control financiar și contabilitate pentru
            <span className="text-gradient"> decizii corecte</span>.
          </h2>
          <p className="mt-5 max-w-xl text-base text-white/65">
            Punem ordine în date și transformăm raportările într-un instrument real de
            management. Cu o disciplină contabilă solidă și o privire de analist, oferim
            companiilor reperele necesare pentru creștere predictibilă.
          </p>

          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-10 grid gap-3 sm:grid-cols-2"
          >
            {financialPillars.map((p, i) => (
              <motion.li
                key={p.title}
                variants={fadeUp}
                custom={i}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition hover:border-gold-400/30"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-[11px] text-gold-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-display text-base text-white">{p.title}</h4>
                </div>
                <p className="mt-2 text-[13px] text-white/55">{p.description}</p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
