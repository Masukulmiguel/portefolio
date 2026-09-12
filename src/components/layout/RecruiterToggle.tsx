"use client";

import { useRef } from "react";
import { FileText, Download } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data/constants";
import { experience } from "@/lib/data/experience";
import { technologies } from "@/lib/data/technologies";
import { projects } from "@/lib/data/projects";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";

export default function RecruiterToggle() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!resumeRef.current) return;

    const html2canvas = (await import("html2canvas")).default;
    const jsPDF = (await import("jspdf")).default;

    const canvas = await html2canvas(resumeRef.current, {
      scale: 2,
      useCORS: true,
      logging: false,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("CV_Masukulu_Miguel.pdf");
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

      {/* Hidden Resume for PDF generation */}
      <div className="fixed -left-[9999px] top-0">
        <div ref={resumeRef} className="min-h-screen bg-white text-[#1C1917] p-8 md:p-16" style={{ width: "800px" }}>
          <div className="max-w-[800px] mx-auto">
            <div className="flex items-start justify-between mb-8 pb-6 border-b-2 border-[#1C1917]">
              <div>
                <h1 className="text-4xl font-bold font-['Playfair_Display']">Masukulu Miguel</h1>
                <p className="text-lg text-[#78716C] mt-1">Tecnico de TI</p>
                <div className="flex flex-wrap gap-4 mt-3 text-sm text-[#57534E]">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Luanda, Angola</span>
                  <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5" /> {SITE_CONFIG.email}</span>
                  <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5" /> {SITE_CONFIG.whatsapp}</span>
                </div>
              </div>
            </div>

            <section className="mb-8">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-3 text-[#B48C3C]">Resumo</h2>
              <p className="text-sm text-[#57534E] leading-relaxed">
                Tecnico de informatica com 5+ anos de experiencia em desenvolvimento full-stack,
                infraestrutura de TI, redes e inteligencia artificial. Especializado em criar solucoes
                digitais eficientes para empresas em Angola e Africa.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 text-[#B48C3C]">Experiencia Profissional</h2>
              <div className="space-y-6">
                {experience.map((e) => (
                  <div key={e.id} className="border-l-2 border-[#E8E5E0] pl-4">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-bold text-[#1C1917]">{e.company}</h3>
                      <span className="text-xs text-[#A8A29E]">{e.period}</span>
                    </div>
                    <p className="text-sm text-[#78716C] italic mb-2">{e.role}</p>
                    <ul className="list-disc list-inside text-sm text-[#57534E] space-y-1">
                      {e.achievements.slice(0, 3).map((a, j) => (
                        <li key={j}>{a}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-3 text-[#B48C3C]">Competencias Tecnicas</h2>
              <div className="flex flex-wrap gap-2">
                {technologies.slice(0, 20).map((t) => (
                  <span key={t.name} className="px-3 py-1 text-xs bg-[#F5F0E8] text-[#57534E] rounded">
                    {t.name}
                  </span>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-3 text-[#B48C3C]">Projetos Destacados</h2>
              <div className="space-y-3">
                {projects.map((p) => (
                  <div key={p.id} className="flex items-start gap-3">
                    <ExternalLink className="w-4 h-4 mt-0.5 text-[#B48C3C] shrink-0" />
                    <div>
                      <h3 className="font-bold text-sm">{p.title}</h3>
                      <p className="text-xs text-[#78716C]">{p.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="pt-6 border-t border-[#E8E5E0]">
              <div className="flex gap-6 text-sm text-[#57534E]">
                <span className="flex items-center gap-1"><Github className="w-4 h-4" /> GitHub</span>
                <span className="flex items-center gap-1"><Linkedin className="w-4 h-4" /> LinkedIn</span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
