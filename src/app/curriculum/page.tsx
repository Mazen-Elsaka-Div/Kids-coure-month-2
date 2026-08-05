import Link from "next/link";
import { curriculum, stages, courseStats } from "@/data/curriculum";
import { SessionCard } from "@/components/curriculum/SessionCard";

export const metadata = {
  title: "Course Plan — Scratch Programming for Kids",
  description:
    "The full 20-session plan: 4 algorithm foundation sessions plus 16 Scratch sessions, each 90 minutes, twice a week.",
};

export default function CurriculumPage() {
  const weeks = Array.from(new Set(curriculum.map((s) => s.week)));

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-slate-900 text-slate-50">
        <div className="max-w-5xl mx-auto px-6 py-14">
          <Link
            href="/"
            className="font-outfit font-semibold text-sm text-slate-400 hover:text-slate-200 transition-colors"
          >
            ← Back to sessions
          </Link>

          <h1 className="font-outfit font-extrabold text-4xl md:text-6xl tracking-tight mt-6 text-balance">
            The Course Plan
          </h1>
          <p className="font-inter text-lg md:text-xl text-slate-300 mt-4 max-w-2xl leading-relaxed text-pretty">
            Everything two nine-year-olds need to go from &quot;what is an
            algorithm?&quot; to building a platformer game on their own.
          </p>

          <dl className="flex flex-wrap gap-x-10 gap-y-6 mt-10">
            {[
              [courseStats.totalSessions, "sessions"],
              [courseStats.minutesEach + " min", "each"],
              [courseStats.perWeek + "×", "per week"],
              [courseStats.weeks, "weeks"],
              [courseStats.projects, "projects"],
            ].map(([value, label]) => (
              <div key={String(label)}>
                <dt className="font-outfit font-extrabold text-3xl text-amber-400">
                  {value}
                </dt>
                <dd className="font-inter text-sm text-slate-400 uppercase tracking-wider mt-1">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      {/* The five stages */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <h2 className="font-outfit font-extrabold text-2xl text-slate-800 mb-6">
          Five stages
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stages.map((stage) => (
            <div
              key={stage.name}
              className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-900/5 flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: stage.color }}
                />
                <h3 className="font-outfit font-bold text-lg text-slate-800">
                  {stage.name}
                </h3>
              </div>
              <p className="font-fira text-xs text-slate-400 uppercase tracking-wider">
                {stage.range} · {stage.weeks}
              </p>
              <p className="font-inter text-base text-slate-600 leading-relaxed">
                {stage.summary}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Session by session, grouped by week */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <h2 className="font-outfit font-extrabold text-2xl text-slate-800 mb-8">
          Session by session
        </h2>

        <div className="flex flex-col gap-12">
          {weeks.map((week) => (
            <div key={week}>
              <div className="flex items-center gap-4 mb-5">
                <h3 className="font-outfit font-extrabold text-sm uppercase tracking-widest text-slate-400">
                  Week {week}
                </h3>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              <div className="flex flex-col gap-5">
                {curriculum
                  .filter((s) => s.week === week)
                  .map((session) => (
                    <SessionCard key={session.id} session={session} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
