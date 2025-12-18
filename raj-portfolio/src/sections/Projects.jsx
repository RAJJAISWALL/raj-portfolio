import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "AI-Powered Healthcare Chatbot",
    desc: "Secure chatbot with LLM integration and healthcare safety rules.",
    stack: "Python • Flask • SQLAlchemy • LLMs",
  },
  {
    title: "Full-Stack Admin Dashboard",
    desc: "Role-based admin system with dashboards and testing.",
    stack: "Next.js • TypeScript • Tailwind • shadcn/ui",
  },
  {
    title: "Disease Prediction System",
    desc: "ML-based disease prediction with 85% accuracy.",
    stack: "Python • Scikit-learn • ML",
  },
];

export default function Projects() {
  return (
    <Section id="projects">
      <div className="text-white max-w-6xl">
        <h2 className="text-4xl mb-10">Key Projects</h2>

        <div className="grid grid-cols-3 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </Section>
  );
}
