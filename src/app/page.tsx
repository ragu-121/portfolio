"use client";
import Squares from "./customComponents/Squares";
import Contact from "./pageComponents/Contact";
import Home from "./pageComponents/Home";
import Projects from "./pageComponents/Projects";
import Skills from "./pageComponents/Skills";

export default function Main() {
  return (
    <div>
      {/* <div className="h-[100dvh] w-full">
        <Squares
          speed={0.5}
          squareSize={32}
          direction="up" // up, down, left, right, diagonal
          borderColor="#4c4c4c"
          hoverFillColor="#32FA01"
        />
      </div> */}
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
