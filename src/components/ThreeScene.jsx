import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'

// Colors from design brief
const COLORS = {
  PrimaryGreen: '#28C76F',
  MintHighlight: '#7EF09A',
  SoftAqua: '#DFF9F7',
  PaleCyan: '#E6FBFF',
  DeepShadow: '#0F8A50',
  CopyBlack: '#111111',
  AccentCream: '#FFFDF7',
}

function Grain({ i = 0 }) {
  const ref = useRef()
  const speed = 0.2 + (i % 5) * 0.03
  const offset = (i * 0.5) % Math.PI
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + offset
    ref.current.rotation.x = Math.sin(t) * 0.4
    ref.current.rotation.y = Math.cos(t) * 0.4
  })
  return (
    <mesh ref={ref} castShadow position={[Math.sin(i) * 0.8, Math.cos(i * 1.3) * 0.6, (i % 5) * 0.2 - 0.5]}>
      <capsuleGeometry args={[0.08, 0.32, 8, 16]} />
      <meshStandardMaterial color={COLORS.PrimaryGreen} roughness={0.35} metalness={0.05} emissive={COLORS.MintHighlight} emissiveIntensity={0.05} />
    </mesh>
  )
}

function GrainCluster() {
  const grains = useMemo(() => new Array(18).fill(0).map((_, i) => i), [])
  return (
    <Float floatIntensity={0.8} rotationIntensity={0.4} speed={0.8}>
      {grains.map((i) => (
        <Grain key={i} i={i} />
      ))}
    </Float>
  )
}

function MajuliIslet() {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.2
    ref.current.rotation.z = Math.sin(t) * 0.15
  })
  return (
    <group ref={ref} position={[0, -0.6, 0]}>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.3, 64]} />
        <meshStandardMaterial color={COLORS.AccentCream} />
      </mesh>
      <mesh castShadow position={[0.15, -0.03, 0.12]}>
        <icosahedronGeometry args={[0.5, 1]} />
        <meshStandardMaterial color={COLORS.DeepShadow} roughness={0.8} />
      </mesh>
      <mesh castShadow position={[-0.4, -0.05, -0.2]}>
        <boxGeometry args={[0.4, 0.1, 0.4]} />
        <meshStandardMaterial color={COLORS.PrimaryGreen} roughness={0.6} />
      </mesh>
    </group>
  )
}

function Particles() {
  const ref = useRef()
  const count = 120
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const t = (i / count) * Math.PI * 2
      arr[i * 3] = Math.cos(t) * 1.6
      arr[i * 3 + 1] = Math.sin(t) * 0.6 + 0.2
      arr[i * 3 + 2] = (Math.random() - 0.5) * 0.2
    }
    return arr
  }, [])
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.4
    if (!ref.current) return
    ref.current.rotation.z = t * 0.25
  })
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color={COLORS.MintHighlight} size={0.02} sizeAttenuation transparent opacity={0.6} />
    </points>
  )
}

export default function ThreeScene() {
  return (
    <div className="h-56 sm:h-72 md:h-[520px] w-full rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
      <Canvas camera={{ position: [1.8, 1.2, 2.2], fov: 50 }} shadows>
        <color attach="background" args={[COLORS.SoftAqua]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 4, 2]} intensity={1} castShadow color={COLORS.MintHighlight} />
        <group position={[0, -0.1, 0]}>
          <GrainCluster />
          <MajuliIslet />
          <Particles />
        </group>
        <OrbitControls enablePan={false} maxDistance={4} minDistance={1.2} enableDamping dampingFactor={0.08} />
      </Canvas>
    </div>
  )
}
