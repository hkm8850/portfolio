"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { TypewriterText } from "@/components/typewriter-text"
import React from "react"

export function Welcome() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    const nav = document.querySelector("nav")
    const navHeight = nav ? nav.getBoundingClientRect().height : 72
    if (element) {
      const offsetTop = element.offsetTop
      const y = offsetTop - navHeight + 12
      console.debug("scrollToSection:", id, { offsetTop, navHeight, y, scrollY: window.scrollY })
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }
  const [showKalim, setShowKalim] = React.useState(false)

  return (
    <section id="welcome" className="relative min-h-screen flex items-center justify-center px-4 pt-20 scroll-mt-[72px]">
      <div className="container mx-auto text-center z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-block mb-6">
            <div className="px-8 py-2 rounded-full border border-cyan-500/50 bg-cyan-500/10 backdrop-blur-sm flex items-center justify-center">
              <span className="text-cyan-400 font-mono text-sm">ePortfolio @ N7 2025-2026</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight flex justify-center items-center gap-4">
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              <TypewriterText text="Hamza" speed={120} onComplete={() => setShowKalim(true)} />
            </span>
            <span className="text-white">
              {showKalim && <TypewriterText text="Kalim" speed={120} />}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Data Science & HPC Engineering Student at ENSEEIHT, specializing in distributed systems, machine learning,
            and high-performance computing
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("engineering-course")}
              className="group bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white border-0 px-8 py-6 text-lg shadow-lg shadow-cyan-500/50"
            >
              Explore My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("career-development")}
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 px-8 py-6 text-lg backdrop-blur-sm"
            >
              View My CV
            </Button>
          </div>
        </motion.div>

        {/* Floating data visualization elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
