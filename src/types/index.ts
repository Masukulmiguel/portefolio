export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  category: ProjectCategory;
  github?: string;
  liveDemo?: string;
  featured?: boolean;
  year: number;
}

export type ProjectCategory =
  | "all"
  | "web"
  | "ai"
  | "mobile"
  | "backend"
  | "infrastructure"
  | "security";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  color: string;
}

export interface Technology {
  name: string;
  category: TechCategory;
  icon: string;
  level?: "beginner" | "intermediate" | "advanced" | "expert";
}

export type TechCategory =
  | "languages"
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "networking"
  | "ai"
  | "tools";

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Certificate {
  id: string;
  name: string;
  institution: string;
  date: string;
  image?: string;
  credentialUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image?: string;
  content: string;
  rating?: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  coverImage?: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
}
