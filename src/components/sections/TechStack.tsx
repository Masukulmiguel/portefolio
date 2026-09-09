"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { technologies } from "@/lib/data/technologies";

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech-stack" className="relative py-24 px-6 md:px-12 lg:px-20 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-[#2563eb] text-sm font-semibold tracking-wider uppercase mb-3">
            Tecnologias
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-[#f0f6fc]">Ferramentas que</span>{" "}
            <span className="text-[#2563eb]">domino.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3"
        >
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.02, ease: "easeOut" }}
              className="group p-3 rounded-xl bg-[#161b22] border border-[#30363d] hover:border-[#484f58] transition-all duration-300 text-center"
            >
              <div className="w-9 h-9 mx-auto mb-2 flex items-center justify-center">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-7 h-7 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <p className="text-[11px] font-medium text-[#8b949e] group-hover:text-[#f0f6fc] transition-colors duration-300">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
