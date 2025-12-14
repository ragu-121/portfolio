"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Code2,
  Palette,
  Database,
  Cloud,
  Smartphone,
  Globe,
  Layers,
  FileCode,
  Server,
  Layout,
  Workflow,
  Zap,
  GitBranch,
  Box,
  Terminal,
  Figma,
  Cpu,
  Shield,
  Search,
  Gauge,
  Users,
  BookOpen,
  Sparkles,
  Settings,
  Blocks,
  Braces,
  FileJson,
  Component,
  Boxes,
  PackageSearch,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    {
      name: "React",
      icon: Component,
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "Next.js",
      icon: Layers,
      color: "from-gray-700 to-gray-900",
    },
    {
      name: "TypeScript",
      icon: FileCode,
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "JavaScript",
      icon: Braces,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      name: "Node.js",
      icon: Server,
      color: "from-green-600 to-green-800",
    },
    {
      name: "Python",
      icon: Terminal,
      color: "from-blue-500 to-yellow-500",
    },
    {
      name: "HTML5",
      icon: Code2,
      color: "from-orange-500 to-red-600",
    },
    {
      name: "CSS3",
      icon: Palette,
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Tailwind CSS",
      icon: Sparkles,
      color: "from-teal-400 to-cyan-500",
    },
    // {
    //   name: "React Native",
    //   icon: Smartphone,
    //   color: "from-cyan-600 to-blue-700",
    // },
    // {
    //   name: "Vue.js",
    //   icon: Boxes,
    //   color: "from-emerald-500 to-green-600",
    // },
    // {
    //   name: "Angular",
    //   icon: Box,
    //   color: "from-red-600 to-red-800",
    // },
    {
      name: "Express.js",
      icon: Server,
      color: "from-gray-600 to-gray-800",
    },
    // {
    //   name: "MongoDB",
    //   icon: Database,
    //   color: "from-green-500 to-green-700",
    // },
    // {
    //   name: "PostgreSQL",
    //   icon: Database,
    //   color: "from-blue-700 to-indigo-800",
    // },
    // {
    //   name: "GraphQL",
    //   icon: FileJson,
    //   color: "from-pink-500 to-pink-700",
    // },
    {
      name: "REST APIs",
      icon: Workflow,
      color: "from-purple-500 to-purple-700",
    },
    // {
    //   name: "AWS",
    //   icon: Cloud,
    //   color: "from-orange-400 to-orange-600",
    // },
    // {
    //   name: "Firebase",
    //   icon: Zap,
    //   color: "from-yellow-500 to-orange-500",
    // },
    // {
    //   name: "Docker",
    //   icon: Box,
    //   color: "from-blue-500 to-cyan-600",
    // },
    {
      name: "Git",
      icon: GitBranch,
      color: "from-orange-600 to-red-600",
    },
    // {
    //   name: "Figma",
    //   icon: Figma,
    //   color: "from-purple-500 to-pink-500",
    // },
    // {
    //   name: "UI/UX Design",
    //   icon: Layout,
    //   color: "from-indigo-500 to-purple-600",
    // },
    {
      name: "Redux",
      icon: Settings,
      color: "from-purple-600 to-purple-800",
    },
    // {
    //   name: "Webpack",
    //   icon: Blocks,
    //   color: "from-blue-400 to-blue-600",
    // },
    // {
    //   name: "Vite",
    //   icon: Zap,
    //   color: "from-purple-400 to-yellow-400",
    // },
    // {
    //   name: "Testing",
    //   icon: Shield,
    //   color: "from-green-600 to-teal-700",
    // },
    // {
    //   name: "SEO",
    //   icon: Search,
    //   color: "from-blue-600 to-indigo-700",
    // },
    // {
    //   name: "Performance",
    //   icon: Gauge,
    //   color: "from-red-500 to-orange-600",
    // },
    // {
    //   name: "Agile/Scrum",
    //   icon: Users,
    //   color: "from-teal-500 to-cyan-600",
    // },
    // {
    //   name: "CI/CD",
    //   icon: Workflow,
    //   color: "from-green-500 to-emerald-600",
    // },
    // {
    //   name: "Web APIs",
    //   icon: Globe,
    //   color: "from-blue-500 to-purple-600",
    // },
    // {
    //   name: "Responsive Design",
    //   icon: Smartphone,
    //   color: "from-pink-500 to-rose-600",
    // },
    // {
    //   name: "Sass/SCSS",
    //   icon: Palette,
    //   color: "from-pink-600 to-pink-800",
    // },
    // {
    //   name: "Design Systems",
    //   icon: PackageSearch,
    //   color: "from-violet-500 to-purple-600",
    // },
    // {
    //   name: "Accessibility",
    //   icon: BookOpen,
    //   color: "from-blue-600 to-cyan-700",
    // },
  ];

  // useGSAP(() => {
  //   const items = gsap.utils.toArray(".skillitems");

  //   const timeline = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: skillsRef.current,
  //       start: "top 80%",
  //       end: "bottom 20%",
  //       scrub: false,
  //       markers: false,

  //       toggleActions: "play reverse play reverse",
  //       // play when entering, reverse when leaving
  //       // so animation always completes when exiting
  //     },
  //   });

  //   timeline.from('.skillheader', {
  //     opacity: 0,
  //     duration: 0.3,
  //     ease: "power2.inOut",
  //   })

  //   items.forEach((item: any) => {
  //     gsap.fromTo(
  //       item,
  //       { opacity: 0, scale: 0.5 },
  //       {
  //         opacity: 1,
  //         scale: 1,
  //         duration: 0.4,
  //         ease: "power2.out",
  //         stagger: 0.3,
  //         scrollTrigger: {
  //           trigger: item,
  //           start: "top 85%", // triggers when each item enters the viewport
  //           toggleActions: "play none none reverse", // fade out when leaving (optional)
  //         },
  //       }
  //     );
  //   });
  // }, { scope: skillsRef });

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
  return (
    <section className="main-container-wrapper" id="Skills" ref={skillsRef}>
      <div className="py-10 main-container overflow-hidden">
        <div className="w-full relative z-1">
          <h2 className="page-heading fadeIn">Skills</h2>

          <div

            className="skill-container grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="fadeIn skillitems group relative bg-card rounded-xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
                    <div
                      className={`mb-3 p-3 rounded-lg bg-gradient-to-br ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm group-hover:text-foreground transition-colors">
                      {skill.name}
                    </p>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
