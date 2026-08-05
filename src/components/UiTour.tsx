"use client";

import { motion } from "framer-motion";
import { SlideData } from "@/data/types";

type Tour = NonNullable<SlideData["uiTour"]>;

/**
 * Shows a real screenshot of the Scratch editor with a spotlight rectangle
 * over the section being taught, plus a zoomed real crop of that section.
 */
export function UiTour({ tour }: { tour: Tour }) {
  const { region } = tour;

  return (
    <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8 items-start">
      {/* Left: the whole editor with a spotlight on this part */}
      <div className="w-full lg:w-[55%] shrink-0">
        <p className="font-outfit font-bold text-sm uppercase tracking-widest text-slate-400 mb-3">
          Where is it?
        </p>
        <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-900/10 bg-white">
          <img
            src={tour.wideImage}
            alt="The Scratch editor"
            className="w-full block"
          />
          {/* Dim everything except the region, using a huge outward shadow */}
          <motion.div
            key={`spot-${region.x}-${region.y}`}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="absolute rounded-md border-[3px] border-orange-400 pointer-events-none"
            style={{
              left: `${region.x}%`,
              top: `${region.y}%`,
              width: `${region.w}%`,
              height: `${region.h}%`,
              boxShadow: "0 0 0 9999px rgba(15, 23, 42, 0.62)",
            }}
          />
        </div>
      </div>

      {/* Right: the zoomed real crop + what it does */}
      <div className="w-full lg:flex-1 flex flex-col gap-6">
        <div>
          <p className="font-outfit font-bold text-sm uppercase tracking-widest text-orange-500 mb-3">
            {tour.detailLabel}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl overflow-hidden bg-white shadow-lg ring-1 ring-slate-900/10"
          >
            <img
              src={tour.detailImage}
              alt={tour.detailLabel}
              className={`w-full block object-cover object-top ${
                tour.detailTall ? "max-h-[340px]" : ""
              }`}
            />
          </motion.div>
        </div>

        <ul className="flex flex-col gap-3">
          {tour.facts.map((fact, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.09 }}
              className="flex gap-3 items-start font-inter text-lg md:text-xl text-slate-700 leading-relaxed"
            >
              <span
                aria-hidden="true"
                className="mt-2 w-2.5 h-2.5 rounded-full bg-orange-400 shrink-0"
              />
              <span>{fact}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
