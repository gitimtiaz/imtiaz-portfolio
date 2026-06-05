'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeader from '@/components/ui/SectionHeader'
import SkillIcon from '@/components/ui/SkillIcon'
import { skillCategories } from '@/data/skills'
import { staggerFast, scaleIn } from '@/lib/motion'

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].title)
  const activeCategory = skillCategories.find((c) => c.title === activeTab)

  return (
    <SectionWrapper id="skills" className="bg-slate-50 dark:bg-[#0c0e16]">
      <div className="container-x">
        <SectionHeader
          eyebrow="Technical Toolkit"
          title="Skills & Technologies"
          subtitle="Languages, frameworks, and tools I work with day-to-day."
        />

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {skillCategories.map(({ title }) => (
            <button
              key={title}
              onClick={() => setActiveTab(title)}
              className={`
                relative px-4 py-2 rounded-md text-sm font-mono
                transition-colors duration-200
                ${activeTab === title
                  ? 'text-white'
                  : 'text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}
              `}
              style={activeTab === title ? { background: 'var(--accent)' } : {}}
            >
              {title}
            </button>
          ))}
        </div>

        {/* Skill grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={staggerFast}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3"
          >
            {activeCategory?.skills.map((skill) => (
              <motion.div key={skill.name} variants={scaleIn}>
                <SkillIcon name={skill.name} icon={skill.icon} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom strip: all tech mentioned in projects */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800">
          <p className="eyebrow mb-5">Also worked with</p>
          <div className="flex flex-wrap gap-2">
            {[
              'Next.js App Router', 'REST APIs', 'JWT Auth', 'Google OAuth',
              'bcrypt', 'Vercel', 'Render', 'Git', 'Mongoose', 'SHAP / ML Interpretability'
            ].map((tag) => (
              <span key={tag} className="tech-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
