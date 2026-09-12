"use client";

import { useRef, useState } from "react";
import { Download, Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data/constants";
import { experience } from "@/lib/data/experience";
import { technologies } from "@/lib/data/technologies";
import { projects } from "@/lib/data/projects";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function RecruiterToggle() {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [showResume, setShowResume] = useState(false);

  const handleDownload = () => {
    setShowResume(true);
    setTimeout(() => {
      window.print();
      setTimeout(() => setShowResume(false), 500);
    }, 300);
  };

  return (
    <>
      <button
        onClick={handleDownload}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-muted)]"
        title="Baixar CV"
      >
        <Download className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">CV</span>
      </button>

      {showResume && (
        <div className="fixed inset-0 z-[9999] bg-white overflow-auto" style={{ printColorAdjust: "exact" }}>
          <div ref={resumeRef} className="min-h-screen bg-white text-[#1C1917]">
            {/* Header with photo */}
            <div className="bg-[#1C1917] text-white p-8">
              <div className="max-w-[800px] mx-auto flex items-center gap-6">
                <img
                  src={`${BASE_PATH}/images/profile/masukulu-miguel.jpg`}
                  alt="Masukulu Miguel"
                  className="w-24 h-24 rounded-full object-cover border-3 border-[#B48C3C]"
                />
                <div>
                  <h1 className="text-3xl font-bold font-['Playfair_Display']">Masukulu Miguel</h1>
                  <p className="text-lg text-[#B48C3C] font-medium">Tecnico de TI</p>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-300">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Luanda, Angola</span>
                    <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5" /> {SITE_CONFIG.email}</span>
                    <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5" /> {SITE_CONFIG.whatsapp}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-[800px] mx-auto p-8">
              {/* Summary */}
              <section className="mb-8">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-3 text-[#B48C3C] border-b border-[#E8E5E0] pb-2">Resumo Profissional</h2>
                <p className="text-sm text-[#57534E] leading-relaxed">
                  Tecnico de informatica com 5+ anos de experiencia em desenvolvimento full-stack,
                  infraestrutura de TI, redes e inteligencia artificial. Especializado em criar solucoes
                  digitais eficientes para empresas em Angola e Africa.
                </p>
              </section>

              {/* Experience */}
              <section className="mb-8">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 text-[#B48C3C] border-b border-[#E8E5E0] pb-2">Experiencia Profissional</h2>
                <div className="space-y-5">
                  {experience.map((e) => (
                    <div key={e.id} className="relative pl-4 border-l-2 border-[#B48C3C]">
                      <div className="flex items-baseline justify-between">
                        <h3 className="font-bold text-[#1C1917]">{e.company}</h3>
                        <span className="text-xs text-[#A8A29E] bg-[#F5F0E8] px-2 py-0.5 rounded">{e.period}</span>
                      </div>
                      <p className="text-sm text-[#B48C3C] font-medium italic mb-1">{e.role}</p>
                      <ul className="list-disc list-inside text-sm text-[#57534E] space-y-0.5">
                        {e.achievements.slice(0, 3).map((a, j) => (
                          <li key={j}>{a}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Skills */}
              <section className="mb-8">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-3 text-[#B48C3C] border-b border-[#E8E5E0] pb-2">Competencias Tecnicas</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-bold text-[#1C1917] mb-2">Frontend & Backend</p>
                    <div className="flex flex-wrap gap-1">
                      {technologies.filter(t => ["React", "Next.js", "Vue.js", "TypeScript", "Node.js", "Laravel", "PHP", "Python"].includes(t.name)).map((t) => (
                        <span key={t.name} className="px-2 py-0.5 text-xs bg-[#B48C3C] text-white rounded">
                          {t.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1C1917] mb-2">Infraestrutura & Redes</p>
                    <div className="flex flex-wrap gap-1">
                      {technologies.filter(t => ["Docker", "Linux", "Windows Server", "Mikrotik", "Cisco"].includes(t.name)).map((t) => (
                        <span key={t.name} className="px-2 py-0.5 text-xs bg-[#1C1917] text-white rounded">
                          {t.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Projects */}
              <section className="mb-8">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-3 text-[#B48C3C] border-b border-[#E8E5E0] pb-2">Projetos Destacados</h2>
                <div className="space-y-3">
                  {projects.slice(0, 3).map((p) => (
                    <div key={p.id} className="flex items-start gap-3 p-3 bg-[#F9F7F4] rounded-lg">
                      <ExternalLink className="w-4 h-4 mt-0.5 text-[#B48C3C] shrink-0" />
                      <div>
                        <h3 className="font-bold text-sm text-[#1C1917]">{p.title}</h3>
                        <p className="text-xs text-[#57534E]">{p.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Links */}
              <section className="pt-6 border-t-2 border-[#1C1917]">
                <div className="flex gap-6 text-sm text-[#57534E]">
                  <span className="flex items-center gap-1"><Github className="w-4 h-4" /> github.com/Masukulmiguel</span>
                  <span className="flex items-center gap-1"><Linkedin className="w-4 h-4" /> linkedin.com/in/masukulu-miguel</span>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media print {
          body * {
            visibility: hidden !important;
          }
          .fixed.inset-0.z-\\[9999\\],
          .fixed.inset-0.z-\\[9999\\] * {
            visibility: visible !important;
          }
          .fixed.inset-0.z-\\[9999\\] {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
