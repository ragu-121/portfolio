'use client';
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Main() {
  return (
    <div>
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
