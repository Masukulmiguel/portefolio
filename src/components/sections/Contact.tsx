"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Send,
  Mail,
  MessageCircle,
  Linkedin,
  Github,
  MapPin,
  Loader2,
  CheckCircle,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/data/constants";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const methods = [
    { icon: Mail, label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: SITE_CONFIG.whatsapp,
      href: `https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, "")}`,
    },
    { icon: Linkedin, label: "LinkedIn", value: "LinkedIn", href: SITE_CONFIG.linkedin },
    { icon: Github, label: "GitHub", value: "GitHub", href: SITE_CONFIG.github },
  ];

  return (
    <section id="contact" className="py-24 px-[10px] bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[var(--accent)]" />
            <span className="text-xs font-semibold text-[var(--accent)] tracking-[0.2em] uppercase">
              Contacto
            </span>
          </div>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-16">
            Vamos{" "}
            <span className="italic text-[var(--accent)]">conversar.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={submit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-[var(--text-muted)] mb-3 tracking-wider uppercase">
                    Nome
                  </label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full px-5 py-4 bg-[var(--bg-card)] border border-[var(--border-primary)] text-[var(--text-primary)] text-sm rounded-xl focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-[var(--text-faint)]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[var(--text-muted)] mb-3 tracking-wider uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full px-5 py-4 bg-[var(--bg-card)] border border-[var(--border-primary)] text-[var(--text-primary)] text-sm rounded-xl focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-[var(--text-faint)]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[var(--text-muted)] mb-3 tracking-wider uppercase">
                  Assunto
                </label>
                <input
                  type="text"
                  placeholder="Assunto"
                  className="w-full px-5 py-4 bg-[var(--bg-card)] border border-[var(--border-primary)] text-[var(--text-primary)] text-sm rounded-xl focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-[var(--text-faint)]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[var(--text-muted)] mb-3 tracking-wider uppercase">
                  Mensagem
                </label>
                <textarea
                  rows={5}
                  placeholder="Sua mensagem..."
                  className="w-full px-5 py-4 bg-[var(--bg-card)] border border-[var(--border-primary)] text-[var(--text-primary)] text-sm rounded-xl focus:outline-none focus:border-[var(--accent)] transition-colors resize-none placeholder:text-[var(--text-faint)]"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold bg-[var(--accent)] text-[var(--bg-primary)] rounded-xl hover:bg-[var(--accent-hover)] transition-colors disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> A enviar...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Enviar mensagem
                  </>
                )}
              </button>
              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-[var(--success)]"
                >
                  <CheckCircle className="w-4 h-4" /> Mensagem enviada com sucesso!
                </motion.div>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-5"
          >
            {methods.map((m) => (
              <a
                key={m.label}
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-6 bg-[var(--bg-card)] border border-[var(--border-primary)] rounded-xl hover:border-[var(--accent)]/30 transition-all group"
              >
                <div className="w-12 h-12 bg-[var(--bg-muted)] flex items-center justify-center rounded-xl group-hover:bg-[var(--accent-muted)] transition-colors">
                  <m.icon className="w-5 h-5 text-[var(--text-faint)] group-hover:text-[var(--accent)] transition-colors" />
                </div>
                <div className="py-1">
                  <p className="text-xs text-[var(--text-faint)] uppercase tracking-[0.15em] mb-1">
                    {m.label}
                  </p>
                  <p className="text-sm font-medium text-[var(--text-primary)]">{m.value}</p>
                </div>
              </a>
            ))}

            <div className="flex items-center gap-5 p-6 bg-[var(--bg-card)] border border-[var(--border-primary)] rounded-xl">
              <div className="w-12 h-12 bg-[var(--bg-muted)] flex items-center justify-center rounded-xl">
                <MapPin className="w-5 h-5 text-[var(--text-faint)]" />
              </div>
              <div className="py-1">
                <p className="text-xs text-[var(--text-faint)] uppercase tracking-[0.15em] mb-1">
                  Localizacao
                </p>
                <p className="text-sm font-medium text-[var(--text-primary)]">Luanda, Angola</p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-6 py-4">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--success)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--success)]" />
              </span>
              <span className="text-sm text-[var(--text-muted)]">Disponivel para novos projetos</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
