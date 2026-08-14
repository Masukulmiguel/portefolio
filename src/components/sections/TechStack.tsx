"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { technologies } from "@/lib/data/technologies";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";

const categories = [
  "all",
  ...Array.from(new Set(technologies.map((t) => t.category))),
];

const categoryLabels: Record<string, string> = {
  all: "Todos",
  frontend: "Frontend",
  backend: "Backend",
  database: "Banco de Dados",
  devops: "DevOps",
  ai: "IA",
  tools: "Ferramentas",
  networking: "Redes",
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
    <section id="tech-stack" className="bg-gray-50 py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-10">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-3">
              Tecnologias Que Utilizo
            </p>
            <h2
              className="font-black uppercase text-center text-gray-900 leading-none tracking-tight"
              style={{ fontSize: "clamp(2rem, 8vw, 100px)" }}
            >
              Tech Stack
            </h2>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200",
                  active === cat
                    ? "bg-gray-900 text-white shadow-lg"
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
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
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <div className="bg-white border border-gray-200 rounded-2xl p-5 text-center h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-250">
                    <div className="flex justify-center items-center h-10 mb-3">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-10 h-10 object-contain"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                    <p className="text-sm font-semibold text-gray-900 mb-2">
                      {tech.name}
                    </p>
                    <div className="flex justify-center gap-1">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div
                          key={i}
                          className={cn(
                            "w-1.5 h-1.5 rounded-full transition-colors",
                            i < dots ? "bg-gray-900" : "bg-gray-200"
                          )}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        <RevealOnScroll delay={0.2}>
          <div className="flex justify-center gap-8 mt-12 text-sm text-gray-500">
            <div className="text-center">
              <span className="block text-2xl font-bold text-gray-900">
                {technologies.length}
              </span>
              Tecnologias
            </div>
            <div className="text-center">
              <span className="block text-2xl font-bold text-gray-900">
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
