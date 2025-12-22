import Section from "../components/Section";

export default function Contact() {
  return (
    <Section id="contact">
      <div className="text-white text-center">
        <h2 className="text-4xl mb-6">Get In Touch</h2>
        <div className="text-gray-300 leading-relaxed space-y-3">
          <a
            href="mailto:rajjaiswal0902@gmail.com"
            className="block text-indigo-300 hover:text-indigo-200 underline"
          >
            rajjaiswal0902@gmail.com
          </a>

         

          <a
            href="https://www.linkedin.com/in/raj-jaiswall/"
            className="block text-indigo-300 hover:text-indigo-200 underline"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/raj-jaiswall
          </a>

          <a
            href="https://github.com/RAJJAISWALL"
            className="block text-indigo-300 hover:text-indigo-200 underline"
            target="_blank"
            rel="noreferrer"
          >
            github.com/RAJJAISWALL
          </a>
        </div>
      </div>
    </Section>
  );
}
