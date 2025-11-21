'use client';

import { useRef, useMemo, useEffect, useState } from 'react';

export default function Scene3D() {
  const [mounted, setMounted] = useState(false);
  const [Canvas, setCanvas] = useState<any>(null);
  const [components, setComponents] = useState<any>(null);

  useEffect(() => {
    setMounted(true);
    
    // Dynamically import React Three Fiber only on client
    Promise.all([
      import('@react-three/fiber'),
      import('@react-three/drei'),
      import('three')
    ]).then(([fiber, drei, THREE]) => {
      setCanvas(() => fiber.Canvas);
      setComponents({
        useFrame: fiber.useFrame,
        Sphere: drei.Sphere,
        MeshDistortMaterial: drei.MeshDistortMaterial,
        Float: drei.Float,
        THREE,
      });
    }).catch(console.error);
  }, []);

  if (!mounted || !Canvas || !components) {
    return null;
  }

  const { useFrame, Sphere, MeshDistortMaterial, Float, THREE } = components;

  function AnimatedSphere() {
    const meshRef = useRef<any>(null);
    const lightRef = useRef<any>(null);

    useFrame((state: any) => {
      const time = state.clock.getElapsedTime();
      
      if (meshRef.current) {
        meshRef.current.rotation.x = time * 0.2;
        meshRef.current.rotation.y = time * 0.3;
      }

      if (lightRef.current) {
        lightRef.current.position.x = Math.sin(time) * 3;
        lightRef.current.position.z = Math.cos(time) * 3;
      }
    });

    return (
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.5}>
          <MeshDistortMaterial
            color="#00D9FF"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
            transparent
            opacity={0.15}
          />
        </Sphere>
        <pointLight ref={lightRef} intensity={2} color="#00D9FF" distance={10} />
      </Float>
    );
  }

  function Particles() {
    const count = 1000;
    const particlesRef = useRef<any>(null);

    const [positions, colors] = useMemo(() => {
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);

      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

        colors[i * 3] = 0;
        colors[i * 3 + 1] = 0.85;
        colors[i * 3 + 2] = 1;
      }

      return [positions, colors];
    }, []);

    useFrame((state: any) => {
      if (particlesRef.current) {
        particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        particlesRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
      }
    });

    return (
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={count}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.025}
          vertexColors
          transparent
          opacity={0.6}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00D9FF" />
        <AnimatedSphere />
        <Particles />
      </Canvas>
    </div>
  );
}

