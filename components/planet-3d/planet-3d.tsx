"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";

function Planet({ position = [0, 0, 0], size = 2, color = "#5D3FD3" }) {
  const meshRef = useRef<THREE.Mesh>(null);

  const normalSpeed = 0.1;
  const maxSpeed = 10; // very fast spin at start
  const spinDuration = 3; // seconds for fast spin then slow down

  useFrame(({ clock }) => {
    if (!meshRef.current) return;

    const elapsed = clock.getElapsedTime();

    let speed;

    if (elapsed < spinDuration) {
      // Fast spin at start (exploding effect)
      // Use ease-out cubic to slow down from maxSpeed to normalSpeed
      const t = elapsed / spinDuration;
      // easeOutCubic: 1 - (1 - t)^3
      const easeOutCubic = 1 - Math.pow(1 - t, 3);
      speed = maxSpeed - (maxSpeed - normalSpeed) * easeOutCubic;
    } else {
      // After spinDuration seconds, keep normal speed
      speed = normalSpeed;
    }

    meshRef.current.rotation.y += speed * 0.05; // scale down speed a bit
  });

  return (
    <Sphere ref={meshRef} args={[size, 32, 32]} position={position as [number, number, number]}>
      <meshPhongMaterial
        color={color}
        emissive="#000000"
        specular="#ffffff"
        shininess={10}
      />
    </Sphere>
  );
}

function Rings({ position = [0, 0, 0], size = 3, color = "#9F7AEA" }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.PI / 2;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} position={position as [number, number, number]}>
      <torusGeometry args={[size, 0.2, 16, 100]} />
      <meshPhongMaterial
        color={color}
        emissive="#000000"
        specular="#ffffff"
        shininess={10}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

function Stars() {
  const starsRef = useRef<THREE.Points>(null);

  const particlesCount = 2000;
  const positions = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 50;
    positions[i3 + 1] = (Math.random() - 0.5) * 50;
    positions[i3 + 2] = (Math.random() - 0.5) * 50;
  }

  useFrame(({ clock }) => {
    if (starsRef.current) {
      starsRef.current.rotation.y = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#ffffff"
        sizeAttenuation={true}
      />
    </points>
  );
}

export default function PlanetScene({ containerClass = "" }) {
  return (
    <div className={`w-full h-full ${containerClass}`}>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Planet position={[0, 0, 0]} size={2} color="#5D3FD3" />
        <Rings position={[0, 0, 0]} size={3} color="#9F7AEA" />
        <Stars />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
