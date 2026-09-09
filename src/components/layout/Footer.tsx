"use client";

import { Github, Linkedin, MessageCircle, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data/constants";

export default function Footer() {
  return (
    <footer className="bg-[#0d1117] border-t border-[#30363d]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#home" className="flex items-center gap-1.5 text-lg font-bold tracking-tight">
              <span className="text-[#f0f6fc]">Masukulu</span>
              <span className="text-[#2563eb]">.</span>
            </a>
            <p className="text-sm text-[#484f58] mt-1.5">
              Tecnico de TI & Especialista Digital
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#21262d] border border-[#30363d] flex items-center justify-center text-[#8b949e] hover:text-[#f0f6fc] hover:border-[#484f58] transition-all duration-200"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#21262d] border border-[#30363d] flex items-center justify-center text-[#8b949e] hover:text-[#f0f6fc] hover:border-[#484f58] transition-all duration-200"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#21262d] border border-[#30363d] flex items-center justify-center text-[#8b949e] hover:text-[#f0f6fc] hover:border-[#484f58] transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="w-9 h-9 rounded-lg bg-[#21262d] border border-[#30363d] flex items-center justify-center text-[#8b949e] hover:text-[#f0f6fc] hover:border-[#484f58] transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-[#484f58]">
            &copy; {new Date().getFullYear()} Masukulu Miguel. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
