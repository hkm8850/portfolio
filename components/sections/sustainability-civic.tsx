"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Leaf, Users, Heart, BookOpen } from "lucide-react"
import Image from "next/image"

export function SustainabilityCivic() {
  const initiatives = [
    {
      title: "Ramadan Fundraising Campaign",
      description: "Organized a fundraising campaign during Ramadan to collect and distribute essential food items to those in need. This experience taught me the importance of community support and the impact of coming together to help others during crucial times.",
      icon: Heart,
      color: "from-red-500 to-pink-500",
      image: "/images/ramadan-fundraising.jpg",
    },
    {
      title: "Math Tutoring at Secours Populaire",
      description: "Volunteering as a mathematics tutor at Secours Populaire, helping high school students develop their skills and confidence in mathematics. This role allows me to contribute to educational equity and support underprivileged youth.",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
      image: "/images/secours-populaire-logo.jpg",
    },
  ]

  return (
    <section id="sustainability-civic" className="relative py-32 px-4 scroll-mt-[72px]">
      <div className="container mx-auto max-w-6xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Sustainability & Civic Engagement
            </span>
          </h2>
          <p className="text-gray-400 mb-16 text-lg max-w-3xl leading-relaxed">
            Commitment to community support and active participation in civic initiatives that create positive impact
          </p>
        </motion.div>

        <div className="space-y-12">
          {initiatives.map((init, index) => (
            <motion.div
              key={init.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border-emerald-500/30 backdrop-blur-sm hover:border-emerald-400/50 transition-all duration-300">
                <div className={`flex gap-8 items-start ${index === 0 || index === 1 ? "flex-row" : "flex-col"}`}>
                  {/* Image Section - For first and second items */}
                  {(index === 0 || index === 1) && init.image && (
                    <div className="flex-shrink-0 w-64 h-48">
                      <div className="w-full h-full relative rounded-lg overflow-hidden border-2 bg-white border-gray-300 shadow-md">
                        <Image
                          src={init.image}
                          alt={init.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}

                  {/* Content Section */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        className={`p-3 rounded-lg bg-gradient-to-br ${init.color} flex-shrink-0`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {init.icon && <init.icon className="w-6 h-6 text-white" />}
                      </motion.div>
                      <h3 className="text-2xl font-bold text-emerald-400">{init.title}</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{init.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
