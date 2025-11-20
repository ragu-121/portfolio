"use client";
import React, { useEffect, useRef, useState } from "react";
// import Squares from "../customComponents/Squares";
// import SplashCursor from "../customComponents/SplashCursor";
// import DotGrid from "../customComponents/DotGrid";
// import Particles from "../customComponents/Particles";
// import Crosshair from "../customComponents/CrossHair";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import SplashCursor from "../customComponents/SplashCursor";
// import { duration } from "moment";
import Image from "next/image";
import Link from "next/link";
import ParticleTriangle from "../customComponents/ParticleTriangle";

gsap.registerPlugin(TextPlugin);

const Home = () => {
  // const [windowWidth,setWindowWidth] = useState(window.innerWidth);
  const textRef = useRef<HTMLSpanElement>(null);
  const timeline = gsap.timeline();

  useGSAP(() => {
    timeline.to(textRef.current, {
      duration: 2,
      text: "RAGUVANAN P",
      ease: "none",
    });
    timeline.from(".role", {
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
    });
    timeline.from(".jobdesc", {
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
    });
    timeline.from(".homebtns", {
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
    });
  }, []);

  // useEffect(()=>{
  //   function handleResize(){
  //     setWindowWidth(window.innerWidth)
  //   }
  //   window.addEventListener('resize',handleResize)

  //   return ()=>{window.removeEventListener('resize',handleResize)}
  // },[])

  function handleDownload() {
    const link = document.createElement("a");
    link.href = "/files/Raguvanan_Resume_2025.pdf";
    link.download = "Resume.pdf";
    link.click();
  }

  return (
    <>
      {/* <div className="h-screen bg-amber-900"> */}
        <ParticleTriangle />
      {/* </div> */}
      <section className="main-container-wrapper h-[calc(100dvh-54px)] overflow-hidden">
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
          {/* {
          windowWidth > 1024 &&  <SplashCursor />
        } */}

          {/* <video autoPlay muted>
          <source src="videos/pattern1.mp4" type="video/mp4" />
          video is not supported
        </video> */}
          {/* <Image src={'/homebg1.jpg'} alt="mainbg" fill/> */}
        </div>
        <div className="main-container w-full h-full flex items-center justify-center relative z-1">
          <div className="w-full text-center">
            <h2 className="text-3xl font-bold text-txt-n tracking-wide pt-3 pb-2 md:text-4xl">
              I'm <span ref={textRef} className="text-primary"></span>
              <span className="cursor"></span>
            </h2>
            <h5 className="role text-xl font-medium text-txt-n">
              Frontend Developer
            </h5>
            <p className="jobdesc text-center text-base leading-6 max-w-5xl mx-auto pt-3 pb-6 text-txt-l">
              Creative Frontend Developer passionate about crafting responsive,
              user-friendly web interfaces using React and modern JavaScript
              frameworks. I turn ideas into elegant, interactive experiences
              that perform beautifully across devices.
            </p>
            <button className="homebtns btn-layout text-base bg-[#03045E] text-white">
              Contact Me
            </button>
            <button
              className="homebtns btn-layout ml-6 text-base bg-primary"
              onClick={handleDownload}
            >
              Download Resume
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
