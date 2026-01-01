"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export function InternationalMobility() {
  return (
    <section id="international-mobility" className="relative py-32 px-4 scroll-mt-[72px]">
      <div className="container mx-auto max-w-6xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              International Mobility
            </span>
          </h2>
        </motion.div>

        {/* Main Content - Text and Images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col md:flex-row gap-12 items-center"
        >
          {/* Text Section */}
          <div className="flex-1">
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              After spending two years in preparatory classes for in Rabat-Morocco and successfully passing the CCINP
              (Concours Commun INP) entrance exam, I was able to join the prestigious ENSEEIHT. This opportunity allowed
              me to continue my studies in France, specifically in Toulouse.
            </p>
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                <h3 className="text-cyan-400 font-semibold mb-2">Academic Excellence</h3>
                <p className="text-gray-400 text-sm">
                  Integrated into one of France's leading engineering schools with specialization in Digital Science,
                  Data, and HPC
                </p>
              </div>
              <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                <h3 className="text-emerald-400 font-semibold mb-2">Cultural Immersion</h3>
                <p className="text-gray-400 text-sm">
                  Living in Toulouse, France's aerospace capital, while building international connections
                </p>
              </div>
            </div>
          </div>

          {/* Images Section */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md h-96">
              {/* First Image - Toulouse Aerial View */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute top-0 left-0 w-64 h-48 z-20"
              >
                <Card className="w-full h-full overflow-hidden border-2 border-cyan-500/30 shadow-lg shadow-cyan-500/20">
                  <Image
                    src="/images/toulouse.jpg"
                    alt="Toulouse Aerial View"
                    fill
                    className="object-cover"
                  />
                </Card>
              </motion.div>

              {/* Second Image - ENSEEIHT Campus */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute bottom-0 right-0 w-64 h-48 z-10"
              >
                <Card className="w-full h-full overflow-hidden border-2 border-emerald-500/30 shadow-lg shadow-emerald-500/20">
                  <Image
                    src="/images/enseeiht.jpg"
                    alt="ENSEEIHT Campus"
                    fill
                    className="object-cover"
                  />
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Experience Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-cyan-400 mb-8">Key Experiences</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Language Development",
                description: "Improved French proficiency while studying in French",
              },
              {
                title: "International Network",
                description: "Built connections with students from diverse backgrounds",
              },
              {
                title: "Engineering Excellence",
                description: "Access to cutting-edge facilities and world-class instruction",
              },
            ].map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Card className="p-6 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 h-full">
                  <h4 className="text-lg font-bold text-cyan-400 mb-3">{highlight.title}</h4>
                  <p className="text-gray-300 text-sm">{highlight.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
