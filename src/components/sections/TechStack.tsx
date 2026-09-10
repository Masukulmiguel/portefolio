"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { technologies } from "@/lib/data/technologies";
import type { TechCategory } from "@/types";

const categories: { label: string; value: TechCategory | "all" }[] = [
  { label: "Todos", value: "all" },
  { label: "Languages", value: "languages" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "DevOps", value: "devops" },
  { label: "Database", value: "database" },
  { label: "Networking", value: "networking" },
  { label: "AI", value: "ai" },
  { label: "Tools", value: "tools" },
];

const levelColors: Record<string, string> = {
  expert: "text-[var(--success)]",
  advanced: "text-[var(--accent)]",
  intermediate: "text-[var(--text-muted)]",
};

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState<TechCategory | "all">("all");

  const filtered =
    activeCategory === "all"
      ? technologies
      : technologies.filter((t) => t.category === activeCategory);

  return (
    <section id="tech" className="py-24 px-[10px]">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[var(--accent)]" />
            <span className="text-xs font-semibold text-[var(--accent)] tracking-[0.2em] uppercase">
              Tecnologias
            </span>
          </div>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-16">
            Ferramentas que<br />
            <span className="italic text-[var(--accent)]">domino.</span>
          </h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2.5 text-xs font-medium rounded-lg transition-all ${
                activeCategory === cat.value
                  ? "bg-[var(--accent)] text-[var(--bg-primary)]"
                  : "bg-[var(--bg-muted)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5">
          {filtered.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.02 }}
              className="group flex flex-col items-center gap-3 p-5 bg-[var(--bg-card)] border border-[var(--border-primary)] rounded-xl hover:border-[var(--accent)]/30 hover:shadow-lg transition-all"
            >
              <img
                src={t.icon}
                alt={t.name}
                className="w-8 h-8 object-contain opacity-50 group-hover:opacity-100 transition-opacity"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <span className="text-xs font-medium text-[var(--text-faint)] group-hover:text-[var(--text-primary)] transition-colors text-center py-1">
                {t.name}
              </span>
              <span className={`text-[10px] font-semibold uppercase tracking-wider ${(t.level ? levelColors[t.level] : "") || "text-[var(--text-muted)]"}`}>
                {t.level}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
