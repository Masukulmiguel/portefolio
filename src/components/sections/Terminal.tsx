"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Terminal as TerminalIcon, Copy, Check } from "lucide-react";

interface Message {
  role: "user" | "system";
  content: string;
}

const welcomeMessage: Message = {
  role: "system",
  content: `Bem-vindo ao terminal interativo de Masukulu Miguel.
Digite "help" para ver os comandos disponiveis.`,
};

const commands: Record<string, string> = {
  help: `Comandos disponiveis:
  help          - Mostra esta mensagem
  about         - Sobre Masukulu Miguel
  skills        - Lista de competencias
  experience    - Experiencia profissional
  projects      - Projetos recentes
  contact       - Informacoes de contacto
  clear         - Limpa o terminal
  whoami        - Mostra informacoes do utilizador
  date          - Mostra a data e hora atual`,

  about: `Masukulu Miguel - Tecnico de TI
Localizacao: Luanda, Angola
Experiencia: 5+ anos
Foco: Full-stack, IA, Ciberseguranca, Redes

Profissional dedicado a criar solucoes digitais
que funcionam. Especializado em desenvolvimento
web, infraestrutura de TI e inteligencia artificial.`,

  skills: `Tech Stack:
  Frontend:  React, Next.js, Vue.js, TypeScript, Tailwind CSS
  Backend:   Node.js, Laravel, PHP, Python, REST API
  Database:  MySQL, PostgreSQL, Supabase, Firebase
  DevOps:    Docker, Linux, Windows Server, Proxmox, Vercel
  AI:        OpenAI, LangChain
  Network:   Mikrotik, Cisco, CCTV, Hikvision
  Tools:     Git, GitHub, n8n`,

  experience: `Experiencia:
  [2024-Atual]  FMLIDER - Tecnico de Infraestrutura TI
  [2023]        Kixicorp - Tecnico de TI
  [2021-2022]   AngoNet Telecom - Engenheiro de Redes
  [2019-2021]   Digital Luanda Agency - Programador Full-Stack
  [2018-2019]   Freelancer - Consultor de TI`,

  projects: `Projetos recentes:
  1. FMLider - Plataforma de logistica e transporte
  2. CodingLife Dev - Programacao colaborativa em tempo real
  3. Troubleshoot - Website institucional de TI`,

  contact: `Contacto:
  Email:     masukulum@gmail.com
  LinkedIn:  linkedin.com/in/masukulu-miguel
  GitHub:    github.com/Masukulmiguel
  WhatsApp:  +244 9XX XXX XXX
  Local:     Luanda, Angola`,

  whoami: `masukulu@portfolio:~$
User: Masukulu Miguel
Role: Tecnico de TI
Shell: /bin/bash
Status: Disponivel para projetos`,

  date: "",
};

function processCommand(input: string): string {
  const cmd = input.trim().toLowerCase();

  if (cmd === "clear") return "__CLEAR__";
  if (cmd === "date") return new Date().toLocaleString("pt-AO", { timeZone: "Africa/Luanda" });
  if (commands[cmd]) return commands[cmd];

  return `Comando nao encontrado: "${input}". Digite "help" para ver os comandos disponiveis.`;
}

export default function Terminal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const response = processCommand(input);

    if (response === "__CLEAR__") {
      setMessages([welcomeMessage]);
      setInput("");
      return;
    }

    setMessages((prev) => [
      ...prev,
      { role: "user", content: input },
      { role: "system", content: response },
    ]);
    setHistory((prev) => [input, ...prev]);
    setHistoryIndex(-1);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  const copyAll = () => {
    const text = messages.map((m) => (m.role === "user" ? `> ${m.content}` : m.content)).join("\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="py-24 px-5 bg-[var(--bg-secondary)]">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[var(--accent)]" />
            <span className="text-xs font-semibold text-[var(--accent)] tracking-[0.2em] uppercase">
              Terminal
            </span>
          </div>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-16">
            Interaja
            <br />
            <span className="italic text-[var(--accent)]">comigo.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-xl overflow-hidden border border-[var(--border-primary)] shadow-lg"
        >
          {/* Title Bar */}
          <div className="flex items-center justify-between px-5 py-3 bg-[#1a1a2e] border-b border-[#2a2a3e]">
            <div className="flex items-center gap-3">
              <TerminalIcon className="w-4 h-4 text-[var(--accent)]" />
              <span className="text-xs text-[#6e7681] font-mono">masukulu@portfolio:~</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 mr-4">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <button
                onClick={copyAll}
                className="text-[#6e7681] hover:text-[var(--accent)] transition-colors"
                title="Copiar"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="bg-[#0d1117] flex flex-col h-[450px] font-mono text-sm">
            <div className="flex-1 p-6 overflow-y-auto">
              {messages.map((msg, i) => (
                <div key={i} className="mb-3">
                  {msg.role === "user" ? (
                    <div className="flex items-start gap-2">
                      <span className="text-[var(--accent)] shrink-0">&gt;</span>
                      <span className="text-[#e6edf3]">{msg.content}</span>
                    </div>
                  ) : (
                    <pre className="text-[#8b949e] whitespace-pre-wrap leading-relaxed">
                      {msg.content}
                    </pre>
                  )}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            <form onSubmit={handleSubmit} className="flex items-center gap-2 px-6 py-4 border-t border-[#2a2a3e]">
              <span className="text-[var(--accent)] shrink-0">&gt;</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-[#e6edf3] outline-none caret-[var(--accent)]"
                placeholder="Digite um comando..."
                autoComplete="off"
                spellCheck={false}
              />
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
