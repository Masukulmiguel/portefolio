"use client";

import Link from "next/link";
import { Github, Linkedin, MessageCircle, Mail } from "lucide-react";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/lib/data/constants";

export default function Footer() {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Github,
    Linkedin,
    MessageCircle,
    Mail,
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-lg font-semibold text-foreground">
              Masukulu
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Criando experiências digitais com precisão e criatividade.
              Especializado em desenvolvimento e design web moderno.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold text-foreground">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold text-foreground">
              Contacto
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>hello@masukulu.dev</li>
              <li>Disponível para trabalho freelance</li>
            </ul>
            <div className="mt-4 flex items-center gap-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon = iconMap[link.icon] || Mail;
                return (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Masukulu. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((link) => {
              const Icon = iconMap[link.icon] || Mail;
              return (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
