"use client";

import { useState } from "react";
import { Download } from "lucide-react";

export default function RecruiterToggle() {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const jsPDF = (await import("jspdf")).default;
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = 210;
      const pageHeight = 297;
      const margin = 20;
      const contentWidth = pageWidth - margin * 2;

      let y = margin;

      // Header background
      pdf.setFillColor(28, 25, 23);
      pdf.rect(0, 0, pageWidth, 45, "F");

      // Photo circle
      try {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = "/portefolio/images/profile/masukulu-miguel.jpg";
        await new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve;
          setTimeout(resolve, 2000);
        });
        if (img.complete && img.naturalWidth > 0) {
          pdf.addImage(img, "JPEG", margin, 8, 28, 28);
          pdf.setDrawColor(180, 140, 60);
          pdf.setLineWidth(1);
          pdf.circle(margin + 14, 22, 14.5, "S");
        }
      } catch (e) {}

      // Name
      pdf.setTextColor(255, 255, 255);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(20);
      pdf.text("Masukulu Miguel", margin + 35, 18);

      // Title
      pdf.setTextColor(180, 140, 60);
      pdf.setFontSize(12);
      pdf.text("Tecnico de TI", margin + 35, 26);

      // Contact info
      pdf.setTextColor(156, 163, 175);
      pdf.setFontSize(8);
      pdf.text("Luanda, Angola  |  Masukulum@gmail.com  |  +244935603163", margin + 35, 34);

      y = 52;

      // Summary
      pdf.setTextColor(180, 140, 60);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(9);
      pdf.text("RESUMO PROFISSIONAL", margin, y);
      pdf.setDrawColor(232, 229, 224);
      pdf.line(margin, y + 2, pageWidth - margin, y + 2);
      y += 7;

      pdf.setTextColor(87, 83, 78);
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(8);
      const summary = pdf.splitTextToSize(
        "Tecnico de informatica com 5+ anos de experiencia em desenvolvimento full-stack, infraestrutura de TI, redes e inteligencia artificial. Especializado em criar solucoes digitais eficientes para empresas em Angola e Africa.",
        contentWidth
      );
      pdf.text(summary, margin, y);
      y += summary.length * 4 + 5;

      // Experience
      pdf.setTextColor(180, 140, 60);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(9);
      pdf.text("EXPERIENCIA PROFISSIONAL", margin, y);
      pdf.line(margin, y + 2, pageWidth - margin, y + 2);
      y += 7;

      const experiences = [
        { company: "FMLIDER - Transitario & Logistica", period: "2024 - Atual", role: "Tecnico de Informatica - Responsavel de Infraestrutura de TI", desc: "Infraestrutura de TI, servidores, redes, CCTV e suporte tecnico." },
        { company: "Kixicorp Tecnologias", period: "Jan 2023 - Dez 2023", role: "Tecnico de TI", desc: "Desenvolvimento web empresariais e solucoes com IA para clientes em Angola." },
        { company: "AngoNet Telecom", period: "Mar 2021 - Dez 2022", role: "Tecnico de TI", desc: "Infraestrutura de rede MikroTik e Cisco para empresas em Luanda." },
        { company: "Digital Luanda Agency", period: "Jun 2019 - Fev 2021", role: "Programador Full-Stack", desc: "Aplicacoes web e plataformas de comercio eletronico." },
        { company: "Freelancer", period: "Jan 2018 - Mai 2019", role: "Consultor de TI & Programador", desc: "Consultoria TI, desenvolvimento web e instalacao de redes." }
      ];

      for (const exp of experiences) {
        if (y > pageHeight - 30) {
          pdf.addPage();
          y = margin;
        }

        // Left border
        pdf.setDrawColor(180, 140, 60);
        pdf.setLineWidth(0.5);
        pdf.line(margin, y - 3, margin, y + 12);

        // Company
        pdf.setTextColor(28, 25, 23);
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(8);
        pdf.text(exp.company, margin + 3, y);

        // Period
        pdf.setTextColor(168, 162, 158);
        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(6);
        pdf.text(exp.period, pageWidth - margin, y, { align: "right" });

        // Role
        pdf.setTextColor(180, 140, 60);
        pdf.setFont("helvetica", "italic");
        pdf.setFontSize(7);
        pdf.text(exp.role, margin + 3, y + 5);

        // Description
        pdf.setTextColor(87, 83, 78);
        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(7);
        const descLines = pdf.splitTextToSize(exp.desc, contentWidth - 5);
        pdf.text(descLines, margin + 3, y + 10);
        y += 10 + descLines.length * 3.5 + 4;
      }

      y += 3;

      // Skills
      if (y > pageHeight - 40) {
        pdf.addPage();
        y = margin;
      }

      pdf.setTextColor(180, 140, 60);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(9);
      pdf.text("COMPETENCIAS TECNICAS", margin, y);
      pdf.line(margin, y + 2, pageWidth - margin, y + 2);
      y += 7;

      pdf.setFontSize(7);
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(28, 25, 23);
      pdf.text("Frontend & Backend:", margin, y);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(87, 83, 78);
      pdf.text("React, Next.js, Vue.js, TypeScript, Node.js, Laravel, PHP, Python", margin + 35, y);
      y += 5;

      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(28, 25, 23);
      pdf.text("Infraestrutura & Redes:", margin, y);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(87, 83, 78);
      pdf.text("Docker, Linux, Windows Server, Mikrotik, Cisco", margin + 35, y);
      y += 5;

      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(28, 25, 23);
      pdf.text("Databases:", margin, y);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(87, 83, 78);
      pdf.text("MySQL, PostgreSQL, Supabase, Firebase", margin + 35, y);
      y += 5;

      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(28, 25, 23);
      pdf.text("Outros:", margin, y);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(87, 83, 78);
      pdf.text("Git, Docker, AI (OpenAI, LangChain), n8n", margin + 35, y);
      y += 10;

      // Languages
      if (y > pageHeight - 25) {
        pdf.addPage();
        y = margin;
      }

      pdf.setTextColor(180, 140, 60);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(9);
      pdf.text("IDIOMAS", margin, y);
      pdf.line(margin, y + 2, pageWidth - margin, y + 2);
      y += 7;

      pdf.setFontSize(7);
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(28, 25, 23);
      pdf.text("Portugues:", margin, y);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(87, 83, 78);
      pdf.text("Nativo", margin + 25, y);
      y += 4;

      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(28, 25, 23);
      pdf.text("Frances:", margin, y);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(87, 83, 78);
      pdf.text("Intermediario", margin + 25, y);
      y += 4;

      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(28, 25, 23);
      pdf.text("Ingles:", margin, y);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(87, 83, 78);
      pdf.text("Basico", margin + 25, y);
      y += 10;

      // Projects
      if (y > pageHeight - 40) {
        pdf.addPage();
        y = margin;
      }

      pdf.setTextColor(180, 140, 60);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(9);
      pdf.text("PROJETOS DESTACADOS", margin, y);
      pdf.line(margin, y + 2, pageWidth - margin, y + 2);
      y += 7;

      const projectsList = [
        { name: "FMLider", desc: "Plataforma web de logistica, transporte e desembaraco aduaneiro em Angola." },
        { name: "CodingLife Dev", desc: "Plataforma open-source de programacao colaborativa em tempo real." },
        { name: "Troubleshoot", desc: "Website institucional para empresa de solucoes tecnologicas em Angola." }
      ];

      for (const proj of projectsList) {
        pdf.setFont("helvetica", "bold");
        pdf.setTextColor(28, 25, 23);
        pdf.setFontSize(7);
        pdf.text("- " + proj.name, margin, y);
        pdf.setFont("helvetica", "normal");
        pdf.setTextColor(87, 83, 78);
        pdf.text(proj.desc, margin + 20, y);
        y += 4;
      }

      y += 3;

      // Footer
      if (y > pageHeight - 15) {
        pdf.addPage();
        y = margin;
      }

      pdf.setDrawColor(28, 25, 23);
      pdf.setLineWidth(0.5);
      pdf.line(margin, y, pageWidth - margin, y);
      y += 5;

      pdf.setTextColor(87, 83, 78);
      pdf.setFontSize(7);
      pdf.text("github.com/Masukulmiguel", margin, y);
      pdf.text("linkedin.com/in/masukulu-miguel", pageWidth - margin, y, { align: "right" });

      pdf.save("CV_Masukulu_Miguel.pdf");
    } catch (error) {
      console.error("Erro ao gerar PDF:", error);
      alert("Erro ao gerar PDF. Tente novamente.");
    }
    setLoading(false);
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-muted)] disabled:opacity-50"
      title="Baixar CV"
    >
      <Download className="w-3.5 h-3.5" />
      <span className="hidden sm:inline">{loading ? "Gerando..." : "CV"}</span>
    </button>
  );
}
