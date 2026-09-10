"use client";

import { useRecruiterMode } from "./RecruiterProvider";
import { FileText, Eye } from "lucide-react";

export default function RecruiterToggle() {
  const { isRecruiterMode, toggleRecruiterMode } = useRecruiterMode();

  return (
    <button
      onClick={toggleRecruiterMode}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
        isRecruiterMode
          ? "bg-[var(--accent)] text-[var(--bg-primary)]"
          : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-muted)]"
      }`}
      title={isRecruiterMode ? "Voltar ao modo normal" : "Modo Recrutador"}
    >
      {isRecruiterMode ? <Eye className="w-3.5 h-3.5" /> : <FileText className="w-3.5 h-3.5" />}
      <span className="hidden sm:inline">
        {isRecruiterMode ? "Normal" : "CV"}
      </span>
    </button>
  );
}
