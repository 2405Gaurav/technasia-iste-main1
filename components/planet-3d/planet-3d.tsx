"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";

function Planet({ position = [0, 0, 0] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [scale, setScale] = useState(0.1); // Start very small
  const [color, setColor] = useState("#FF4500"); // Volcanic red-orange
  const [emissive, setEmissive] = useState("#FF0000"); // Glowing red
  const [finalSize] = useState(2); // Normal size

  const normalSpeed = 0.1;
  const maxSpeed = 15; // Faster initial spin
  const transitionDuration = 5; // Longer transition (5 seconds)

  useFrame(({ clock }) => {
    if (!meshRef.current) return;

    const elapsed = clock.getElapsedTime();
    const progress = Math.min(elapsed / transitionDuration, 1);

    // Explosive growth animation (easeOutElastic)
    if (progress < 1) {
      const elasticProgress = 1 - Math.pow(2, -10 * progress) * Math.cos(progress * Math.PI * 4);
      const currentScale = THREE.MathUtils.lerp(0.1, finalSize, elasticProgress);
      setScale(currentScale);
    }

    // Spin animation (fast to slow)
    const spinProgress = Math.min(elapsed / (transitionDuration * 0.8), 1);
    const easeOutSpin = 1 - Math.pow(1 - spinProgress, 3);
    const speed = maxSpeed - (maxSpeed - normalSpeed) * easeOutSpin;
    meshRef.current.rotation.y += speed * 0.05;

    // Color transition (volcanic to normal)
    const colorProgress = Math.min(elapsed / (transitionDuration * 1.2), 1);
    const newColor = new THREE.Color("#FF4500").lerp(
      new THREE.Color("#5D3FD3"),
      colorProgress
    );
    const newEmissive = new THREE.Color("#FF0000").lerp(
      new THREE.Color("#000000"),
      colorProgress
    );
    setColor(`#${newColor.getHexString()}`);
    setEmissive(`#${newEmissive.getHexString()}`);
  });

  return (
    <Sphere 
      ref={meshRef} 
      args={[1, 32, 32]} 
      position={position as [number, number, number]}
      scale={scale}
    >
      <meshPhongMaterial
        color={color}
        emissive={emissive}
        emissiveIntensity={0.8}
        specular="#ffffff"
        shininess={10}
      />
    </Sphere>
  );
}

function Rings({ position = [0, 0, 0] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [ringScale, setRingScale] = useState(0.1);
  const [finalSize] = useState(3);
  const transitionDuration = 5;

  useFrame(({ clock }) => {
    if (!meshRef.current) return;

    const elapsed = clock.getElapsedTime();
    const progress = Math.min(elapsed / transitionDuration, 1);

    // Ring growth animation
    if (progress < 1) {
      const elasticProgress = 1 - Math.pow(2, -10 * progress) * Math.cos(progress * Math.PI * 3.5);
      const currentScale = THREE.MathUtils.lerp(0.1, finalSize, elasticProgress);
      setRingScale(currentScale);
    }

    // Fast initial spin that slows down
    const spinSpeed = 0.5 + (5 * (1 - progress)); // Starts fast (5.5), ends at 0.5
    meshRef.current.rotation.x = Math.PI / 2;
    meshRef.current.rotation.y += spinSpeed * 0.05;
  });

  return (
    <mesh 
      ref={meshRef} 
      position={position as [number, number, number]}
      scale={ringScale}
    >
      <torusGeometry args={[1, 0.05, 16, 100]} />

      <meshPhongMaterial
        color="#9F7AEA"
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
        <Planet position={[0, 0, 0]} />
        <Rings position={[0, 0, 0]} />
        <Stars />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}