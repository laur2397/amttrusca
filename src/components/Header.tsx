"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navigation } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/[0.06] bg-ink-950/65 backdrop-blur-xl backdrop-saturate-150"
            : "bg-transparent",
        )}
      >
        <div className="container-x flex h-20 items-center justify-between">
          <a
            href="#acasa"
            className="group relative flex items-center gap-3"
            aria-label="AMT — pagina principală"
          >
            <span className="relative inline-flex h-9 w-9 items-center justify-center">
              <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent-500 to-accent-800 opacity-90 transition group-hover:opacity-100" />
              <span className="absolute inset-[2px] rounded-[7px] bg-ink-950" />
              <span className="relative font-display text-[15px] font-medium tracking-tight text-gradient">
                A
              </span>
            </span>
            <span className="font-display text-xl tracking-[0.18em] text-white">
              AMT
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative px-3 py-2 text-[13px] font-medium text-white/70 transition hover:text-white"
              >
                {item.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-accent-400 to-gold-500 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a href="#contact" className="btn-primary text-[13px]">
              Solicită consultanță
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M5 12h14" />
                <path d="m13 5 7 7-7 7" />
              </svg>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur lg:hidden"
            aria-label={open ? "Închide meniul" : "Deschide meniul"}
            aria-expanded={open}
          >
            <span className="relative block h-3.5 w-5">
              <motion.span
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 top-0 block h-0.5 w-full origin-center rounded-full bg-white"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 top-1.5 block h-0.5 w-full rounded-full bg-white"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 block h-0.5 w-full origin-center rounded-full bg-white"
              />
            </span>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-ink-950/90 backdrop-blur-xl" />
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="container-x relative flex h-full flex-col justify-between py-28"
            >
              <ul className="flex flex-col gap-2">
                {navigation.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-white/5 py-4 font-display text-3xl text-white/85 transition hover:text-white"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-full justify-between text-base"
              >
                Solicită consultanță
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M5 12h14" />
                  <path d="m13 5 7 7-7 7" />
                </svg>
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
