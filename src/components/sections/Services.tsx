"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
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
  Check,
} from "lucide-react";
import { services } from "@/lib/data/services";
import { GlassCard } from "@/components/effects/GlassCard";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import SectionHeading from "@/components/layout/SectionHeading";

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
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

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Serviços" subtitle="O Que Faço" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];

            return (
              <RevealOnScroll key={service.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <GlassCard className="p-6 h-full group relative overflow-hidden">
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${service.color}20, transparent)`,
                      }}
                    />

                    <div className="relative z-10">
                      <motion.div
                        className="w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                        style={{
                          backgroundColor: `${service.color}10`,
                        }}
                        whileHover={{ rotate: 12 }}
                      >
                        {IconComponent && (
                          <IconComponent
                            className="w-6 h-6"
                            style={{ color: service.color }}
                          />
                        )}
                      </motion.div>

                      <h3 className="text-lg font-semibold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted text-sm mb-4">
                        {service.description}
                      </p>

                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs text-muted"
                          >
                            <Check
                              className="w-3.5 h-3.5 mt-0.5 shrink-0"
                              style={{ color: service.color }}
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </GlassCard>
                </motion.div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
