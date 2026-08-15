"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data/constants";

const navLinks = [
  { label: "Sobre", href: "#about" },
  { label: "Servicos", href: "#services" },
  { label: "Projetos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#09090b] to-[#18181b]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#f59e0b]/5 rounded-full blur-[120px]" />

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12 md:py-8"
      >
        <a href="#home" className="text-lg font-bold tracking-tight">
          <span className="text-[#fafafa]">masukulu</span>
          <span className="text-[#f59e0b]">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#a1a1aa] hover:text-[#fafafa] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#09090b] bg-[#fafafa] rounded-full hover:bg-[#e4e4e7] transition-colors duration-200"
        >
          Fale comigo
        </a>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-[#f59e0b] text-sm font-medium tracking-wider uppercase mb-6">
            Tecnico de TI & Especialista Digital
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]"
        >
          <span className="text-[#fafafa]">Masukulu</span>
          <br />
          <span className="text-[#fafafa]">Miguel</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-8 text-lg md:text-xl text-[#71717a] max-w-xl leading-relaxed"
        >
          De Luanda, Angola. Constuo solucoes digitais que funcionam.
          Desenvolvimento full-stack, inteligencia artificial e infraestrutura de redes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#09090b] bg-[#f59e0b] rounded-full hover:bg-[#d97706] transition-colors duration-200"
          >
            Ver projetos
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#fafafa] bg-[#27272a] rounded-full hover:bg-[#3f3f46] transition-colors duration-200"
          >
            Contactar
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: mounted ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 flex items-center gap-4"
        >
          <a href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer" className="text-[#52525b] hover:text-[#fafafa] transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#52525b] hover:text-[#fafafa] transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#52525b] hover:text-[#fafafa] transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: mounted ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[#52525b] tracking-wider uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#52525b] to-transparent" />
      </motion.div>
    </section>
  );
}
