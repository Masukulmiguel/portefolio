"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Send, Mail, MessageCircle, Linkedin, Github, MapPin, Loader2, CheckCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data/constants";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  const contactMethods = [
    { icon: Mail, label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
    { icon: MessageCircle, label: "WhatsApp", value: SITE_CONFIG.whatsapp, href: `https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, "")}` },
    { icon: Linkedin, label: "LinkedIn", value: "LinkedIn", href: SITE_CONFIG.linkedin },
    { icon: Github, label: "GitHub", value: "GitHub", href: SITE_CONFIG.github },
  ];

  return (
    <section id="contact" className="relative py-24 px-6 md:px-12 lg:px-20 bg-[#161b22]">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-[#2563eb] text-sm font-semibold tracking-wider uppercase mb-3">
            Contacto
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-[#f0f6fc]">Vamos conversar.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-[#c9d1d9] mb-2">Nome</label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 rounded-xl bg-[#0d1117] border border-[#30363d] text-[#f0f6fc] text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]/30 transition-all duration-200 placeholder:text-[#484f58]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#c9d1d9] mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#0d1117] border border-[#30363d] text-[#f0f6fc] text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]/30 transition-all duration-200 placeholder:text-[#484f58]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#c9d1d9] mb-2">Assunto</label>
                <input
                  type="text"
                  placeholder="Assunto da mensagem"
                  className="w-full px-4 py-3 rounded-xl bg-[#0d1117] border border-[#30363d] text-[#f0f6fc] text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]/30 transition-all duration-200 placeholder:text-[#484f58]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#c9d1d9] mb-2">Mensagem</label>
                <textarea
                  rows={5}
                  placeholder="Sua mensagem..."
                  className="w-full px-4 py-3 rounded-xl bg-[#0d1117] border border-[#30363d] text-[#f0f6fc] text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]/30 transition-all duration-200 resize-none placeholder:text-[#484f58]"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#2563eb] rounded-lg hover:bg-[#1d4ed8] transition-all duration-200 disabled:opacity-50 shadow-lg shadow-[#2563eb]/20"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    A enviar...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar mensagem
                  </>
                )}
              </button>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-[#22c55e]"
                >
                  <CheckCircle className="w-4 h-4" />
                  Mensagem enviada com sucesso!
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="space-y-4"
          >
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#0d1117] border border-[#30363d] hover:border-[#484f58] transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#21262d] flex items-center justify-center group-hover:bg-[#2563eb]/10 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#8b949e] group-hover:text-[#2563eb] transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-xs text-[#484f58] uppercase tracking-wider mb-0.5 font-medium">{method.label}</p>
                    <p className="text-sm font-medium text-[#f0f6fc]">{method.value}</p>
                  </div>
                </a>
              );
            })}

            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0d1117] border border-[#30363d]">
              <div className="w-11 h-11 rounded-lg bg-[#21262d] flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#8b949e]" />
              </div>
              <div>
                <p className="text-xs text-[#484f58] uppercase tracking-wider mb-0.5 font-medium">Localizacao</p>
                <p className="text-sm font-medium text-[#f0f6fc]">Luanda, Angola</p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22c55e]" />
              </span>
              <span className="text-sm text-[#8b949e]">Disponivel para novos projetos</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
