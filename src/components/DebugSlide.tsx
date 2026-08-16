"use client";

import { useState } from "react";
import { SlideData } from "@/data/types";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { addPoints } from "@/lib/progress";

export function DebugSlide({ debug }: { debug: NonNullable<SlideData["debug"]> }) {
  const [found, setFound] = useState(false);
  const [wrongClicks, setWrongClicks] = useState<number[]>([]);
  const [lastWrong, setLastWrong] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (found) return;

    if (index === debug.buggyIndex) {
      setFound(true);
      addPoints(15);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#F97316", "#EF4444", "#FBBF24"],
      });
    } else {
      setLastWrong(index);
      setWrongClicks((prev) => (prev.includes(index) ? prev : [...prev, index]));
    }
  };

  const showHint = !found && wrongClicks.length >= 2 && debug.fixHint;

  return (
    <div className="w-full max-w-3xl mx-auto mt-4">
      {/* Scenario banner */}
      <div className="bg-orange-50 border-2 border-orange-200 rounded-3xl px-6 py-5 mb-6 flex items-start gap-4">
        <span className="text-4xl" aria-hidden="true">🔍</span>
        <div>
          <p className="font-outfit font-bold text-xl text-orange-800 mb-1">Bug Hunt!</p>
          <p className="font-inter text-xl text-slate-700 leading-relaxed">{debug.scenario}</p>
          <p className="font-inter text-lg text-orange-700 mt-2 font-medium">
            One step is WRONG. Click the buggy step to catch it!
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="flex flex-col gap-3">
        {debug.steps.map((step, index) => {
          const isBuggy = index === debug.buggyIndex;
          const isWrongClicked = wrongClicks.includes(index);

          let cardClass =
            "w-full text-left px-6 py-4 rounded-2xl border-2 transition-all flex items-center gap-4 ";

          if (found && isBuggy) {
            cardClass += "bg-red-50 border-error shadow-[0_0_20px_rgba(239,68,68,0.25)]";
          } else if (found) {
            cardClass += "bg-green-50 border-success/50 text-green-900";
          } else if (isWrongClicked) {
            cardClass += "bg-slate-50 border-slate-200 opacity-60";
          } else {
            cardClass +=
              "bg-white border-slate-200 hover:border-orange-400 hover:bg-orange-50 cursor-pointer";
          }

          return (
            <motion.button
              key={index}
              onClick={() => handleClick(index)}
              disabled={found}
              className={cardClass}
              whileHover={!found ? { scale: 1.02 } : {}}
              whileTap={!found ? { scale: 0.98 } : {}}
              animate={
                lastWrong === index && !found
                  ? { x: [-10, 10, -10, 10, -5, 5, 0] }
                  : {}
              }
              transition={{ duration: 0.4 }}
            >
              <span
                className={`font-fira font-bold text-lg w-9 h-9 shrink-0 rounded-full flex items-center justify-center ${
                  found && isBuggy
                    ? "bg-error text-white"
                    : "bg-slate-800 text-slate-50"
                }`}
              >
                {index + 1}
              </span>
              <span className="font-fira text-xl text-slate-700">{step}</span>
              {found && isBuggy && <span className="ml-auto text-3xl">🐛</span>}
              {found && !isBuggy && <span className="ml-auto text-2xl">✅</span>}
            </motion.button>
          );
        })}
      </div>

      {/* Feedback */}
      {lastWrong !== null && !found && (
        <motion.p
          key={`wrong-${wrongClicks.length}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-6 text-orange-600 font-outfit font-bold text-xl"
        >
          Hmm, that step looks OK. Keep hunting! 🔎
        </motion.p>
      )}

      {showHint && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-3 text-slate-600 font-inter text-lg bg-amber-50 border border-amber-200 rounded-2xl px-5 py-3"
        >
          💡 Hint: {debug.fixHint}
        </motion.p>
      )}

      {found && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-6 bg-white rounded-3xl border-2 border-success p-6 text-center shadow-lg"
        >
          <p className="font-outfit font-extrabold text-2xl text-success mb-2">
            You caught the bug! +15 ⭐
          </p>
          <p className="font-inter text-xl text-slate-700 leading-relaxed">
            {debug.whyItsWrong}
          </p>
        </motion.div>
      )}
    </div>
  );
}
