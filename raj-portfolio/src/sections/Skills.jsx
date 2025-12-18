import Section from "../components/Section";
import SkillPill from "../components/SkillPill";

const skills = [
  "PHP", "Laravel", "React.js", "Next.js",
  "AngularJS", "JavaScript", "TypeScript",
  "Tailwind CSS", "MySQL", "REST APIs",
  "Git", "Agile / Scrum"
];

export default function Skills() {
  return (
    <Section id="skills">
      <div className="text-white max-w-4xl">
        <h2 className="text-4xl mb-8">Technical Skills</h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <SkillPill key={skill} label={skill} />
          ))}
        </div>
      </div>
    </Section>
  );
}
