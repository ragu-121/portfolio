'use client';
import React from "react";
import Image from "next/image";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { ExternalLink, Github, ArrowUpRight, Badge } from "lucide-react";

const Projects = () => {
  const project_details = [
    {
      title: "Movies",
      description: "To find your favourite movies",
      techstacks_used: ["React", "Node.js", "Stripe", "MongoDB"],
      image_url:
        "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      image_desc: "Movie",
      github_link: "",
      live_link: "",
    },
    {
      title: "Movies",
      description: "To find your favourite movies",
      techstacks_used: ["React", "Node.js", "Stripe", "MongoDB"],
      image_url:
        "https://images.unsplash.com/photo-1730794545099-14902983739d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzYwMzc3MTM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      image_desc: "Movie",
      github_link: "",
      live_link: "",
    },
  ];
  return (
    <>
      <section className="main-container-wrapper" id="projects">
        <div className="main-container w-full">
          <div className="">
            <h2 className="page-heading">Projects</h2>
            <div className="flex flex-wrap gap-6 items-center justify-center">
              {project_details.map((project, index) => (
                <div
                  key={index}
                  className={`group relative rounded-2xl overflow-hidden transition-all duration-500 flex-1 min-w-72 max-w-3xl`}
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
                        <button className="btn-layout bg-white text-black group/btn">
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
