import Section from "../components/Section";
import { motion, useReducedMotion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function About() {
  const reduce = useReducedMotion();

  return (
    <Section id="about">
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          animate="show"
          className="max-w-3xl space-y-4"
        >
          <motion.h2
            variants={item}
            className="text-3xl font-semibold tracking-tight text-white md:text-4xl"
          >
           About Me
          </motion.h2>
          

          <motion.p variants={item} className="text-gray-400 leading-relaxed">
            Results-driven Software Developer with 2.6+ years of experience
            building scalable web applications and performance-focused systems.
            I specialize in full-stack development using PHP, Laravel, React.js,
            and AngularJS, with a strong focus on clean architecture, API
            integrations, and maintainable code.
          </motion.p>

          <motion.p variants={item} className="text-gray-400 leading-relaxed">
            I’ve optimized production applications to reduce load times by up to
            40%, improved uptime to 99.5%, and collaborated closely with
            cross-functional teams in Agile environments to deliver features
            consistently ahead of schedule.
          </motion.p>
        </motion.div>
      </div>
    </Section>
  );
}
