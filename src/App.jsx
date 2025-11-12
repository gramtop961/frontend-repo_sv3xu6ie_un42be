import React from 'react'
import { motion } from 'framer-motion'
import ThreeScene from './components/ThreeScene'
import Stages from './components/Stages'
import FarmerCard from './components/FarmerCard'
import StyleGuide from './components/StyleGuide'

const COLORS = {
  PrimaryGreen: '#28C76F',
  MintHighlight: '#7EF09A',
  SoftAqua: '#DFF9F7',
  PaleCyan: '#E6FBFF',
  DeepShadow: '#0F8A50',
  CopyBlack: '#111111',
  AccentCream: '#FFFDF7',
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#DFF9F7] to-[#E6FBFF]">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7EF09A] to-[#28C76F]" />
          <span className="font-bold tracking-tight text-[#111111]">Traceable Red Rice</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-semibold text-white bg-[#28C76F] rounded-lg shadow hover:bg-[#22b663]">Trace this batch</button>
          <button className="px-4 py-2 text-sm font-semibold text-[#111111] bg-white rounded-lg shadow hover:bg-white/90">View farmer profile</button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-black tracking-tight text-[#111111]"
            >
              Traceable Red Rice — Majuli, Assam
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-4 text-[#111111]/80"
            >
              Interactive 3D hero with a rice-grain cluster and a stylized Majuli islet. Subtle particles suggest the supply chain path.
            </motion.p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <FarmerCard />
            </div>
          </div>
          <div>
            <ThreeScene />
          </div>
        </section>

        <section className="mt-10">
          <Stages />
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#111111]">Health benefits of Red Rice</h2>
          <ul className="list-disc pl-6 mt-3 text-[#111111]/80">
            <li>Rich in anthocyanins and antioxidants</li>
            <li>Anti-carcinogenic properties (short evidence microcopy)</li>
          </ul>
          <p className="mt-4 text-xs text-[#111111]/60">Traceability powered by blockchain — view tx on click.</p>
        </section>

        <StyleGuide />

        <footer className="py-12 text-center text-xs text-[#111111]/60">
          Approximate color hex values sampled visually; pick exact swatches from the uploaded asset for pixel-perfect results.
        </footer>
      </main>
    </div>
  )
}
