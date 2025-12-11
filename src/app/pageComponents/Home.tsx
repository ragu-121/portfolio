"use client";
import React, { useEffect, useRef, useState } from "react";
// import Squares from "../customComponents/Squares";
// import SplashCursor from "../customComponents/SplashCursor";
// import DotGrid from "../customComponents/DotGrid";
// import Particles from "../customComponents/Particles";
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
  const dotRef = useRef<HTMLDivElement>(null);
  const timeline = gsap.timeline();

  useGSAP(() => {
    const dot = dotRef.current;
    gsap.fromTo(
      dot,
      { scale: 0.1 },
      {
        scale: 20, // makes dot fill whole screen
        ease: "power2.out",
        scrollTrigger: {
          trigger: dot,
          start: "top center",
          end: "bottom top",
          scrub: true, // scroll-based animation
        },
      }
    );
    // timeline.to(textRef.current, {
    //   duration: 2,
    //   text: "RAGUVANAN P",
    //   ease: "none",
    // });
    timeline.from(".nametag", {
      opacity: 0,
      duration: 0.5,
      // x:-50,
      ease: "power2.inOut",
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
      {/* <ParticleTriangle /> */}
      <section className="main-container-wrapper h-[calc(100dvh-54px)] overflow-hidden">
        <div className="absolute inset-0">
          {/* <div className="w-full h-full bg-amber-200"></div> */}

          {/* {
          windowWidth > 1024 &&  <SplashCursor />
        } */}

          {/* <video autoPlay muted>
          <source src="videos/pattern1.mp4" type="video/mp4" />
          video is not supported
        </video> */}
          {/* <Image src={'/bgimagethree.jpg'} alt="mainbg" fill/> */}
        </div>
        <div className="main-container w-full h-full flex items-center justify-center relative z-1">
          <div className="w-full text-center">
            <h2 className="nametag text-3xl font-bold text-txt-n tracking-wide pt-3 pb-2 md:text-4xl">
              I'm <span className="">RAGUVANAN P</span>
              {/* focus-in-expand */}
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
              className="homebtns btn-layout ml-6 text-base bg-[#ffd700] hover:bg-yellow-500"
              onClick={handleDownload}
            >
              Download Resume
            </button>
          </div>
          {/* <div
        ref={dotRef}
        style={{
          width: "20px",
          height: "20px",
          margin:'0 auto',
          background: "#03045E",
          borderRadius: "50%",
        }}
      ></div> */}
        </div>
      </section>
    </>
  );
};

export default Home;
