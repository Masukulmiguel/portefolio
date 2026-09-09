"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Send, Mail, MessageCircle, Linkedin, Github, MapPin, Loader2, CheckCircle } from "lucide-react";
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
    { icon: MessageCircle, label: "WhatsApp", value: SITE_CONFIG.whatsapp, href: `https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, "")}` },
    { icon: Linkedin, label: "LinkedIn", value: "LinkedIn", href: SITE_CONFIG.linkedin },
    { icon: Github, label: "GitHub", value: "GitHub", href: SITE_CONFIG.github },
  ];

  return (
    <section id="contact" className="py-28 px-8 md:px-24 bg-[#F5F0E8]">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-[#B48C3C]" />
            <span className="text-xs font-semibold text-[#B48C3C] tracking-[0.25em] uppercase">Contacto</span>
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#1C1917] mb-16">
            Vamos <span className="italic text-[#B48C3C]">conversar.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            <form onSubmit={submit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-[#78716C] mb-2 tracking-wider uppercase">Nome</label>
                  <input type="text" placeholder="Seu nome" className="w-full px-4 py-3.5 bg-white border border-[#E8E5E0] text-[#1C1917] text-sm focus:outline-none focus:border-[#B48C3C] transition-colors placeholder:text-[#D6D3CC]" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#78716C] mb-2 tracking-wider uppercase">Email</label>
                  <input type="email" placeholder="seu@email.com" className="w-full px-4 py-3.5 bg-white border border-[#E8E5E0] text-[#1C1917] text-sm focus:outline-none focus:border-[#B48C3C] transition-colors placeholder:text-[#D6D3CC]" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#78716C] mb-2 tracking-wider uppercase">Assunto</label>
                <input type="text" placeholder="Assunto" className="w-full px-4 py-3.5 bg-white border border-[#E8E5E0] text-[#1C1917] text-sm focus:outline-none focus:border-[#B48C3C] transition-colors placeholder:text-[#D6D3CC]" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#78716C] mb-2 tracking-wider uppercase">Mensagem</label>
                <textarea rows={5} placeholder="Sua mensagem..." className="w-full px-4 py-3.5 bg-white border border-[#E8E5E0] text-[#1C1917] text-sm focus:outline-none focus:border-[#B48C3C] transition-colors resize-none placeholder:text-[#D6D3CC]" />
              </div>
              <button type="submit" disabled={loading} className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold bg-[#1C1917] text-[#FAF8F5] hover:bg-[#292524] transition-colors disabled:opacity-50">
                {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> A enviar...</> : <><Send className="w-4 h-4" /> Enviar mensagem</>}
              </button>
              {sent && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-sm text-[#B48C3C]">
                  <CheckCircle className="w-4 h-4" /> Mensagem enviada com sucesso!
                </motion.div>
              )}
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }} className="space-y-4">
            {methods.map((m) => (
              <a key={m.label} href={m.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white border border-[#E8E5E0] hover:border-[#B48C3C] transition-all group">
                <div className="w-11 h-11 bg-[#F5F0E8] flex items-center justify-center group-hover:bg-[#B48C3C]/10 transition-colors">
                  <m.icon className="w-5 h-5 text-[#A8A29E] group-hover:text-[#B48C3C] transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] text-[#A8A29E] uppercase tracking-[0.2em] mb-0.5">{m.label}</p>
                  <p className="text-sm font-medium text-[#1C1917]">{m.value}</p>
                </div>
              </a>
            ))}

            <div className="flex items-center gap-4 p-4 bg-white border border-[#E8E5E0]">
              <div className="w-11 h-11 bg-[#F5F0E8] flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#A8A29E]" />
              </div>
              <div>
                <p className="text-[10px] text-[#A8A29E] uppercase tracking-[0.2em] mb-0.5">Localizacao</p>
                <p className="text-sm font-medium text-[#1C1917]">Luanda, Angola</p>
              </div>
            </div>

            <div className="flex items-center gap-2 px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]" />
              </span>
              <span className="text-sm text-[#78716C]">Disponivel para novos projetos</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
