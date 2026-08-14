"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import FadeIn from "@/components/ui/FadeIn";
import LiveProjectButton from "@/components/ui/LiveProjectButton";
import { projects } from "@/lib/data/projects";
import { BASE_PATH } from "@/lib/data/constants";

const projectImages = [
  {
    col1Top: `${BASE_PATH}/images/projects/fmlider.png`,
    col1Bottom: `${BASE_PATH}/images/projects/codinglife.png`,
    col2: `${BASE_PATH}/images/projects/fmlider.png`,
  },
  {
    col1Top: `${BASE_PATH}/images/projects/codinglife.png`,
    col1Bottom: `${BASE_PATH}/images/projects/fmlider.png`,
    col2: `${BASE_PATH}/images/projects/codinglife.png`,
  },
];

const displayProjects = projects.map((project, i) => ({
  number: `0${i + 1}`,
  category: project.category === "web" ? "Web" : "Projeto",
  name: project.title,
  liveDemo: project.liveDemo,
  images: projectImages[i] || projectImages[0],
}));

function ProjectCard({
  project,
  index,
}: {
  project: (typeof displayProjects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const totalCards = displayProjects.length;
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={ref} className="h-[85vh]">
      <motion.div
        style={{
          scale,
          top: `${index * 28}px`,
        }}
        className="sticky top-24 rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:sticky sm:top-32 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        {/* Top row */}
        <div className="mb-4 flex flex-col gap-4 sm:mb-6 sm:flex-row sm:items-center sm:justify-between md:mb-8">
          <div className="flex items-end gap-4 sm:gap-6 md:gap-8">
            <span
              className="font-black text-[#D7E2EA]"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1 pb-2 sm:pb-4">
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">
                {project.category}
              </span>
              <h3 className="font-medium uppercase text-[#D7E2EA] sm:text-lg md:text-xl">
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton className="self-start sm:self-auto" href={project.liveDemo || "#"} />
        </div>

        {/* Bottom row - image grid */}
        <div className="grid grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {/* Left column (40%) */}
          <div className="col-span-2 flex flex-col gap-3 sm:gap-4 md:gap-6">
            <img
              src={project.images.col1Top}
              alt={`${project.name} - Image 1`}
              className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            />
            <img
              src={project.images.col1Bottom}
              alt={`${project.name} - Image 2`}
              className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            />
          </div>

          {/* Right column (60%) */}
          <div className="col-span-3">
            <img
              src={project.images.col2}
              alt={`${project.name} - Image 3`}
              className="w-full h-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              style={{ minHeight: "clamp(300px, 40vw, 600px)" }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] sm:-mt-12 sm:rounded-t-[50px] md:-mt-14 md:rounded-t-[60px]"
    >
      <div className="px-5 pt-20 sm:px-8 md:px-10">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Project
          </h2>
        </FadeIn>
      </div>

      <div className="px-4 sm:px-6 md:px-8">
        {displayProjects.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
