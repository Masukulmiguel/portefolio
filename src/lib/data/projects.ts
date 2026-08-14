import type { Project } from "@/types";
import { BASE_PATH } from "./constants";

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "FMLider",
    description:
      "Plataforma web de logística, transporte e desembaraço aduaneiro. Especialistas em logística em Angola e mais de 30 países, com mais de 8 anos de experiência, 60 colaboradores e 1000+ clientes.",
    longDescription:
      "O FMLider é uma plataforma completa de logística e transitário que prestam serviços de transporte, armazenagem e desembaraço aduaneiro em Angola e mais de 30 países. A plataforma inclui sistema de rastreio de cargas, gestão de frota, notícias do sector, galeria, parceiros e frequently asked questions. Desenvolvida com focus na experiência do utilizador e performance.",
    image: `${BASE_PATH}/images/projects/fmlider.png`,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    category: "web",
    github: "https://github.com/Masukulmiguel",
    liveDemo: "https://projecto-fmlider.vercel.app",
    featured: true,
    year: 2025,
  },
  {
    id: "proj-2",
    title: "CodingLife Dev",
    description:
      "Plataforma open-source de programação colaborativa em tempo real. Permite que equipas codem juntas, vejam cursores a mover, edições a acontecer e ideias a fluir, tudo ao mesmo tempo.",
    longDescription:
      "O CodingLife Dev é uma plataforma aberta de desenvolvimento colaborativo que permite programadores trabalharem em equipa em tempo real. Com funcionalidades de partilha de código ao vivo, cursores partilhados e edição simultânea, é concebida para equipas de desenvolvimento que procuram produtividade e inovação. Inclui demo interativa e sistema de registo.",
    image: `${BASE_PATH}/images/projects/codinglife.png`,
    technologies: ["React", "JavaScript", "Node.js", "WebSocket", "Firebase"],
    category: "web",
    github: "https://github.com/Masukulmiguel",
    liveDemo: "https://codinglifedev-1.onrender.com/",
    featured: true,
    year: 2025,
  },
];
