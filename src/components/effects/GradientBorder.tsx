"use client";

import { cn } from "@/lib/utils";

interface GradientBorderProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export function GradientBorder({
  children,
  className,
  speed = 4,
}: GradientBorderProps) {
  return (
    <div className={cn("relative rounded-2xl p-px", className)}>
      <div
        className="absolute inset-0 rounded-2xl animate-spin"
        style={{
          background: "conic-gradient(from 0deg, var(--color-primary), var(--color-accent), var(--color-secondary), var(--color-primary))",
          animationDuration: `${speed}s`,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />
      <div className="relative z-10 rounded-2xl bg-background">{children}</div>
    </div>
  );
}
