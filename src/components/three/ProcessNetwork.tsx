"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function Network() {
  const ref = useRef<THREE.Group>(null);

  const nodes = useMemo(() => {
    return Array.from({ length: 6 }).map((_, i) => {
      const t = (i / 6) * Math.PI * 2;
      return new THREE.Vector3(Math.cos(t) * 2.4, Math.sin(t) * 1.2, Math.sin(t * 2) * 0.5);
    });
  }, []);

  const lines = useMemo(() => {
    const segs: [THREE.Vector3, THREE.Vector3][] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        segs.push([nodes[i], nodes[j]]);
      }
    }
    return segs;
  }, [nodes]);

  useFrame((s) => {
    if (!ref.current) return;
    const t = s.clock.getElapsedTime();
    ref.current.rotation.y = Math.sin(t * 0.2) * 0.4;
    ref.current.rotation.x = Math.cos(t * 0.15) * 0.2;
  });

  return (
    <group ref={ref}>
      {nodes.map((p, i) => (
        <mesh key={i} position={[p.x, p.y, p.z]}>
          <sphereGeometry args={[0.12, 24, 24]} />
          <meshStandardMaterial
            color="#3d99ff"
            emissive="#1c7eea"
            emissiveIntensity={0.8}
            metalness={0.6}
            roughness={0.2}
          />
        </mesh>
      ))}
      {lines.map(([a, b], i) => {
        const g = new THREE.BufferGeometry().setFromPoints([a, b]);
        const m = new THREE.LineBasicMaterial({
          color: "#1c7eea",
          transparent: true,
          opacity: 0.18,
        });
        const line = new THREE.Line(g, m);
        return <primitive key={i} object={line} />;
      })}
    </group>
  );
}

export function ProcessNetwork() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#9fcfff" />
      <Suspense fallback={null}>
        <Network />
      </Suspense>
    </Canvas>
  );
}
