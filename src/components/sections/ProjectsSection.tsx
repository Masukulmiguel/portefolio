"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import LiveProjectButton from "@/components/ui/LiveProjectButton";
import { projects } from "@/lib/data/projects";
import { BASE_PATH } from "@/lib/data/constants";

const projectImages = [
  {
    main: `${BASE_PATH}/images/projects/fmlider.png`,
  },
  {
    main: `${BASE_PATH}/images/projects/codinglife.png`,
  },
  {
    main: "https://tshoot-angola.com/assets/img/logo.png",
    fallback: "https://tshoot-angola.com/assets/img/logo_fundo_azul.png",
  },
];

const displayProjects = projects.map((project, i) => ({
  number: `0${i + 1}`,
  category: project.category === "web" ? "Web" : "Projeto",
  name: project.title,
  description: project.description,
  liveDemo: project.liveDemo,
  technologies: project.technologies || [],
  images: projectImages[i] || projectImages[0],
}));

function TroubleshootCard({ technologies }: { technologies: string[] }) {
  return (
    <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D7E2EA]/20 bg-[#1B2A41]">
      <div className="p-6 sm:p-10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
          <div className="flex items-center gap-4 flex-1">
            <div className="w-16 h-16 rounded-2xl bg-[#D4A11D] flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-2xl">TS</span>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">Troubleshoot</h4>
              <p className="text-sm text-[#D4A11D] font-medium">Solucoes Tecnologicas</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-xs text-gray-400">Site Activo</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
          {[
            { icon: "🏠", label: "Home" },
            { icon: "👥", label: "Sobre Nos" },
            { icon: "⚙️", label: "Servicos" },
            { icon: "📝", label: "Blog" },
            { icon: "🤝", label: "Parceiros" },
            { icon: "📞", label: "Contactar" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4A11D]/30 transition-colors"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium text-white/80">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 text-xs font-medium text-[#D4A11D] bg-[#D4A11D]/10 border border-[#D4A11D]/20 rounded-lg">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [current, setCurrent] = useState(0);
  const total = displayProjects.length;

  const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));

  const project = displayProjects[current];

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] sm:-mt-12 sm:rounded-t-[50px] md:-mt-14 md:rounded-t-[60px] py-16 sm:py-20 md:py-24"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-10 sm:mb-14"
            style={{ fontSize: "clamp(2rem, 8vw, 100px)" }}
          >
            Project
          </h2>
        </FadeIn>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="rounded-[30px] sm:rounded-[40px] border border-[#D7E2EA]/20 bg-[#111] overflow-hidden"
            >
              <div className="p-5 sm:p-8 md:p-10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
                  <div className="flex items-end gap-4 sm:gap-6">
                    <span
                      className="font-black text-[#D7E2EA]/20"
                      style={{ fontSize: "clamp(3rem, 8vw, 100px)" }}
                    >
                      {project.number}
                    </span>
                    <div className="flex flex-col gap-1 pb-1 sm:pb-2">
                      <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 sm:text-sm">
                        {project.category}
                      </span>
                      <h3 className="font-semibold uppercase text-[#D7E2EA] text-lg sm:text-xl md:text-2xl">
                        {project.name}
                      </h3>
                    </div>
                  </div>
                  <LiveProjectButton className="self-start sm:self-auto" href={project.liveDemo || "#"} />
                </div>

                {current === 2 ? (
                  <TroubleshootCard technologies={project.technologies} />
                ) : (
                  <div className="rounded-2xl sm:rounded-3xl overflow-hidden">
                    <img
                      src={project.images.main}
                      alt={project.name}
                      className="w-full object-cover"
                      style={{ maxHeight: "500px" }}
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-2 sm:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 sm:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-3 mt-6 sm:mt-8">
          {displayProjects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-white w-8" : "bg-white/30 w-2"
              }`}
            />
          ))}
          <span className="text-white/40 text-sm ml-3 font-medium">
            {current + 1} / {total}
          </span>
        </div>
      </div>
    </section>
  );
}
