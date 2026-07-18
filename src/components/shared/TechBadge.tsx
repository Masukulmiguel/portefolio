import React from "react";

interface TechBadgeProps {
  name: string;
  icon?: string;
  className?: string;
}

export function TechBadge({ name, icon, className }: TechBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card border border-border text-sm text-muted hover:text-text hover:border-primary/50 transition-all ${className ?? ""}`}
    >
      {icon && <span>{icon}</span>}
      {name}
    </span>
  );
}
