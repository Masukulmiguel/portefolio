"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
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
import { contactSchema, type ContactFormData } from "@/lib/validations/contact";
import { GlassCard } from "@/components/effects/GlassCard";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { SITE_CONFIG } from "@/lib/data/constants";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: SITE_CONFIG.whatsapp,
    href: `https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, "")}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "LinkedIn",
    href: SITE_CONFIG.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "GitHub",
    href: SITE_CONFIG.github,
  },
];

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="bg-gray-50 py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-10">
      <div className="max-w-5xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-14 sm:mb-18">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3">
              Fale Comigo
            </p>
            <h2
              className="font-black uppercase text-gray-900 leading-none tracking-tight"
              style={{ fontSize: "clamp(2rem, 8vw, 100px)" }}
            >
              Contacto
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RevealOnScroll>
            <GlassCard className="p-6 sm:p-8 h-full">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Enviar Mensagem</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {[
                  { name: "name" as const, label: "Nome", type: "text" },
                  { name: "email" as const, label: "Email", type: "email" },
                  { name: "subject" as const, label: "Assunto", type: "text" },
                ].map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      type={field.type}
                      placeholder={`Seu ${field.label.toLowerCase()}`}
                      {...register(field.name)}
                      className={cn(
                        "w-full px-4 py-2.5 rounded-lg border bg-white text-gray-900 text-sm",
                        "focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent",
                        errors[field.name] ? "border-red-300" : "border-gray-200"
                      )}
                    />
                    {errors[field.name] && (
                      <p className="mt-1 text-xs text-red-500">{errors[field.name]?.message}</p>
                    )}
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    placeholder="Sua mensagem..."
                    rows={4}
                    {...register("message")}
                    className={cn(
                      "w-full px-4 py-2.5 rounded-lg border bg-white text-gray-900 text-sm resize-none",
                      "focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent",
                      errors.message ? "border-red-300" : "border-gray-200"
                    )}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">{errors.message?.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm transition-all",
                    "bg-gray-900 text-white hover:bg-gray-800",
                    "disabled:opacity-50 disabled:cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      A enviar...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </button>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm"
                  >
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    Mensagem enviada com sucesso!
                  </motion.div>
                )}
              </form>
            </GlassCard>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="flex flex-col gap-6 h-full">
              <GlassCard className="p-6 sm:p-8 flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-5">Contactos</h3>
                <div className="space-y-3">
                  {contactMethods.map((method) => {
                    const Icon = method.icon;
                    return (
                      <a
                        key={method.label}
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-gray-100 group-hover:bg-gray-200 transition-colors">
                          <Icon className="w-4 h-4 text-gray-600" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs text-gray-400 font-medium">{method.label}</p>
                          <p className="text-sm font-semibold text-gray-900 truncate">
                            {method.value}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </GlassCard>

              <GlassCard className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-100">
                    <MapPin className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Luanda, Angola</p>
                    <p className="text-xs text-gray-400">Disponivel Mundialmente</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                  </span>
                  <p className="text-sm text-gray-600 font-medium">
                    Disponivel para novos projetos
                  </p>
                </div>
              </GlassCard>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
