"use client";

import { useState } from "react";
import { SlideData } from "@/data/types";
import { motion, AnimatePresence } from "framer-motion";

export function TeacherNotes({ notes }: { notes: SlideData["teacherNotes"] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 w-full z-40 px-8 pb-4 pointer-events-none">
      <div className="max-w-4xl mx-auto flex justify-start pointer-events-auto">
        <div className="bg-white rounded-t-2xl shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border border-gray-200 overflow-hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-6 py-2 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-between gap-4 text-slate-600 font-semibold text-sm"
          >
            <span>👨‍🏫 Teacher Notes (Hidden from students)</span>
            <span>{isOpen ? "▼" : "▲"}</span>
          </button>
          
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                className="overflow-hidden"
              >
                <div className="p-6 grid grid-cols-2 gap-6 max-h-[40vh] overflow-y-auto">
                  <div>
                    <h4 className="text-primary font-bold mb-2 uppercase text-xs tracking-wider">Questions to Ask</h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm text-slate-700 mb-4">
                      {notes.questions.map((q, i) => (
                        <li key={i}>{q}</li>
                      ))}
                    </ul>

                    <h4 className="text-success font-bold mb-2 uppercase text-xs tracking-wider">Expected Answers</h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm text-slate-700">
                      {notes.expectedAnswers.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-warning font-bold mb-2 uppercase text-xs tracking-wider">Teaching Tips</h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm text-slate-700 mb-4">
                      {notes.tips.map((t, i) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>

                    <h4 className="text-secondary font-bold mb-2 uppercase text-xs tracking-wider">Transition to Next</h4>
                    <p className="text-sm text-slate-700 italic border-l-2 border-secondary pl-3 py-1">
                      "{notes.transition}"
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
