"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { experience } from "@/lib/data/experience";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-28 px-6 md:px-16 bg-white">
      <div className="max-w-[900px] mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-[#B48C3C]" />
            <span className="text-xs font-semibold text-[#B48C3C] tracking-[0.25em] uppercase">Experiencia</span>
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#1C1917] mb-16">
            Percurso<br /><span className="italic text-[#B48C3C]">profissional.</span>
          </h2>
        </motion.div>

        <div className="space-y-10">
          {experience.map((e, i) => (
            <motion.div key={e.id} initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative pl-10 border-l border-[#E8E5E0] hover:border-[#B48C3C] transition-colors">
              <div className="absolute left-0 top-1 w-2 h-2 -translate-x-[5px] bg-[#B48C3C] rounded-full" />

              <div className="pb-10">
                <span className="text-[10px] font-bold text-[#B48C3C] tracking-[0.2em] uppercase bg-[#B48C3C]/10 px-3 py-1">{e.period}</span>
                <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1C1917] mt-4 mb-1">{e.company}</h3>
                <p className="text-sm font-medium text-[#A8A29E] mb-4">{e.role}</p>
                <p className="text-sm text-[#78716C] leading-relaxed mb-5">{e.description}</p>

                <ul className="space-y-2 mb-5">
                  {e.achievements.map((a, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-[#57534E]">
                      <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#B48C3C]" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {e.technologies.map((t) => (
                    <span key={t} className="text-[10px] font-medium text-[#A8A29E] bg-[#F5F0E8] px-2.5 py-1 tracking-wide">{t}</span>
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
