"use client";

import { useState } from "react";
import { SlideData } from "@/data/types";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export function QuizSlide({ quiz }: { quiz: NonNullable<SlideData["quiz"]> }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSelect = (index: number) => {
    setSelected(index);
    const correct = index === quiz.correctIndex;
    setIsCorrect(correct);

    if (correct) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#10B981", "#3B82F6", "#F97316"]
      });
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-8">
      <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
        <h3 className="font-outfit font-bold text-3xl text-slate-800 mb-8 text-center">
          {quiz.question}
        </h3>

        <div className="flex flex-col gap-4">
          {quiz.options.map((option, index) => {
            const isSelected = selected === index;
            const isThisCorrect = index === quiz.correctIndex;
            
            let buttonClass = "w-full text-left px-6 py-4 rounded-2xl font-inter text-xl transition-all border-2 ";
            
            if (selected === null) {
              buttonClass += "bg-slate-50 border-slate-200 hover:border-primary hover:bg-blue-50 text-slate-700";
            } else if (isThisCorrect) {
              buttonClass += "bg-green-50 border-success text-green-800 shadow-[0_0_20px_rgba(16,185,129,0.3)]";
            } else if (isSelected && !isThisCorrect) {
              buttonClass += "bg-red-50 border-error text-red-800";
            } else {
              buttonClass += "bg-slate-50 border-slate-200 text-slate-400 opacity-50";
            }

            return (
              <motion.button
                key={index}
                onClick={() => selected === null && handleSelect(index)}
                disabled={selected !== null}
                className={buttonClass}
                whileHover={selected === null ? { scale: 1.02 } : {}}
                whileTap={selected === null ? { scale: 0.98 } : {}}
                animate={
                  isSelected && !isThisCorrect
                    ? { x: [-10, 10, -10, 10, -5, 5, 0] }
                    : {}
                }
                transition={{ duration: 0.4 }}
              >
                <div className="flex justify-between items-center">
                  <span>{option}</span>
                  {selected !== null && isThisCorrect && (
                    <span className="text-2xl">✅</span>
                  )}
                  {isSelected && !isThisCorrect && (
                    <span className="text-2xl">❌</span>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
      
      {isCorrect === false && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-6 text-error font-outfit font-bold text-xl"
        >
          Oops! That's not right. Think again! 🤔
        </motion.p>
      )}
      
      {isCorrect === true && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-6 text-success font-outfit font-bold text-2xl"
        >
          Excellent! You got it right! 🎉
        </motion.p>
      )}
    </div>
  );
}
