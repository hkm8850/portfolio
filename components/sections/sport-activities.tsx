"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Trophy, Utensils, Lightbulb } from "lucide-react"

export function SportActivities() {
  const activities = [
    {
      title: "Football",
      description:
        "When I was young, I took part in several football competitions, including one in France.",
      icon: Trophy,
      image: "/images/football.jpg",
      order: "row",
    },
    {
      title: "Cooking",
      description:
        "Before moving to France, I hardly ever cooked, but living on my own has given me the chance to discover and appreciate the joy of preparing meals.",
      icon: Utensils,
      image: "/images/cooking.jpg",
      order: "row-reverse",
    },
    {
      title: "Learning New Things",
      description:
        "I enjoy spending my free time learning new things, whether they support my academic journey or enrich it.",
      icon: Lightbulb,
      image: "/images/learning.jpg",
      order: "row",
    },
  ]

  return (
    <section id="sport-activities" className="relative py-32 px-4 scroll-mt-[72px]">
      <div className="container mx-auto max-w-6xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Sport & Other Activities
            </span>
          </h2>
          <p className="text-gray-400 mb-16 text-lg max-w-3xl leading-relaxed">
            Since a young age, I have been involved in sports. My father instilled in me a love for physical activity,
            which is why I have practiced many different sports throughout my life: kickboxing, Muay Thai, boxing,
            karate, football, and bodybuilding. Outside of all that, I enjoy spending my free time learning new
            things, whether they support my academic journey or enrich it. Interestingly, I've also developed a passion
            for cooking. Before moving to France, I hardly ever cooked, but living on my own has given me the chance to
            discover and appreciate the joy of preparing meals.
          </p>
        </motion.div>

        <div className="space-y-20">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className={`flex flex-col ${
                  index === 1 ? "md:flex-row-reverse" : "md:flex-row"
                } gap-8 items-center`}
              >
                {/* Image/Icon Section */}
                <div className="flex-1 flex justify-center">
                  <div className="relative w-full max-w-md">
                    <Card className="p-0 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border-cyan-500/30 backdrop-blur-sm overflow-hidden">
                      <motion.div
                        className="relative aspect-video bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <activity.icon className="w-24 h-24 text-cyan-400 opacity-50" />
                      </motion.div>
                    </Card>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  >
                    <h3 className="text-3xl font-bold text-cyan-400 mb-4">{activity.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">{activity.description}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
