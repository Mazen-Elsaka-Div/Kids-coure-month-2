"use client";

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { SlideData } from "@/data/types";
import { motion, AnimatePresence } from "framer-motion";

export function Mascot({ message }: { message: string }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay before mascot appears
    const timer = setTimeout(() => setIsVisible(true), 400);
    return () => clearTimeout(timer);
  }, [message]);

  return (
    <div className="fixed bottom-6 right-6 flex items-end gap-3 z-50">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white px-4 py-3 rounded-2xl rounded-br-none shadow-lg border-2 border-[var(--color-mascot)] max-w-[200px]"
          >
            <p className="font-outfit font-semibold text-[var(--color-mascot)] text-sm italic">
              {message}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="w-16 h-16 bg-[var(--color-mascot)] rounded-full flex items-center justify-center text-3xl shadow-xl border-4 border-white cursor-pointer hover:scale-110 transition-transform"
        onClick={() => {
          confetti({
            particleCount: 30,
            spread: 50,
            origin: { x: 0.9, y: 0.9 },
            colors: ["#F97316", "#FFFFFF"]
          });
        }}
      >
        🐰
      </motion.div>
    </div>
  );
}
