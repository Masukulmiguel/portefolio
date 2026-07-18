"use client";

import { useScroll, MotionValue } from "framer-motion";

export function useScrollProgress(): {
  scrollYProgress: MotionValue<number>;
  scrollY: MotionValue<number>;
} {
  const { scrollYProgress, scrollY } = useScroll();

  return { scrollYProgress, scrollY };
}
