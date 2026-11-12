import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Optimized 3D Particle Constellation
function ParticleSwarm({ count = 800 }) {
  const meshRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorCyan = new THREE.Color('#06B6D4');
    const colorBlue = new THREE.Color('#3B82F6');
    const colorPurple = new THREE.Color('#8B5CF6');

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Spherical distribution around center
      const radius = 10 + Math.random() * 25;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i3 + 2] = radius * Math.cos(phi) - 5;

      // Color interpolation
      const mixRatio = Math.random();
      const chosenColor = mixRatio < 0.4 ? colorCyan : mixRatio < 0.8 ? colorBlue : colorPurple;
      col[i3] = chosenColor.r;
      col[i3 + 1] = chosenColor.g;
      col[i3 + 2] = chosenColor.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.04;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.08;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        vertexColors
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// Floating Geometric Futuristic Polyhedron
function FloatingPolyhedron({ position, color, speed = 1, scale = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.3;
      meshRef.current.rotation.y = t * 0.4;
      meshRef.current.position.y = position[1] + Math.sin(t * 0.8) * 0.4;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color={color}
        wireframe
        emissive={color}
        emissiveIntensity={0.6}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
}

// Floating Torus Rings
function FloatingRing({ position, color, scale = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.7;
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(t) * 0.5;
      meshRef.current.rotation.z = t * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <torusGeometry args={[1.6, 0.04, 16, 64]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.8}
        roughness={0.1}
        metalness={0.9}
      />
    </mesh>
  );
}

export const Hero3DScene = () => {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#06B6D4" />
        <pointLight position={[-10, -10, -10]} intensity={1.2} color="#8B5CF6" />

        <ParticleSwarm count={700} />
        <FloatingPolyhedron position={[-8, 3, -2]} color="#06B6D4" speed={0.8} scale={0.9} />
        <FloatingPolyhedron position={[9, -4, -4]} color="#8B5CF6" speed={1.1} scale={1.2} />
        <FloatingRing position={[8, 4, -3]} color="#3B82F6" scale={0.8} />
      </Canvas>
    </div>
  );
};

export default Hero3DScene;
