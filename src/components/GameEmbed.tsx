"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function GameEmbed({ url }: { url: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="w-full max-w-5xl mx-auto mt-4 mb-8">
      <div className="relative w-full aspect-video bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800">
        {!isLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white gap-4">
            <div className="w-12 h-12 border-4 border-white border-t-primary rounded-full animate-spin"></div>
            <p className="font-outfit font-bold text-xl">Loading Game...</p>
          </div>
        )}
        <iframe
          src={url}
          className="w-full h-full border-none"
          title="Interactive Game"
          onLoad={() => setIsLoaded(true)}
          allow="autoplay; fullscreen"
        />
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center mt-4 text-slate-500 font-medium"
      >
        Tip: Click inside the game to interact. You can make it fullscreen too!
      </motion.p>
    </div>
  );
}
