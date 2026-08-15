"use client";

import { Github, Linkedin, MessageCircle, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data/constants";

export default function Footer() {
  return (
    <footer className="bg-[#09090b] border-t border-[#27272a]">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-lg font-bold tracking-tight">
              <span className="text-[#fafafa]">masukulu</span>
              <span className="text-[#f59e0b]">.</span>
            </a>
            <p className="text-sm text-[#52525b] mt-2">
              Tecnico de TI & Especialista Digital
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#18181b] border border-[#27272a] flex items-center justify-center text-[#71717a] hover:text-[#fafafa] hover:border-[#3f3f46] transition-colors duration-200"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#18181b] border border-[#27272a] flex items-center justify-center text-[#71717a] hover:text-[#fafafa] hover:border-[#3f3f46] transition-colors duration-200"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#18181b] border border-[#27272a] flex items-center justify-center text-[#71717a] hover:text-[#fafafa] hover:border-[#3f3f46] transition-colors duration-200"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="w-10 h-10 rounded-full bg-[#18181b] border border-[#27272a] flex items-center justify-center text-[#71717a] hover:text-[#fafafa] hover:border-[#3f3f46] transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-[#52525b]">
            &copy; {new Date().getFullYear()} Masukulu Miguel
          </p>
        </div>
      </div>
    </footer>
  );
}
