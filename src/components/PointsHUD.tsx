"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getPoints } from "@/lib/progress";

export function PointsHUD() {
  const [points, setPoints] = useState<number | null>(null);
  const [delta, setDelta] = useState<number | null>(null);

  useEffect(() => {
    setPoints(getPoints());

    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ total: number; delta: number }>).detail;
      setPoints(detail.total);
      setDelta(detail.delta);
      // Clear the "+N" burst after a moment
      window.setTimeout(() => setDelta(null), 1600);
    };

    window.addEventListener("progress:points", handler);
    return () => window.removeEventListener("progress:points", handler);
  }, []);

  if (points === null) return null;

  return (
    <div className="pointer-events-auto relative flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-slate-200">
      <motion.span
        key={points}
        initial={{ scale: 1.4 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.6 }}
        className="text-xl"
        aria-hidden="true"
      >
        ⭐
      </motion.span>
      <span className="font-outfit font-bold text-slate-700 tabular-nums">
        {points}
      </span>
      <span className="sr-only">stars earned</span>

      <AnimatePresence>
        {delta !== null && (
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: -14 }}
            exit={{ opacity: 0, y: -28 }}
            transition={{ duration: 0.6 }}
            className="absolute -top-4 right-2 font-outfit font-extrabold text-amber-500 text-lg"
          >
            +{delta}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
