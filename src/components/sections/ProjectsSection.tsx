"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { BASE_PATH } from "@/lib/data/constants";

const projectImages: Record<string, string> = {
  "proj-1": `${BASE_PATH}/images/projects/fmlider.png`,
  "proj-2": `${BASE_PATH}/images/projects/codinglife.png`,
  "proj-3": "https://tshoot-angola.com/assets/img/logo.png",
};

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 px-[10px] bg-[var(--bg-secondary)]">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[var(--accent)]" />
            <span className="text-xs font-semibold text-[var(--accent)] tracking-[0.2em] uppercase">
              Projetos
            </span>
          </div>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-16">
            Trabalhos
            <br />
            <span className="italic text-[var(--accent)]">recentes.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-[var(--bg-card)] border border-[var(--border-primary)] rounded-xl overflow-hidden hover:border-[var(--accent)]/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-video bg-[var(--bg-muted)] overflow-hidden">
                {p.id === "proj-3" ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[var(--accent)] flex items-center justify-center rounded-xl mx-auto mb-4">
                        <span className="text-[var(--bg-primary)] font-bold text-xl font-['Playfair_Display']">
                          TS
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-[var(--text-primary)] font-['Playfair_Display']">
                        Troubleshoot
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">Solucoes Tecnologicas</p>
                    </div>
                  </div>
                ) : (
                  <img
                    src={projectImages[p.id]}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-[var(--accent)] tracking-wider">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs text-[var(--text-faint)] uppercase tracking-[0.15em]">
                    {p.year}
                  </span>
                </div>

                <h3 className="font-semibold text-[var(--text-primary)] text-lg mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5 py-2 line-clamp-2">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] text-[var(--text-faint)] bg-[var(--bg-muted)] px-3 py-1.5 rounded-full tracking-wide"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {p.liveDemo && (
                    <a
                      href={p.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold bg-[var(--accent)] text-[var(--bg-primary)] rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
                    >
                      Demo <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold border border-[var(--border-secondary)] text-[var(--text-secondary)] rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
                    >
                      <Github className="w-3 h-3" /> Codigo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
