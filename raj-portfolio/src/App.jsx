import { useEffect, useLayoutEffect, useState } from "react";
import Navbar from "./components/Navbar";

import Greeting from "./sections/Greeting";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

export default function App() {
  const [entered, setEntered] = useState(false);

  useLayoutEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const resetScroll = () => {
      window.scrollTo({ left: 0, top: 0, behavior: "auto" });
      document.documentElement.scrollLeft = 0;
      document.body.scrollLeft = 0;
    };

    resetScroll();
    const raf1 = requestAnimationFrame(resetScroll);
    const raf2 = requestAnimationFrame(resetScroll);

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "auto";
      }
    };
  }, []);

  useEffect(() => {
    if (!entered) return;

    const onWheel = (e) => {
      e.preventDefault();
      window.scrollBy({
        left: e.deltaY,
        behavior: "smooth",
      });
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [entered]);

  if (!entered) {
    return (
      <Greeting
        onEnter={() => {
          setEntered(true);
          requestAnimationFrame(() => {
            window.scrollTo({ left: 0, top: 0, behavior: "auto" });
          });
        }}
      />
    );
  }

  return (
    <>
      <Navbar />
      <div className="flex w-[600vw] h-screen">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </>
  );
}
