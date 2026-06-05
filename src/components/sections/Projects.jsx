'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeader from '@/components/ui/SectionHeader'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/data/projects'
import { stagger } from '@/lib/motion'
import { Github } from 'lucide-react'

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-white dark:bg-[#0f1119]">
      <div className="container-x">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <SectionHeader
            eyebrow="What I've built"
            title="Projects"
            subtitle="Real apps, deployed and live. Each one taught me something new."
          />
          <a
            href="https://github.com/gitimtiaz"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-shrink-0 flex items-center gap-2
              text-sm text-slate-500 dark:text-slate-400
              hover:text-slate-900 dark:hover:text-slate-100
              transition-colors duration-200 mb-16
            "
          >
            <Github size={15} />
            <span className="font-mono text-xs">See all on GitHub</span>
          </a>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
