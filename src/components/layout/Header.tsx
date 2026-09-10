"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Sun, Moon, Github } from "lucide-react";
import { useEffect, useState } from "react";
import RecruiterToggle from "./RecruiterToggle";
import { useRecruiterMode } from "./RecruiterProvider";
import ResumeView from "./ResumeView";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { isRecruiterMode } = useRecruiterMode();

  useEffect(() => setMounted(true), []);

  if (isRecruiterMode) {
    return <ResumeView />;
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-30 h-16 flex items-center justify-between px-8 lg:px-12 border-b border-[var(--border-primary)] bg-[var(--bg-primary)]/80 backdrop-blur-xl"
    >
      {/* Left - Status */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--success)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--success)]"></span>
          </span>
          <span className="text-sm text-[var(--text-muted)] font-medium">Disponivel para projetos</span>
        </div>
      </div>

      {/* Right - Actions */}
      <div className="flex items-center gap-3">
        <a
          href="https://github.com/Masukulmiguel"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-muted)] transition-colors"
        >
          <Github className="w-4 h-4" />
          <span className="hidden sm:inline">GitHub</span>
        </a>

        <RecruiterToggle />

        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center w-10 h-10 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-muted)] transition-colors"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        )}
      </div>
    </motion.header>
  );
}
