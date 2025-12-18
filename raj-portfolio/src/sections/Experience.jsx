import Section from "../components/Section";

export default function Experience() {
  return (
    <Section id="experience">
      <div className="text-white max-w-3xl">
        <h2 className="text-4xl mb-8">Experience</h2>

        <div className="space-y-4 text-gray-400">
          <p className="text-white font-semibold">
            Junior Software Developer — TickleRight
          </p>
          <p className="text-sm text-gray-500">
            June 2023 – Present
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>
              Improved application performance by 30% by optimizing PHP and
              AngularJS components.
            </li>
            <li>
              Reduced frontend load time by 40% through JavaScript refactoring.
            </li>
            <li>
              Resolved 50+ critical bugs, maintaining 99.5% application uptime.
            </li>
            <li>
              Built responsive UI components supporting 1,000+ active users.
            </li>
            <li>
              Worked in Agile sprints, consistently delivering ahead of
              deadlines.
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
