"use client";

import { motion } from "framer-motion";
import { caseStudies } from "@/lib/content";
import { fadeUp, stagger } from "@/lib/motion";

export function CaseStudies() {
  return (
    <section id="proiecte" className="section relative">
      <div className="container-x">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Proiecte · Studii de caz</span>
            <h2 className="h-display mt-3 text-4xl text-white sm:text-5xl">
              Structuri reale, <span className="text-gradient">rezultate validate</span>.
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/55">
            Exemplele de mai jos sunt placeholders. Valorile, denumirile și
            indicatorii vor fi completați doar pe baza unor date verificate, conform
            principiilor de confidențialitate convenite cu clienții.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {caseStudies.map((c, i) => (
            <motion.article
              key={c.title}
              variants={fadeUp}
              custom={i}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-transparent p-7 transition hover:-translate-y-1 hover:border-white/15"
            >
              <div className="absolute inset-x-0 -top-1 h-px bg-gradient-to-r from-transparent via-accent-400/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-white/45">
                <span>Studiu {String(i + 1).padStart(2, "0")}</span>
                <span>{c.industry}</span>
              </div>

              <h3 className="mt-5 font-display text-xl leading-snug text-white">
                {c.title}
              </h3>

              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.22em] text-accent-200/80">
                    Provocare
                  </dt>
                  <dd className="mt-1 text-white/65">{c.challenge}</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.22em] text-accent-200/80">
                    Soluție AMT
                  </dt>
                  <dd className="mt-1 text-white/65">{c.solution}</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.22em] text-gold-400/80">
                    Rezultat
                  </dt>
                  <dd className="mt-1 text-white/85">
                    <span className="rounded-md border border-gold-500/20 bg-gold-500/[0.06] px-2 py-1 font-mono text-[12px]">
                      {c.result}
                    </span>
                  </dd>
                </div>
              </dl>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
