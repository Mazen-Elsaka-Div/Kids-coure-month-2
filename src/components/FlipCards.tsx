"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FlipCardProps {
  card: {
    frontEmoji: string;
    frontText: string;
    backEmoji: string;
    backText: string;
  };
}

export function FlipCard({ card }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-64 h-80 cursor-pointer group perspective-[1000px]"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div 
          className="absolute inset-0 backface-hidden w-full h-full bg-white rounded-3xl shadow-xl border-4 border-blue-200 flex flex-col items-center justify-center p-6 hover:shadow-2xl transition-shadow"
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className="text-7xl mb-6">{card.frontEmoji}</span>
          <span className="text-3xl font-outfit font-bold text-slate-700 text-center">{card.frontText}</span>
          <span className="absolute bottom-4 text-sm font-inter text-slate-400 font-medium bg-slate-100 px-4 py-1 rounded-full">Click to flip</span>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 backface-hidden w-full h-full bg-blue-500 rounded-3xl shadow-xl border-4 border-blue-400 flex flex-col items-center justify-center p-6"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <span className="text-7xl mb-6">{card.backEmoji}</span>
          <span className="text-3xl font-outfit font-bold text-white text-center">{card.backText}</span>
        </div>
      </motion.div>
    </div>
  );
}

export function FlipCardsContainer({ cards }: { cards: FlipCardProps["card"][] }) {
  return (
    <div className="mt-12 flex flex-wrap gap-8 justify-center items-center w-full">
      {cards.map((card, idx) => (
        <FlipCard key={idx} card={card} />
      ))}
    </div>
  );
}
