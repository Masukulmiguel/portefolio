"use client";

import { Float } from "@react-three/drei";
import "@react-three/fiber";

export function HeroModel() {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
      <mesh position={[0, 0, 0]} scale={1.5}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#2563EB"
          emissive="#2563EB"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}
