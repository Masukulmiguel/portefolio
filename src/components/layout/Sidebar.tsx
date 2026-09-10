"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  Code2,
  FolderGit2,
  Clock,
  Terminal,
  Mail,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "hero", label: "Inicio", icon: Home },
  { id: "about", label: "Sobre", icon: User },
  { id: "services", label: "Servicos", icon: Briefcase },
  { id: "tech", label: "Tech Stack", icon: Code2 },
  { id: "projects", label: "Projetos", icon: FolderGit2 },
  { id: "experience", label: "Experiencia", icon: Clock },
  { id: "terminal", label: "Terminal", icon: Terminal },
  { id: "contact", label: "Contacto", icon: Mail },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Desktop Sidebar - compact */}
      <aside className="hidden lg:flex flex-col w-[60px] h-screen sticky top-0 border-r bg-[var(--bg-sidebar)] border-[var(--border-primary)] items-center py-4">
        {/* Logo */}
        <span className="font-['Playfair_Display'] text-lg font-bold text-[var(--accent)] mb-6">M</span>

        {/* Navigation - icons only */}
        <nav className="flex-1 flex flex-col items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200",
                  isActive
                    ? "bg-[var(--accent-muted)] text-[var(--accent)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-muted)]"
                )}
                title={item.label}
              >
                <Icon className="w-4 h-4" />
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Bottom Nav */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[var(--bg-sidebar)] border-t border-[var(--border-primary)] backdrop-blur-xl">
        <div className="flex items-center justify-around px-2 py-2">
          {navItems.slice(0, 5).map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "flex flex-col items-center gap-1 px-3 py-1.5 rounded-lg transition-colors",
                  isActive
                    ? "text-[var(--accent)]"
                    : "text-[var(--text-muted)]"
                )}
              >
                <Icon className="w-4 h-4" />
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
