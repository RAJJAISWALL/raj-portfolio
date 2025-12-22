import { motion, useReducedMotion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Greeting() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden bg-grid">
      <div className="pointer-events-none absolute inset-0">
        <div
          className={[
            "absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl",
            "bg-gradient-to-tr from-[rgb(var(--a1))]/30 via-[rgb(var(--a2))]/20 to-transparent",
            reduce ? "" : "animate-gradient-slow",
          ].join(" ")}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          animate="show"
          className="max-w-3xl"
        >
          <motion.p variants={item} className="text-sm text-white/70">
            Software Developer 
          </motion.p>

          <motion.h1 variants={item} className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Raj Jaiswal
          </motion.h1>

          <motion.p variants={item} className="mt-5 text-base leading-7 text-white/70 md:text-lg">
              building scalable web apps with AngularJS, React/Next.js, and PHP/Laravel.
            Focused on performance, maintainable UI architecture, and production reliability.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
