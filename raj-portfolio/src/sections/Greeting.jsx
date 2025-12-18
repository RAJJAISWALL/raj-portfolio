import Section from "../components/Section";
import { motion } from "framer-motion";
import TextType from "../components/TextType";

export default function Greeting({ onEnter }) {
  const enterPortfolio = () => {
    if (typeof onEnter === "function") {
      onEnter();
      return;
    }

    window.scrollTo({
      left: window.innerWidth,
      behavior: "smooth",
    });
  };

  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center text-white max-w-3xl"
      >
        <p className="text-gray-400 text-lg mb-4">Hello, I'm</p>

        <h1 className="text-7xl font-extrabold mb-6">Raj Jaiswal</h1>

        <p className="text-gray-300 text-xl mb-10">
          <TextType
            texts={[
              "Software Developer",
              "Full Stack Engineer",
              "React • Tailwind • Vite",
            ]}
            className="font-medium"
            cursorClassName="ml-1 text-indigo-300"
          />
        </p>

        <button
          onClick={enterPortfolio}
          className="px-8 py-4 rounded-full text-lg bg-indigo-500 hover:bg-indigo-600 transition shadow-lg"
        >
          Enter Portfolio
        </button>
      </motion.div>
    </Section>
  );
}
