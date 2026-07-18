"use client";

import { Environment as DreiEnvironment } from "@react-three/drei";
import "@react-three/fiber";

export function CustomEnvironment() {
  return <DreiEnvironment preset="night" />;
}
