"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Navigation({
  sessionId,
  currentSlide,
  totalSlides,
  nextSlideId,
  prevSlideId,
}: {
  sessionId: string;
  currentSlide: number;
  totalSlides: number;
  nextSlideId: number | null;
  prevSlideId: number | null;
}) {
  const router = useRouter();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const progress = (currentSlide / totalSlides) * 100;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && nextSlideId) {
        router.push(`/session/${sessionId}?slide=${nextSlideId}`);
      } else if (e.key === "ArrowLeft" && prevSlideId) {
        router.push(`/session/${sessionId}?slide=${prevSlideId}`);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlideId, prevSlideId, router, sessionId]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <>
      {/* Progress Bar at the very top */}
      <div className="fixed top-0 left-0 w-full h-2 bg-slate-200 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-secondary"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      {/* Navigation Controls */}
      <div className="fixed top-6 left-0 w-full px-8 z-40 pointer-events-none flex justify-between items-center">
        <Link
          href="/"
          className="pointer-events-auto bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all font-outfit font-bold text-slate-700 hover:text-primary flex items-center gap-2 border border-slate-200"
        >
          <span>🏠</span> Home
        </Link>

        <div className="pointer-events-auto flex items-center gap-4 bg-white/80 backdrop-blur-md px-2 py-2 rounded-full shadow-sm border border-slate-200">
          {prevSlideId ? (
            <Link
              href={`/session/${sessionId}?slide=${prevSlideId}`}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              ◀️
            </Link>
          ) : (
            <div className="w-10 h-10 opacity-30 flex items-center justify-center grayscale">◀️</div>
          )}

          <div className="font-outfit font-bold text-slate-700 px-4 min-w-[100px] text-center">
            Slide {currentSlide} / {totalSlides}
          </div>

          {nextSlideId ? (
            <Link
              href={`/session/${sessionId}?slide=${nextSlideId}`}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-primary hover:bg-primary-dark text-white transition-colors shadow-md shadow-primary/30"
            >
              ▶️
            </Link>
          ) : (
            <div className="w-10 h-10 opacity-30 flex items-center justify-center grayscale">▶️</div>
          )}
        </div>

        <button
          onClick={toggleFullscreen}
          className="pointer-events-auto bg-white/80 backdrop-blur-md w-12 h-12 flex items-center justify-center rounded-full shadow-sm hover:shadow-md transition-all text-xl border border-slate-200"
          title="Toggle Fullscreen"
        >
          {isFullscreen ? "🗗" : "🖵"}
        </button>
      </div>
    </>
  );
}
