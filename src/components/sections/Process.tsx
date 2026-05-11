"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { process } from "@/lib/content";
import { LazyProcessNetwork } from "@/components/three/LazyScene";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.05, 0.85], ["0%", "100%"]);

  return (
    <section id="proces" ref={ref} className="section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full opacity-30 lg:opacity-50">
        <LazyProcessNetwork />
      </div>

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-3xl"
        >
          <span className="eyebrow">Procesul AMT</span>
          <h2 className="h-display mt-3 text-4xl text-white sm:text-5xl">
            O metodologie clară, <span className="text-gradient">pas cu pas</span>.
          </h2>
          <p className="mt-5 text-base text-white/60">
            Fiecare colaborare urmează un cadru construit pentru predictibilitate și
            transparență. Pașii pot fi parcurși integral sau parțial, în funcție de
            nevoie.
          </p>
        </motion.div>

        <div className="relative">
          {/* central rail */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-white/10 md:block md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-6 top-0 hidden w-px bg-gradient-to-b from-accent-400 via-accent-500 to-gold-500 md:left-1/2 md:block md:-translate-x-1/2"
          />

          <ol className="relative grid gap-12">
            {process.map((p, i) => {
              const left = i % 2 === 0;
              return (
                <motion.li
                  key={p.step}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.05 }}
                  className="relative grid grid-cols-[40px_1fr] gap-6 md:grid-cols-2 md:gap-12"
                >
                  {/* node */}
                  <div className="relative md:absolute md:left-1/2 md:top-2 md:-translate-x-1/2">
                    <div className="relative">
                      <div className="absolute inset-0 -m-2 rounded-full bg-accent-500/20 blur-xl" />
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-ink-900 text-[12px] tracking-widest text-accent-200">
                        {p.step}
                      </div>
                    </div>
                  </div>

                  {/* content */}
                  <div
                    className={`md:col-span-2 ${
                      left ? "md:pr-[55%] md:text-right" : "md:pl-[55%]"
                    }`}
                  >
                    <div className="glass inline-block rounded-2xl p-6 md:max-w-md">
                      <h3 className="font-display text-xl text-white">{p.title}</h3>
                      <p className="mt-2 text-sm text-white/60">{p.description}</p>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
