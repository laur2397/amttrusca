"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function Globe() {
  const ref = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.y = s.clock.getElapsedTime() * 0.12;
  });

  const dots = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const N = 700;
    for (let i = 0; i < N; i++) {
      const phi = Math.acos(-1 + (2 * i) / N);
      const theta = Math.sqrt(N * Math.PI) * phi;
      pts.push(
        new THREE.Vector3(
          Math.cos(theta) * Math.sin(phi),
          Math.sin(theta) * Math.sin(phi),
          Math.cos(phi),
        ).multiplyScalar(2),
      );
    }
    return pts;
  }, []);

  const geom = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const positions = new Float32Array(dots.length * 3);
    dots.forEach((p, i) => {
      positions[i * 3] = p.x;
      positions[i * 3 + 1] = p.y;
      positions[i * 3 + 2] = p.z;
    });
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [dots]);

  // Simulated "Europe cluster" — abstract highlighted arcs
  const arcs = useMemo(() => {
    const list: { a: THREE.Vector3; b: THREE.Vector3 }[] = [];
    const center = new THREE.Vector3(0.4, 0.8, 1.7).normalize().multiplyScalar(2);
    for (let i = 0; i < 9; i++) {
      const r = new THREE.Vector3(
        (Math.random() - 0.5) * 1.6,
        (Math.random() - 0.5) * 1.4,
        Math.abs(Math.random()) * 1.4 + 0.4,
      )
        .normalize()
        .multiplyScalar(2);
      list.push({ a: center.clone(), b: r });
    }
    return list;
  }, []);

  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[1.98, 64, 64]} />
        <meshStandardMaterial
          color="#0a1530"
          metalness={0.4}
          roughness={0.6}
          emissive="#0a335f"
          emissiveIntensity={0.25}
        />
      </mesh>
      <points geometry={geom}>
        <pointsMaterial color="#6db5ff" size={0.04} sizeAttenuation transparent opacity={0.9} />
      </points>
      <mesh>
        <sphereGeometry args={[2.04, 32, 32]} />
        <meshBasicMaterial color="#1c7eea" wireframe transparent opacity={0.1} />
      </mesh>

      {arcs.map(({ a, b }, i) => {
        const mid = a.clone().add(b).multiplyScalar(0.5).normalize().multiplyScalar(2.7);
        const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
        const points = curve.getPoints(40);
        const g = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({
          color: "#e7c879",
          transparent: true,
          opacity: 0.65,
        });
        const line = new THREE.Line(g, material);
        return <primitive key={i} object={line} />;
      })}
    </group>
  );
}

export function EuropeGlobe() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 4, 5]} intensity={1.2} color="#cfe7ff" />
      <pointLight position={[-5, -3, 3]} intensity={0.7} color="#e7c879" />
      <Suspense fallback={null}>
        <Globe />
        <Stars radius={20} depth={30} count={500} factor={2} fade speed={0.4} />
      </Suspense>
    </Canvas>
  );
}
