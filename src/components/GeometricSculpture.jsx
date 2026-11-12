import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Rotating abstract geodesic core
function CoreSculpture() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.25;
      meshRef.current.rotation.y += delta * 0.35;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.85}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#1E1E1E"
        roughness={0.2}
        metalness={0.85}
        wireframe={false}
      />
    </mesh>
  );
}

// Outer geometric wireframe cage with subtle orange accent
function WireframeCage() {
  const cageRef = useRef();

  useFrame((state, delta) => {
    if (cageRef.current) {
      cageRef.current.rotation.x -= delta * 0.18;
      cageRef.current.rotation.y += delta * 0.22;
    }
  });

  return (
    <mesh ref={cageRef} scale={2.4}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#F97316"
        wireframe
        emissive="#EA580C"
        emissiveIntensity={0.4}
        roughness={0.1}
        metalness={0.9}
      />
    </mesh>
  );
}

// Orbital delicate rings
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
        emissiveIntensity={0.6}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
}

// Floating minimal geometric satellites
function FloatingNodes() {
  const nodes = [
    { pos: [-2.8, 1.8, 0.5], size: 0.2, color: '#F97316' },
    { pos: [2.9, -1.6, -0.8], size: 0.25, color: '#262626' },
    { pos: [2.2, 2.2, -1.2], size: 0.18, color: '#D97706' },
    { pos: [-2.4, -2.1, 1.0], size: 0.22, color: '#404040' },
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
            emissiveIntensity={0.3}
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
        minHeight: '440px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'grab'
      }}
      aria-label="Interactive 3D Abstract Geometric Sculpture"
    >
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 45 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.7} />
        {/* Warm key light */}
        <directionalLight position={[6, 8, 5]} intensity={1.5} color="#FFFBF5" />
        {/* Subtle orange accent rim light */}
        <pointLight position={[-6, -4, -3]} intensity={2.0} color="#F97316" />
        <pointLight position={[4, -5, 4]} intensity={1.2} color="#D97706" />

        <CoreSculpture />
        <WireframeCage />
        <OrbitalRing radius={3.1} speed={0.4} tilt={0.4} color="#F97316" />
        <OrbitalRing radius={3.5} speed={-0.3} tilt={-0.6} color="#78716C" />
        <FloatingNodes />
      </Canvas>
    </div>
  );
};

export default GeometricSculpture;
