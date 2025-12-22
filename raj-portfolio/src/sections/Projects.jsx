import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github } from "lucide-react";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "AI-Powered Healthcare Chatbot",
    desc:
      "Full-stack healthcare chatbot with secure auth, session history, and safety-guarded AI responses.",
    stack: "Python | Flask | SQLAlchemy | LLMs | HTML/CSS",
    codeUrl: "https://github.com/RAJJAISWALL/AI-Chatbot-For-Healthcare",
    impact: [
      "Designed secure login, session management, and per-user chat history.",
      "Integrated LLMs with safety rules (no diagnosis or prescriptions).",
      "Built responsive AJAX-based chat UI with avatars and timestamps.",
    ],
    highlights: [
      "Clean MVC architecture using Flask Blueprints.",
      "SQLAlchemy ORM for scalable relational data models.",
      "Environment-based config for API keys and secrets.",
    ],
  },
  {
    title: "Full-Stack Admin Dashboard",
    desc:
      "Role-based admin dashboard with authentication, analytics, and modern UI components.",
    stack: "Next.js | TypeScript | Tailwind | shadcn/ui | TanStack | NextAuth",
    // codeUrl: "https://github.com/RAJJAISWALL/admin-dashboard",
    impact: [
      "Implemented role-based access control with protected routes.",
      "Built data-heavy dashboards with charts, tables, and exports.",
      "Achieved 90%+ test coverage using Vitest and Playwright.",
    ],
    highlights: [
      "Dark-mode design tokens and reusable UI components.",
      "Drag-and-drop Kanban using Zustand and dnd-kit.",
      "Optimized data fetching with TanStack Query.",
    ],
  },
  {
    title: "Disease Prediction System",
    desc:
      "Machine-learning based disease prediction system using structured medical datasets.",
    stack: "Python | Scikit-learn | Machine Learning",
    // codeUrl: "https://github.com/RAJJAISWALL/disease-prediction",
    impact: [
      "Trained Random Forest models achieving ~85% prediction accuracy.",
      "Processed and cleaned 10,000+ medical records.",
      "Built UI for symptom input and instant predictions.",
    ],
    highlights: [
      "Feature engineering and cross-validation pipeline.",
      "Compared Decision Tree vs Random Forest performance.",
    ],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const scrollYRef = useRef(0);

  useEffect(() => {
    const body = document.body;

    if (selected) {
      scrollYRef.current = window.scrollY;
      body.style.position = "fixed";
      body.style.top = `-${scrollYRef.current}px`;
      body.style.width = "100%";
      body.style.overflow = "hidden";
    } else {
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      body.style.overflow = "";
      window.scrollTo(0, scrollYRef.current);
    }

    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      body.style.overflow = "";
    };
  }, [selected]);

  const closeModal = () => setSelected(null);

  return (
    <Section id="projects">
      <div className="text-white max-w-6xl">
        <h2 className="text-4xl mb-10">Key Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} onClick={() => setSelected(p)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-xl w-full bg-slate-900 border border-white/10 rounded-2xl p-8 shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition"
                aria-label="Close"
              >
                ×
              </button>

              <h3 className="text-2xl font-semibold text-white mb-2">
                {selected.title}
              </h3>

              <p className="text-slate-300 mb-4">{selected.desc}</p>

              <p className="text-indigo-400 text-sm mb-6">{selected.stack}</p>

              <div className="space-y-5">
                {selected.impact ? (
                  <div>
                    <h4 className="text-sm uppercase tracking-wide text-slate-400 mb-2">
                      Impact & Contributions
                    </h4>
                    <ul className="space-y-2 text-slate-200">
                      {selected.impact.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="text-indigo-400">-</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {selected.highlights ? (
                  <div>
                    <h4 className="text-sm uppercase tracking-wide text-slate-400 mb-2">
                      Technical Highlights
                    </h4>
                    <ul className="space-y-2 text-slate-200">
                      {selected.highlights.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="text-indigo-400">-</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {selected.codeUrl ? (
                  <div className="pt-2 flex justify-end">
                    <a
                      href={selected.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-400/30 hover:bg-indigo-500/20 hover:text-indigo-300 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                    >
                      <Github size={18} />
                      View Code
                    </a>
                  </div>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Section>
  );
}
