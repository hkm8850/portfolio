"use client"

import { useState } from "react"
import { Welcome } from "@/components/sections/welcome"
import { EngineeringCourse } from "@/components/sections/engineering-course"
import { InternationalMobility } from "@/components/sections/international-mobility"
import { SustainabilityCivic } from "@/components/sections/sustainability-civic"
import { SportActivities } from "@/components/sections/sport-activities"
import { CV } from "@/components/sections/cv"
import { Navigation } from "@/components/navigation"
import { ParticleBackground } from "@/components/particle-background"
import { MatrixRain } from "@/components/matrix-rain"
import { ScrollProgress } from "@/components/scroll-progress"
import { SystemBoot } from "@/components/system-boot"

export default function Home() {
  const [bootComplete, setBootComplete] = useState(false)

  return (
    <>
      <SystemBoot onComplete={() => setBootComplete(true)} />

      {bootComplete && (
        <div className="relative min-h-screen bg-[#0B1220] text-white overflow-x-hidden">
          <MatrixRain />
          <ParticleBackground />
          <ScrollProgress />
          <Navigation />

          <main>
            <Welcome />
            <EngineeringCourse />
            <InternationalMobility />
            <SustainabilityCivic />
            <SportActivities />
            <CV />
          </main>

          <footer className="relative z-10 border-t border-cyan-500/20 py-8 text-center text-sm text-gray-400">
            <p>© 2026 ePortfolio @ N7. Built with Next.js & TailwindCSS</p>
          </footer>
        </div>
      )}
    </>
  )
}
