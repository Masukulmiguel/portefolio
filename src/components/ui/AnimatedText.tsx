"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedText({ text, className = "", style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  return (
    <p ref={ref} className={className} style={style}>
      {text.split("").map((char, i) => (
        <Char key={i} progress={scrollYProgress} index={i} total={text.length}>
          {char}
        </Char>
      ))}
    </p>
  );
}

function Char({
  children,
  progress,
  index,
  total,
}: {
  children: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  index: number;
  total: number;
}) {
  const opacity = useTransform(
    progress,
    [index / total, Math.min((index + 1) / total, 1)],
    [0.2, 1],
  );

  return (
    <span className="relative inline-block">
      <span className="opacity-0.2">{children}</span>
      <motion.span style={{ opacity }} className="absolute inset-0">
        {children}
      </motion.span>
    </span>
  );
}
