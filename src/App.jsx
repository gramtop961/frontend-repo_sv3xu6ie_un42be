import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ThreeScene from './components/ThreeScene'
import Stages from './components/Stages'
import FarmerCard from './components/FarmerCard'

export default function App() {
  const [stage, setStage] = useState('Farms')

  return (
    <div className="min-h-screen bg-white">
      <header className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between gap-3 border-b border-black/5">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-[#28C76F] shrink-0" />
          <span className="font-bold tracking-tight text-[#111111] text-sm sm:text-base truncate">Traceable Red Rice</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#28C76F] rounded-lg shadow hover:bg-[#22b663]">Trace this batch</button>
          <button className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-[#111111] bg-white border border-black/10 rounded-lg hover:bg-black/5">View farmer profile</button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6">
        <section className="grid md:grid-cols-2 gap-6 md:gap-8 items-center py-6 sm:py-8">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-[#111111]"
            >
              Traceable Red Rice — Majuli, Assam
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-3 sm:mt-4 text-sm sm:text-base text-[#111111]/80"
            >
              Interactive 3D hero with a rice-grain cluster and a stylized Majuli islet. Subtle particles suggest the supply chain path.
            </motion.p>
            <div className="mt-4 sm:mt-6">
              <FarmerCard stage={stage} />
            </div>
          </div>
          <div>
            <ThreeScene />
          </div>
        </section>

        <section className="pb-6 sm:pb-8">
          <Stages selected={stage} onSelect={setStage} />
        </section>

        <section className="py-8 sm:py-10 border-t border-black/5">
          <h2 className="text-xl sm:text-2xl font-bold text-[#111111]">Health benefits of Red Rice</h2>
          <ul className="list-disc pl-5 sm:pl-6 mt-2 sm:mt-3 text-[#111111]/80 text-sm sm:text-base">
            <li>Rich in anthocyanins and antioxidants</li>
            <li>Anti-carcinogenic properties (short evidence microcopy)</li>
          </ul>
          <p className="mt-3 sm:mt-4 text-xs text-[#111111]/60">Traceability powered by blockchain — view tx on click.</p>
        </section>

        <footer className="py-10 sm:py-12 text-center text-xs text-[#111111]/60">
          © Traceable Red Rice
        </footer>
      </main>
    </div>
  )
}
