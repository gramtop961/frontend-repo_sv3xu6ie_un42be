import React from 'react'

const COLORS = {
  PrimaryGreen: '#28C76F',
  MintHighlight: '#7EF09A',
  SoftAqua: '#DFF9F7',
  PaleCyan: '#E6FBFF',
  DeepShadow: '#0F8A50',
  CopyBlack: '#111111',
  AccentCream: '#FFFDF7',
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
    <div className="bg-[--card] border border-black/5 rounded-2xl p-5 flex items-center gap-4 shadow-sm"
      style={{
        ['--card']: COLORS.AccentCream,
      }}
    >
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7EF09A] to-[#28C76F] ring-4 ring-white/80 shadow-md" />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-[#111111]">{data.name}</h3>
          <span className="text-xs font-medium text-white bg-[#28C76F] px-2 py-1 rounded-full">{data.id}</span>
        </div>
        <p className="text-sm text-[#111111]/80 mt-1">{data.bio}</p>
        <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-[#111111]/80">
          <div>Coords: <span className="font-medium">{data.coords}</span></div>
          <div>Cultivation: <span className="font-medium">{data.cultivationDate}</span></div>
          <div>Certifications: <span className="font-medium">{data.certifications.join(', ')}</span></div>
          <div>Tx: <span className="font-mono bg-white/70 px-1 rounded">{data.txHash}</span></div>
        </div>
      </div>
    </div>
  )
}
