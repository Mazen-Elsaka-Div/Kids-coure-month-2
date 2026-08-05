"use client";

import { useState } from "react";
import Link from "next/link";
import { CurriculumSession } from "@/data/curriculum";

/**
 * One session in the plan. Collapsed it shows the goal and the new blocks;
 * expanded it shows the explain / activity / task / homework breakdown.
 */
export function SessionCard({ session }: { session: CurriculumSession }) {
  const [open, setOpen] = useState(false);
  const done = session.status === "done";

  return (
    <article className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-900/5 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start gap-5">
          {/* Session number */}
          <span
            className={`font-outfit font-extrabold text-xl w-12 h-12 rounded-xl shrink-0 flex items-center justify-center ${
              done
                ? "bg-emerald-100 text-emerald-700"
                : "bg-slate-100 text-slate-500"
            }`}
          >
            {session.id}
          </span>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h4 className="font-outfit font-bold text-xl text-slate-800">
                {session.title}
              </h4>

              {session.isProject && (
                <span className="font-fira text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-amber-100 text-amber-700">
                  Project
                </span>
              )}
              {done ? (
                <span className="font-fira text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-emerald-100 text-emerald-700">
                  Built
                </span>
              ) : (
                <span className="font-fira text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-slate-100 text-slate-500">
                  Planned
                </span>
              )}
            </div>

            <p className="font-inter text-base text-slate-600 leading-relaxed mt-2">
              {session.goal}
            </p>

            {session.carriesConcept && (
              <p className="font-inter text-sm text-violet-700 bg-violet-50 rounded-lg px-3 py-2 mt-3 inline-block">
                Also teaches:{" "}
                <span className="font-semibold">{session.carriesConcept}</span>
              </p>
            )}

            {session.newBlocks.length > 0 && (
              <ul className="flex flex-wrap gap-2 mt-4">
                {session.newBlocks.map((block) => (
                  <li
                    key={block}
                    className="font-fira text-xs text-slate-700 bg-slate-100 rounded-md px-2.5 py-1.5"
                  >
                    {block}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex items-center gap-4 mt-5">
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                className="font-outfit font-semibold text-sm text-slate-700 hover:text-slate-900 transition-colors"
              >
                {open ? "Hide the lesson plan ▲" : "Show the lesson plan ▼"}
              </button>

              {done && (
                <Link
                  href={`/session/${session.id}`}
                  className="font-outfit font-semibold text-sm text-amber-600 hover:text-amber-700 transition-colors"
                >
                  Open slides →
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-slate-50/60 px-6 py-6 flex flex-col gap-6">
          <Part label="Explain" tone="slate">
            <ul className="flex flex-col gap-2">
              {session.explain.map((line) => (
                <li
                  key={line}
                  className="font-inter text-base text-slate-700 leading-relaxed flex gap-2.5"
                >
                  <span aria-hidden="true" className="text-slate-300">
                    —
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </Part>

          <Part label="Activity — together" tone="blue">
            {session.activity}
          </Part>

          <Part label="Task — on their own" tone="amber">
            {session.task}
          </Part>

          <Part label="Homework" tone="violet">
            {session.homework}
          </Part>
        </div>
      )}
    </article>
  );
}

const tones = {
  slate: "text-slate-400",
  blue: "text-sky-600",
  amber: "text-amber-600",
  violet: "text-violet-600",
} as const;

function Part({
  label,
  tone,
  children,
}: {
  label: string;
  tone: keyof typeof tones;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h5
        className={`font-outfit font-bold text-xs uppercase tracking-widest mb-2 ${tones[tone]}`}
      >
        {label}
      </h5>
      {typeof children === "string" ? (
        <p className="font-inter text-base text-slate-700 leading-relaxed">
          {children}
        </p>
      ) : (
        children
      )}
    </div>
  );
}
