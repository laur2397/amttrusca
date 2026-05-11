"use client";

import { motion } from "framer-motion";
import { taxPillars } from "@/lib/content";
import { fadeUp, stagger } from "@/lib/motion";
import { LazyComplianceShield } from "@/components/three/LazyScene";

export function Tax() {
  return (
    <section
      id="fiscal"
      className="section relative overflow-hidden border-y border-white/[0.06] bg-[radial-gradient(60%_50%_at_70%_30%,rgba(212,175,85,0.10),transparent_70%),linear-gradient(180deg,#05070d_0%,#070b18_100%)]"
    >
      <div className="container-x grid gap-16 lg:grid-cols-12 lg:items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="lg:col-span-6"
        >
          <span className="eyebrow">Consultanță fiscală</span>
          <h2 className="h-display mt-3 text-4xl text-white sm:text-5xl">
            Consultanță fiscală orientată spre
            <span className="text-gradient-gold"> conformitate și eficiență</span>.
          </h2>
          <p className="mt-5 max-w-xl text-base text-white/65">
            Aplicarea corectă a legislației fiscale înseamnă mai mult decât respectarea
            termenelor. Înseamnă interpretare contextualizată, anticiparea riscurilor
            și construirea unei structuri care susține obiectivele companiei.
          </p>

          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-10 grid gap-3 sm:grid-cols-2"
          >
            {taxPillars.map((p, i) => (
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

        <div className="lg:col-span-6">
          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(212,175,85,0.18),transparent_60%)] blur-3xl" />
            <LazyComplianceShield />
            {/* fine grid overlay */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-3xl"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
                maskImage:
                  "radial-gradient(ellipse at center, black 40%, transparent 75%)",
              }}
            />
            <div className="pointer-events-none absolute left-1/2 top-6 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/70 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              Conformitate · Risc redus
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
