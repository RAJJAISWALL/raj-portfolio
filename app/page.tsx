"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};


const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-600 bg-gradient-to-br from-sky-400 to-slate-900 text-xs font-semibold tracking-[0.16em]">
              RJ
            </div>
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
            <a href="#about" className="hover:text-slate-100">
              About
            </a>
            <a href="#skills" className="hover:text-slate-100">
              Skills
            </a>
            <a href="#experience" className="hover:text-slate-100">
              Experience
            </a>
            <a href="#projects" className="hover:text-slate-100">
              Projects
            </a>
            <a href="#education" className="hover:text-slate-100">
              Education
            </a>
            <a href="#contact" className="hover:text-slate-100">
              Contact
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 rounded-full border border-slate-600 px-3 py-1 text-[0.68rem] font-medium text-slate-100 hover:border-sky-400 hover:text-sky-300"
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
            className="rounded-2xl border border-slate-700/70 bg-gradient-to-b from-slate-900/70 to-slate-950/90 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.9)]"
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
              <span className="rounded-full border border-slate-600 bg-slate-950/70 px-3 py-1 text-slate-200">
                2.6+ years experience
              </span>
              <span className="rounded-full border border-slate-600 bg-slate-950/70 px-3 py-1 text-slate-200">
                30%+ faster load times
              </span>
              <span className="rounded-full border border-slate-600 bg-slate-950/70 px-3 py-1 text-slate-200">
                50+ critical bugs resolved
              </span>
              <span className="rounded-full border border-slate-600 bg-slate-950/70 px-3 py-1 text-slate-200">
                1,000+ active users
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              {/* Update href to your actual resume path or a public URL */}
              <a
                href="/Raj%20Jaiswal%20-%20Software%20Developer.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-emerald-400 px-4 py-2 text-xs font-semibold text-slate-950 shadow-lg shadow-sky-500/30 hover:brightness-105"
              >
                <span>Download Resume</span>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-4 py-2 text-xs font-medium text-slate-100 hover:border-sky-400 hover:text-sky-300"
              >
                <span>View Projects</span>
              </a>
            </div>
          </motion.div>

          {/* Right side */}
          <motion.aside
            className="flex flex-col gap-3"
            variants={container}
          >
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-slate-700/60 bg-slate-950/90 p-4"
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
                    className="rounded-full border border-emerald-400/50 bg-emerald-400/10 px-3 py-1 text-[0.7rem] text-emerald-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-slate-700/60 bg-slate-950/90 p-4"
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
              variants={fadeUp}
              className="rounded-2xl border border-slate-700/60 bg-slate-950/90 p-4"
            >
              <div className="mb-2 text-[0.7rem] uppercase tracking-[0.22em] text-slate-400">
                Contact
              </div>
              <div className="flex flex-col gap-1 text-[0.8rem] text-slate-300">
                <span>📱 +91-8104918697</span>
                <span>
                  ✉️{" "}
                  <a
                    href="mailto:rajjaiswal0902@gmail.com"
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

        {/* ABOUT */}
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
          <div className="rounded-2xl border border-slate-700/60 bg-slate-950/90 p-5 text-sm text-slate-300 leading-relaxed">
            I am a Software Developer with 2.6+ years of experience working
            across the stack — from PHP/Laravel backends to modern JavaScript
            frontends using React.js and AngularJS. I enjoy turning complex
            requirements into clean, efficient, and maintainable code while
            always keeping performance and user experience in mind. I&apos;ve
            improved load times, reduced critical bugs in production, and
            collaborated closely with cross-functional teams in Agile
            environments to deliver features reliably.
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
                      className="rounded-full border border-slate-600 bg-slate-950/80 px-3 py-1 text-[0.7rem] text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-1 text-xs font-semibold text-slate-200">
                  Backend Development
                </div>
                <div className="flex flex-wrap gap-2">
                  {["PHP", "Laravel Framework", "RESTful API Design"].map(
                    (s) => (
                      <span
                        key={s}
                        className="rounded-full border border-slate-600 bg-slate-950/80 px-3 py-1 text-[0.7rem] text-slate-300"
                      >
                        {s}
                      </span>
                    )
                  )}
                </div>
              </div>
              <div>
                <div className="mb-1 text-xs font-semibold text-slate-200">
                  Database &amp; APIs
                </div>
                <div className="flex flex-wrap gap-2">
                  {["MySQL", "API Integration", "PayPal", "Razorpay"].map(
                    (s) => (
                      <span
                        key={s}
                        className="rounded-full border border-slate-600 bg-slate-950/80 px-3 py-1 text-[0.7rem] text-slate-300"
                      >
                        {s}
                      </span>
                    )
                  )}
                </div>
              </div>
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
                      className="rounded-full border border-slate-600 bg-slate-950/80 px-3 py-1 text-[0.7rem] text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-1 text-xs font-semibold text-slate-200">
                  Methodologies
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Agile", "Scrum", "TDD"].map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-slate-600 bg-slate-950/80 px-3 py-1 text-[0.7rem] text-slate-300"
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
              <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.9)]" />
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
            <div className="rounded-2xl border border-slate-700/70 bg-gradient-to-b from-slate-900 to-slate-950 p-4">
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
            </div>

            <div className="rounded-2xl border border-slate-700/70 bg-gradient-to-b from-slate-900 to-slate-950 p-4">
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
            </div>
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
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <div className="text-sm font-semibold text-slate-100">
                  Bachelor of Science in Information Technology
                </div>
                <div className="text-xs text-sky-400">
                  S.I.W.S College, Wadala, Mumbai · University of Mumbai
                </div>
                <div className="text-[0.75rem] text-slate-400">
                  CGPA: 7.60 / 10.0
                </div>
              </div>
              <div className="text-[0.75rem] text-slate-400">2020 – 2023</div>
            </div>
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section
          id="contact"
          className="mt-10"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="mb-3 text-xs uppercase tracking-[0.3em] text-slate-400">
            <span className="text-sky-400">06</span> · Contact
          </h2>
          <div className="rounded-2xl border border-slate-700/60 bg-slate-950/90 p-5 text-[0.85rem] text-slate-300">
            <div className="flex flex-wrap gap-2">
              <span>
                📱 <strong>Phone:</strong> +91-8104918697
              </span>
              <span className="text-slate-600">·</span>
              <span>
                ✉️ <strong>Email:</strong>{" "}
                <a
                  href="mailto:rajjaiswal0902@gmail.com"
                  className="text-sky-400 hover:underline"
                >
                  rajjaiswal0902@gmail.com
                </a>
              </span>
              <span className="text-slate-600">·</span>
              <span>
                🔗 <strong>LinkedIn:</strong>{" "}
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
          </div>
        </motion.section>

        <footer className="mt-6 border-t border-slate-800 pt-3 text-center text-[0.7rem] text-slate-500">
          © {new Date().getFullYear()} · Built by Raj Jaiswal · Software
          Developer
        </footer>
      </main>
    </div>
  );
}
