"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function Shield() {
  const ref = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.y = Math.sin(s.clock.getElapsedTime() * 0.5) * 0.25;
  });

  const shape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0, 1.4);
    s.bezierCurveTo(1.2, 1.3, 1.3, 0.2, 1.2, -0.4);
    s.bezierCurveTo(1.1, -1, 0.4, -1.4, 0, -1.6);
    s.bezierCurveTo(-0.4, -1.4, -1.1, -1, -1.2, -0.4);
    s.bezierCurveTo(-1.3, 0.2, -1.2, 1.3, 0, 1.4);
    return s;
  }, []);

  return (
    <group ref={ref}>
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.6}>
        <mesh>
          <extrudeGeometry
            args={[
              shape,
              { depth: 0.18, bevelEnabled: true, bevelSize: 0.06, bevelThickness: 0.05, bevelSegments: 6 },
            ]}
          />
          <meshStandardMaterial
            color="#0f63c4"
            metalness={0.85}
            roughness={0.2}
            emissive="#1c7eea"
            emissiveIntensity={0.35}
          />
        </mesh>
        <mesh position={[0, 0, 0.2]} scale={[0.7, 0.7, 0.7]}>
          <torusGeometry args={[0.55, 0.04, 16, 64]} />
          <meshStandardMaterial
            color="#e7c879"
            metalness={0.9}
            roughness={0.15}
            emissive="#b48f3b"
            emissiveIntensity={0.5}
          />
        </mesh>
        <mesh position={[0, 0, 0.25]}>
          <ringGeometry args={[0.18, 0.22, 32]} />
          <meshBasicMaterial color="#e7c879" />
        </mesh>
      </Float>
    </group>
  );
}

export function ComplianceShield() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 5, 4]} intensity={1.3} color="#9fcfff" />
      <pointLight position={[-4, -3, 3]} intensity={0.8} color="#e7c879" />
      <Suspense fallback={null}>
        <Shield />
      </Suspense>
    </Canvas>
  );
}
