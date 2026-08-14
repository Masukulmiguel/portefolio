"use client";

import { Github, Linkedin, MessageCircle, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 md:px-10 py-12 sm:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-lg font-bold text-white">
              Masukulu Miguel
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Tecnico de TI & Especialista em solucoes digitais.
              Criando experiencias digitais com precisao e criatividade.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-bold text-white">
              Links Rapidos
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Sobre", href: "#about" },
                { label: "Servicos", href: "#services" },
                { label: "Projetos", href: "#projects" },
                { label: "Experiencia", href: "#experience" },
                { label: "Contacto", href: "#contact" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-bold text-white">
              Contacto
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>{SITE_CONFIG.email}</li>
              <li>{SITE_CONFIG.whatsapp}</li>
              <li>Disponivel para trabalho freelance</li>
            </ul>
            <div className="mt-4 flex items-center gap-3">
              <a href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-4 w-4" />
              </a>
              <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle className="h-4 w-4" />
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 md:px-10 py-6">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Masukulu Miguel. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
