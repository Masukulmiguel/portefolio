"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { experience } from "@/lib/data/experience";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 px-5">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[var(--accent)]" />
            <span className="text-xs font-semibold text-[var(--accent)] tracking-[0.2em] uppercase">
              Experiencia
            </span>
          </div>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-16">
            Percurso
            <br />
            <span className="italic text-[var(--accent)]">profissional.</span>
          </h2>
        </motion.div>

        <div className="space-y-10">
          {experience.map((e, i) => (
            <motion.div
              key={e.id}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-10 border-l-2 border-[var(--border-primary)] hover:border-[var(--accent)] transition-colors"
            >
              <div className="absolute left-0 top-1 w-3.5 h-3.5 -translate-x-[8px] bg-[var(--accent)] rounded-full ring-4 ring-[var(--bg-primary)]" />

              <div className="pb-6">
                <span className="text-xs font-bold text-[var(--accent)] tracking-[0.15em] uppercase bg-[var(--accent-muted)] px-3 py-1.5 rounded-lg">
                  {e.period}
                </span>
                <h3 className="font-['Playfair_Display'] text-xl font-bold text-[var(--text-primary)] mt-4 mb-2">
                  {e.company}
                </h3>
                <p className="text-sm font-medium text-[var(--text-faint)] mb-3">{e.role}</p>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5 py-3">{e.description}</p>

                <ul className="space-y-3 mb-5">
                  {e.achievements.map((a, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                      <Check className="w-4 h-4 mt-0.5 shrink-0 text-[var(--accent)]" />
                      <span className="py-1">{a}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-3">
                  {e.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-medium text-[var(--text-faint)] bg-[var(--bg-muted)] px-2.5 py-1 rounded-full tracking-wide"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
