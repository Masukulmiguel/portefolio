import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    slug: "building-ai-agents-with-langchain",
    title: "Construindo Agentes Autónomos de IA com LangChain e OpenAI",
    excerpt:
      "Um guia prático para construir agentes de IA que conseguem raciocinar, planear e executar tarefas utilizando LangChain, chamadas de funções OpenAI e cadeias de ferramentas personalizadas. Inclui exemplos do mundo real da minha experiência em automação de workflows de negócio.",
    tags: ["IA", "LangChain", "OpenAI", "Python", "Automação"],
    publishedAt: "2025-06-20T10:00:00Z",
    readTime: 12,
  },
  {
    id: "blog-2",
    slug: "mikrotik-ha-setup-guide",
    title: "Configuração de Rede MikroTik de Alta Disponibilidade para Pequenas Empresas",
    excerpt:
      "Guia passo a passo para configurar routers MikroTik redundantes com VRRP, políticas de failover e monitorização automatizada. Baseado em implementações reais que realizei para clientes em Luanda.",
    tags: ["Redes", "Mikrotik", "Infraestrutura", "Linux"],
    publishedAt: "2025-03-10T08:30:00Z",
    readTime: 15,
  },
  {
    id: "blog-3",
    slug: "docker-production-best-practices",
    title: "Docker em Produção: Lições de Implementar 50+ Contentores",
    excerpt:
      "Lições aprendidas com a execução de Docker em ambientes de produção em servidores Linux. Aborda endurecimento de segurança, gestão de recursos, estratégias de registo e orquestração com Docker Compose.",
    tags: ["Docker", "DevOps", "Linux", "Segurança"],
    publishedAt: "2024-11-05T14:00:00Z",
    readTime: 10,
  },
];