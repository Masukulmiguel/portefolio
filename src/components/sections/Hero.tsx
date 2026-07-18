"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Github, Linkedin, MessageCircle, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/effects/MagneticButton";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { FloatingShapes } from "@/components/effects/FloatingShapes";
import { AnimatedGrid } from "@/components/effects/AnimatedGrid";

const Scene = dynamic(
  () => import("@/components/three/Scene").then((mod) => mod.Scene),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/5" />
    ),
  }
);

const titles = [
  "Engenheiro Tecnológico",
  "Especialista em IA",
  "Programador Full Stack",
  "Entusiasta de Cibersegurança",
  "Especialista em Infraestrutura de Rede",
];

const stats = [
  { value: 50, suffix: "+", label: "Projetos" },
  { value: 5, suffix: "+", label: "Anos de Experiência" },
  { value: 30, suffix: "+", label: "Tecnologias" },
];

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: MessageCircle, href: "#", label: "WhatsApp" },
  { icon: Mail, href: "#", label: "Email" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <AuroraBackground className="absolute inset-0">
        <div />
      </AuroraBackground>

      <AnimatedGrid className="absolute inset-0 opacity-40" />

      <FloatingShapes className="absolute inset-0 opacity-30" />

      <div className="absolute inset-0 z-0">
        <Scene className="w-full h-full" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="flex flex-col items-center gap-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full",
              "bg-card/60 backdrop-blur-md border border-border",
              "text-sm text-muted-foreground"
            )}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            Disponível para trabalho
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          >
            <span className="gradient-text">Masukulu Miguel</span>
          </motion.h1>

          <div className="h-12 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={titleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-xl md:text-2xl text-muted-foreground font-medium"
              >
                {titles[titleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-muted max-w-2xl mx-auto text-base md:text-lg"
          >
            Construindo o futuro através da tecnologia, linha de código de cada vez.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-2"
          >
            <MagneticButton>
              <Link
                href="#projects"
                className={cn(
                  "px-8 py-3.5 rounded-xl font-semibold text-sm",
                  "bg-primary text-primary-foreground",
                  "hover:bg-primary/90 transition-colors duration-200",
                  "shadow-lg shadow-primary/25"
                )}
              >
                Ver Projetos
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="#contact"
                className={cn(
                  "px-8 py-3.5 rounded-xl font-semibold text-sm",
                  "border border-border bg-card/50 backdrop-blur-sm",
                  "hover:bg-card/80 transition-colors duration-200",
                  "text-foreground"
                )}
              >
                Contactar
              </Link>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="grid grid-cols-3 gap-8 sm:gap-16 mt-8"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold gradient-text">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex items-center gap-5 mt-6"
          >
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.2, color: "var(--color-primary)" }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-muted-foreground"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
