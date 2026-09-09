"use client";

import { Github, Linkedin, MessageCircle, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data/constants";

export default function Footer() {
  return (
    <footer className="bg-[#1C1917] py-12 px-8 md:px-24">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <a href="#home" className="font-['Playfair_Display'] text-xl font-bold text-[#FAF8F5]">
            Masukulu<span className="text-[#B48C3C]">.</span>
          </a>
          <p className="text-xs text-[#78716C] mt-1">Tecnico de Informatica</p>
        </div>

        <div className="flex gap-2">
          {[{ icon: Github, href: SITE_CONFIG.github }, { icon: Linkedin, href: SITE_CONFIG.linkedin }, { icon: MessageCircle, href: `https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, "")}` }, { icon: Mail, href: `mailto:${SITE_CONFIG.email}` }].map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-[#44403C] flex items-center justify-center text-[#78716C] hover:text-[#B48C3C] hover:border-[#B48C3C] transition-all">
              <s.icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        <p className="text-xs text-[#78716C]">&copy; {new Date().getFullYear()} Masukulu Miguel</p>
      </div>
    </footer>
  );
}
