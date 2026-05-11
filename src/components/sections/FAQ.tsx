"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { faqs } from "@/lib/content";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section relative">
      <div className="container-x grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <span className="eyebrow">Întrebări frecvente</span>
          <h2 className="h-display mt-3 text-4xl text-white sm:text-5xl">
            Răspunsuri scurte, <span className="text-gradient">cadru clar</span>.
          </h2>
          <p className="mt-5 max-w-sm text-sm text-white/55">
            Răspunsurile de mai jos acoperă subiectele frecvente. Pentru detalii
            adaptate situației tale, ne poți contacta direct.
          </p>
        </div>

        <div className="lg:col-span-8">
          <ul className="divide-y divide-white/[0.06] overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02]">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start gap-4 px-6 py-5 text-left transition hover:bg-white/[0.02]"
                    aria-expanded={isOpen}
                  >
                    <span className="mt-1 font-mono text-[11px] text-accent-200/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-display text-lg text-white">
                      {f.q}
                    </span>
                    <span
                      className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition"
                      style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24">
                        <path
                          d="M12 5v14M5 12h14"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pl-[58px] text-sm text-white/65">
                          {f.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
