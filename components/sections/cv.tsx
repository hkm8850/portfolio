"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Briefcase, Award, Download, Calendar, ImageIcon, Video } from "lucide-react"

export function CV() {
  const education = [
    {
    degree: "Engineering Degree in Digital Science (HPC & Big Data)",
    institution: "ENSEEIHT – Toulouse, France",
    period: "2024 – Present (Second Year)",
    highlights: [
      "Specialization in Big Data and High-Performance Computing",
    ],
  },
  {
    degree: "Preparatory Classes for Engineering Schools (MPSI / MP)",
    institution: "CPGE Moulay Youssef – Rabat, Morocco",
    period: "2022 – 2024",
    highlights: [
      "Intensive studies in advanced mathematics, physics, and computer science",
      "Vice President of the Mathematics Club – organized tutoring sessions and scientific events",
    ],
  },
  {
    degree: "Baccalaureate in Mathematical Sciences A",
    institution: "Madariss Maria High School – Temara, Morocco",
    period: "2021 – 2022",
    gpa: "Graduated with honors",
    highlights: [
      "Specialization in mathematics and physics",
      "Achieved excellent results (Honors distinction)",
      "Active participation in scientific projects and robotics competitions",
    ],
  },
  ]

  const experience = [
    {
      title: "Warehouse Worker (Temporary Contract)",
      company: "PAACK – Toulouse",
      period: "July 2025 – Aug 2025",
      description: "Sorted and organized parcels in a logistics center. Ensured accurate dispatching and maintained work area efficiency.",
      technologies: ["Logistics", "Organization", "Efficiency"],
    },
  ]

  const certifications = []

  return (
    <section id="career-development" className="relative py-32 px-4 scroll-mt-[72px]">
      <div className="container mx-auto max-w-6xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Career Development
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">My academic and professional journey</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white font-semibold px-6 py-3 text-base shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300"
              size="lg"
            >
              <a href="/cv_fr.pdf" download="Hamza_Kalim_CV_FR.pdf">
                <Download className="w-5 h-5 mr-2" />
                CV (FR)
              </a>
            </Button>

            <Button
              asChild
              className="bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-semibold px-6 py-3 text-base shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all duration-300"
              size="lg"
            >
              <a href="/cv_en.pdf" download="Hamza_Kalim_CV_EN.pdf">
                <Download className="w-5 h-5 mr-2" />
                CV (EN)
              </a>
            </Button>

            <Button
              asChild
              className="bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-white font-semibold px-6 py-3 text-base shadow-lg shadow-amber-400/25 hover:shadow-amber-400/40 transition-all duration-300"
              size="lg"
            >
              <a href="/presentation.pptx" download="Hamza_Kalim_Presentation.pptx">
                <Download className="w-5 h-5 mr-2" />
                Download PPP
              </a>
            </Button>

            <Button
              asChild
              className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white font-semibold px-6 py-3 text-base shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300"
              size="lg"
            >
              <a href="/images/conflict-management-poster.png" target="_blank" rel="noreferrer">
                <ImageIcon className="w-5 h-5 mr-2" />
                Conflict Management Poster
              </a>
            </Button>

            <Button
              asChild
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold px-6 py-3 text-base shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300"
              size="lg"
            >
              <a href="/conflict-management-video.mp4" target="_blank" rel="noreferrer">
                <Video className="w-5 h-5 mr-2" />
                Conflict Management Video
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-cyan-400" />
            <h3 className="text-3xl font-bold text-cyan-400">Education</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                    <p className="text-cyan-400 font-semibold">{edu.institution}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-emerald-400 font-semibold">GPA: {edu.gpa}</span>
                </div>
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, i) => (
                    <li key={i} className="text-gray-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-emerald-400" />
            <h3 className="text-3xl font-bold text-emerald-400">Experience</h3>
          </div>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border-emerald-500/30 backdrop-blur-sm hover:border-emerald-400/50 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{exp.title}</h4>
                    <p className="text-emerald-400 font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-cyan-400" />
            <h3 className="text-3xl font-bold text-cyan-400">Certifications & Awards</h3>
          </div>
          <Card className="p-8 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border-cyan-500/30 backdrop-blur-sm">
            <p className="text-gray-300 text-center text-lg">Currently pursuing certifications</p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
