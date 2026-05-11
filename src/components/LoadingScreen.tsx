"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          aria-hidden
        >
          <div className="aurora" />
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute inset-0 -m-6 rounded-full bg-radial-fade blur-2xl" />
              <span className="relative font-display text-6xl tracking-tight text-gradient">
                AMT
              </span>
            </motion.div>
            <div className="h-px w-44 overflow-hidden bg-white/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
                className="h-full w-1/2 bg-gradient-to-r from-transparent via-accent-400 to-transparent"
              />
            </div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-white/40">
              Consulting · Finance · Strategy
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
