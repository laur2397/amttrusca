"use client";

import { motion } from "framer-motion";
import { euFundsAreas } from "@/lib/content";
import { fadeUp, stagger } from "@/lib/motion";
import { LazyEuropeGlobe } from "@/components/three/LazyScene";

export function EUFunds() {
  return (
    <section
      id="fonduri-europene"
      className="section relative overflow-hidden border-y border-white/[0.06] bg-[radial-gradient(70%_60%_at_30%_30%,rgba(15,99,196,0.18),transparent_70%),linear-gradient(180deg,#06091a_0%,#05070d_100%)]"
    >
      <div className="aurora opacity-60" />
      <div className="container-x relative grid gap-16 lg:grid-cols-12 lg:items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="lg:col-span-6"
        >
          <span className="eyebrow">Fonduri europene și structurale</span>
          <h2 className="h-display mt-3 text-4xl text-white sm:text-5xl">
            Fonduri europene și structurale pentru
            <span className="text-gradient"> dezvoltare sustenabilă</span>.
          </h2>
          <p className="mt-5 max-w-xl text-base text-white/65">
            AMT oferă suport complet pentru companii care urmăresc accesarea finanțărilor
            nerambursabile, de la analiza eligibilității până la implementarea și
            raportarea proiectului. Lucrăm cu rigoare instituțională și fără promisiuni
            care depășesc cadrul oficial.
          </p>

          <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[12px] text-white/65">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            Programele specifice, apelurile active și termenele se completează
            <span className="text-white/40">[manual]</span>
          </div>

          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {euFundsAreas.map((a, i) => (
              <motion.li
                key={a.title}
                variants={fadeUp}
                custom={i}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition hover:border-accent-400/30 hover:bg-accent-500/[0.04]"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-[11px] text-accent-200">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-display text-base text-white">{a.title}</h4>
                </div>
                <p className="mt-2 text-[13px] text-white/55">{a.description}</p>
                <div className="pointer-events-none absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-accent-500/0 blur-2xl transition group-hover:bg-accent-500/20" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <div className="lg:col-span-6">
          <div className="relative mx-auto aspect-square w-full max-w-[560px]">
            <div className="absolute inset-0 rounded-full bg-radial-fade blur-3xl" />
            <LazyEuropeGlobe />
            <div className="pointer-events-none absolute inset-0 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute inset-10 rounded-full border border-white/5" />
          </div>
        </div>
      </div>
    </section>
  );
}
