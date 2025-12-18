"use client";

import { useEffect, useState } from "react";
import { useScroll, useSpring, motion, type Variants } from "framer-motion";
import GreetingScreen from "./components/GreetingScreen";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function Portfolio() {
  // Scroll progress bar at the top
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed left-0 top-0 z-50 h-0.5 origin-left bg-sky-400 md:h-1"
        style={{ scaleX }}
      />

      {/* Subtle animated background glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-40"
        animate={{ opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 12, repeat: Infinity }}
      >
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-500/25 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
      </motion.div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            {/* Animated avatar badge */}
            <motion.div
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-600 bg-gradient-to-br from-sky-400 to-slate-900 text-xs font-semibold tracking-[0.16em]"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              RJ
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                Raj Jaiswal
              </span>
              <span className="text-[0.68rem] text-slate-400">
                Software Developer
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-5 text-xs text-slate-400 md:flex">
            <a href="#about" className="transition-colors hover:text-slate-100">
              About
            </a>
            <a href="#skills" className="transition-colors hover:text-slate-100">
              Skills
            </a>
            <a
              href="#experience"
              className="transition-colors hover:text-slate-100"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="transition-colors hover:text-slate-100"
            >
              Projects
            </a>
            <a
              href="#education"
              className="transition-colors hover:text-slate-100"
            >
              Education
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-slate-100"
            >
              Contact
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 rounded-full border border-slate-600 px-3 py-1 text-[0.68rem] font-medium text-slate-100 transition-colors hover:border-sky-400 hover:text-sky-300"
            >
              <span>Let&apos;s talk</span>
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-12 pt-6 md:pt-10">
        {/* HERO */}
        <motion.section
          id="top"
          className="grid gap-6 md:grid-cols-[1.9fr,1.5fr] md:items-start"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Left side */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-slate-700/70 bg-gradient-to-b from-slate-900/70 to-slate-950/90 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.9)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,1)]"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-600/80 bg-slate-950/80 px-3 py-1 text-[0.7rem] text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              <span>Actively building &amp; shipping</span>
            </div>

            <h1 className="mb-1 text-3xl font-bold tracking-[0.18em] text-slate-50 md:text-[2.1rem]">
              RAJ&nbsp;JAISWAL
            </h1>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-sky-400">
              Software Developer
            </p>

            <p className="mb-4 text-sm leading-relaxed text-slate-300">
              Results-driven Software Developer with 2.6+ years of experience
              building scalable web and mobile applications. Experienced in
              PHP, Laravel, React.js, and AngularJS with a strong focus on
              performance optimization, API integration, and delivering
              user-centric solutions in Agile environments.
            </p>

            <div className="mb-4 flex flex-wrap gap-2 text-[0.7rem]">
              {[
                "2.6+ years experience",
                "30%+ faster load times",
                "50+ critical bugs resolved",
                "1,000+ active users",
              ].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-slate-600 bg-slate-950/70 px-3 py-1 text-slate-200"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <motion.a
                href="/raj-jaiswal-software-developer.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-emerald-400 px-4 py-2 text-xs font-semibold text-slate-950 shadow-lg shadow-sky-500/30"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>View Resume</span>
              </motion.a>
              <motion.a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-4 py-2 text-xs font-medium text-slate-100 transition-colors hover:border-sky-400 hover:text-sky-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>View Projects</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right side */}
          <motion.aside className="flex flex-col gap-3" variants={container}>
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-slate-700/60 bg-slate-950/90 p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/15"
            >
              <div className="mb-2 text-[0.7rem] uppercase tracking-[0.22em] text-slate-400">
                Tech Snapshot
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "PHP",
                  "Laravel",
                  "React.js",
                  "AngularJS",
                  "Python",
                  "Flask",
                  "MySQL",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-emerald-400/50 bg-emerald-400/10 px-3 py-1 text-[0.7rem] text-emerald-100 transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-slate-700/60 bg-slate-950/90 p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/15"
            >
              <div className="mb-2 text-[0.7rem] uppercase tracking-[0.22em] text-slate-400">
                Current Focus
              </div>
              <p className="text-[0.8rem] text-slate-300">
                • Building intelligent systems with Python, Flask &amp; ML
                <br />
                • Refactoring legacy code into maintainable, scalable modules
                <br />
                • Improving performance and developer experience
              </p>
            </motion.div>

            <motion.div
              id="contact"
              variants={fadeUp}
              className="rounded-2xl border border-slate-700/60 bg-slate-950/90 p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/15"
            >
              <div className="mb-2 text-[0.7rem] uppercase tracking-[0.22em] text-slate-400">
                Contact
              </div>
              <div className="flex flex-col gap-1 text-[0.8rem] text-slate-300">
                <span>📱 +91-8104918697</span>
                <span>
                  ✉️{" "}
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=rajjaiswal0902@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-400 hover:underline"
                  >
                    rajjaiswal0902@gmail.com
                  </a>

                </span>
                <span>
                  🔗{" "}
                  <a
                    href="https://www.linkedin.com/in/raj-jaiswall/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-400 hover:underline"
                  >
                    linkedin.com/in/raj-jaiswall
                  </a>
                </span>
              </div>
            </motion.div>
          </motion.aside>
        </motion.section>

        {/* ABOUT – now more content-heavy */}
        <motion.section
          id="about"
          className="mt-10"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="mb-3 text-xs uppercase tracking-[0.3em] text-slate-400">
            <span className="text-sky-400">01</span> · About
          </h2>
          <div className="rounded-2xl border border-slate-700/60 bg-slate-950/90 p-5 text-sm leading-relaxed text-slate-300">
            <p>
              I am a Software Developer with 2.6+ years of hands-on experience
              working across the stack — from PHP/Laravel backends to modern
              JavaScript frontends using React.js and AngularJS. I enjoy taking
              products from &quot;idea&quot; to &quot;in production&quot; and
              I&apos;m especially driven by performance, code quality, and
              creating experiences that feel fast and intuitive for users.
            </p>

            <p className="mt-3">
              Over the last few years, I&apos;ve worked on applications serving
              1,000+ active users, optimized slow and legacy codebases, and
              collaborated with designers, product owners, and QA teams in Agile
              environments. My work spans debugging production issues, building
              reusable UI components, designing REST APIs, and improving overall
              system reliability.
            </p>

            <div className="mt-5 grid gap-5 text-[0.82rem] md:grid-cols-3">
              <div>
                <div className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  What I Do
                </div>
                <ul className="space-y-1.5 text-slate-300/90">
                  <li>• Build performant, responsive web interfaces</li>
                  <li>• Design and consume RESTful APIs</li>
                  <li>• Refactor legacy code into clean modules</li>
                  <li>• Solve production bugs under real constraints</li>
                </ul>
              </div>

              <div>
                <div className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  How I Work
                </div>
                <ul className="space-y-1.5 text-slate-300/90">
                  <li>• Start with clarity on requirements &amp; edge cases</li>
                  <li>• Break features into small, shippable pieces</li>
                  <li>• Use Git, code reviews &amp; documentation</li>
                  <li>• Measure impact with metrics, not guesses</li>
                </ul>
              </div>

              <div>
                <div className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Impact &amp; Highlights
                </div>
                <ul className="space-y-1.5 text-slate-300/90">
                  <li>• Improved app performance by 30–40%</li>
                  <li>• Resolved 50+ critical production issues</li>
                  <li>• Helped maintain 99.5%+ uptime</li>
                  <li>• Contributed to both frontend &amp; backend features</li>
                </ul>
              </div>
            </div>

            <p className="mt-5 text-[0.82rem] text-slate-400">
              Outside of work, I actively explore Python, Flask, and Machine
              Learning — building small experiments and tools that automate
              workflows, analyse data, or make everyday tasks a little smarter.
            </p>
          </div>
        </motion.section>

        {/* SKILLS */}
        <motion.section
          id="skills"
          className="mt-10"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="mb-3 text-xs uppercase tracking-[0.3em] text-slate-400">
            <span className="text-sky-400">02</span> · Skills
          </h2>
          <div className="rounded-2xl border border-slate-700/60 bg-slate-950/90 p-5">
            <div className="grid gap-5 md:grid-cols-2">
              {/* Frontend */}
              <div>
                <div className="mb-1 text-xs font-semibold text-slate-200">
                  Frontend Development
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "HTML5",
                    "CSS3",
                    "JavaScript (ES6+)",
                    "React.js",
                    "AngularJS",
                    "Tailwind CSS",
                    "Bootstrap",
                    "ShadCN UI",
                  ].map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-slate-600 bg-slate-950/80 px-3 py-1 text-[0.7rem] text-slate-300 transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div>
                <div className="mb-1 text-xs font-semibold text-slate-200">
                  Backend Development
                </div>
                <div className="flex flex-wrap gap-2">
                  {["PHP", "Laravel Framework", "RESTful API Design"].map(
                    (s) => (
                      <span
                        key={s}
                        className="rounded-full border border-slate-600 bg-slate-950/80 px-3 py-1 text-[0.7rem] text-slate-300 transition-transform duration-200 hover:-translate-y-0.5"
                      >
                        {s}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* DB & APIs */}
              <div>
                <div className="mb-1 text-xs font-semibold text-slate-200">
                  Database &amp; APIs
                </div>
                <div className="flex flex-wrap gap-2">
                  {["MySQL", "API Integration", "PayPal", "Razorpay"].map(
                    (s) => (
                      <span
                        key={s}
                        className="rounded-full border border-slate-600 bg-slate-950/80 px-3 py-1 text-[0.7rem] text-slate-300 transition-transform duration-200 hover:-translate-y-0.5"
                      >
                        {s}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Tools */}
              <div>
                <div className="mb-1 text-xs font-semibold text-slate-200">
                  Tools &amp; Practices
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Git",
                    "GitHub",
                    "VS Code",
                    "Postman",
                    "Chrome DevTools",
                    "Responsive Design",
                    "Code Optimization",
                    "Unit Testing",
                  ].map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-slate-600 bg-slate-950/80 px-3 py-1 text-[0.7rem] text-slate-300 transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Methodologies */}
              <div>
                <div className="mb-1 text-xs font-semibold text-slate-200">
                  Methodologies
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Agile", "Scrum", "TDD"].map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-slate-600 bg-slate-950/80 px-3 py-1 text-[0.7rem] text-slate-300 transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* EXPERIENCE */}
        <motion.section
          id="experience"
          className="mt-10"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="mb-3 text-xs uppercase tracking-[0.3em] text-slate-400">
            <span className="text-sky-400">03</span> · Experience
          </h2>
          <div className="rounded-2xl border border-slate-700/60 bg-slate-950/90 p-5">
            <div className="relative border-l border-slate-700 pl-4">
              <motion.div
                className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.9)]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
              <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <div className="text-sm font-semibold text-slate-100">
                    Junior Software Developer
                  </div>
                  <div className="text-xs text-sky-400">TickleRight</div>
                </div>
                <div className="text-[0.75rem] italic text-slate-400">
                  June 2023 – Present
                </div>
              </div>
              <ul className="ml-1 mt-1 space-y-1 text-[0.8rem] text-slate-300">
                <li>
                  Optimized PHP and AngularJS components, improving application
                  performance by 30% and enhancing user experience for 1,000+
                  active users.
                </li>
                <li>
                  Refactored legacy JavaScript libraries, reducing frontend load
                  time by 40% and improving overall responsiveness.
                </li>
                <li>
                  Conducted comprehensive debugging and code reviews,
                  identifying and resolving 50+ critical bugs to ensure 99.5%
                  application uptime.
                </li>
                <li>
                  Developed responsive UI components using AngularJS and modern
                  CSS frameworks, ensuring seamless functionality across
                  desktop, tablet, and mobile devices.
                </li>
                <li>
                  Streamlined troubleshooting through improved logging and
                  debugging practices, reducing average issue resolution time by
                  30%.
                </li>
                <li>
                  Collaborated with cross-functional teams in Agile sprints,
                  consistently delivering features ahead of schedule.
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section
          id="projects"
          className="mt-10"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="mb-3 text-xs uppercase tracking-[0.3em] text-slate-400">
            <span className="text-sky-400">04</span> · Projects
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-slate-700/70 bg-gradient-to-b from-slate-900 to-slate-950 p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,1)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="mb-1 text-sm font-semibold text-slate-100">
                AI-Powered Healthcare Chatbot
              </div>
              <div className="mb-2 text-[0.75rem] text-sky-400">
                Python · Flask · TensorFlow/Keras · NLTK · SQLAlchemy · Deep
                Learning
              </div>
              <ul className="space-y-1 text-[0.8rem] text-slate-300">
                <li>
                  Engineered an intelligent healthcare chatbot for medical
                  information, symptom analysis, hospital lookups, and
                  medication details.
                </li>
                <li>
                  Built and trained a Sequential Neural Network (128–64 neurons)
                  achieving 90%+ intent classification accuracy across 30+
                  medical intents.
                </li>
                <li>
                  Implemented an NLP pipeline with NLTK (tokenization, WordNet
                  lemmatization) and bag-of-words for robust language
                  understanding.
                </li>
                <li>
                  Developed secure user authentication using Flask-Login,
                  SHA-256 password hashing, and session management.
                </li>
                <li>
                  Integrated SQLite with SQLAlchemy ORM for user data and
                  conversation history.
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-slate-700/70 bg-gradient-to-b from-slate-900 to-slate-950 p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,1)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="mb-1 text-sm font-semibold text-slate-100">
                Disease Prediction System
              </div>
              <div className="mb-2 text-[0.75rem] text-sky-400">
                Python · Machine Learning · Scikit-learn
              </div>
              <ul className="space-y-1 text-[0.8rem] text-slate-300">
                <li>
                  Built an ML-based disease prediction application achieving
                  ~85% accuracy for symptom-based diagnosis.
                </li>
                <li>
                  Implemented Random Forest and Decision Tree algorithms to
                  analyze medical data and predict potential conditions.
                </li>
                <li>
                  Designed an intuitive interface allowing users to input
                  symptoms and receive instant predictions.
                </li>
                <li>
                  Processed and cleaned a dataset of 10,000+ medical records for
                  training and validation.
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* EDUCATION */}
        <motion.section
          id="education"
          className="mt-10"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="mb-3 text-xs uppercase tracking-[0.3em] text-slate-400">
            <span className="text-sky-400">05</span> · Education
          </h2>
          <div className="rounded-2xl border border-slate-700/60 bg-slate-950/90 p-5">
            <div className="space-y-5">
              {/* PGDM – Welingkar */}
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <div className="text-sm font-semibold text-slate-100">
                    Post-Graduate Diploma in Management — (IT Projects Management)
                  </div>
                  <div className="text-xs text-sky-400">
                    Welingkar Institute of Management Development and Research
                  </div>
                  {/* If you ever need extra details, you can add another line here */}
                  {/* <div className="text-[0.8rem] text-slate-400">Some extra details</div> */}
                </div>
                <div className="text-[0.8rem] italic text-slate-400">
                  2023 – Present
                </div>
              </div>

              <div className="h-px bg-slate-800/70" />

              {/* BSc IT – S.I.W.S */}
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <div className="text-sm font-semibold text-slate-100">
                    Bachelor of Science in Information Technology
                  </div>
                  <div className="text-xs text-sky-400">
                    S.I.W.S College, Wadala, Mumbai
                  </div>
                  <div className="text-[0.8rem] text-slate-400">
                    University of Mumbai · CGPA: 7.60 / 10.0
                  </div>
                </div>
                <div className="text-[0.8rem] italic text-slate-400">
                  2020 – 2023
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

export default function Home() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (!entered) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [entered]);

  if (!entered) {
    return <GreetingScreen onEnter={() => setEntered(true)} />;
  }

  return <Portfolio />;
}
