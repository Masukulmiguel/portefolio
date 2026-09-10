"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Calendar,
} from "lucide-react";
import { SITE_CONFIG, BASE_PATH } from "@/lib/data/constants";

export default function HeroSection() {
  const [ok, setOk] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    setOk(true);
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("pt-AO", {
          timeZone: "Africa/Luanda",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center px-8 lg:px-16 py-16">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: ok ? 1 : 0, y: ok ? 0 : 30 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative">
              <div className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border-2 border-[var(--border-primary)] shadow-lg">
                <img
                  src={`${BASE_PATH}/images/profile/masukulu-miguel.jpg`}
                  alt="Masukulu Miguel"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/30 to-transparent" />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: ok ? 1 : 0, scale: ok ? 1 : 0.8 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-[var(--bg-card)] border border-[var(--border-primary)] rounded-full shadow-lg"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--success)] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--success)]" />
                </span>
                <span className="text-xs font-medium text-[var(--text-secondary)]">Disponivel</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: ok ? 1 : 0, y: ok ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[var(--accent)]" />
              <span className="text-xs font-semibold text-[var(--accent)] tracking-[0.2em] uppercase">
                Tecnico de Informatica
              </span>
            </div>

            <h1 className="font-['Playfair_Display'] text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1] tracking-tight mb-6">
              <span className="text-[var(--text-primary)]">Masukulu</span>
              <br />
              <span className="text-[var(--text-primary)] italic">Miguel</span>
            </h1>

            <p className="text-lg text-[var(--text-muted)] max-w-xl leading-relaxed mb-10 py-5">
              De Luanda, Angola. Constuo solucoes digitais que funcionam.
              Full-stack, inteligencia artificial e infraestrutura de redes.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-10">
              <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                <MapPin className="w-4 h-4 text-[var(--accent)]" />
                <span>Luanda, Angola</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                <Clock className="w-4 h-4 text-[var(--accent)]" />
                <span>{time} (WAT)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                <Calendar className="w-4 h-4 text-[var(--accent)]" />
                <span>5+ anos experiencia</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold bg-[var(--accent)] text-[var(--bg-primary)] rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
              >
                Ver projetos
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold border border-[var(--border-secondary)] text-[var(--text-primary)] rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
              >
                Contactar
              </a>
            </div>

            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: SITE_CONFIG.github, label: "GitHub" },
                { icon: Linkedin, href: SITE_CONFIG.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${SITE_CONFIG.email}`, label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg border border-[var(--border-primary)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
                  title={s.label}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: ok ? 1 : 0, y: ok ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-5"
        >
          {[
            { value: "5+", label: "Anos" },
            { value: "50+", label: "Projetos" },
            { value: "30+", label: "Clientes" },
            { value: "10+", label: "Tecnologias" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-6 bg-[var(--bg-card)] border border-[var(--border-primary)] rounded-xl text-center"
            >
              <p className="font-['Playfair_Display'] text-3xl font-bold text-[var(--accent)] mb-2">
                {stat.value}
              </p>
              <p className="text-xs text-[var(--text-muted)] tracking-wider uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
