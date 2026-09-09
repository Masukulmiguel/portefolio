"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { experience } from "@/lib/data/experience";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-24 px-6 md:px-12 lg:px-20 bg-[#0d1117]">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-[#2563eb] text-sm font-semibold tracking-wider uppercase mb-3">
            Experiencia
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-[#f0f6fc]">Percurso</span>{" "}
            <span className="text-[#2563eb]">profissional.</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="relative pl-8 border-l-2 border-[#30363d] hover:border-[#484f58] transition-colors duration-300"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-2.5 h-2.5 -translate-x-[5px] rounded-full bg-[#2563eb] ring-4 ring-[#0d1117]" />

              <div className="pb-8">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-[#2563eb] bg-[#2563eb]/10 px-3 py-1 rounded-lg">
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#f0f6fc] mb-1">
                  {exp.company}
                </h3>
                <p className="text-sm font-medium text-[#8b949e] mb-4">
                  {exp.role}
                </p>

                <p className="text-[#8b949e] text-sm leading-relaxed mb-5">
                  {exp.description}
                </p>

                <ul className="space-y-2 mb-5">
                  {exp.achievements.map((achievement, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-[#c9d1d9]">
                      <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#22c55e]" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium text-[#8b949e] bg-[#21262d] px-2.5 py-1 rounded-md"
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
