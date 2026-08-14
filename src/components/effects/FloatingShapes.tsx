"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingShapesProps {
  className?: string;
}

const shapes = [
  {
    type: "circle",
    size: "w-16 h-16",
    position: "top-[10%] left-[15%]",
    color: "bg-primary/15",
    duration: 6,
    delay: 0,
    borderRadius: "rounded-full",
  },
  {
    type: "square",
    size: "w-12 h-12",
    position: "top-[30%] right-[20%]",
    color: "bg-accent/15",
    duration: 8,
    delay: 1,
    borderRadius: "rounded-xl",
  },
  {
    type: "triangle",
    size: "w-14 h-14",
    position: "bottom-[20%] left-[25%]",
    color: "bg-secondary/15",
    duration: 7,
    delay: 2,
    borderRadius: "",
    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
  },
  {
    type: "hexagon",
    size: "w-10 h-10",
    position: "top-[60%] right-[10%]",
    color: "bg-primary/10",
    duration: 9,
    delay: 0.5,
    borderRadius: "",
    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
  },
  {
    type: "circle",
    size: "w-8 h-8",
    position: "top-[45%] left-[5%]",
    color: "bg-accent/10",
    duration: 5,
    delay: 1.5,
    borderRadius: "rounded-full",
  },
  {
    type: "square",
    size: "w-20 h-20",
    position: "bottom-[10%] right-[30%]",
    color: "bg-secondary/10",
    duration: 10,
    delay: 3,
    borderRadius: "rounded-xl",
  },
];

export function FloatingShapes({ className }: FloatingShapesProps) {
  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={cn(
            "absolute",
            shape.size,
            shape.position,
            shape.color,
            shape.borderRadius
          )}
          style={shape.clipPath ? { clipPath: shape.clipPath } : undefined}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  );
}
