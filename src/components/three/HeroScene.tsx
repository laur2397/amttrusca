"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

function FinanceNetwork() {
  const groupRef = useRef<THREE.Group>(null);

  const nodes = useMemo(() => {
    const items: { position: [number, number, number]; size: number }[] = [];
    const count = 26;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const r = 2.2;
      items.push({
        position: [
          r * Math.cos(theta) * Math.sin(phi),
          r * Math.sin(theta) * Math.sin(phi),
          r * Math.cos(phi),
        ],
        size: 0.04 + Math.random() * 0.04,
      });
    }
    return items;
  }, []);

  const lines = useMemo(() => {
    const segs: { a: [number, number, number]; b: [number, number, number] }[] = [];
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i].position;
      const candidates = nodes
        .map((n, j) => ({
          j,
          d: Math.hypot(n.position[0] - a[0], n.position[1] - a[1], n.position[2] - a[2]),
        }))
        .filter((x) => x.j !== i)
        .sort((x, y) => x.d - y.d)
        .slice(0, 2);
      candidates.forEach((c) => segs.push({ a, b: nodes[c.j].position }));
    }
    return segs;
  }, [nodes]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.12;
    groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.15;
  });

  return (
    <group ref={groupRef}>
      <Icosahedron args={[1.4, 1]}>
        <MeshDistortMaterial
          color="#0a4d99"
          emissive="#1c7eea"
          emissiveIntensity={0.35}
          metalness={0.7}
          roughness={0.2}
          distort={0.28}
          speed={1.4}
          transparent
          opacity={0.55}
        />
      </Icosahedron>

      <mesh>
        <icosahedronGeometry args={[2.25, 1]} />
        <meshBasicMaterial color="#3d99ff" wireframe transparent opacity={0.18} />
      </mesh>

      {nodes.map((n, i) => (
        <mesh key={i} position={n.position}>
          <sphereGeometry args={[n.size, 16, 16]} />
          <meshBasicMaterial
            color={i % 5 === 0 ? "#e7c879" : "#cfe7ff"}
            transparent
            opacity={0.95}
          />
        </mesh>
      ))}

      {lines.map((seg, i) => {
        const geom = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(...seg.a),
          new THREE.Vector3(...seg.b),
        ]);
        const mat = new THREE.LineBasicMaterial({
          color: "#1c7eea",
          transparent: true,
          opacity: 0.18,
        });
        const line = new THREE.Line(geom, mat);
        return <primitive key={i} object={line} />;
      })}
    </group>
  );
}

function OrbitingShards() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.getElapsedTime() * 0.08;
  });
  return (
    <group ref={ref}>
      {Array.from({ length: 7 }).map((_, i) => {
        const angle = (i / 7) * Math.PI * 2;
        const r = 3.2;
        return (
          <Float
            key={i}
            speed={1.2}
            rotationIntensity={0.6}
            floatIntensity={1.4}
            position={[Math.cos(angle) * r, Math.sin(angle) * r, 0]}
          >
            <mesh rotation={[Math.random(), Math.random(), Math.random()]}>
              <boxGeometry args={[0.18, 0.28, 0.04]} />
              <meshStandardMaterial
                color={i % 2 ? "#e7c879" : "#6db5ff"}
                metalness={0.85}
                roughness={0.2}
                emissive={i % 2 ? "#b48f3b" : "#0f63c4"}
                emissiveIntensity={0.4}
              />
            </mesh>
          </Float>
        );
      })}
    </group>
  );
}

export function HeroScene() {
  const reduced = usePrefersReducedMotion();
  return (
    <Canvas
      camera={{ position: [0, 0, 6.2], fov: 45 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[6, 4, 6]} intensity={1.6} color="#3d99ff" />
      <pointLight position={[-6, -2, 4]} intensity={1.1} color="#e7c879" />
      <Suspense fallback={null}>
        <FinanceNetwork />
        {!reduced && <OrbitingShards />}
        <Sparkles
          count={60}
          size={2}
          scale={[10, 6, 6]}
          speed={0.4}
          color="#9fcfff"
          opacity={0.7}
        />
      </Suspense>
    </Canvas>
  );
}
