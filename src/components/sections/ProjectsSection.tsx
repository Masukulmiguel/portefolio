"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { BASE_PATH } from "@/lib/data/constants";

const projectImages = [
  `${BASE_PATH}/images/projects/fmlider.png`,
  `${BASE_PATH}/images/projects/codinglife.png`,
  "https://tshoot-angola.com/assets/img/logo.png",
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const total = projects.length;

  const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));

  const project = projects[current];

  return (
    <section id="projects" className="relative py-32 px-6 md:px-12 bg-[#09090b]">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-[#f59e0b] text-sm font-medium tracking-wider uppercase mb-4">
            Projetos
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-[#fafafa]">Trabalhos</span>
            <br />
            <span className="text-[#fafafa]">recentes.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Project Card */}
          <div className="relative rounded-3xl bg-[#18181b] border border-[#27272a] overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[500px] bg-[#09090b]">
                {current === 2 ? (
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-2xl bg-[#f59e0b] flex items-center justify-center mx-auto mb-4">
                        <span className="text-[#09090b] font-bold text-2xl">TS</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#fafafa] mb-2">Troubleshoot</h3>
                      <p className="text-sm text-[#71717a]">Solucoes Tecnologicas</p>
                    </div>
                  </div>
                ) : (
                  <img
                    src={projectImages[current]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium text-[#f59e0b] bg-[#f59e0b]/10 px-3 py-1 rounded-full">
                    0{current + 1}
                  </span>
                  <span className="text-xs font-medium text-[#52525b] uppercase tracking-wider">
                    {project.category === "web" ? "Web" : "Projeto"}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#fafafa] mb-4">
                  {project.title}
                </h3>

                <p className="text-[#71717a] leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium text-[#a1a1aa] bg-[#27272a] px-3 py-1.5 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#09090b] bg-[#fafafa] rounded-full hover:bg-[#e4e4e7] transition-colors duration-200"
                    >
                      Ver projeto
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#fafafa] bg-[#27272a] rounded-full hover:bg-[#3f3f46] transition-colors duration-200"
                    >
                      Codigo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-3">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "bg-[#f59e0b] w-8" : "bg-[#27272a] w-1.5"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-[#18181b] border border-[#27272a] flex items-center justify-center text-[#71717a] hover:text-[#fafafa] hover:border-[#3f3f46] transition-colors duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-[#18181b] border border-[#27272a] flex items-center justify-center text-[#71717a] hover:text-[#fafafa] hover:border-[#3f3f46] transition-colors duration-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
