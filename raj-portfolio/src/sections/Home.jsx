import Section from "../components/Section";
import GradientText from "../components/GradientText";

export default function Home() {
  return (
    <Section id="home">
      <div className="max-w-2xl">
        <GradientText text="Raj Jaiswal" />
        <p className="text-2xl text-gray-400 mt-6">
          Software Developer
        </p>
        <p className="text-gray-500 mt-2">
          Full Stack • PHP • Laravel • React • AngularJS
        </p>
      </div>
    </Section>
  );
}
