"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-8 md:px-16 lg:px-24 bg-[#09090b]">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-[#f59e0b] text-sm font-medium tracking-wider uppercase mb-4">
              Sobre mim
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              <span className="text-[#fafafa]">Tecnologia e&apos;o que</span>
              <br />
              <span className="text-[#fafafa]">me move.</span>
            </h2>
            <div className="space-y-6 text-[#a1a1aa] leading-relaxed">
              <p>
                Sou Masukulu Miguel, tecnico de TI de Luanda, Angola. Trabalho
                com tecnologia ha mais de 5 anos, sempre focado em criar
                solucoes que realmente funcionam para as pessoas.
              </p>
              <p>
                Acredito que boa tecnologia deve ser simples e util. Nao
                gosto de complicacoes desnecessarias. Prefiro coisas limpas,
                eficientes e que resolvem problemas reais.
              </p>
              <p>
                Ja' ajudei muitos clientes a transformar as suas ideias em
                produtos digitais. Cada projeto e' uma nova oportunidade para
                fazer algo que faz diferenca.
              </p>
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: "5+", label: "Anos de experiencia" },
              { number: "50+", label: "Projetos entregues" },
              { number: "30+", label: "Clientes satisfeitos" },
              { number: "10+", label: "Tecnologias" },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#18181b] border border-[#27272a] hover:border-[#3f3f46] transition-colors duration-300"
              >
                <div className="text-4xl font-bold text-[#f59e0b] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-[#71717a]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
