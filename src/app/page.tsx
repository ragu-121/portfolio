"use client";
import Squares from "./customComponents/Squares";
import Contact from "./pageComponents/Contact";
import Home from "./pageComponents/Home";
import Projects from "./pageComponents/Projects";
import Skills from "./pageComponents/Skills";

export default function Main() {
  return (
    <>
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
