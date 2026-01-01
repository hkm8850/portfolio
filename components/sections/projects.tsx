"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, TrendingUp, Brain, Database, Network } from "lucide-react"
import { MiniChart } from "@/components/mini-chart"

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Distributed ML Pipeline",
      description:
        "Built a scalable machine learning pipeline using Apache Spark and Kubernetes for processing 10TB+ datasets with 95% accuracy.",
      icon: Network,
      tags: ["Spark", "Kubernetes", "Python", "Docker"],
      github: "#",
      demo: "#",
      color: "from-cyan-500 to-blue-500",
      chartType: "line" as const,
      chartColor: "#00E5FF",
      metrics: { accuracy: "95%", throughput: "10TB+", latency: "< 100ms" },
    },
    {
      title: "Neural Network Optimizer",
      description:
        "Developed a custom neural network optimizer using C++ and CUDA, achieving 3x speedup in training time for large-scale models.",
      icon: Brain,
      tags: ["C++", "CUDA", "PyTorch", "HPC"],
      github: "#",
      demo: "#",
      color: "from-emerald-500 to-teal-500",
      chartType: "pulse" as const,
      chartColor: "#6EE7B7",
      metrics: { speedup: "3x", efficiency: "92%", models: "50+" },
    },
    {
      title: "Real-time Analytics Dashboard",
      description:
        "Created an interactive dashboard for real-time data visualization using streaming data from IoT sensors with sub-second latency.",
      icon: TrendingUp,
      tags: ["React", "D3.js", "Kafka", "Redis"],
      github: "#",
      demo: "#",
      color: "from-cyan-500 to-emerald-500",
      chartType: "bar" as const,
      chartColor: "#00E5FF",
      metrics: { latency: "< 1s", sensors: "1000+", uptime: "99.9%" },
    },
    {
      title: "Big Data ETL Framework",
      description:
        "Designed and implemented an ETL framework for processing multi-source data with automated data quality checks and monitoring.",
      icon: Database,
      tags: ["Hadoop", "Airflow", "SQL", "AWS"],
      github: "#",
      demo: "#",
      color: "from-emerald-500 to-cyan-500",
      chartType: "line" as const,
      chartColor: "#6EE7B7",
      metrics: { sources: "20+", records: "1B+", quality: "99.5%" },
    },
  ]

  return (
    <section id="projects" className="relative py-32 px-4">
      <div className="container mx-auto max-w-6xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Projects Dashboard
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg max-w-3xl mx-auto leading-relaxed">
            Showcasing data-driven solutions and high-performance computing applications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center py-20"
        >
          <div className="text-center max-w-2xl">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mb-8"
            >
              <div className="inline-block p-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30">
                <Brain className="w-16 h-16 text-cyan-400" />
              </div>
            </motion.div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Coming Soon
              </span>
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I'm currently working on exciting data science and HPC projects. Check back soon to see innovative solutions in machine learning, distributed computing, and big data analytics!
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Badge className="bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 px-4 py-2">
                Machine Learning Projects
              </Badge>
              <Badge className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-4 py-2">
                HPC Implementations
              </Badge>
              <Badge className="bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 px-4 py-2">
                Big Data Pipelines
              </Badge>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
