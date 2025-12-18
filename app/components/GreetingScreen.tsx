"use client";

import { motion } from "framer-motion";
import TextType from "./TextType";

type GreetingScreenProps = {
  onEnter: () => void;
};

export default function GreetingScreen({ onEnter }: GreetingScreenProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <motion.div
        className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-4"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full max-w-2xl rounded-3xl border border-slate-800 bg-slate-950/60 p-8 text-center shadow-[0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-slate-400">
            Hello, I&apos;m
          </p>
          <h1 className="mt-3 text-5xl font-extrabold tracking-tight sm:text-6xl">
            Raj Jaiswal
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            <TextType
              texts={[
                "Software Developer",
                "Full Stack Engineer",
                "React • Next.js • Tailwind",
              ]}
              className="font-medium"
              cursorClassName="ml-1 text-sky-300"
            />
          </p>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={onEnter}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Enter Portfolio
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

