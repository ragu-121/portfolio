'use client';
import React, { useRef } from "react";
import Image from "next/image";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { ExternalLink, Github, ArrowUpRight, Badge } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Projects = () => {
  const projRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const project_details = [
    {
      title: "Movies Web",
      description: "To find your favourite movies",
      techstacks_used: ["React", "TailwindCss", "TMBD"],
      image_url:
        "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      image_desc: "Movie",
      github_link: "",
      live_link: "https://movies-web-01.netlify.app",
    },
    {
      title: "Food Web",
      description: "Order your favourite food",
      techstacks_used: ["React", "JSON"],
      image_url:
        "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image_desc: "Movie",
      github_link: "",
      live_link: "https://foodapp-web-123.netlify.app/",
    },
  ];

  // useGSAP(
  //   () => {

  //     const timeline = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: projRef.current, // Use the ref of the container element
  //         start: "top 80%",              // Start the animation when the top of the trigger hits 80% down the viewport
  //         end: "bottom 20%",             // End point of the ScrollTrigger (optional)
  //         scrub: false,                  // Set to true for a scrub effect, or false for a single run
  //         once: true,                    // Ensures the animation only runs once when the start point is hit
  //         markers: true,              // Uncomment for visual debugging
  //       },
  //     });
  //     timeline.from('.headelem', {
  //       opacity: 0,
  //       duration: 0.3,
  //       ease: "power2.inOut",
  //     })

  //     timeline.fromTo(
  //       ".projitems",
  //       { opacity: 0, scale: 0.5 },
  //       {
  //         opacity: 1,
  //         scale: 1,
  //         stagger: 0.2,
  //         duration: 0.5,
  //         ease: "power2.out",
  //       }
  //     );
  //   },
  //   { scope: projRef }
  // );
  useGSAP(
    () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: projRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: false,
          markers: false,

          toggleActions: "play reverse play reverse",
          // play when entering, reverse when leaving
          // so animation always completes when exiting
        },
      });

      timeline.from(".headelem", {
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });

      timeline.fromTo(
        ".projitems",
        { opacity: 0, y:50 },
        {
          opacity: 1,
          y:0,
          duration: 0.2,
          ease: "power2.out",
        }
      );
    },
    { scope: projRef }
  );

  return (
    <>
      <section className="main-container-wrapper " id="projects" ref={projRef}>
        <div className="main-container w-full">
          <div className="">
            <h2 className="page-heading headelem">Projects</h2>
            <div className="flex flex-wrap gap-6 items-center justify-center">
              {project_details.map((project, index) => (
                <div
                  key={index}
                  className={`projitems group relative rounded-2xl overflow-hidden transition-all duration-500 flex-1 min-w-72 max-w-3xl`}
                >
                  <div className="absolute inset-0">
                    <Image
                      src={project.image_url}
                      alt={project.image_desc}
                      fill={true}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#030213]/30 to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  <div className="relative h-full flex flex-col justify-end p-6 md:p-12">
                    <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                      <h3 className="text-white text-3xl md:text-4xl mb-4">
                        {project.title}
                      </h3>

                      <p className="text-sm font-normal text-white/80 mb-6 max-w-2xl">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techstacks_used.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs font-medium rounded-sm px-2 py-1 bg-white/10 text-white border-white/20 backdrop-blur-sm hover:bg-white/20 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <button className="btn-layout bg-white text-black group/btn" onClick={()=>{window.open(project.live_link,'_blank')}}>
                          <ExternalLink className="w-4 h-4 mr-2 transition-transform group-hover/btn:translate-x-1" />
                          View Live
                        </button>
                        <button className="btn-layout text-white hover:bg-primary/20">
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-45">
                    <ArrowUpRight className="w-8 h-8 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
