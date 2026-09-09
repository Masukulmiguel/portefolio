"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Briefcase, Code } from "lucide-react";
import { BASE_PATH } from "@/lib/data/constants";

const stats = [
  { icon: Briefcase, number: "5+", label: "Anos de experiencia" },
  { icon: Code, number: "50+", label: "Projetos entregues" },
  { icon: Users, number: "30+", label: "Clientes satisfeitos" },
  { icon: Award, number: "10+", label: "Tecnologias dominadas" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 px-6 md:px-12 lg:px-20 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-[#2563eb] text-sm font-semibold tracking-wider uppercase mb-3">
            Sobre mim
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-[#f0f6fc]">Construo solucoes</span>{" "}
            <span className="text-[#2563eb]">digitais</span>{" "}
            <span className="text-[#f0f6fc]">que funcionam.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left - Photo + Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-2"
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-[#30363d]">
                <img
                  src={`${BASE_PATH}/images/profile/masukulu-miguel.jpg`}
                  alt="Masukulu Miguel"
                  className="w-full aspect-[4/5] object-cover object-top"
                />
              </div>
              {/* Quick info card */}
              <div className="absolute -bottom-6 -right-6 bg-[#161b22] border border-[#30363d] rounded-xl p-4 shadow-xl">
                <p className="text-xs text-[#8b949e] mb-1">Localizacao</p>
                <p className="text-sm font-semibold text-[#f0f6fc]">Luanda, Angola</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="space-y-5 text-[#8b949e] leading-relaxed text-base">
              <p>
                Sou <strong className="text-[#f0f6fc]">Masukulu Miguel</strong>, tecnico de TI de Luanda, Angola. Trabalho
                com tecnologia ha mais de 5 anos, sempre focado em criar
                solucoes que realmente funcionam para as pessoas e empresas.
              </p>
              <p>
                Acredito que boa tecnologia deve ser simples e util. Nao
                gosto de complicacoes desnecessarias. Prefiro coisas limpas,
                eficientes e que resolvem problemas reais.
              </p>
              <p>
                Ja&apos; ajudei muitos clientes a transformar as suas ideias em
                produtos digitais. Cada projeto e&apos; uma nova oportunidade para
                fazer algo que faz diferenca no mercado.
              </p>
            </div>

            {/* Skills tags */}
            <div className="flex flex-wrap gap-2 pt-4">
              {["Full-Stack", "IA", "Ciberseguranca", "Redes", "Cloud", "DevOps"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-medium text-[#2563eb] bg-[#2563eb]/10 border border-[#2563eb]/20 rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease: "easeOut" }}
                  className="p-4 rounded-xl bg-[#161b22] border border-[#30363d] hover:border-[#484f58] transition-colors duration-300"
                >
                  <stat.icon className="w-5 h-5 text-[#2563eb] mb-3" />
                  <div className="text-2xl font-bold text-[#f0f6fc] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-[#8b949e]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
