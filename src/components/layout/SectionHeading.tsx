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
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
            {subtitle}
          </p>
        )}
        <h2
          className="font-black uppercase text-gray-900 leading-none tracking-tight"
          style={{ fontSize: "clamp(2rem, 8vw, 100px)" }}
        >
          {title}
        </h2>
      </div>
    </RevealOnScroll>
  );
}
