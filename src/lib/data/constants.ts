import type { NavItem, SocialLink } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Serviços", href: "#services" },
  { label: "Tecnologias", href: "#tech-stack" },
  { label: "Projetos", href: "#projects" },
  { label: "Inteligência Artificial", href: "#ai" },
  { label: "Experiência", href: "#experience" },
  { label: "Certificados", href: "#certificates" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/Masukulmiguel", icon: "Github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/masukulu-miguel-55a7b2345/", icon: "Linkedin" },
  { name: "WhatsApp", url: "https://wa.me/244935603163", icon: "MessageCircle" },
  { name: "Email", url: "mailto:Masukulum@gmail.com", icon: "Mail" },
];

export const BASE_PATH = "/portefolio";

export const SITE_CONFIG = {
  name: "Masukulu Miguel",
  title: "Masukulu Miguel | Engenheiro Tecnológico & Especialista de TI",
  description:
    "Portfólio de Masukulu Miguel, engenheiro tecnológico e especialista de TI de Luanda, Angola. Especializado em desenvolvimento full-stack, inteligência artificial, cibersegurança e infraestrutura de redes.",
  email: "Masukulum@gmail.com",
  whatsapp: "+244935603163",
  github: "https://github.com/Masukulmiguel",
  linkedin: "https://www.linkedin.com/in/masukulu-miguel-55a7b2345/",
  bebee: "https://bebee.com/ao/people/masukulu-miguel",
};
