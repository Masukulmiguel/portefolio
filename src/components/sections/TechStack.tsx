"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { technologies } from "@/lib/data/technologies";

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="tech-stack" className="py-28 px-6 md:px-16 bg-white">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-[#B48C3C]" />
            <span className="text-xs font-semibold text-[#B48C3C] tracking-[0.25em] uppercase">Tecnologias</span>
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#1C1917] mb-16">
            Ferramentas que<br /><span className="italic text-[#B48C3C]">domino.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3">
          {technologies.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: i * 0.02 }} className="group flex flex-col items-center gap-2 p-3 bg-[#F5F0E8] hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all border border-transparent hover:border-[#E8E5E0]">
              <img src={t.icon} alt={t.name} className="w-7 h-7 object-contain opacity-50 group-hover:opacity-100 transition-opacity" loading="lazy" onError={(e) => { e.currentTarget.style.display = "none"; }} />
              <span className="text-[10px] font-medium text-[#A8A29E] group-hover:text-[#1C1917] transition-colors text-center">{t.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
