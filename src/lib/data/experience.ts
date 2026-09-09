import type { Experience } from "@/types";

export const experience: Experience[] = [
  {
    id: "exp-0",
    company: "FMLIDER - Transitario & Logistica",
    role: "Tecnico de Informatica - Responsavel de Infraestrutura de TI",
    period: "2024 - Atual",
    description:
      "Responsavel pela infraestrutura de TI da empresa, incluindo manutencao de servidores, redes, sistemas de seguranca e suporte tecnico. Gestao completa do parque informatico e garantia de disponibilidade dos sistemas criticos.",
    achievements: [
      "Gestao e manutencao da infraestrutura de TI da empresa FMLIDER",
      "Responsavel pela rede, servidores e sistemas de seguranca CCTV",
      "Suporte tecnico e resolucao de problemas de hardware e software",
      "Implementacao e gestao de solucoes de rede e comunicacoes",
      "Garantia de uptime e disponibilidade dos sistemas criticos da empresa",
    ],
    technologies: ["Redes", "Servidores", "CCTV", "Windows Server", "Linux", "Mikrotik"],
  },
  {
    id: "exp-1",
    company: "Kixicorp Tecnologias",
    role: "Engenheiro de Software Senior",
    period: "Jan 2023 - Dez 2023",
    description:
      "Engenheiro principal responsavel pelo desenvolvimento de aplicacoes web empresariais e solucoes com IA para clientes em Angola e Africa Austral. Arquiteta sistemas escalaveis e orienta programadores juniores.",
    achievements: [
      "Concebeu e implementou um sistema ERP baseado em microservicos a servir mais de 50 clientes empresariais",
      "Implementou pipeline de processamento de documentos com IA, reduzindo a entrada manual de dados em 70%",
      "Estabeleceu boas praticas de CI/CD e cultura DevOps na equipa de engenharia",
      "Liderou a migracao de aplicacoes PHP legacy para stack moderna com Laravel e Next.js",
    ],
    technologies: ["Next.js", "Laravel", "Python", "Docker", "PostgreSQL", "OpenAI"],
  },
  {
    id: "exp-2",
    company: "AngoNet Telecom",
    role: "Engenheiro de Redes e Sistemas",
    period: "Mar 2021 - Dez 2022",
    description:
      "Geriu infraestrutura de rede e ambientes de servidores para empresas de medio a grande porte em Luanda. Responsavel pelo design de redes, endurecimento de seguranca e projetos de migracao para cloud.",
    achievements: [
      "Implementou e manteve infraestrutura de rede MikroTik e Cisco para mais de 30 clientes",
      "Reduziu o tempo de inatividade da rede em 40% atraves de monitorizacao proativa e alertas automatizados",
      "Migrou 15 ambientes de clientes de infraestrutura local para configuracoes de cloud hibrida em Proxmox",
      "Implementou arquitetura de seguranca zero-trust para um cliente do setor financeiro",
    ],
    technologies: ["Mikrotik", "Cisco", "Linux", "Proxmox", "Docker"],
  },
  {
    id: "exp-3",
    company: "Digital Luanda Agency",
    role: "Programador Full-Stack",
    period: "Jun 2019 - Fev 2021",
    description:
      "Desenvolveu aplicacoes web e plataformas de comercio eletronico para empresas locais e ONG. Trabalhou em estreita colaboracao com designers e gestores de projeto para entregar projetos de clientes dentro do prazo.",
    achievements: [
      "Construiu mais de 12 websites responsivos e aplicacoes web para clientes de varios setores",
      "Desenvolveu plataforma de comercio eletronico personalizada com processamento de pagamentos integrado",
      "Criou paineis de relatorios automatizados que poupavam mais de 20 horas por mes aos clientes",
      "Otimizou o desempenho de websites, atingindo pontuacoes Lighthouse superiores a 90 em todos os projetos",
    ],
    technologies: ["PHP", "Laravel", "JavaScript", "React", "MySQL", "Bootstrap"],
  },
  {
    id: "exp-4",
    company: "Freelancer",
    role: "Consultor de TI & Programador",
    period: "Jan 2018 - Mai 2019",
    description:
      "Forneceu consultoria TI freelance, desenvolvimento web e servicos de instalacao de redes a pequenas empresas e startups em Luanda. Construiu uma base solida em relacao com clientes e entrega de projetos.",
    achievements: [
      "Entregou mais de 20 projetos, desde websites a instalacoes de redes",
      "Estabeleceu contratos de manutencao a longo prazo com 8 clientes recorrentes",
      "Forneceu consultoria tecnica para 3 lancamentos de MVP de startups",
      "Configurou infraestrutura de rede de escritorio incluindo VPN e VoIP para pequenas empresas",
    ],
    technologies: ["WordPress", "PHP", "JavaScript", "Linux", "Mikrotik"],
  },
];
