"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Full-Stack", level: 90 },
  { name: "Inteligencia Artificial", level: 85 },
  { name: "Ciberseguranca", level: 80 },
  { name: "Redes", level: 95 },
  { name: "Cloud", level: 85 },
  { name: "DevOps", level: 80 },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 px-[10px]">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[var(--accent)]" />
            <span className="text-xs font-semibold text-[var(--accent)] tracking-[0.2em] uppercase">
              Sobre mim
            </span>
          </div>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-16">
            Quem esta por tras<br />dos{" "}
            <span className="italic text-[var(--accent)]">resultados.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-base text-[var(--text-secondary)] leading-relaxed py-4">
              Sou <strong className="text-[var(--text-primary)] font-semibold">Masukulu Miguel</strong>,
              tecnico de informatica de Luanda, Angola. Trabalho com tecnologia ha mais de 5 anos.
            </p>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed py-4">
              Acredito que boa tecnologia deve ser simples e util. Prefiro coisas limpas
              e eficientes que resolvem problemas reais.
            </p>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed py-4">
              Desde infraestrutura de redes ate desenvolvimento com inteligencia artificial,
              entrego solucoes completas e fiaveis.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            {skills.map((skill, i) => (
              <div key={skill.name} className="py-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-[var(--text-primary)]">{skill.name}</span>
                  <span className="text-xs text-[var(--accent)]">{skill.level}%</span>
                </div>
                <div className="h-2 bg-[var(--bg-muted)] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.4 + i * 0.1 }}
                    className="h-full bg-[var(--accent)] rounded-full"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
