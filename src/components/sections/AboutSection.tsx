"use client";

import FadeIn from "@/components/ui/FadeIn";
import ContactButton from "@/components/ui/ContactButton";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-5 py-20 sm:px-8 md:px-10"
    >
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn delay={0} y={30}>
          <p className="text-sm uppercase tracking-[0.3em] text-[#D7E2EA]/40 mb-6">
            Quem sou
          </p>
        </FadeIn>

        <FadeIn delay={0.1} y={30}>
          <h2
            className="font-black uppercase leading-none tracking-tight text-[#D7E2EA] mb-10"
            style={{ fontSize: "clamp(2.5rem, 8vw, 80px)" }}
          >
            Sobre mim
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} y={30}>
          <div className="space-y-6 text-[#D7E2EA]/70 leading-relaxed" style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.2rem)" }}>
            <p>
              Sou Masukulu Miguel, tecnico de TI de Luanda, Angola.
              Trabalho com tecnologia ha mais de 5 anos, sempre focado em
              resolver problemas reais das pessoas e empresas.
            </p>
            <p>
              Escolhi o caminho da tecnologia porque acredito que ela pode
              mudar a vida das pessoas. Ja' ajudei muitos clientes a
              transformar as suas ideias em solucoes digitais que funcionam.
            </p>
            <p>
              Nao gosto de complicacoes. Prefiro coisas simples, limpas e
              que funcionam bem. E' assim que trabalho e e' assim que
              entrego os meus projetos.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3} y={30}>
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-[#D7E2EA]/50">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4A11D]" />
              <span>5+ anos de experiencia</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4A11D]" />
              <span>Luanda, Angola</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4A11D]" />
              <span>Full-stack & IA</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} y={30}>
          <div className="mt-14">
            <ContactButton />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
