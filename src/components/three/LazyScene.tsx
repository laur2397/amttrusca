"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const HeroScene = dynamic(
  () => import("./HeroScene").then((m) => m.HeroScene),
  { ssr: false, loading: () => null },
);

const ProcessNetwork = dynamic(
  () => import("./ProcessNetwork").then((m) => m.ProcessNetwork),
  { ssr: false, loading: () => null },
);

const FloatingDocs = dynamic(
  () => import("./FloatingDocs").then((m) => m.FloatingDocs),
  { ssr: false, loading: () => null },
);

const ComplianceShield = dynamic(
  () => import("./ComplianceShield").then((m) => m.ComplianceShield),
  { ssr: false, loading: () => null },
);

const EuropeGlobe = dynamic(
  () => import("./EuropeGlobe").then((m) => m.EuropeGlobe),
  { ssr: false, loading: () => null },
);

function useInView<T extends HTMLElement>(rootMargin = "200px") {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [rootMargin]);
  return { ref, inView };
}

export function LazyHeroScene() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className="absolute inset-0">
      {inView && <HeroScene />}
    </div>
  );
}

export function LazyProcessNetwork() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className="absolute inset-0">
      {inView && <ProcessNetwork />}
    </div>
  );
}

export function LazyFloatingDocs() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className="absolute inset-0">
      {inView && <FloatingDocs />}
    </div>
  );
}

export function LazyComplianceShield() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className="absolute inset-0">
      {inView && <ComplianceShield />}
    </div>
  );
}

export function LazyEuropeGlobe() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className="absolute inset-0">
      {inView && <EuropeGlobe />}
    </div>
  );
}
