"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { experience } from "@/lib/data/experience";
import { GlassCard } from "@/components/effects/GlassCard";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-10">
      <div className="max-w-4xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-3">
              Percurso Profissional
            </p>
            <h2
              className="font-black uppercase text-center text-gray-900 leading-none tracking-tight"
              style={{ fontSize: "clamp(2rem, 8vw, 100px)" }}
            >
              Experiência
            </h2>
          </div>
        </RevealOnScroll>

        <div className="relative">
          <div className="absolute left-0 lg:left-8 top-0 bottom-0 w-px bg-gray-200 hidden lg:block" />

          <div className="space-y-10">
            {experience.map((exp, index) => (
              <RevealOnScroll key={exp.id} delay={index * 0.1}>
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  initial={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative lg:pl-20"
                >
                  <div className="hidden lg:block absolute left-6 top-6 w-4 h-4 rounded-full bg-gray-900 z-10 border-4 border-white shadow" />

                  <div className="lg:hidden flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-gray-900" />
                    <span className="text-sm font-medium text-gray-500">{exp.period}</span>
                  </div>

                  <div className="hidden lg:block absolute left-0 top-5">
                    <span className="text-sm font-medium text-gray-500">{exp.period}</span>
                  </div>

                  <GlassCard className="p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{exp.company}</h3>
                        <p className="text-gray-600 text-sm font-medium">{exp.role}</p>
                      </div>
                      <span className="text-xs text-gray-400 lg:hidden">{exp.period}</span>
                    </div>

                    <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-2.5 mb-5">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm text-gray-600"
                        >
                          <Check className="w-4 h-4 mt-0.5 shrink-0 text-gray-900" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
