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
    color: "#111827",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: SITE_CONFIG.whatsapp,
    href: `https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, "")}`,
    color: "#16a34a",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Conectar no LinkedIn",
    href: SITE_CONFIG.linkedin,
    color: "#0a66c2",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Ver Perfil no GitHub",
    href: SITE_CONFIG.github,
    color: "#111827",
  },
];

const fieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

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
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-3">
              Entre em Contacto
            </p>
            <h2
              className="font-black uppercase text-center text-gray-900 leading-none tracking-tight"
              style={{ fontSize: "clamp(2rem, 8vw, 100px)" }}
            >
              Contacto
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <RevealOnScroll>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {[
                { name: "name" as const, label: "Nome", type: "text" },
                { name: "email" as const, label: "Email", type: "email" },
                { name: "subject" as const, label: "Assunto", type: "text" },
              ].map((field, i) => (
                <motion.div
                  key={field.name}
                  custom={i}
                  variants={fieldVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    type={field.type}
                    placeholder={`Seu ${field.label.toLowerCase()}`}
                    {...register(field.name)}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl border bg-white text-gray-900 text-sm transition-colors",
                      "focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent",
                      errors[field.name] ? "border-red-300" : "border-gray-200"
                    )}
                  />
                  {errors[field.name] && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors[field.name]?.message}
                    </p>
                  )}
                </motion.div>
              ))}

              <motion.div
                custom={3}
                variants={fieldVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  placeholder="Sua mensagem..."
                  rows={5}
                  {...register("message")}
                  className={cn(
                    "w-full px-4 py-3 rounded-xl border bg-white text-gray-900 text-sm transition-colors resize-none",
                    "focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent",
                    errors.message ? "border-red-300" : "border-gray-200"
                  )}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.message?.message}
                  </p>
                )}
              </motion.div>

              <motion.div
                custom={4}
                variants={fieldVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200",
                    "bg-gray-900 text-white hover:bg-gray-800 shadow-lg shadow-gray-900/20",
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
              </motion.div>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm"
                >
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  Mensagem enviada com sucesso!
                </motion.div>
              )}
            </form>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div className="space-y-5">
              <GlassCard className="p-8">
                <div className="space-y-4">
                  {contactMethods.map((method) => {
                    const Icon = method.icon;
                    return (
                      <a
                        key={method.label}
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                      >
                        <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 bg-gray-100 group-hover:bg-gray-200 transition-colors">
                          <Icon className="w-5 h-5 text-gray-700" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-medium">{method.label}</p>
                          <p className="text-sm font-semibold text-gray-900">
                            {method.value}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </GlassCard>

              <GlassCard className="p-8">
                <div className="aspect-video rounded-xl bg-gray-50 border border-gray-100 flex flex-col items-center justify-center gap-3">
                  <MapPin className="w-8 h-8 text-gray-400" />
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-900">
                      Luanda, Angola
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Disponível Mundialmente (Remoto)
                    </p>
                  </div>
                </div>
              </GlassCard>

              <div className="flex items-center gap-3 px-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>
                <p className="text-sm text-gray-600 font-medium">
                  Disponível para novos projetos
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
