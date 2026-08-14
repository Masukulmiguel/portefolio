"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Award } from "lucide-react";
import { certificates } from "@/lib/data/certificates";
import { GlassCard } from "@/components/effects/GlassCard";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import SectionHeading from "@/components/layout/SectionHeading";
import { formatDate } from "@/lib/utils";

const certColors = ["#6366f1", "#8b5cf6", "#a855f7", "#d946ef", "#ec4899"];

export default function Certificates() {
  return (
    <section id="certificates" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Certificados" subtitle="Credenciais" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => {
            const color = certColors[index % certColors.length];

            return (
              <RevealOnScroll key={cert.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
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
                        background: `linear-gradient(135deg, ${color}15, transparent)`,
                      }}
                    />

                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: `${color}15` }}
                      >
                        <Award
                          className="w-7 h-7"
                          style={{ color }}
                        />
                      </div>

                      <h3 className="text-lg font-semibold mb-1">
                        {cert.name}
                      </h3>
                      <p className="text-primary text-sm mb-1">
                        {cert.institution}
                      </p>
                      <p className="text-muted text-xs mb-4">
                        {formatDate(cert.date)}
                      </p>

                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors mt-auto"
                        >
                          Ver Credencial
                          <span className="text-[10px]">→</span>
                        </a>
                      )}
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
