"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Doc({
  position,
  color,
  rotation = [0, 0, 0],
}: {
  position: [number, number, number];
  color: string;
  rotation?: [number, number, number];
}) {
  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.2} position={position}>
      <group rotation={rotation}>
        <mesh>
          <boxGeometry args={[1.2, 1.55, 0.04]} />
          <meshStandardMaterial
            color={color}
            metalness={0.35}
            roughness={0.35}
            emissive="#0a4d99"
            emissiveIntensity={0.08}
          />
        </mesh>
        {[0.45, 0.25, 0.05, -0.15, -0.35].map((y, i) => (
          <mesh key={i} position={[0, y, 0.025]}>
            <planeGeometry args={[0.85 - i * 0.05, 0.05]} />
            <meshBasicMaterial color="#1c7eea" transparent opacity={0.55} />
          </mesh>
        ))}
        <mesh position={[-0.36, 0.62, 0.025]}>
          <planeGeometry args={[0.18, 0.18]} />
          <meshBasicMaterial color="#e7c879" transparent opacity={0.85} />
        </mesh>
      </group>
    </Float>
  );
}

function Bars() {
  const ref = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.y = s.clock.getElapsedTime() * 0.15;
  });
  return (
    <group ref={ref} position={[0, -1.1, 0]}>
      {[0.5, 0.9, 0.7, 1.2, 1.0].map((h, i) => (
        <mesh key={i} position={[i * 0.25 - 0.5, h / 2, 0]}>
          <boxGeometry args={[0.18, h, 0.18]} />
          <meshStandardMaterial
            color={i === 3 ? "#e7c879" : "#3d99ff"}
            metalness={0.6}
            roughness={0.25}
            emissive={i === 3 ? "#b48f3b" : "#0f63c4"}
            emissiveIntensity={0.4}
          />
        </mesh>
      ))}
    </group>
  );
}

export function FloatingDocs() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.4], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.55} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#cfe7ff" />
      <pointLight position={[-4, -3, 3]} intensity={0.8} color="#e7c879" />
      <Suspense fallback={null}>
        <Doc position={[-1.6, 0.8, 0]} color="#0f1626" rotation={[0.1, 0.4, 0.08]} />
        <Doc position={[1.7, 0.4, -0.5]} color="#162033" rotation={[-0.05, -0.5, -0.05]} />
        <Doc position={[0.2, 1.6, -1]} color="#1d2a44" rotation={[0.05, 0.1, 0.2]} />
        <Bars />
      </Suspense>
    </Canvas>
  );
}
