"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { BASE_PATH } from "@/lib/data/constants";

const imgs = [
  `${BASE_PATH}/images/projects/fmlider.png`,
  `${BASE_PATH}/images/projects/codinglife.png`,
  "https://tshoot-angola.com/assets/img/logo.png",
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [cur, setCur] = useState(0);
  const total = projects.length;
  const p = projects[cur];

  return (
    <section id="projects" className="py-28 px-6 md:px-16 bg-[#1C1917]">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-[#B48C3C]" />
            <span className="text-xs font-semibold text-[#B48C3C] tracking-[0.25em] uppercase">Projetos</span>
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#FAF8F5] mb-16">
            Trabalhos<br /><span className="italic text-[#B48C3C]">recentes.</span>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
          <div className="grid lg:grid-cols-2 gap-0 overflow-hidden">
            {/* Image */}
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[480px] bg-[#292524]">
              {cur === 2 ? (
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-[#B48C3C] flex items-center justify-center mx-auto mb-4">
                      <span className="text-[#1C1917] font-bold text-2xl font-['Playfair_Display']">TS</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#FAF8F5] mb-1 font-['Playfair_Display']">Troubleshoot</h3>
                    <p className="text-sm text-[#A8A29E]">Solucoes Tecnologicas</p>
                  </div>
                </div>
              ) : (
                <img src={imgs[cur]} alt={p.title} className="w-full h-full object-cover" />
              )}
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center bg-[#292524]">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-bold text-[#B48C3C] tracking-wider">0{cur + 1} / 0{total}</span>
                <span className="text-[10px] text-[#78716C] uppercase tracking-[0.2em]">{p.category === "web" ? "Web App" : "Projeto"}</span>
              </div>

              <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-[#FAF8F5] mb-4">{p.title}</h3>
              <p className="text-sm text-[#A8A29E] leading-relaxed mb-6">{p.description}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {p.technologies.map((t) => (
                  <span key={t} className="text-[11px] text-[#D6D3CC] border border-[#44403C] px-3 py-1.5 tracking-wide">{t}</span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {p.liveDemo && (
                  <a href={p.liveDemo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-[#B48C3C] text-[#1C1917] hover:bg-[#C9A050] transition-colors">
                    Ver projeto <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold border border-[#44403C] text-[#D6D3CC] hover:border-[#B48C3C] hover:text-[#B48C3C] transition-all">
                    Codigo
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Nav */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {projects.map((_, i) => (
                <button key={i} onClick={() => setCur(i)} className={`h-1 transition-all duration-300 ${i === cur ? "bg-[#B48C3C] w-10" : "bg-[#44403C] w-4"}`} />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={() => setCur((c) => (c === 0 ? total - 1 : c - 1))} className="w-10 h-10 border border-[#44403C] flex items-center justify-center text-[#78716C] hover:text-[#B48C3C] hover:border-[#B48C3C] transition-all">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={() => setCur((c) => (c === total - 1 ? 0 : c + 1))} className="w-10 h-10 border border-[#44403C] flex items-center justify-center text-[#78716C] hover:text-[#B48C3C] hover:border-[#B48C3C] transition-all">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
