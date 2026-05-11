"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { services } from "@/lib/content";
import { fadeUp, stagger } from "@/lib/motion";
import { cn } from "@/lib/utils";

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateXRaw = useMotionValue(0);
  const rotateYRaw = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  const rotateX = useSpring(rotateXRaw, { stiffness: 220, damping: 18 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 220, damping: 18 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    rotateYRaw.set((px - 0.5) * 14);
    rotateXRaw.set(-(py - 0.5) * 14);
    glareX.set(px * 100);
    glareY.set(py * 100);
  };

  const onLeave = () => {
    rotateXRaw.set(0);
    rotateYRaw.set(0);
    glareX.set(50);
    glareY.set(50);
  };

  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.18), transparent 55%)`;

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      custom={index}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      className="group relative h-full"
    >
      <a
        href={`#${service.id}`}
        className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 transition-shadow duration-300 hover:shadow-glass"
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glare as unknown as string }}
        />

        <div
          aria-hidden
          className="absolute -top-32 right-[-20%] h-64 w-64 rounded-full opacity-50 blur-3xl"
          style={{ background: service.accent + "33" }}
        />

        <div className="relative z-10 flex items-center justify-between">
          <span className="eyebrow">{service.eyebrow}</span>
          <span
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5"
            style={{ transform: "translateZ(40px)" }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white/70"
            >
              <path d="M7 17 17 7" />
              <path d="M8 7h9v9" />
            </svg>
          </span>
        </div>

        <h3
          className="relative z-10 mt-6 font-display text-2xl leading-tight text-white"
          style={{ transform: "translateZ(28px)" }}
        >
          {service.title}
        </h3>
        <p className="relative z-10 mt-4 text-sm leading-relaxed text-white/60">
          {service.description}
        </p>

        <ul className="relative z-10 mt-6 grid grid-cols-1 gap-2">
          {service.bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-2 text-[13px] text-white/70"
            >
              <span
                className="mt-2 h-1 w-1 shrink-0 rounded-full"
                style={{ background: service.accent }}
              />
              {b}
            </li>
          ))}
        </ul>

        <div className="relative z-10 mt-auto flex items-center gap-2 pt-8 text-[13px] font-medium text-white/80 transition group-hover:text-white">
          Detalii
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform group-hover:translate-x-1"
          >
            <path d="M5 12h14" />
            <path d="m13 5 7 7-7 7" />
          </svg>
        </div>

        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent to-transparent",
          )}
          style={{
            backgroundImage: `linear-gradient(to right, transparent, ${service.accent}aa, transparent)`,
          }}
        />
      </a>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="servicii" className="section relative">
      <div className="container-x">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Servicii</span>
            <h2 className="h-display mt-3 text-4xl text-white sm:text-5xl">
              Trei direcții integrate, <span className="text-gradient">un singur partener</span>.
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/55">
            Construim soluții care leagă finanțarea, contabilitatea și fiscalitatea
            într-un cadru unitar, pentru ca deciziile să fie luate pe baza acelorași
            date și principii.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="card-3d grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
