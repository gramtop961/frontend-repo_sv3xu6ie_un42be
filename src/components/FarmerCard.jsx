import React, { useMemo, useRef } from 'react'
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

export default function FarmerCard({ farmer, stage }) {
  const data = farmer || {
    name: 'Kamala Baruah',
    id: 'AS-MJ-0012',
    coords: '26.97, 94.22',
    location: 'Majuli, Assam',
    cultivationDate: '2025-02-18',
    bio: 'Fourth-generation farmer cultivating traditional red rice in Majuli.',
    certifications: ['Organic (NPOP)', 'Fair Trade'],
    txHash: '0x1a9c...b54e',
    consumerDetails: {
      variety: 'Red Rice (Bao Dhan)',
      batch: 'RR-MJ-24-09',
      weight: '1kg',
      milledOn: '2025-03-05',
      bestBefore: '2026-03-05',
      origin: 'Majuli → Guwahati',
      nutrition: 'Rich in anthocyanins and antioxidants',
    },
  }

  const stageInfo = useMemo(() => {
    switch (stage) {
      case 'Farms':
        return { title: 'Farm location', detail: 'Majuli, Assam', sub: data.coords }
      case 'Mills':
        return { title: 'Milling location', detail: 'Majuli, Assam', sub: 'Village mill cooperative' }
      case 'Logistics':
        return { title: 'Logistics', detail: 'Travelled Majuli → Guwahati', sub: 'Brahmaputra ferry + road' }
      case 'Packaging':
        return { title: 'Packaging unit', detail: 'Bamunimaidan, Guwahati', sub: 'Sealed and lot-coded' }
      case 'Consumer':
        return { title: 'Consumer details', detail: 'Complete batch information', sub: '' }
      default:
        return { title: 'Overview', detail: data.location, sub: data.coords }
    }
  }, [stage, data])

  return (
    <div
      className="bg-[--card] border border-black/5 rounded-2xl p-4 sm:p-5 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5"
      style={{ ['--card']: COLORS.AccentCream }}
    >
      {/* Left: avatar */}
      <div className="flex items-start gap-3 sm:gap-4 md:col-span-2">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#7EF09A] to-[#28C76F] ring-4 ring-white/80 shadow-md shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 sm:gap-3 flex-wrap">
            <h3 className="text-base sm:text-lg font-bold text-[#111111] leading-tight truncate">{data.name}</h3>
            <span className="text-[10px] sm:text-xs font-semibold text-white bg-[#28C76F] px-2 py-1 rounded-full">{data.id}</span>
          </div>

          {/* Labeled grid with fixed label width for perfect alignment */}
          <div className="mt-3 sm:mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-2 text-sm">
            <div className="flex"><span className="text-[#111111]/60 w-28 sm:w-32 shrink-0">Bio</span><span className="font-medium text-[#111111] line-clamp-2">{data.bio}</span></div>
            <div className="flex"><span className="text-[#111111]/60 w-28 sm:w-32 shrink-0">Coords</span><span className="font-medium text-[#111111]">{data.coords}</span></div>
            <div className="flex"><span className="text-[#111111]/60 w-28 sm:w-32 shrink-0">Cultivation</span><span className="font-medium text-[#111111]">{data.cultivationDate}</span></div>
            <div className="flex sm:col-span-2"><span className="text-[#111111]/60 w-28 sm:w-32 shrink-0">Certifications</span><span className="font-medium text-[#111111]">{data.certifications.join(', ')}</span></div>
            <div className="flex sm:col-span-2"><span className="text-[#111111]/60 w-28 sm:w-32 shrink-0">Tx</span><span className="font-mono bg-white/70 px-1 rounded text-[#111111] break-all">{data.txHash}</span></div>
          </div>

          {/* Stage-specific info bar */}
          <div className="mt-3 sm:mt-4 p-3 rounded-lg bg-white/70 ring-1 ring-black/5">
            <div className="text-xs uppercase tracking-wide text-[#111111]/60">{stageInfo.title}</div>
            {stage === 'Consumer' ? (
              <div className="mt-1 text-sm text-[#111111] grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                <div><span className="text-[#111111]/60 w-28 inline-block">Variety</span> {data.consumerDetails.variety}</div>
                <div><span className="text-[#111111]/60 w-28 inline-block">Batch</span> {data.consumerDetails.batch}</div>
                <div><span className="text-[#111111]/60 w-28 inline-block">Weight</span> {data.consumerDetails.weight}</div>
                <div><span className="text-[#111111]/60 w-28 inline-block">Milled on</span> {data.consumerDetails.milledOn}</div>
                <div><span className="text-[#111111]/60 w-28 inline-block">Best before</span> {data.consumerDetails.bestBefore}</div>
                <div className="sm:col-span-2"><span className="text-[#111111]/60 w-28 inline-block">Origin</span> {data.consumerDetails.origin}</div>
                <div className="sm:col-span-2"><span className="text-[#111111]/60 w-28 inline-block">Nutrition</span> {data.consumerDetails.nutrition}</div>
              </div>
            ) : (
              <div className="mt-1 text-sm text-[#111111]">
                <div className="font-semibold">{stageInfo.detail}</div>
                {stageInfo.sub && <div className="text-[#111111]/70">{stageInfo.sub}</div>}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right: 3D paddy preview */}
      <div className="h-24 sm:h-28 md:h-36 w-full rounded-xl overflow-hidden ring-1 ring-black/5 bg-white">
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
