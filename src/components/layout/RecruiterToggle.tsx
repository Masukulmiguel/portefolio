"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data/constants";
import { experience } from "@/lib/data/experience";
import { technologies } from "@/lib/data/technologies";
import { projects } from "@/lib/data/projects";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function RecruiterToggle() {
  const [showResume, setShowResume] = useState(false);

  const handleDownload = () => {
    setShowResume(true);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleClose = () => {
    setShowResume(false);
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
        <div className="fixed inset-0 z-[9999] bg-white overflow-auto">
          {/* Print Controls */}
          <div className="no-print fixed top-0 left-0 right-0 bg-gray-100 p-4 flex justify-center gap-4 z-[10000] border-b">
            <button
              onClick={handlePrint}
              className="px-6 py-2 bg-[#B48C3C] text-white rounded-lg font-medium hover:bg-[#9A7532] transition-colors"
            >
              Imprimir / Guardar PDF
            </button>
            <button
              onClick={handleClose}
              className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-400 transition-colors"
            >
              Fechar
            </button>
          </div>

          {/* CV Content */}
          <div className="pt-20" id="cv-content">
            {/* Header */}
            <div style={{ backgroundColor: "#1C1917", color: "white", padding: "40px" }}>
              <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", alignItems: "center", gap: "30px" }}>
                <img
                  src={`${BASE_PATH}/images/profile/masukulu-miguel.jpg`}
                  alt="Masukulu Miguel"
                  style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover", border: "4px solid #B48C3C" }}
                />
                <div>
                  <h1 style={{ fontSize: "32px", fontWeight: "bold", fontFamily: "Georgia, serif", marginBottom: "8px" }}>Masukulu Miguel</h1>
                  <p style={{ fontSize: "20px", color: "#B48C3C", fontWeight: "500", marginBottom: "12px" }}>Tecnico de TI</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", fontSize: "14px", color: "#9CA3AF" }}>
                    <span>Luanda, Angola</span>
                    <span>{SITE_CONFIG.email}</span>
                    <span>{SITE_CONFIG.whatsapp}</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ maxWidth: "800px", margin: "0 auto", padding: "40px" }}>
              {/* Summary */}
              <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "12px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.1em", color: "#B48C3C", marginBottom: "12px", borderBottom: "1px solid #E8E5E0", paddingBottom: "8px" }}>Resumo Profissional</h2>
                <p style={{ fontSize: "14px", color: "#57534E", lineHeight: "1.6" }}>
                  Tecnico de informatica com 5+ anos de experiencia em desenvolvimento full-stack,
                  infraestrutura de TI, redes e inteligencia artificial. Especializado em criar solucoes
                  digitais eficientes para empresas em Angola e Africa.
                </p>
              </section>

              {/* Experience */}
              <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "12px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.1em", color: "#B48C3C", marginBottom: "16px", borderBottom: "1px solid #E8E5E0", paddingBottom: "8px" }}>Experiencia Profissional</h2>
                <div>
                  {experience.map((e) => (
                    <div key={e.id} style={{ marginBottom: "20px", paddingLeft: "16px", borderLeft: "2px solid #B48C3C" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "4px" }}>
                        <h3 style={{ fontWeight: "bold", color: "#1C1917", fontSize: "16px" }}>{e.company}</h3>
                        <span style={{ fontSize: "12px", color: "#A8A29E", backgroundColor: "#F5F0E8", padding: "2px 8px", borderRadius: "4px" }}>{e.period}</span>
                      </div>
                      <p style={{ fontSize: "14px", color: "#B48C3C", fontStyle: "italic", marginBottom: "8px" }}>{e.role}</p>
                      <ul style={{ fontSize: "14px", color: "#57534E", paddingLeft: "20px" }}>
                        {e.achievements.slice(0, 3).map((a, j) => (
                          <li key={j} style={{ marginBottom: "4px" }}>{a}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Skills */}
              <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "12px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.1em", color: "#B48C3C", marginBottom: "12px", borderBottom: "1px solid #E8E5E0", paddingBottom: "8px" }}>Competencias Tecnicas</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
                  <div>
                    <p style={{ fontSize: "12px", fontWeight: "bold", color: "#1C1917", marginBottom: "8px" }}>Frontend & Backend</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                      {["React", "Next.js", "Vue.js", "TypeScript", "Node.js", "Laravel", "PHP", "Python"].map((name) => (
                        <span key={name} style={{ padding: "4px 8px", fontSize: "12px", backgroundColor: "#B48C3C", color: "white", borderRadius: "4px" }}>{name}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p style={{ fontSize: "12px", fontWeight: "bold", color: "#1C1917", marginBottom: "8px" }}>Infraestrutura & Redes</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                      {["Docker", "Linux", "Windows Server", "Mikrotik", "Cisco"].map((name) => (
                        <span key={name} style={{ padding: "4px 8px", fontSize: "12px", backgroundColor: "#1C1917", color: "white", borderRadius: "4px" }}>{name}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Projects */}
              <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "12px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.1em", color: "#B48C3C", marginBottom: "12px", borderBottom: "1px solid #E8E5E0", paddingBottom: "8px" }}>Projetos Destacados</h2>
                <div>
                  {projects.slice(0, 3).map((p) => (
                    <div key={p.id} style={{ display: "flex", gap: "12px", padding: "12px", backgroundColor: "#F9F7F4", borderRadius: "8px", marginBottom: "8px" }}>
                      <div>
                        <h3 style={{ fontWeight: "bold", fontSize: "14px", color: "#1C1917", marginBottom: "4px" }}>{p.title}</h3>
                        <p style={{ fontSize: "12px", color: "#57534E" }}>{p.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Links */}
              <section style={{ borderTop: "2px solid #1C1917", paddingTop: "24px" }}>
                <div style={{ display: "flex", gap: "24px", fontSize: "14px", color: "#57534E" }}>
                  <span>github.com/Masukulmiguel</span>
                  <span>linkedin.com/in/masukulu-miguel</span>
                </div>
              </section>
            </div>
          </div>

          <style>{`
            @media print {
              .no-print {
                display: none !important;
              }
              body {
                margin: 0;
                padding: 0;
              }
              #cv-content {
                padding-top: 0;
              }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
