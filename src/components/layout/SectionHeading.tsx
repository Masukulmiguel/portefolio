"use client";

import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  className,
  centered = true,
}: SectionHeadingProps) {
  return (
    <RevealOnScroll>
      <div className={cn("mb-12 md:mb-16", centered && "text-center", className)}>
        {subtitle && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
            {subtitle}
          </p>
        )}
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          <span className="gradient-text">{title}</span>
        </h2>
      </div>
    </RevealOnScroll>
  );
}
