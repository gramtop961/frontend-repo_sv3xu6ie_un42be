import React from 'react'
import { Check, Truck, Factory, PackageOpen, Wheat } from 'lucide-react'

const COLORS = {
  PrimaryGreen: '#28C76F',
  MintHighlight: '#7EF09A',
  SoftAqua: '#DFF9F7',
  PaleCyan: '#E6FBFF',
  DeepShadow: '#0F8A50',
  CopyBlack: '#111111',
  AccentCream: '#FFFDF7',
}

const steps = [
  { name: 'Farms', icon: Wheat },
  { name: 'Mills', icon: Factory },
  { name: 'Logistics', icon: Truck },
  { name: 'Packaging', icon: PackageOpen },
  { name: 'Consumer', icon: Check },
]

export default function Stages() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-3">
        {steps.map((s, i) => {
          const Icon = s.icon
          return (
            <div key={s.name} className="flex-1 group">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shadow ring-1 ring-black/5 bg-white group-hover:scale-105 transition">
                  <Icon className="text-[#28C76F]" size={22} />
                </div>
                <div className="text-sm font-medium text-[#111111]">{s.name}</div>
              </div>
              {i < steps.length - 1 && (
                <div className="h-1 bg-gradient-to-r from-[#7EF09A] to-[#28C76F] rounded-full mt-2 opacity-70" />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
