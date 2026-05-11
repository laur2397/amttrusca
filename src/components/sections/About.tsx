"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

const pillars = [
  {
    title: "Disciplină instituțională",
    description:
      "Lucrăm cu rigoarea aplicată în proiectele cu finanțare publică și cu atenția specifică auditului financiar.",
  },
  {
    title: "Gândire strategică",
    description:
      "Decisiile financiare și fiscale sunt evaluate în contextul direcției pe termen mediu și lung a companiei.",
  },
  {
    title: "Implementare reală",
    description:
      "Nu livrăm doar recomandări. Susținem execuția alături de echipele interne ale clienților.",
  },
];

export function About() {
  return (
    <section id="despre" className="section relative">
      <div className="container-x">
        <div className="grid gap-16 lg:grid-cols-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-5"
          >
            <span className="eyebrow">Despre AMT</span>
            <h2 className="h-display mt-4 text-4xl text-white sm:text-5xl">
              O echipă de consultanță construită în jurul a trei piloni:
              <span className="text-gradient"> finanțare, contabilitate, fiscalitate</span>.
            </h2>
            <p className="mt-6 max-w-xl text-base text-white/60">
              AMT acoperă întreg ciclul: identificăm oportunitățile de finanțare,
              consolidăm partea financiar-contabilă și asigurăm o disciplină fiscală
              conformă. Lucrăm cu antreprenori, IMM-uri și organizații care își propun
              creștere predictibilă, fără compromisuri pe conformitate.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="grid gap-4">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  variants={fadeUp}
                  custom={i}
                  className="group glass relative overflow-hidden rounded-2xl p-7 transition hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-6">
                    <div className="font-display text-3xl text-gradient-gold">
                      0{i + 1}
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-white">{p.title}</h3>
                      <p className="mt-2 text-sm text-white/60">{p.description}</p>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-500/10 blur-3xl transition group-hover:bg-accent-500/20" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
