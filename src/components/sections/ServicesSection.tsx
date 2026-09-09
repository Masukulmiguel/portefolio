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
    <section id="services" className="relative py-24 px-6 md:px-12 lg:px-20 bg-[#161b22]">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-[#2563eb] text-sm font-semibold tracking-wider uppercase mb-3">
            Servicos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-[#f0f6fc]">O que posso fazer</span>{" "}
            <span className="text-[#2563eb]">por voce.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {topServices.map((service, i) => {
            const Icon = iconMap[service.icon] || Code2;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="group p-6 rounded-xl bg-[#0d1117] border border-[#30363d] hover:border-[#484f58] hover:bg-[#161b22] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-[#2563eb]/10 flex items-center justify-center mb-4 group-hover:bg-[#2563eb]/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#2563eb]" />
                </div>
                <h3 className="text-base font-semibold text-[#f0f6fc] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[#8b949e] leading-relaxed mb-4">
                  {service.description}
                </p>
                {service.features && (
                  <div className="pt-4 border-t border-[#30363d]">
                    <div className="flex flex-wrap gap-1.5">
                      {service.features.slice(0, 2).map((feature, j) => (
                        <span
                          key={j}
                          className="text-[11px] text-[#8b949e] bg-[#21262d] px-2.5 py-1 rounded-md"
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
