"use client";

import FadeIn from "@/components/ui/FadeIn";
import ContactButton from "@/components/ui/ContactButton";
import { SITE_CONFIG } from "@/lib/data/constants";

const navLinks = [
  { label: "Sobre", href: "#about" },
  { label: "Servicos", href: "#services" },
  { label: "Projetos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative flex h-screen flex-col overflow-x-clip">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full">
        <nav className="flex items-center justify-between px-6 pt-6 text-[#D7E2EA] md:px-10 md:pt-8">
          <a href="#home" className="font-bold text-lg tracking-wider uppercase">
            {SITE_CONFIG.name.split(" ")[0]}
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70 text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div className="flex-1 flex items-center">
        <FadeIn delay={0.15} y={40} className="w-full overflow-hidden">
          <h1 className="hero-heading w-full font-black uppercase leading-none tracking-tight whitespace-nowrap text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            Hi, i&apos;m {SITE_CONFIG.name.split(" ")[0].toLowerCase()}
          </h1>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="mt-auto flex items-end justify-between pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]" style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}>
            tecnico de ti & especialista em solucoes digitais
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
