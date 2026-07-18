"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, Star, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/layout/SectionHeading";
import { GradientBorder } from "@/components/effects/GradientBorder";
import { GlassCard } from "@/components/effects/GlassCard";
import { BASE_PATH } from "@/lib/data/constants";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";

const values = [
  {
    icon: Lightbulb,
    title: "Inovação",
    description:
      "Abraçando tecnologias de ponta para construir soluções que ultrapassam limites e criam novas possibilidades.",
  },
  {
    icon: Star,
    title: "Excelência",
    description:
      "Comprometido em entregar trabalho de alta qualidade com atenção meticulosa ao detalhe em cada projeto.",
  },
  {
    icon: Globe,
    title: "Impacto",
    description:
      "Impulsionado pelo desejo de fazer uma diferença significativa nas comunidades de Angola e além.",
  },
];

const timeline = [
  {
    year: "2014",
    title: "Conclusão do Ensino Médio",
    description:
      "Concluí o Ensino Médio e comecei a aprender programação e tecnologia de forma autodidata.",
  },
  {
    year: "2020",
    title: "Primeiros Projetos Freelance",
    description:
      "Entreguei soluções web e mobile para empresas locais, ganhando experiência prática na indústria.",
  },
  {
    year: "2022",
    title: "Foco em IA e Cibersegurança",
    description:
      "Especializei-me em inteligência artificial e cibersegurança, trabalhando em investigação e aplicações reais.",
  },
  {
    year: "2024",
    title: "Técnico de TI & Líder",
    description:
      "Liderando iniciativas tecnológicas, construindo sistemas escaláveis e orientando a próxima geração de programadores.",
  },
];

export default function About() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="container max-w-6xl mx-auto">
        <SectionHeading title="Sobre Mim" subtitle="Quem Sou" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll direction="left">
            <div className="relative">
              <GradientBorder>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                  <img
                    src={`${BASE_PATH}/images/profile/foto-perfil.png`}
                    alt="Masukulu Miguel"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </GradientBorder>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className={cn(
                  "absolute -bottom-4 -right-4 sm:bottom-6 sm:right-6",
                  "px-5 py-3 rounded-xl",
                  "bg-card/80 backdrop-blur-md border border-border",
                  "shadow-xl"
                )}
              >
                <p className="text-sm font-semibold gradient-text">5+ Anos de Experiência</p>
              </motion.div>
            </div>
          </RevealOnScroll>

          <div className="space-y-8">
            <RevealOnScroll>
              <p className="text-muted-foreground leading-relaxed">
                Sou um técnico de TI de Luanda, Angola, com uma paixão profunda por
                inteligência artificial, cibersegurança e desenvolvimento full stack. Nos últimos
                cinco anos, tenho vindo a criar soluções digitais que ligam a inovação ao
                impacto real no mundo.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <p className="text-lg font-medium text-foreground">
                A minha missão é utilizar a tecnologia para resolver problemas reais em Angola e
                além.
              </p>
            </RevealOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {values.map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                >
                  <GlassCard className="p-5 h-full">
                    <value.icon className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div ref={timelineRef} className="mt-20">
          <RevealOnScroll>
            <h3 className="text-2xl font-bold text-foreground text-center mb-12">
              <span className="gradient-text">A Minha Jornada</span>
            </h3>
          </RevealOnScroll>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

            {timeline.map((entry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
                className={cn(
                  "relative flex items-start gap-6 mb-12",
                  "md:gap-0",
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                <div className="absolute left-4 md:left-1/2 top-1 w-3 h-3 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10" />

                <div className={cn("flex-1 pl-12 md:pl-0", i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12")}>
                  <span className="text-sm font-bold text-primary">{entry.year}</span>
                  <h4 className="text-lg font-semibold text-foreground mt-1">{entry.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {entry.description}
                  </p>
                </div>

                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
