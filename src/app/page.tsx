import Link from "next/link";
import { session1 } from "@/data/session1";
import { session2 } from "@/data/session2";
import { session3 } from "@/data/session3";
import { session4 } from "@/data/session4";
import { session5 } from "@/data/session5";
import { session6 } from "@/data/session6";
import { session7 } from "@/data/session7";
import { session8 } from "@/data/session8";
import { session9 } from "@/data/session9";
import { session10 } from "@/data/session10";

export default function Home() {
  const sessions = [session1, session2, session3, session4, session5, session6, session7, session8, session9, session10];

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-16">
          <h1 className="font-outfit font-extrabold text-5xl md:text-7xl text-slate-800 mb-6 tracking-tight">
            Algorithm Adventure! <span className="inline-block animate-bounce-soft">🚀</span>
          </h1>
          <p className="font-inter text-2xl text-slate-600 max-w-2xl mx-auto">
            Welcome to the interactive coding class. Select a session below to begin your journey.
          </p>

          <Link
            href="/curriculum"
            className="inline-flex items-center gap-2 mt-8 font-outfit font-bold text-lg text-slate-50 bg-slate-900 hover:bg-slate-700 transition-colors rounded-full px-7 py-3.5"
          >
            📋 See the full 18-session plan
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {sessions.map((session) => (
            <Link
              href={`/session/${session.slug ?? session.id}?slide=1`}
              key={session.slug ?? session.id}
              className="group block relative rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-slate-100"
            >
              <div 
                className="absolute top-0 left-0 w-full h-3" 
                style={{ backgroundColor: session.color }}
              />
              <div className="p-8 pt-10">
                <div className="flex justify-between items-start mb-6">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl shadow-md"
                    style={{ backgroundColor: `${session.color}20` }}
                  >
                    {session.emoji}
                  </div>
                  <span className="font-fira text-sm font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                    {session.slides.length} slides
                  </span>
                </div>
                
                <div className="mb-2">
                  <span className="font-outfit font-bold text-sm tracking-widest uppercase" style={{ color: session.color }}>
                    {session.slug ? "Session 8 Practical" : `Session ${session.id}`}
                  </span>
                </div>
                
                <h2 className="font-outfit font-bold text-3xl text-slate-800 mb-3">
                  {session.title}
                </h2>
                
                <p className="font-inter text-slate-600 mb-6">
                  {session.description}
                </p>
                
                <div className="flex items-center text-slate-800 font-bold font-outfit group-hover:text-primary transition-colors">
                  Start Learning <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
