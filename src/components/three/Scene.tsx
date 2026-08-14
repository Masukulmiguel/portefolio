"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, Environment } from "@react-three/drei";
import { FloatingObjects } from "./FloatingObjects";

interface SceneProps {
  className?: string;
}

export function Scene({ className }: SceneProps) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={0.8} color="#2563EB" />
          <pointLight
            position={[-5, -5, 5]}
            intensity={0.5}
            color="#7C3AED"
          />
          <Stars
            radius={100}
            depth={50}
            count={2000}
            factor={3}
            saturation={0}
            fade
            speed={0.5}
          />
          <FloatingObjects />
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
}
