import { motion } from "framer-motion";

export default function Section({ id, children }) {
  return (
    <motion.section
      id={id}
      className="w-screen h-screen flex items-center justify-center px-20"
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  );
}
