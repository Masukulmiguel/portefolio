"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { SITE_CONFIG, BASE_PATH } from "@/lib/data/constants";

const links = [
  { label: "Sobre", href: "#about" },
  { label: "Servicos", href: "#services" },
  { label: "Projetos", href: "#projects" },
  { label: "Experiencia", href: "#experience" },
  { label: "Contacto", href: "#contact" },
];

export default function HeroSection() {
  const [ok, setOk] = useState(false);
  useEffect(() => setOk(true), []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col">
      {/* Background */}
      <div className="absolute inset-0 bg-[#FAF8F5]" />
      <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-[#B48C3C]/5 blur-[120px]" />

      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: ok ? 1 : 0, y: ok ? 0 : -20 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 flex items-center justify-between px-8 md:px-24 py-6 max-w-[1400px] mx-auto w-full"
      >
        <a href="#home" className="font-['Playfair_Display'] text-2xl font-bold tracking-tight text-[#1C1917]">
          Masukulu<span className="text-[#B48C3C]">.</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-[#78716C] hover:text-[#1C1917] transition-colors font-medium tracking-wide">
              {l.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden lg:inline-flex px-5 py-2.5 text-sm font-semibold bg-[#1C1917] text-[#FAF8F5] rounded-full hover:bg-[#292524] transition-colors">
          Fale comigo
        </a>
      </motion.nav>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center px-8 md:px-24 max-w-[1400px] mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full py-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: ok ? 1 : 0, y: ok ? 0 : 40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-[#B48C3C]" />
              <span className="text-xs font-semibold text-[#B48C3C] tracking-[0.25em] uppercase">Tecnico de Informatica</span>
            </div>

            <h1 className="font-['Playfair_Display'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
              <span className="text-[#1C1917]">Masukulu</span>
              <br />
              <span className="text-[#1C1917] italic">Miguel</span>
            </h1>

            <p className="text-lg text-[#78716C] max-w-md leading-relaxed mb-10">
              De Luanda, Angola. Constuo solucoes digitais que funcionam.
              Full-stack, inteligencia artificial e infraestrutura de redes.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a href="#projects" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold bg-[#1C1917] text-[#FAF8F5] rounded-full hover:bg-[#292524] transition-all">
                Ver projetos
                <ArrowDown className="w-4 h-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold border border-[#D6D3CC] text-[#1C1917] rounded-full hover:border-[#B48C3C] hover:text-[#B48C3C] transition-all">
                Contactar
              </a>
            </div>

            <div className="flex items-center gap-3">
              {[{ icon: Github, href: SITE_CONFIG.github }, { icon: Linkedin, href: SITE_CONFIG.linkedin }, { icon: Mail, href: `mailto:${SITE_CONFIG.email}` }].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-[#E8E5E0] flex items-center justify-center text-[#A8A29E] hover:text-[#B48C3C] hover:border-[#B48C3C] transition-all">
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: ok ? 1 : 0, scale: ok ? 1 : 0.95 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Gold corner accents */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[#B48C3C]" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-[#B48C3C]" />

              <div className="relative w-80 h-[480px] lg:w-[420px] lg:h-[560px] overflow-hidden">
                <img
                  src={`${BASE_PATH}/images/profile/masukulu-miguel.jpg`}
                  alt="Masukulu Miguel"
                  className="w-full h-full object-cover object-top grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/20 to-transparent" />
              </div>

              {/* Floating stat */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: ok ? 1 : 0, x: ok ? 0 : -20 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -left-8 bottom-24 bg-white px-5 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
              >
                <p className="font-['Playfair_Display'] text-3xl font-bold text-[#B48C3C]">5+</p>
                <p className="text-xs text-[#78716C] tracking-wide uppercase mt-1">Anos de experiencia</p>
              </motion.div>

              {/* Floating stat 2 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: ok ? 1 : 0, x: ok ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -right-8 top-16 bg-[#1C1917] px-5 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
              >
                <p className="font-['Playfair_Display'] text-3xl font-bold text-[#B48C3C]">50+</p>
                <p className="text-xs text-[#A8A29E] tracking-wide uppercase mt-1">Projetos</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: ok ? 1 : 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-[#A8A29E] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#D6D3CC] to-transparent" />
      </motion.div>
    </section>
  );
}
