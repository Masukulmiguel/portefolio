"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data/constants";
import { BASE_PATH } from "@/lib/data/constants";

const navLinks = [
  { label: "Sobre", href: "#about" },
  { label: "Servicos", href: "#services" },
  { label: "Projetos", href: "#projects" },
  { label: "Experiencia", href: "#experience" },
  { label: "Contacto", href: "#contact" },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] via-[#0d1117] to-[#0a0f1a]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2563eb]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#2563eb]/3 rounded-full blur-[120px]" />

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex items-center justify-between px-6 md:px-12 lg:px-20 py-6"
      >
        <a href="#home" className="flex items-center gap-1.5 text-xl font-bold tracking-tight">
          <span className="text-[#f0f6fc]">Masukulu</span>
          <span className="text-[#2563eb]">.</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#8b949e] hover:text-[#f0f6fc] transition-colors duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#2563eb] rounded-lg hover:bg-[#1d4ed8] transition-all duration-200 shadow-lg shadow-[#2563eb]/20"
        >
          Fale comigo
        </a>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: mounted ? 1 : 0, x: mounted ? 0 : -40 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563eb]/10 border border-[#2563eb]/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22c55e]" />
              </span>
              <span className="text-xs font-medium text-[#2563eb] tracking-wide uppercase">Disponivel para projetos</span>
            </div>

            <p className="text-[#8b949e] text-base font-medium mb-3">
              Tecnico de TI & Especialista Digital
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
              <span className="text-[#f0f6fc]">Masukulu</span>
              <br />
              <span className="text-[#f0f6fc]">Miguel</span>
            </h1>

            <p className="text-lg text-[#8b949e] max-w-lg leading-relaxed mb-8">
              De Luanda, Angola. Constuo solucoes digitais que funcionam.
              Desenvolvimento full-stack, inteligencia artificial e infraestrutura de redes.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#2563eb] rounded-lg hover:bg-[#1d4ed8] transition-all duration-200 shadow-lg shadow-[#2563eb]/20"
              >
                Ver projetos
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href={`${BASE_PATH}/cv-masukulu-miguel.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#f0f6fc] bg-[#21262d] border border-[#30363d] rounded-lg hover:bg-[#30363d] hover:border-[#484f58] transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                Descarregar CV
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#21262d] border border-[#30363d] flex items-center justify-center text-[#8b949e] hover:text-[#f0f6fc] hover:border-[#484f58] transition-all duration-200">
                <Github className="w-4 h-4" />
              </a>
              <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#21262d] border border-[#30363d] flex items-center justify-center text-[#8b949e] hover:text-[#f0f6fc] hover:border-[#484f58] transition-all duration-200">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`}
                className="w-10 h-10 rounded-lg bg-[#21262d] border border-[#30363d] flex items-center justify-center text-[#8b949e] hover:text-[#f0f6fc] hover:border-[#484f58] transition-all duration-200">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: mounted ? 1 : 0, x: mounted ? 0 : 40 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#2563eb]/20 to-[#2563eb]/5 rounded-3xl blur-xl" />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-2xl overflow-hidden border-2 border-[#30363d] shadow-2xl">
                <img
                  src={`${BASE_PATH}/images/profile/masukulu-miguel.jpg`}
                  alt="Masukulu Miguel - Tecnico de TI"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a]/30 to-transparent" />
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-4 -left-4 px-4 py-3 bg-[#161b22] border border-[#30363d] rounded-xl shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#2563eb]/10 flex items-center justify-center">
                    <span className="text-[#2563eb] font-bold text-lg">5+</span>
                  </div>
                  <div>
                    <p className="text-xs text-[#8b949e]">Anos de</p>
                    <p className="text-sm font-semibold text-[#f0f6fc]">Experiencia</p>
                  </div>
                </div>
              </motion.div>
              {/* Floating badge 2 */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : -20 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -top-4 -right-4 px-4 py-3 bg-[#161b22] border border-[#30363d] rounded-xl shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#22c55e]/10 flex items-center justify-center">
                    <span className="text-[#22c55e] font-bold text-lg">50+</span>
                  </div>
                  <div>
                    <p className="text-xs text-[#8b949e]">Projetos</p>
                    <p className="text-sm font-semibold text-[#f0f6fc]">Entregues</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: mounted ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[#484f58] tracking-wider uppercase font-medium">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#484f58] to-transparent" />
      </motion.div>
    </section>
  );
}
