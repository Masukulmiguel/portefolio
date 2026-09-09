"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { services } from "@/lib/data/services";
import { Code2, Brain, Zap, Shield, Network, Server, Cloud, Globe, LayoutDashboard, Plug, Lightbulb } from "lucide-react";

const icons: Record<string, React.ComponentType<{ className?: string }>> = { Code2, Brain, Zap, Shield, Network, Server, Cloud, Globe, LayoutDashboard, Plug, Lightbulb };

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-28 px-6 md:px-16 bg-[#F5F0E8]">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-[#B48C3C]" />
            <span className="text-xs font-semibold text-[#B48C3C] tracking-[0.25em] uppercase">Servicos</span>
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#1C1917] mb-16">
            O que posso fazer<br />por <span className="italic text-[#B48C3C]">voce.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((s, i) => {
            const Icon = icons[s.icon] || Code2;
            return (
              <motion.div key={s.id} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-white p-7 group hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] transition-all duration-500 border border-transparent hover:border-[#B48C3C]/20">
                <div className="w-12 h-12 bg-[#B48C3C]/10 flex items-center justify-center mb-5 group-hover:bg-[#B48C3C]/20 transition-colors">
                  <Icon className="w-5 h-5 text-[#B48C3C]" />
                </div>
                <h3 className="font-semibold text-[#1C1917] text-lg mb-3">{s.title}</h3>
                <p className="text-sm text-[#78716C] leading-relaxed">{s.description}</p>
                {s.features && (
                  <div className="mt-5 pt-5 border-t border-[#E8E5E0]">
                    <div className="flex flex-wrap gap-1.5">
                      {s.features.slice(0, 2).map((f, j) => (
                        <span key={j} className="text-[10px] text-[#A8A29E] bg-[#F5F0E8] px-2.5 py-1 tracking-wide">{f}</span>
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
