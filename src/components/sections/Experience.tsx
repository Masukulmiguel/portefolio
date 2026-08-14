"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { experience } from "@/lib/data/experience";
import { GlassCard } from "@/components/effects/GlassCard";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-10">
      <div className="max-w-5xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3">
              Percurso Profissional
            </p>
            <h2
              className="font-black uppercase text-gray-900 leading-none tracking-tight"
              style={{ fontSize: "clamp(2rem, 8vw, 100px)" }}
            >
              Experiência
            </h2>
          </div>
        </RevealOnScroll>

        <div className="space-y-6">
          {experience.map((exp, index) => (
            <RevealOnScroll key={exp.id} delay={index * 0.08}>
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <GlassCard className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="sm:w-40 shrink-0">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-gray-500 bg-gray-100 rounded-full">
                        {exp.period}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="mb-3">
                        <h3 className="text-lg font-bold text-gray-900">{exp.company}</h3>
                        <p className="text-gray-500 text-sm font-medium">{exp.role}</p>
                      </div>

                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <Check className="w-4 h-4 mt-0.5 shrink-0 text-gray-900" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
