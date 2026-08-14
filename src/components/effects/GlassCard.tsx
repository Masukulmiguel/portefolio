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
        "bg-white border border-gray-200 rounded-2xl p-6",
        className
      )}
      whileHover={
        hover
          ? {
              y: -4,
              boxShadow: "0 12px 40px rgba(0, 0, 0, 0.08)",
            }
          : undefined
      }
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
