import { SlideData } from "@/data/types";
import { motion } from "framer-motion";

export function NewWord({ wordData }: { wordData: NonNullable<SlideData["newWord"]> }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="mt-8 bg-white/80 backdrop-blur-sm border-2 border-slate-200 rounded-2xl p-6 shadow-sm inline-block max-w-2xl"
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">🆕</span>
        <h3 className="font-outfit font-bold text-2xl text-primary">New Word</h3>
      </div>
      
      <div className="flex items-baseline gap-3 mb-3">
        <span className="font-outfit font-black text-3xl text-slate-800">{wordData.word}</span>
        <span className="font-fira text-secondary font-medium">/{wordData.pronunciation}/</span>
      </div>
      
      <p className="text-xl text-slate-700 mb-3 font-medium">{wordData.meaning}</p>
      
      <div className="bg-slate-100 rounded-xl px-4 py-3 border-l-4 border-warning">
        <p className="text-lg text-slate-600 italic">"{wordData.example}"</p>
      </div>
    </motion.div>
  );
}
