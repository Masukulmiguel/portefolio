"use client";

import { Float } from "@react-three/drei";
import "@react-three/fiber";

interface ShapeProps {
  position: [number, number, number];
  speed: number;
  rotationIntensity: number;
  floatIntensity: number;
  color: string;
}

function FloatingShape({
  position,
  speed,
  rotationIntensity,
  floatIntensity,
  color,
  children,
}: ShapeProps & { children: React.ReactNode }) {
  return (
    <Float
      speed={speed}
      rotationIntensity={rotationIntensity}
      floatIntensity={floatIntensity}
    >
      <mesh position={position}>{children}</mesh>
    </Float>
  );
}

export function FloatingObjects() {
  const shapes = [
    {
      position: [2, 1, 0] as [number, number, number],
      speed: 1.0,
      rotationIntensity: 0.5,
      floatIntensity: 1.0,
      color: "#2563EB",
      geometry: <icosahedronGeometry args={[0.8, 0]} />,
    },
    {
      position: [-2, -1, -1] as [number, number, number],
      speed: 1.3,
      rotationIntensity: 0.8,
      floatIntensity: 1.5,
      color: "#7C3AED",
      geometry: <torusGeometry args={[0.6, 0.25, 16, 32]} />,
    },
    {
      position: [0, 2, -2] as [number, number, number],
      speed: 1.5,
      rotationIntensity: 1.0,
      floatIntensity: 1.8,
      color: "#06B6D4",
      geometry: <octahedronGeometry args={[0.7, 0]} />,
    },
    {
      position: [3, -1, -3] as [number, number, number],
      speed: 1.8,
      rotationIntensity: 1.2,
      floatIntensity: 2.0,
      color: "#2563EB",
      geometry: <dodecahedronGeometry args={[0.6, 0]} />,
    },
    {
      position: [-3, 1, -2] as [number, number, number],
      speed: 2.0,
      rotationIntensity: 1.5,
      floatIntensity: 2.5,
      color: "#7C3AED",
      geometry: <coneGeometry args={[0.5, 1, 4]} />,
    },
  ];

  return (
    <group>
      {shapes.map((shape, i) => (
        <FloatingShape
          key={i}
          position={shape.position}
          speed={shape.speed}
          rotationIntensity={shape.rotationIntensity}
          floatIntensity={shape.floatIntensity}
          color={shape.color}
        >
          {shape.geometry}
          <meshStandardMaterial wireframe color={shape.color} />
        </FloatingShape>
      ))}
    </group>
  );
}
