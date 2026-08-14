"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { technologies } from "@/lib/data/technologies";
import { GlassCard } from "@/components/effects/GlassCard";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import SectionHeading from "@/components/layout/SectionHeading";

const categories = [
  "all",
  ...Array.from(new Set(technologies.map((t) => t.category))),
];

const categoryLabels: Record<string, string> = {
  all: "Todos",
  frontend: "Frontend",
  backend: "Backend",
  "full-stack": "Full Stack",
  database: "Banco de Dados",
  devops: "DevOps",
  mobile: "Móvel",
  ai: "IA",
  "machine-learning": "Machine Learning",
  tools: "Ferramentas",
  cloud: "Nuvem",
  security: "Segurança",
};

const levelDots: Record<string, number> = {
  expert: 4,
  advanced: 3,
  intermediate: 2,
  beginner: 1,
};

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function TechStack() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? technologies
      : technologies.filter((t) => t.category === active);

  return (
    <section id="tech-stack" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Tecnologias"
          subtitle="Tecnologias Que Utilizo"
        />

        <RevealOnScroll delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  "backdrop-blur-sm border",
                  active === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25"
                    : "bg-card/50 text-muted border-border hover:bg-card hover:text-foreground"
                )}
              >
                {categoryLabels[cat] || capitalize(cat)}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
          >
            {filtered.map((tech, index) => {
              const dots = tech.level ? (levelDots[tech.level] ?? 3) : 3;

              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.03,
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <GlassCard className="p-4 text-center h-full">
                    <div className="flex justify-center items-center h-8 mb-2">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-8 h-8 object-contain"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                    <p className="text-sm font-medium mb-2 group-hover:text-primary transition-colors">
                      {tech.name}
                    </p>
                    <div className="flex justify-center gap-1">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div
                          key={i}
                          className={cn(
                            "w-1.5 h-1.5 rounded-full transition-colors",
                            i < dots ? "bg-primary" : "bg-border"
                          )}
                        />
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        <RevealOnScroll delay={0.2}>
          <div className="flex justify-center gap-8 mt-12 text-sm text-muted">
            <div className="text-center">
              <span className="block text-2xl font-bold text-foreground">
                {technologies.length}
              </span>
              Tecnologias
            </div>
            <div className="text-center">
              <span className="block text-2xl font-bold text-foreground">
                {categories.length - 1}
              </span>
              Categorias
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
