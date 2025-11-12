import React from 'react'

export default function StyleGuide() {
  const tokens = [
    { name: 'PrimaryGreen', hex: '#28C76F', usage: '3D object, primary CTA' },
    { name: 'MintHighlight', hex: '#7EF09A', usage: 'Hover highlights, gloss' },
    { name: 'SoftAqua', hex: '#DFF9F7', usage: 'Hero background' },
    { name: 'PaleCyan', hex: '#E6FBFF', usage: 'Section separators' },
    { name: 'DeepShadow', hex: '#0F8A50', usage: '3D shadowing' },
    { name: 'CopyBlack', hex: '#111111', usage: 'Primary text' },
    { name: 'AccentCream', hex: '#FFFDF7', usage: 'Cards/panels' },
  ]

  return (
    <div className="mt-10">
      <h3 className="text-xl font-bold text-[#111111] mb-3">Style guide</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tokens.map((t) => (
          <div key={t.name} className="rounded-xl p-4 border border-black/5 bg-white/70 backdrop-blur">
            <div className="w-full h-16 rounded-md mb-3" style={{ background: t.hex }} />
            <div className="text-sm font-semibold text-[#111111]">{t.name}</div>
            <div className="text-xs text-[#111111]/70">{t.hex} — {t.usage}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
