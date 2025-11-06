'use client';
import React, { useEffect, useRef } from "react";
// import Squares from "../customComponents/Squares";
// import SplashCursor from "../customComponents/SplashCursor";
// import DotGrid from "../customComponents/DotGrid";
// import Particles from "../customComponents/Particles";
// import Crosshair from "../customComponents/CrossHair";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
// import { duration } from "moment";

gsap.registerPlugin(TextPlugin);

const Home = () => {
  const textRef = useRef<HTMLSpanElement>(null);

   useEffect(() => {
    gsap.to(textRef.current, {
      duration: 2,
      text: "RAGUVANAN P",
      ease: "none",
    });
  }, []);

  
  return (
    <section className="main-container-wrapper h-[calc(100dvh-54px)]">
      {/* <Crosshair  color='#32FA01'/>  */}
      <div className="absolute inset-0">
        {/* <Particles
          particleColors={["#000", "#000"]}
          particleCount={300}
          particleSpread={10}
          speed={0.3}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        /> */}
        {/* <div className="w-full h-full bg-amber-200"></div> */}
        {/* <Squares
          speed={0.5}
          squareSize={40}
          direction="up" // up, down, left, right, diagonal
          borderColor="red"
          hoverFillColor="green"
        /> */}
        {/* <SplashCursor /> */}
      </div>
      <div className="main-container w-full h-full flex items-center justify-center relative z-1">
        <div className="w-full text-center">
          <h2 className="text-4xl font-bold text-txt-n tracking-wide pt-3 pb-2">
            I'm <span ref={textRef} className="text-primary"></span><span className="cursor"></span>
          </h2>
          <h5 className="role text-xl font-medium text-txt-n">Frontend Developer</h5>
          <p className="orle-desc text-center text-base leading-6 max-w-5xl mx-auto pt-3 pb-6 text-txt-l">
            Creative Frontend Developer passionate about crafting responsive,
            user-friendly web interfaces using React and modern JavaScript
            frameworks. I turn ideas into elegant, interactive experiences that
            perform beautifully across devices.
          </p>
          <button className="btn-layout text-base bg-[#03045E] text-white">
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
