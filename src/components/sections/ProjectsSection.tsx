"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
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
    <section id="projects" className="relative py-24 px-6 md:px-12 lg:px-20 bg-[#161b22]">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-[#2563eb] text-sm font-semibold tracking-wider uppercase mb-3">
            Projetos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-[#f0f6fc]">Trabalhos</span>{" "}
            <span className="text-[#2563eb]">recentes.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Project Card */}
          <div className="rounded-2xl bg-[#0d1117] border border-[#30363d] overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[450px] bg-[#161b22]">
                {current === 2 ? (
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-xl bg-[#2563eb] flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-xl">TS</span>
                      </div>
                      <h3 className="text-lg font-bold text-[#f0f6fc] mb-1">Troubleshoot</h3>
                      <p className="text-sm text-[#8b949e]">Solucoes Tecnologicas</p>
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
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-[#2563eb] bg-[#2563eb]/10 px-3 py-1 rounded-lg">
                    0{current + 1} / 0{total}
                  </span>
                  <span className="text-xs font-medium text-[#484f58] uppercase tracking-wider">
                    {project.category === "web" ? "Web App" : "Projeto"}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#f0f6fc] mb-3">
                  {project.title}
                </h3>

                <p className="text-[#8b949e] leading-relaxed mb-6 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium text-[#c9d1d9] bg-[#21262d] px-3 py-1.5 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#2563eb] rounded-lg hover:bg-[#1d4ed8] transition-all duration-200 shadow-lg shadow-[#2563eb]/20"
                    >
                      Ver projeto
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#f0f6fc] bg-[#21262d] border border-[#30363d] rounded-lg hover:bg-[#30363d] transition-all duration-200"
                    >
                      Codigo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "bg-[#2563eb] w-8" : "bg-[#30363d] w-1.5"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-lg bg-[#21262d] border border-[#30363d] flex items-center justify-center text-[#8b949e] hover:text-[#f0f6fc] hover:border-[#484f58] transition-all duration-200"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded-lg bg-[#21262d] border border-[#30363d] flex items-center justify-center text-[#8b949e] hover:text-[#f0f6fc] hover:border-[#484f58] transition-all duration-200"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
