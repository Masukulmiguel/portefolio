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
    <section id="tech-stack" className="bg-white py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-10">
      <div className="max-w-5xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-14 sm:mb-18">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3">
              Tecnologias Que Utilizo
            </p>
            <h2
              className="font-black uppercase text-gray-900 leading-none tracking-tight"
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
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  active === cat
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3"
          >
            {filtered.map((tech, index) => {
              const dots = tech.level ? (levelDots[tech.level] ?? 3) : 3;

              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center h-full hover:bg-gray-100 hover:border-gray-300 transition-all duration-200">
                    <div className="flex justify-center items-center h-9 mb-2">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-9 h-9 object-contain"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                    <p className="text-xs font-semibold text-gray-900 mb-1.5">
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
