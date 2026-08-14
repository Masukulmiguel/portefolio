"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedBeamProps {
  className?: string;
  delay?: number;
}

export function AnimatedBeam({ className, delay = 0 }: AnimatedBeamProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
      />
    </div>
  );
}
