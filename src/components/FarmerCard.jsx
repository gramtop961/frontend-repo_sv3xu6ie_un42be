import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

const COLORS = {
  PrimaryGreen: '#28C76F',
  MintHighlight: '#7EF09A',
  CopyBlack: '#111111',
  AccentCream: '#FFFDF7',
}

function Paddy() {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (!ref.current) return
    ref.current.rotation.x = Math.sin(t * 0.6) * 0.4
    ref.current.rotation.y = t * 0.8
  })
  return (
    <mesh ref={ref} castShadow position={[0, 0, 0]}>
      <capsuleGeometry args={[0.12, 0.5, 12, 24]} />
      <meshStandardMaterial color={COLORS.PrimaryGreen} roughness={0.35} metalness={0.05} emissive={COLORS.MintHighlight} emissiveIntensity={0.08} />
    </mesh>
  )
}

export default function FarmerCard({ farmer }) {
  const data = farmer || {
    name: 'Kamala Baruah',
    id: 'AS-MJ-0012',
    coords: '26.97, 94.22',
    cultivationDate: '2025-02-18',
    bio: 'Fourth-generation farmer cultivating traditional red rice in Majuli.',
    certifications: ['Organic (NPOP)', 'Fair Trade'],
    txHash: '0x1a9c...b54e',
  }

  return (
    <div
      className="bg-[--card] border border-black/5 rounded-2xl p-5 shadow-sm grid grid-cols-1 sm:grid-cols-3 gap-5 items-center"
      style={{ ['--card']: COLORS.AccentCream }}
    >
      {/* Left: avatar and basic info */}
      <div className="flex items-center gap-4 sm:col-span-2">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7EF09A] to-[#28C76F] ring-4 ring-white/80 shadow-md shrink-0" />
        <div className="flex-1">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <h3 className="text-lg font-bold text-[#111111] leading-tight">{data.name}</h3>
            <span className="text-xs font-semibold text-white bg-[#28C76F] px-2 py-1 rounded-full">{data.id}</span>
          </div>
          <p className="text-sm text-[#111111]/80 mt-1 leading-relaxed">{data.bio}</p>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <div className="flex gap-2"><span className="text-[#111111]/60 w-28">Coords</span><span className="font-medium text-[#111111]">{data.coords}</span></div>
            <div className="flex gap-2"><span className="text-[#111111]/60 w-28">Cultivation</span><span className="font-medium text-[#111111]">{data.cultivationDate}</span></div>
            <div className="flex gap-2 md:col-span-2"><span className="text-[#111111]/60 w-28">Certifications</span><span className="font-medium text-[#111111]">{data.certifications.join(', ')}</span></div>
            <div className="flex gap-2 md:col-span-2"><span className="text-[#111111]/60 w-28">Tx</span><span className="font-mono bg-white/70 px-1 rounded text-[#111111]">{data.txHash}</span></div>
          </div>
        </div>
      </div>

      {/* Right: 3D paddy preview */}
      <div className="h-28 sm:h-32 md:h-36 w-full rounded-xl overflow-hidden ring-1 ring-black/5 bg-white">
        <Canvas camera={{ position: [1.4, 1, 1.6], fov: 50 }} shadows>
          <color attach="background" args={["#ffffff"]} />
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 3, 2]} intensity={1} castShadow color={COLORS.MintHighlight} />
          <Paddy />
        </Canvas>
      </div>
    </div>
  )
}
