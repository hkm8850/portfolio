"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Boxes, Wrench, BarChart3, GraduationCap } from "lucide-react"

export function EngineeringCourse() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      color: "from-cyan-500 to-blue-500",
      skills: ["Python", "C++", "SQL", "R", "Java", "Bash"],
    },
    {
      title: "Frameworks",
      icon: Boxes,
      color: "from-emerald-500 to-teal-500",
      skills: ["TensorFlow", "PyTorch", "Spark", "Hadoop", "Scikit-learn", "Pandas"],
    },
    {
      title: "Tools",
      icon: Wrench,
      color: "from-cyan-500 to-emerald-500",
      skills: ["Docker", "Kubernetes", "Git", "Linux", "AWS", "Azure"],
    },
    {
      title: "Visualization",
      icon: BarChart3,
      color: "from-emerald-500 to-cyan-500",
      skills: ["Tableau", "Power BI", "Matplotlib", "Plotly", "D3.js", "Seaborn"],
    },
  ]

  const coursework = [
    {
      name: "High-Performance Computing",
      description: "Advanced parallel algorithms, MPI, OpenMP",
      icon: Code2,
    },
    {
      name: "Big Data Systems",
      description: "Spark, Hadoop, distributed processing",
      icon: Boxes,
    },
    {
      name: "Machine Learning",
      description: "Deep learning, neural networks, model optimization",
      icon: Wrench,
    },
    {
      name: "Data Analytics",
      description: "Statistical analysis, visualization, insights",
      icon: BarChart3,
    },
  ]

  return (
    <section
      id="engineering-course"
      className="relative py-32 px-4 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent scroll-mt-[72px]"
    >
      <div className="container mx-auto max-w-6xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Engineering Course
              </span>
            </h2>
          </div>
          <p className="text-gray-400 mb-16 text-lg max-w-3xl leading-relaxed">
            A comprehensive toolkit for data science, machine learning, and high-performance computing developed through
            my engineering studies at ENSEEIHT
          </p>
        </motion.div>

        {/* Main Coursework */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-cyan-400 mb-8">Main Coursework</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {coursework.map((course, index) => (
              <Card
                key={course.name}
                className="p-6 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="p-3 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <course.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2">{course.name}</h4>
                    <p className="text-gray-300 text-sm">{course.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Skills Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-emerald-400 mb-8">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <Card className="p-8 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 group h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <category.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-cyan-400">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge
                          variant="outline"
                          className="px-4 py-2 text-sm border-cyan-500/50 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
