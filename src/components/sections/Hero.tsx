"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { LazyHeroScene } from "@/components/three/LazyScene";
import { useIsMobile } from "@/hooks/useIsMobile";
import { withBase } from "@/lib/paths";

const microcopy = ["Fonduri europene", "Contabilitate", "Fiscalitate", "Strategie financiară"];

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOk, setVideoOk] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onPlay = () => setVideoOk(true);
    const onErr = () => setVideoOk(false);
    v.addEventListener("playing", onPlay);
    v.addEventListener("error", onErr);
    return () => {
      v.removeEventListener("playing", onPlay);
      v.removeEventListener("error", onErr);
    };
  }, []);

  return (
    <section
      id="acasa"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      {/* Video background (optional). Drop a file at /public/videos/amt-hero.mp4 */}
      {!isMobile && (
        <video
          ref={videoRef}
          className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover opacity-50"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={withBase("/images/hero-poster.svg")}
        >
          <source src={withBase("/videos/amt-hero.mp4")} type="video/mp4" />
        </video>
      )}

      {/* Fallback / overlay gradient */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(5,7,13,0.75)_0%,rgba(5,7,13,0.55)_40%,rgba(5,7,13,0.95)_100%)]" />
      <div className="aurora -z-10" />
      <div className="absolute inset-0 -z-10 grid-bg opacity-60" aria-hidden />

      {/* 3D scene */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <LazyHeroScene />
      </div>

      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-accent-400/60" />
                <span className="relative h-2 w-2 rounded-full bg-accent-400" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.32em] text-white/70">
                AMT Consulting · Estonia · România
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="h-display mt-6 text-[2.6rem] sm:text-5xl lg:text-[4.25rem]"
            >
              <span className="text-white">Consultanță strategică pentru</span>
              <br />
              <span className="text-gradient">finanțare, fiscalitate</span>
              <span className="text-white"> și</span>
              <br />
              <span className="text-gradient">performanță financiară</span>
              <span className="text-gold-400">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55 }}
              className="mt-6 max-w-2xl text-base text-white/65 sm:text-lg"
            >
              AMT sprijină companiile în accesarea fondurilor europene și structurale,
              management financiar-contabil și consultanță fiscală, prin soluții clare,
              conforme și orientate spre rezultate.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a href="#contact" className="btn-primary">
                Solicită o analiză
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
              <a href="#servicii" className="btn-ghost">
                Vezi serviciile
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.95 }}
              className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-white/45"
            >
              {microcopy.map((item, i) => (
                <span key={item} className="inline-flex items-center gap-2">
                  {i > 0 && <span className="h-1 w-1 rounded-full bg-white/25" />}
                  <span className="uppercase tracking-[0.22em]">{item}</span>
                </span>
              ))}
            </motion.div>
          </div>

          <div className="relative hidden lg:col-span-5 lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="relative mx-auto aspect-square w-full max-w-[520px]"
            >
              <div className="absolute inset-0 rounded-full bg-radial-fade blur-3xl" />
              <div className="absolute inset-6 rounded-full border border-white/[0.06]" />
              <div className="absolute inset-14 rounded-full border border-white/[0.04]" />
              <div className="glass absolute inset-20 rounded-3xl" />
              <div className="absolute -bottom-2 left-1/2 h-px w-40 -translate-x-1/2 shimmer-line" />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center"
        >
          <a
            href="#trust"
            className="pointer-events-auto inline-flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-white/45 transition hover:text-white/80"
          >
            <span>scroll</span>
            <span className="block h-8 w-px overflow-hidden bg-white/15">
              <motion.span
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="block h-1/2 w-full bg-gradient-to-b from-transparent via-accent-300 to-transparent"
              />
            </span>
          </a>
        </motion.div>
      </div>

      {/* SR-only note for video state */}
      <span className="sr-only">
        Video status: {videoOk ? "loaded" : "fallback"}
      </span>
    </section>
  );
}
