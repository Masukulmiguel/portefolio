"use client";

import { Github, Linkedin, MessageCircle, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data/constants";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-primary)] py-10 px-[10px] bg-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <a href="#hero" className="font-['Playfair_Display'] text-lg font-bold text-[var(--text-primary)]">
            Masukulu<span className="text-[var(--accent)]">.</span>
          </a>
          <span className="text-sm text-[var(--text-faint)]">Tecnico de Informatica</span>
        </div>

        <div className="flex gap-3">
          {[
            { icon: Github, href: SITE_CONFIG.github },
            { icon: Linkedin, href: SITE_CONFIG.linkedin },
            { icon: MessageCircle, href: `https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, "")}` },
            { icon: Mail, href: `mailto:${SITE_CONFIG.email}` },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-[var(--border-primary)] flex items-center justify-center rounded-lg text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
            >
              <s.icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        <p className="text-sm text-[var(--text-faint)]">&copy; {new Date().getFullYear()} Masukulu Miguel</p>
      </div>
    </footer>
  );
}
