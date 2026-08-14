"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({
  children,
  className,
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "bg-card backdrop-blur-xl border border-border rounded-2xl",
        className
      )}
      whileHover={
        hover
          ? {
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              y: -2,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
            }
          : undefined
      }
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
