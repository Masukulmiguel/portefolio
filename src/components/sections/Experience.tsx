"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { experience } from "@/lib/data/experience";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-32 px-6 md:px-12 bg-[#09090b]">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-[#f59e0b] text-sm font-medium tracking-wider uppercase mb-4">
            Experiencia
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-[#fafafa]">Percurso</span>
            <br />
            <span className="text-[#fafafa]">profissional.</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="relative pl-8 border-l-2 border-[#27272a] hover:border-[#3f3f46] transition-colors duration-300"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-[#f59e0b]" />

              <div className="pb-8">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-[#f59e0b] bg-[#f59e0b]/10 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#fafafa] mb-1">
                  {exp.company}
                </h3>
                <p className="text-sm font-medium text-[#71717a] mb-4">
                  {exp.role}
                </p>

                <p className="text-[#a1a1aa] text-sm leading-relaxed mb-5">
                  {exp.description}
                </p>

                <ul className="space-y-2 mb-5">
                  {exp.achievements.map((achievement, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-[#71717a]">
                      <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#f59e0b]" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium text-[#52525b] bg-[#18181b] px-3 py-1.5 rounded-lg"
                    >
                      {tech}
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
