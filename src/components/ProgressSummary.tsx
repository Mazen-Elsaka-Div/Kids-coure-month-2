"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { sessionBadges, TOTAL_BADGES } from "@/data/badges";
import { getProgress } from "@/lib/progress";

export function ProgressSummary() {
  const [points, setPoints] = useState<number | null>(null);
  const [earned, setEarned] = useState<string[]>([]);

  useEffect(() => {
    const progress = getProgress();
    setPoints(progress.points);
    setEarned(progress.badges);
  }, []);

  // Render nothing until hydrated, and hide entirely for brand-new learners.
  if (points === null || (points === 0 && earned.length === 0)) return null;

  const badges = Object.values(sessionBadges);

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      aria-label="My progress"
      className="w-full mb-12 rounded-3xl bg-white border-2 border-slate-100 shadow-lg p-6 md:p-8"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
        <h2 className="font-outfit font-extrabold text-2xl text-slate-800">
          My Progress <span aria-hidden="true">⭐</span>
        </h2>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 font-outfit font-bold text-slate-700">
            <span aria-hidden="true">⭐</span> {points} stars
          </span>
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 font-outfit font-bold text-slate-700">
            <span aria-hidden="true">🏅</span> {earned.length} / {TOTAL_BADGES} badges
          </span>
        </div>
      </div>

      <ul className="flex flex-wrap gap-3">
        {badges.map((badge) => {
          const isEarned = earned.includes(badge.id);
          return (
            <li
              key={badge.id}
              title={badge.name}
              className={`flex items-center gap-2 rounded-full px-4 py-2 border-2 font-outfit font-bold text-sm transition-colors ${
                isEarned
                  ? "bg-amber-50 border-amber-300 text-slate-800"
                  : "bg-slate-50 border-slate-200 text-slate-400 grayscale"
              }`}
            >
              <span className="text-lg" aria-hidden="true">{badge.emoji}</span>
              {badge.name}
              {isEarned && <span className="sr-only">(earned)</span>}
            </li>
          );
        })}
      </ul>
    </motion.section>
  );
}
