"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { experience } from "@/lib/data/experience";
import { GlassCard } from "@/components/effects/GlassCard";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import SectionHeading from "@/components/layout/SectionHeading";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Experiência" subtitle="Percurso Profissional" />

        <div className="relative">
          <div className="absolute left-0 lg:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-secondary hidden lg:block" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <RevealOnScroll key={exp.id} delay={index * 0.15} direction="right">
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  initial={{ opacity: 0, x: 40 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative lg:pl-20"
                >
                  <div className="hidden lg:block absolute left-6 top-6 w-4 h-4 rounded-full bg-primary shadow-[0_0_12px_rgba(var(--primary-rgb,59,130,246),0.5)] z-10 border-2 border-background" />

                  <div className="lg:hidden flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary-rgb,59,130,246),0.4)]" />
                    <span className="text-sm font-mono text-primary">{exp.period}</span>
                  </div>

                  <div className="hidden lg:block absolute left-0 top-5">
                    <span className="text-sm font-mono text-primary">{exp.period}</span>
                  </div>

                  <GlassCard className="p-6 group">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                      <div>
                        <h3 className="text-lg font-bold">{exp.company}</h3>
                        <p className="text-primary text-sm">{exp.role}</p>
                      </div>
                      <span className="text-xs text-muted lg:hidden">{exp.period}</span>
                    </div>

                    <p className="text-muted text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted"
                        >
                          <Check className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-3 border-t border-border">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" size="sm">
                          {tech}
                        </Badge>
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
