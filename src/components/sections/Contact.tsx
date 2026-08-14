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
  Globe,
} from "lucide-react";
import { contactSchema, type ContactFormData } from "@/lib/validations/contact";
import { GlassCard } from "@/components/effects/GlassCard";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import SectionHeading from "@/components/layout/SectionHeading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/data/constants";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    color: "#6366f1",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: SITE_CONFIG.whatsapp,
    href: `https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, "")}`,
    color: "#22c55e",
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
    color: "#e5e7eb",
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
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Contacto" subtitle="Entre em Contacto" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <RevealOnScroll>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                    className="block text-sm font-medium text-text mb-2"
                  >
                    {field.label}
                  </label>
                  <Input
                    id={field.name}
                    type={field.type}
                    placeholder={`Seu ${field.label.toLowerCase()}`}
                    {...register(field.name)}
                    className={cn(
                      errors[field.name] && "border-red-500 focus:ring-red-500"
                    )}
                  />
                  {errors[field.name] && (
                    <p className="mt-1.5 text-xs text-red-400">
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
                  className="block text-sm font-medium text-text mb-2"
                >
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Sua mensagem..."
                  rows={5}
                  {...register("message")}
                  className={cn(
                    errors.message && "border-red-500 focus:ring-red-500"
                  )}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-400">
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
                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
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
                </Button>
              </motion.div>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm"
                >
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  Mensagem enviada com sucesso! Responderemos em breve.
                </motion.div>
              )}
            </form>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div className="space-y-6">
              <GlassCard className="p-6">
                <div className="space-y-4">
                  {contactMethods.map((method) => {
                    const Icon = method.icon;
                    return (
                      <a
                        key={method.label}
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-card/50 transition-colors group"
                      >
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                          style={{ backgroundColor: `${method.color}15` }}
                        >
                          <Icon
                            className="w-5 h-5"
                            style={{ color: method.color }}
                          />
                        </div>
                        <div>
                          <p className="text-xs text-muted">{method.label}</p>
                          <p className="text-sm font-medium text-text">
                            {method.value}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 flex flex-col items-center justify-center gap-3 border border-border/50">
                  <MapPin className="w-8 h-8 text-primary/40" />
                  <div className="text-center">
                    <p className="text-sm font-medium text-text">
                      Luanda, Angola
                    </p>
                    <p className="text-xs text-muted mt-0.5">
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
                <p className="text-sm text-muted">
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
