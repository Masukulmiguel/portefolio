"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { n: "5+", l: "Anos" },
  { n: "50+", l: "Projetos" },
  { n: "30+", l: "Clientes" },
  { n: "10+", l: "Tecnologias" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 px-8 md:px-24 bg-white">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-[#B48C3C]" />
            <span className="text-xs font-semibold text-[#B48C3C] tracking-[0.25em] uppercase">Sobre mim</span>
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#1C1917] mb-16">
            Quem esta por tras<br />dos <span className="italic text-[#B48C3C]">resultados.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Text */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }} className="lg:col-span-12 space-y-6 max-w-3xl">
            <p className="text-lg text-[#57534E] leading-relaxed">
              Sou <strong className="text-[#1C1917] font-semibold">Masukulu Miguel</strong>, tecnico de informatica de Luanda, Angola. Trabalho com tecnologia ha mais de 5 anos, focado em criar solucoes que realmente funcionam para pessoas e empresas.
            </p>
            <p className="text-lg text-[#57534E] leading-relaxed">
              Acredito que boa tecnologia deve ser simples e util. Prefiro coisas limpas, eficientes e que resolvem problemas reais. Ja ajudei muitos clientes a transformar as suas ideias em produtos digitais.
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              {["Full-Stack", "IA", "Ciberseguranca", "Redes", "Cloud", "DevOps"].map((s) => (
                <span key={s} className="px-4 py-2 text-xs font-semibold text-[#B48C3C] border border-[#B48C3C]/30 tracking-wider uppercase">
                  {s}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 pt-8 border-t border-[#E8E5E0]">
              {stats.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }} className="text-center">
                  <p className="font-['Playfair_Display'] text-3xl font-bold text-[#B48C3C]">{s.n}</p>
                  <p className="text-xs text-[#A8A29E] mt-1 tracking-wider uppercase">{s.l}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
