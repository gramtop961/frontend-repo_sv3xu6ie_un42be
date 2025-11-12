import React from 'react'
import { Check, Truck, Factory, PackageOpen, Wheat } from 'lucide-react'

const COLORS = {
  PrimaryGreen: '#28C76F',
  MintHighlight: '#7EF09A',
  CopyBlack: '#111111',
}

const steps = [
  { name: 'Farms', icon: Wheat },
  { name: 'Mills', icon: Factory },
  { name: 'Logistics', icon: Truck },
  { name: 'Packaging', icon: PackageOpen },
  { name: 'Consumer', icon: Check },
]

export default function Stages({ selected = 'Farms', onSelect = () => {} }) {
  return (
    <div className="w-full">
      <div
        className="flex items-stretch md:items-center justify-start md:justify-between gap-2 md:gap-3 overflow-x-auto scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory"
        role="tablist"
        aria-label="Supply chain stages"
      >
        {steps.map((s, i) => {
          const Icon = s.icon
          const active = selected === s.name
          return (
            <button
              key={s.name}
              role="tab"
              aria-selected={active}
              onClick={() => onSelect(s.name)}
              className={`flex-none md:flex-1 group text-left focus:outline-none min-w-[140px] sm:min-w-[160px] snap-start px-2 py-1`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shadow ring-1 ring-black/5 bg-white transition-transform ${
                    active ? 'scale-105' : 'group-hover:scale-105'
                  }`}
                >
                  <Icon className={active ? 'text-[#111111]' : 'text-[#28C76F]'} size={22} />
                </div>
                <div className={`text-sm font-semibold ${active ? 'text-[#111111]' : 'text-[#111111]'}`}>{s.name}</div>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`h-1 rounded-full mt-2 transition-all ${
                    active
                      ? 'bg-gradient-to-r from-[#7EF09A] to-[#28C76F] opacity-100'
                      : 'bg-black/10 opacity-70 group-hover:opacity-90'
                  }`}
                />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
