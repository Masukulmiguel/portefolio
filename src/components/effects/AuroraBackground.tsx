"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AuroraBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const blobs = [
  {
    color: "bg-primary/30",
    initial: { x: "-20%", y: "-20%", scale: 1 },
    animate: {
      x: ["-20%", "10%", "-20%"],
      y: ["-20%", "20%", "-20%"],
      scale: [1, 1.2, 1],
    },
    duration: 8,
  },
  {
    color: "bg-accent/20",
    initial: { x: "50%", y: "-30%", scale: 1 },
    animate: {
      x: ["50%", "30%", "50%"],
      y: ["-30%", "10%", "-30%"],
      scale: [1, 1.15, 1],
    },
    duration: 10,
  },
  {
    color: "bg-secondary/20",
    initial: { x: "20%", y: "50%", scale: 1 },
    animate: {
      x: ["20%", "40%", "20%"],
      y: ["50%", "30%", "50%"],
      scale: [1, 1.1, 1],
    },
    duration: 12,
  },
];

export function AuroraBackground({ children, className }: AuroraBackgroundProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={cn(
            "absolute rounded-full blur-[120px]",
            blob.color
          )}
          style={{
            width: "60%",
            height: "60%",
          }}
          initial={blob.initial}
          animate={blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
