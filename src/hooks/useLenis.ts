"use client";

import { useState, useEffect } from "react";
import Lenis from "lenis";

export function useLenis(): { lenis: Lenis | null } {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const lenisInstance = new Lenis();
    setLenis(lenisInstance);

    const raf = (time: number) => {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
      setLenis(null);
    };
  }, []);

  return { lenis };
}
