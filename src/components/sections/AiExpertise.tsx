"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/effects/GlassCard";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import SectionHeading from "@/components/layout/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { BASE_PATH } from "@/lib/data/constants";
import Image from "next/image";

const capabilities = [
  {
    logo: `${BASE_PATH}/images/tech/openai.svg`,
    title: "Engenharia de Prompts",
    description:
      "Criação de prompts precisos e contextualizados para extrair o máximo valor dos modelos de linguagem. Especializado em raciocínio em cadeia e técnicas de aprendizagem com poucos exemplos.",
  },
  {
    logo: `${BASE_PATH}/images/tech/restapi.svg`,
    title: "API OpenAI",
    description:
      "Experiência profunda na integração dos modelos GPT, embeddings e APIs de moderação da OpenAI em aplicações de produção com uso otimizado de tokens e respostas em streaming.",
  },
  {
    logo: `${BASE_PATH}/images/tech/n8n.svg`,
    title: "Automação com IA",
    description:
      "Construção de fluxos de trabalho inteligentes com n8n e agentes autónomos com memória, gestão de contexto e capacidades de chamada de ferramentas para suporte ao cliente.",
  },
  {
    logo: `${BASE_PATH}/images/tech/langchain.svg`,
    title: "IA Empresarial",
    description:
      "Implementação de soluções de IA que geram resultados reais para o negócio, desde processamento automatizado de documentos até análise inteligente de dados e sistemas de apoio à decisão.",
  },
];

const floatingTags = [
  "LLMs",
  "RAG",
  "Agents",
  "Fine-tuning",
  "Embeddings",
  "Vector DB",
  "LangChain",
  "GPT-4",
  "OpenAI",
  "NLP",
  "ML Ops",
  "Transformers",
];

const stats = [
  { label: "Projetos de IA", value: "15+" },
  { label: "Integrações API", value: "30+" },
  { label: "Modelos Implementados", value: "10+" },
  { label: "Melhoria de Precisão", value: "40%" },
];

export default function AiExpertise() {
  return (
    <section id="ai" className="section-padding">
      <AuroraBackground className="py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading title="Expertise em IA" subtitle="Inteligência Artificial" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-8">
              <RevealOnScroll>
                <p className="text-muted leading-relaxed">
                  Inteligência artificial não é apenas uma ferramenta, é uma mudança de paradigma. Dediquei
                  anos a dominar a integração de IA, desde engenharia de prompts até
                  o desenvolvimento de aplicações LLMs de grau de produção. A minha abordagem combina
                  profunda compreensão técnica com capacidade empresarial prática para entregar
                  soluções que realmente funcionam.
                </p>
              </RevealOnScroll>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {capabilities.map((cap, index) => (
                  <RevealOnScroll key={cap.title} delay={index * 0.1}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="h-full"
                    >
                      <GlassCard className="p-5 h-full group">
                        <div className="w-10 h-10 rounded-xl bg-card flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 border border-border">
                          <Image
                            src={cap.logo}
                            alt={cap.title}
                            width={24}
                            height={24}
                            className="object-contain"
                          />
                        </div>
                        <h3 className="font-semibold mb-2 text-sm">{cap.title}</h3>
                        <p className="text-muted text-xs leading-relaxed">
                          {cap.description}
                        </p>
                      </GlassCard>
                    </motion.div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>

            <RevealOnScroll delay={0.2} direction="right">
              <div className="relative">
                <GlassCard className="p-8 relative overflow-hidden" hover={false}>
                  <div className="absolute inset-0 opacity-10">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-primary"
                        style={{
                          left: `${15 + i * 15}%`,
                          top: `${20 + (i % 3) * 25}%`,
                        }}
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 2 + i * 0.3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={`line-${i}`}
                        className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                        style={{
                          left: `${10 + i * 18}%`,
                          top: `${25 + i * 12}%`,
                          width: "30%",
                          transform: `rotate(${-15 + i * 8}deg)`,
                        }}
                        animate={{
                          opacity: [0.05, 0.2, 0.05],
                        }}
                        transition={{
                          duration: 3 + i * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-lg font-bold mb-6 gradient-text">
                      Tecnologias de IA & ML
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {floatingTags.map((tag, index) => (
                        <motion.div
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          animate={{
                            y: [0, -4, 0],
                          }}
                          transition={{
                            duration: 3 + (index % 3),
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.2,
                          }}
                        >
                          <Badge variant="secondary" size="sm">
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {stats.map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="text-center p-3 rounded-xl bg-card/50"
                        >
                          <div className="text-2xl font-bold gradient-text">
                            {stat.value}
                          </div>
                          <div className="text-xs text-muted mt-1">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </AuroraBackground>
    </section>
  );
}
