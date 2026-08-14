import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "svc-1",
    title: "Desenvolvimento de Software",
    description:
      "Soluções de software personalizadas construídas com frameworks modernos e arquitetura limpa. De aplicações web a sistemas empresariais complexos, entrego código escalável e manutenível adaptado às necessidades do seu negócio.",
    icon: "Code2",
    features: [
      "Desenvolvimento de aplicações web full-stack",
      "Design e implementação de APIs RESTful",
      "Arquitetura e otimização de bases de dados",
      "Desenvolvimento ágil com entrega iterativa",
    ],
    color: "#3b82f6",
  },
  {
    id: "svc-2",
    title: "Inteligência Artificial",
    description:
      "Aproveite o poder da IA e da aprendizagem automática para automatizar processos, extrair informações de dados e construir sistemas inteligentes que se adaptam e melhoram ao longo do tempo.",
    icon: "Brain",
    features: [
      "Soluções de processamento de linguagem natural",
      "Análise preditiva e modelação de dados",
      "Chatbots e assistentes virtuais com IA",
      "Visão computacional e processamento de imagens",
    ],
    color: "#8b5cf6",
  },
  {
    id: "svc-3",
    title: "Automação de Workflow",
    description:
      "Simplifique tarefas repetitivas e processos de negócio com automação inteligente. Concebo e implemento fluxos de trabalho automatizados que poupam tempo, reduzem erros e libertam a sua equipa para trabalho de maior valor.",
    icon: "Zap",
    features: [
      "Automação de processos de negócio (BPA)",
      "Configuração de pipelines CI/CD",
      "Orquestração de tarefas agendadas",
      "Integração entre sistemas dispares",
    ],
    color: "#f59e0b",
  },
  {
    id: "svc-4",
    title: "Cibersegurança",
    description:
      "Proteja os seus atos digitais com avaliações de segurança abrangentes, gestão de vulnerabilidades e estratégias de defesa robustas. Ajudo organizações em Angola a cumprir normas e a proteger infraestruturas críticas.",
    icon: "Shield",
    features: [
      "Auditorias de segurança e testes de penetração",
      "Configuração de firewall e IDS/IPS",
      "Planeamento de resposta a incidentes",
      "Conformidade com proteção de dados (LPD)",
    ],
    color: "#ef4444",
  },
  {
    id: "svc-5",
    title: "Engenharia de Redes",
    description:
      "Conceba, implemente e gere infraestrutura de rede fiável. De pequenos escritórios a soluções LAN/WAN de nível empresarial, garanto desempenho e tempo de atividade optimizados.",
    icon: "Network",
    features: [
      "Design e arquitetura de redes",
      "Implementação de LAN/WAN/VPN",
      "Planeamento de redes sem fios",
      "Monitorização e resolução de problemas de rede",
    ],
    color: "#06b6d4",
  },
  {
    id: "svc-6",
    title: "Gestão de Servidores",
    description:
      "Administração de servidores de ponta a ponta para ambientes Linux e Windows. Trato da afetação, configuração, monitorização e manutenção para manter a sua infraestrutura a funcionar sem problemas.",
    icon: "Server",
    features: [
      "Administração de servidores Linux e Windows",
      "Afinação e otimização de desempenho",
      "Backup e recuperação de desastres",
      "Endurecimento de segurança e gestão de patches",
    ],
    color: "#10b981",
  },
  {
    id: "svc-7",
    title: "Soluções Cloud",
    description:
      "Migre para a cloud ou otimize a sua infraestrutura cloud existente. Trabalho com os principais fornecedores e soluções auto-hospedadas para fornecer ambientes cloud custo-eficazes, escaláveis e seguros.",
    icon: "Cloud",
    features: [
      "Estratégia e execução de migração para cloud",
      "Configuração de AWS, Azure e GCP",
      "Cloud auto-hospedada com Proxmox e Docker",
      "Otimização de custos e gestão de recursos",
    ],
    color: "#0ea5e9",
  },
  {
    id: "svc-8",
    title: "Websites",
    description:
      "Construa websites rápidos, responsivos e otimizados para SEO que estabelecem a sua presença online. De landing pages a plataformas web complexas, crio designs pixel-perfect com tecnologias modernas.",
    icon: "Globe",
    features: [
      "Design e desenvolvimento web responsivo",
      "Soluções de comércio eletrónico",
      "Sistemas de gestão de conteúdo",
      "Otimização SEO e afinação de desempenho",
    ],
    color: "#ec4899",
  },
  {
    id: "svc-9",
    title: "Sistemas de Negócios",
    description:
      "Desenvolva sistemas de gestão de negócio integrados que unificam as suas operações. ERP, CRM e painéis personalizados concebidos para lhe dar visibilidade e controlo total sobre a sua organização.",
    icon: "LayoutDashboard",
    features: [
      "Sistemas de planeamento de recursos empresariais (ERP)",
      "Gestão de relacionamento com clientes (CRM)",
      "Painéis de inteligência empresarial",
      "Relatórios e análises personalizados",
    ],
    color: "#6366f1",
  },
  {
    id: "svc-10",
    title: "Integrações API",
    description:
      "Ligue os seus sistemas e serviços com integrações API fiáveis e bem documentadas. Construo pontes entre plataformas para que os seus dados fluyam sem problemas pela sua stack tecnológica.",
    icon: "Plug",
    features: [
      "Integração com APIs de terceiros",
      "Desenvolvimento de APIs personalizadas",
      "Integração com gateways de pagamento",
      "Arquiteturas baseadas em webhooks e eventos",
    ],
    color: "#14b8a6",
  },
  {
    id: "svc-11",
    title: "Sistemas de Segurança & CCTV",
    description:
      "Configuração e instalação de sistemas de vigilância CCTV, controlo de acesso biométrico, intercomunicação e automatização de portas com equipamentos Hikvision. Soluções completas de segurança para residências, empresas e indústrias.",
    icon: "Shield",
    features: [
      "Instalação e configuração de câmaras CCTV Hikvision",
      "Sistemas biométricos de controlo de acesso",
      "Controlo de portas e cancelas automáticas",
      "Intercomunicação com vídeo (Video Intercom)",
      "Gravação e monitorização remota via app",
      "Alarmes inteligentes e deteção de movimento",
    ],
    color: "#FF6600",
  },
  {
    id: "svc-12",
    title: "Consultoria Técnica",
    description:
      "Obtenha orientação especializada em estratégia tecnológica, decisões de arquitetura e transformação digital. Ajudo organizações a tomar escolhas técnicas informadas que se alinham com os seus objetivos e orçamento.",
    icon: "Lightbulb",
    features: [
      "Estratégia tecnológica e roteamento",
      "Revisão de arquitetura de sistemas",
      "Aconselhamento em transformação digital",
      "Mentoria de equipas e revisões de código",
    ],
    color: "#f97316",
  },
];