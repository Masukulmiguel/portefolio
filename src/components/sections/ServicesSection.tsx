"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { services } from "@/lib/data/services";
import {
  Code2,
  Brain,
  Zap,
  Shield,
  Network,
  Server,
  Cloud,
  Globe,
  LayoutDashboard,
  Plug,
  Lightbulb,
} from "lucide-react";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2, Brain, Zap, Shield, Network, Server, Cloud, Globe, LayoutDashboard, Plug, Lightbulb,
};

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-24 px-5 bg-[var(--bg-secondary)]">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[var(--accent)]" />
            <span className="text-xs font-semibold text-[var(--accent)] tracking-[0.2em] uppercase">
              Servicos
            </span>
          </div>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-16">
            O que posso fazer<br />por{" "}
            <span className="italic text-[var(--accent)]">voce.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((s, i) => {
            const Icon = icons[s.icon] || Code2;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-7 bg-[var(--bg-card)] border border-[var(--border-primary)] rounded-xl group hover:border-[var(--accent)]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[var(--accent-muted)] flex items-center justify-center rounded-xl mb-6 group-hover:bg-[var(--accent)]/20 transition-colors">
                  <Icon className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <h3 className="font-semibold text-[var(--text-primary)] mb-3 text-lg">{s.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed py-3">{s.description}</p>
                {s.features && (
                  <div className="mt-6 pt-5 border-t border-[var(--border-primary)]">
                    <div className="flex flex-wrap gap-2">
                      {s.features.slice(0, 3).map((f, j) => (
                        <span
                          key={j}
                          className="text-[10px] text-[var(--text-faint)] bg-[var(--bg-muted)] px-3 py-1.5 rounded-full tracking-wide"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
