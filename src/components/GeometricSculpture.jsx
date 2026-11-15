import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Central Geometric Sculpture
function CoreSculpture() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.22;
      meshRef.current.rotation.y += delta * 0.28;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.85}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#191919"
        roughness={0.25}
        metalness={0.8}
        wireframe={false}
      />
    </mesh>
  );
}

// Outer Muted Orange Geodesic Wireframe
function WireframeCage() {
  const cageRef = useRef();

  useFrame((state, delta) => {
    if (cageRef.current) {
      cageRef.current.rotation.x -= delta * 0.15;
      cageRef.current.rotation.y += delta * 0.18;
    }
  });

  return (
    <mesh ref={cageRef} scale={2.45}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#D97752"
        wireframe
        emissive="#D97752"
        emissiveIntensity={0.35}
        roughness={0.15}
        metalness={0.85}
      />
    </mesh>
  );
}

// Subtle Orbital Rings
function OrbitalRing({ radius, speed, tilt, color }) {
  const ringRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    if (ringRef.current) {
      ringRef.current.rotation.z = t;
      ringRef.current.rotation.x = tilt + Math.sin(t * 0.5) * 0.15;
    }
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[radius, 0.02, 16, 100]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.4}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
}

// Floating Geometric Node Satellites
function FloatingNodes() {
  const nodes = [
    { pos: [-2.9, 1.9, 0.5], size: 0.2, color: '#D97752' },
    { pos: [3.1, -1.8, -0.8], size: 0.24, color: '#191919' },
    { pos: [2.3, 2.3, -1.2], size: 0.18, color: '#EAE6DC' },
    { pos: [-2.5, -2.2, 1.0], size: 0.22, color: '#4A4A48' },
  ];

  return (
    <group>
      {nodes.map((node, i) => (
        <mesh key={i} position={node.pos}>
          <octahedronGeometry args={[node.size, 0]} />
          <meshStandardMaterial
            color={node.color}
            wireframe
            emissive={node.color}
            emissiveIntensity={0.25}
          />
        </mesh>
      ))}
    </group>
  );
}

export const GeometricSculpture = () => {
  return (
    <div 
      style={{
        width: '100%',
        height: '100%',
        minHeight: '450px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'grab'
      }}
      aria-label="Interactive 3D Abstract Geometric Kinetic Sculpture"
    >
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 45 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.75} />
        <directionalLight position={[6, 8, 5]} intensity={1.4} color="#FFFBF5" />
        <pointLight position={[-6, -4, -3]} intensity={1.8} color="#D97752" />
        <pointLight position={[4, -5, 4]} intensity={1.1} color="#EAE6DC" />

        <CoreSculpture />
        <WireframeCage />
        <OrbitalRing radius={3.15} speed={0.35} tilt={0.4} color="#D97752" />
        <OrbitalRing radius={3.55} speed={-0.28} tilt={-0.6} color="#7A7873" />
        <FloatingNodes />
      </Canvas>
    </div>
  );
};

export default GeometricSculpture;
