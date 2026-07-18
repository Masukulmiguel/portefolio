import type { Experience } from "@/types";

export const experience: Experience[] = [
  {
    id: "exp-1",
    company: "Kixicorp Tecnologias",
    role: "Engenheiro de Software Sénior",
    period: "Jan 2023 - Atual",
    description:
      "Engenheiro principal responsável pelo desenvolvimento de aplicações web empresariais e soluções com IA para clientes em Angola e África Austral. Arquiteta sistemas escaláveis e orienta programadores juniores.",
    achievements: [
      "Concebeu e implementou um sistema ERP baseado em microserviços a servir mais de 50 clientes empresariais",
      "Implementou pipeline de processamento de documentos com IA, reduzindo a entrada manual de dados em 70%",
      "Estabeleceu boas práticas de CI/CD e cultura DevOps na equipa de engenharia",
      "Liderou a migração de aplicações PHP legacy para stack moderna com Laravel e Next.js",
    ],
    technologies: ["Next.js", "Laravel", "Python", "Docker", "PostgreSQL", "OpenAI"],
  },
  {
    id: "exp-2",
    company: "AngoNet Telecom",
    role: "Engenheiro de Redes e Sistemas",
    period: "Mar 2021 - Dez 2022",
    description:
      "Geriu infraestrutura de rede e ambientes de servidores para empresas de médio a grande porte em Luanda. Responsável pelo design de redes, endurecimento de segurança e projetos de migração para cloud.",
    achievements: [
      "Implementou e manteve infraestrutura de rede MikroTik e Cisco para mais de 30 clientes",
      "Reduziu o tempo de inatividade da rede em 40% através de monitorização proativa e alertas automatizados",
      "Migrou 15 ambientes de clientes de infraestrutura local para configurações de cloud híbrida em Proxmox",
      "Implementou arquitetura de segurança zero-trust para um cliente do setor financeiro",
    ],
    technologies: ["Mikrotik", "Cisco", "Linux", "Proxmox", "Docker"],
  },
  {
    id: "exp-3",
    company: "Digital Luanda Agency",
    role: "Programador Full-Stack",
    period: "Jun 2019 - Fev 2021",
    description:
      "Desenvolveu aplicações web e plataformas de comércio eletrónico para empresas locais e ONG. Trabalhou em estreita colaboração com designers e gestores de projeto para entregar projetos de clientes dentro do prazo.",
    achievements: [
      "Construiu mais de 12 websites responsivos e aplicações web para clientes de vários setores",
      "Desenvolveu plataforma de comércio eletrónico personalizada com processamento de pagamentos integrado",
      "Criou painéis de relatórios automatizados que poupavam mais de 20 horas por mês aos clientes",
      "Otimizou o desempenho de websites, atingindo pontuações Lighthouse superiores a 90 em todos os projetos",
    ],
    technologies: ["PHP", "Laravel", "JavaScript", "React", "MySQL", "Bootstrap"],
  },
  {
    id: "exp-4",
    company: "Freelancer",
    role: "Consultor de TI & Programador",
    period: "Jan 2018 - Mai 2019",
    description:
      "Forneceu consultoria TI freelance, desenvolvimento web e serviços de instalação de redes a pequenas empresas e startups em Luanda. Construiu uma base sólida em relação com clientes e entrega de projetos.",
    achievements: [
      "Entregou mais de 20 projetos, desde websites a instalações de redes",
      "Estabeleceu contratos de manutenção a longo prazo com 8 clientes recorrentes",
      "Forneceu consultoria técnica para 3 lançamentos de MVP de startups",
      "Configurou infraestrutura de rede de escritório incluindo VPN e VoIP para pequenas empresas",
    ],
    technologies: ["WordPress", "PHP", "JavaScript", "Linux", "Mikrotik"],
  },
];
