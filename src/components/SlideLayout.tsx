"use client";

import { SlideData } from "@/data/types";
import { motion } from "framer-motion";
import { NewWord } from "./NewWord";
import { QuizSlide } from "./QuizSlide";
import { GameEmbed } from "./GameEmbed";

export function SlideLayout({ slide }: { slide: SlideData }) {
  // Background variants
  const bgClasses = {
    default: "bg-slate-50",
    blue: "bg-blue-50",
    purple: "bg-purple-50",
    green: "bg-green-50",
    orange: "bg-orange-50",
  };

  const bgClass = bgClasses[slide.bgVariant || "default"];

  return (
    <div className={`min-h-screen pt-24 pb-32 px-8 flex flex-col items-center justify-center transition-colors duration-500 ${bgClass}`}>
      <motion.div
        key={`slide-content-${slide.id}`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl mx-auto flex flex-col items-center"
      >
        {/* Title */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
            className="text-6xl mb-4"
          >
            {slide.emoji}
          </motion.div>
          <h2 className="font-outfit font-extrabold text-5xl md:text-6xl text-slate-800 tracking-tight">
            {slide.title}
          </h2>
        </div>

        {/* Content Type specific rendering */}
        {slide.type === "quiz" && slide.quiz && (
          <QuizSlide quiz={slide.quiz} />
        )}

        {slide.type === "game" && slide.gameUrl && (
          <GameEmbed url={slide.gameUrl} />
        )}

        {slide.type === "review" && slide.reviewPoints && (
          <div className="w-full max-w-3xl bg-white rounded-3xl p-8 shadow-xl border-t-8 border-primary">
            <ul className="space-y-4">
              {slide.reviewPoints.map((point, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="font-inter text-2xl text-slate-700 flex items-start"
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </div>
        )}

        {/* Standard Image + Content */}
        {(slide.type === "content" || slide.type === "homework" || slide.type === "activity") && (
          <div className="flex flex-col md:flex-row gap-12 items-center w-full max-w-5xl">
            {/* Image section */}
            {slide.image && (
              <motion.div
                className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-slate-200 aspect-[4/3] flex items-center justify-center relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {/* Fallback while we generate real images later, or if image is missing */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Placeholder if image not found
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('bg-gradient-to-br', 'from-slate-200', 'to-slate-300');
                    const span = document.createElement('span');
                    span.className = 'text-slate-400 font-outfit text-xl absolute';
                    span.innerText = 'Image goes here';
                    e.currentTarget.parentElement?.appendChild(span);
                  }}
                />
              </motion.div>
            )}

            {/* Text section */}
            <div className={`w-full ${slide.image ? "md:w-1/2" : "max-w-3xl text-center"}`}>
              <div className="space-y-6">
                {slide.content.map((text, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="font-inter text-2xl md:text-3xl text-slate-700 leading-relaxed font-medium"
                  >
                    {text}
                  </motion.p>
                ))}
              </div>

              {/* New Word */}
              {slide.newWord && (
                <div className="mt-12">
                  <NewWord wordData={slide.newWord} />
                </div>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
