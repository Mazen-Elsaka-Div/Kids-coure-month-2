"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Badge } from "@/data/badges";
import { addPoints, completeSession, getPoints, isSessionCompleted } from "@/lib/progress";

export function BadgeUnlock({ sessionId, badge }: { sessionId: number; badge: Badge }) {
  const [totalPoints, setTotalPoints] = useState<number | null>(null);
  const [firstTime, setFirstTime] = useState(false);

  useEffect(() => {
    const alreadyDone = isSessionCompleted(sessionId);

    if (!alreadyDone) {
      completeSession(sessionId, badge.id);
      addPoints(50);
      setFirstTime(true);
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.5 },
        colors: ["#F59E0B", "#3B82F6", "#10B981", "#EC4899"],
      });
    }

    setTotalPoints(getPoints());

    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ total: number }>).detail;
      setTotalPoints(detail.total);
    };
    window.addEventListener("progress:points", handler);
    return () => window.removeEventListener("progress:points", handler);
    // Run once per mount for this session's review slide.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId, badge.id]);

  if (totalPoints === null) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", bounce: 0.4, delay: 0.2 }}
      className="w-full max-w-3xl mb-8 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 p-8 text-center shadow-xl"
    >
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", bounce: 0.6, delay: 0.5 }}
        className="text-7xl mb-3"
        aria-hidden="true"
      >
        {badge.emoji}
      </motion.div>

      <p className="font-outfit font-extrabold text-3xl text-slate-800 mb-1">
        {firstTime ? "Badge Unlocked!" : "Badge Earned!"}
      </p>
      <p className="font-outfit font-bold text-2xl text-amber-600 mb-4">
        {badge.name}
      </p>

      {firstTime && (
        <p className="font-inter text-xl text-slate-600 mb-2">
          +50 ⭐ for finishing this session!
        </p>
      )}

      <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-2 shadow-sm border border-amber-200">
        <span className="text-2xl" aria-hidden="true">⭐</span>
        <span className="font-outfit font-bold text-xl text-slate-700 tabular-nums">
          {totalPoints} total stars
        </span>
      </div>
    </motion.div>
  );
}
