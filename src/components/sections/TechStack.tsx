"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { technologies } from "@/lib/data/technologies";

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech-stack" className="relative py-32 px-6 md:px-12 bg-[#18181b]">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-[#f59e0b] text-sm font-medium tracking-wider uppercase mb-4">
            Tecnologias
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-[#fafafa]">Ferramentas que</span>
            <br />
            <span className="text-[#fafafa]">domino.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.03, ease: "easeOut" }}
              className="group p-4 rounded-xl bg-[#09090b] border border-[#27272a] hover:border-[#3f3f46] transition-all duration-300 text-center"
            >
              <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-8 h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <p className="text-xs font-medium text-[#a1a1aa] group-hover:text-[#fafafa] transition-colors duration-300">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
