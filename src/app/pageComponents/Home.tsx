import React from "react";
import Squares from "../customComponents/Squares";

const Home = () => {
  return (
    <section className="main-container-wrapper h-[calc(100dvh-54px)]">
      {/* <div className="absolute inset-0 z-10">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="up" // up, down, left, right, diagonal
          borderColor="red"
          hoverFillColor="green"
        />
      </div> */}
      <div className="main-container w-full h-full">
        <div className="w-full text-center">
          <h2 className="text-4xl font-bold text-txt-n tracking-wide pt-3 pb-2">
            I'm <span className="text-primary">RAGUVANAN P</span>
          </h2>
          <h5 className="text-xl font-medium text-txt-n">Frontend Developer</h5>
          <p className="text-center text-base leading-6 max-w-5xl mx-auto pt-3 pb-2 text-txt-l">
            Creative Frontend Developer passionate about crafting responsive,
            user-friendly web interfaces using React and modern JavaScript
            frameworks. I turn ideas into elegant, interactive experiences that
            perform beautifully across devices.
          </p>
          <button className="btn-layout text-base bg-primary">
            Contact Me
          </button>
          <button className="btn-layout ml-6 text-base bg-primary">
            Download
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
