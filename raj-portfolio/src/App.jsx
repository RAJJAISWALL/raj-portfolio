import { useEffect } from "react";
import Navbar from "./components/Navbar";

import Greeting from "./sections/Greeting";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="app-bg">
      <Navbar />
      <main className="flex flex-col">
        <Greeting />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

