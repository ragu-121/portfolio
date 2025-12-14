"use client";
import React, { useEffect, useRef, useState } from "react";
// import Squares from "../customComponents/Squares";
// import SplashCursor from "../customComponents/SplashCursor";
// import DotGrid from "../customComponents/DotGrid";
// import Particles from "../customComponents/Particles";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import ParticleTriangle from "../customComponents/ParticleTriangle";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Download } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const dotRef = useRef<HTMLDivElement>(null);

  // useGSAP(() => {
  //   const dot = dotRef.current;
  //   gsap.fromTo(
  //     dot,
  //     { scale: 0.1 },
  //     {
  //       scale: 20, // makes dot fill whole screen
  //       ease: "power2.out",
  //       scrollTrigger: {
  //         trigger: dot,
  //         start: "top center",
  //         end: "bottom top",
  //         scrub: true, // scroll-based animation
  //       },
  //     }
  //   );
  //   timeline.from(".nametag", {
  //     opacity: 0,
  //     duration: 0.5,
  //     // x:-50,
  //     ease: "power2.inOut",
  //   });
  //   timeline.from(".role", {
  //     opacity: 0,
  //     duration: 0.3,
  //     ease: "power2.inOut",
  //   });
  //   timeline.from(".jobdesc", {
  //     opacity: 0,
  //     duration: 0.3,
  //     ease: "power2.inOut",
  //   });
  //   timeline.from(".homebtns", {
  //     opacity: 0,
  //     duration: 0.3,
  //     ease: "power2.inOut",
  //   });
  // }, []);

  // useEffect(()=>{
  //   function handleResize(){
  //     setWindowWidth(window.innerWidth)
  //   }
  //   window.addEventListener('resize',handleResize)

  //   return ()=>{window.removeEventListener('resize',handleResize)}
  // },[])

  useEffect(() => {
    const sections: HTMLElement[] = gsap.utils.toArray("section");

    sections.forEach((section) => {
      const elements = section.querySelectorAll(".fadeIn, .slide");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",     // when section enters
          end: "bottom 20%",    // when it leaves
          toggleActions: "play none none reverse",
        },
      });

      tl.from(elements, {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 0.5,
        ease: "power3.out",
        clearProps: "all"
      });
    });
  }, []);


  function handleDownload() {
    const link = document.createElement("a");
    link.href = "/files/Raguvanan_Resume_2025.pdf";
    link.download = "Resume.pdf";
    link.click();
  }

  return (
    <>
      {/* <ParticleTriangle /> */}
      <section id="Home" className="main-container-wrapper bg-[#EEEEEC] rounded-b-[54px] h-[calc(100dvh-54px)] overflow-hidden">
        {/* <div className="absolute inset-0">

        </div> */}
        <div className="main-container w-full h-full flex items-center justify-center relative z-1">
          <div className="w-full text-center">
            <h2 className="fadeIn text-3xl font-bold text-txt-n tracking-wide pt-3 pb-2 md:text-4xl">
              <span className="font-normal">I'm</span> <span className="">RAGUVANAN P</span>
            </h2>
            <h5 className="fadeIn text-xl font-medium text-txt-n">
              Frontend Developer
            </h5>
            <p className="fadeIn text-center text-base leading-6 max-w-5xl mx-auto pt-3 pb-6 text-txt-l">
              Creative Frontend Developer passionate about crafting responsive,
              user-friendly web interfaces using React and modern JavaScript
              frameworks. I turn ideas into elegant, interactive experiences
              that perform beautifully across devices.
            </p>

            <div className="flex items-center gap-4 justify-center">
              <button className="fadeIn btn-layout text-base bg-primary text-white hover:shadow-md">
                Contact Me
              </button>
              <button
                className="fadeIn btn-layout text-base transition-all duration-300 bg-white"
                onClick={handleDownload}
              > 
                Download Resume<Download size={16} className="transition-all duration-150 ease-out" />
              </button>
            </div>

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
