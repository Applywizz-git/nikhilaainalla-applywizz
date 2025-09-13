import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, useTexture } from '@react-three/drei';
import * as THREE from 'three';

interface ParticleSystemProps {
  count: number;
}

function ParticleSystem({ count }: ParticleSystemProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const { viewport } = useThree();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * viewport.width * 2,
          (Math.random() - 0.5) * viewport.height * 2,
          (Math.random() - 0.5) * 10,
        ],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
        scale: Math.random() * 0.5 + 0.1,
        velocity: (Math.random() - 0.5) * 0.02,
      });
    }
    return temp;
  }, [count, viewport]);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    particles.forEach((particle, i) => {
      const matrix = new THREE.Matrix4();
      
      // Update position with floating motion
      const x = particle.position[0] + Math.sin(time + i) * 0.1;
      const y = particle.position[1] + Math.cos(time + i * 0.5) * 0.1;
      const z = particle.position[2] + Math.sin(time + i * 0.3) * 0.05;
      
      // Update rotation
      const rotX = particle.rotation[0] + time * 0.1;
      const rotY = particle.rotation[1] + time * 0.15;
      const rotZ = particle.rotation[2] + time * 0.05;
      
      matrix.compose(
        new THREE.Vector3(x, y, z),
        new THREE.Quaternion().setFromEuler(new THREE.Euler(rotX, rotY, rotZ)),
        new THREE.Vector3(particle.scale, particle.scale, particle.scale)
      );
      
      meshRef.current!.setMatrixAt(i, matrix);
    });
    
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <octahedronGeometry args={[0.1]} />
      <meshStandardMaterial 
        color="#22C55E" 
        transparent 
        opacity={0.6}
        emissive="#22C55E"
        emissiveIntensity={0.2}
      />
    </instancedMesh>
  );
}

function FloatingShape({ position, color }: { position: [number, number, number], color: string }) {
  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      position={position}
    >
      <mesh>
        <dodecahedronGeometry args={[0.3]} />
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={0.4}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  const { camera, gl } = useThree();
  
  useEffect(() => {
    // Enable mouse parallax effect
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      // Subtle parallax - max 3 degrees
      camera.rotation.y = x * 0.05;
      camera.rotation.x = y * 0.05;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [camera]);

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight position={[-10, -10, -5]} intensity={0.3} color="#84CC16" />
      
      <ParticleSystem count={30} />
      
      <FloatingShape position={[-4, 2, -2]} color="#22C55E" />
      <FloatingShape position={[4, -1, -3]} color="#84CC16" />
      <FloatingShape position={[-2, -3, -1]} color="#F59E0B" />
      <FloatingShape position={[3, 3, -4]} color="#F97316" />
    </>
  );
}

export function Background3D() {
  return (
    <div className="fixed inset-0 z-0 opacity-30">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}