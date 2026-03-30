'use client';

import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';

function Building() {
  return (
    <group>
      <mesh position={[0, 0.8, 0]}>
        <boxGeometry args={[2.5, 1.6, 1.4]} />
        <meshStandardMaterial color="#0B3C5D" metalness={0.3} roughness={0.35} />
      </mesh>
      <mesh position={[0, 1.9, 0]}>
        <boxGeometry args={[1.4, 0.5, 1]} />
        <meshStandardMaterial color="#1ABC9C" metalness={0.15} roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.2, 0.71]}>
        <boxGeometry args={[0.65, 0.7, 0.1]} />
        <meshStandardMaterial color="#F8FAFC" />
      </mesh>
    </group>
  );
}

export default function HospitalScene() {
  return (
    <div className="h-[420px] w-full rounded-3xl border border-slate-200 bg-gradient-to-br from-cyan-100 to-slate-100 shadow-2xl">
      <Canvas camera={{ position: [3.2, 2.5, 4.2], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 3, 2]} intensity={1.2} />
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
          <Building />
        </Float>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.35, 0]}>
          <planeGeometry args={[8, 8]} />
          <meshStandardMaterial color="#dbeafe" />
        </mesh>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
      </Canvas>
    </div>
  );
}
