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

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
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
};

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const topServices = services.slice(0, 6);

  return (
    <section id="services" className="relative py-32 px-6 md:px-12 bg-[#18181b]">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-[#f59e0b] text-sm font-medium tracking-wider uppercase mb-4">
            Servicos
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-[#fafafa]">O que posso fazer</span>
            <br />
            <span className="text-[#fafafa]">por voce.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topServices.map((service, i) => {
            const Icon = iconMap[service.icon] || Code2;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="group p-6 rounded-2xl bg-[#09090b] border border-[#27272a] hover:border-[#3f3f46] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/10 flex items-center justify-center mb-5 group-hover:bg-[#f59e0b]/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#f59e0b]" />
                </div>
                <h3 className="text-lg font-semibold text-[#fafafa] mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-[#71717a] leading-relaxed">
                  {service.description}
                </p>
                {service.features && (
                  <div className="mt-5 pt-5 border-t border-[#27272a]">
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 2).map((feature, j) => (
                        <span
                          key={j}
                          className="text-xs text-[#52525b] bg-[#18181b] px-3 py-1.5 rounded-lg"
                        >
                          {feature}
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
