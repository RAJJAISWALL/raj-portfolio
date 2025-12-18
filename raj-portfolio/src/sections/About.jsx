import Section from "../components/Section";

export default function About() {
  return (
    <Section id="about">
      <div className="max-w-3xl text-white">
        <h2 className="text-4xl font-semibold mb-6">About Me</h2>

        <p className="text-gray-400 leading-relaxed">
          Results-driven Software Developer with 2.6+ years of experience
          building scalable web applications and performance-focused systems.
          I specialize in full-stack development using PHP, Laravel, React.js,
          and AngularJS, with a strong focus on clean architecture, API
          integrations, and maintainable code.
        </p>

        <p className="text-gray-400 leading-relaxed mt-4">
          I’ve optimized production applications to reduce load times by up to
          40%, improved uptime to 99.5%, and collaborated closely with
          cross-functional teams in Agile environments to deliver features
          consistently ahead of schedule.
        </p>
      </div>
    </Section>
  );
}
