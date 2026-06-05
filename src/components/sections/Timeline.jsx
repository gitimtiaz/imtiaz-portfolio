'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeader from '@/components/ui/SectionHeader'
import { slideLeft, slideRight, stagger } from '@/lib/motion'
import { Briefcase, BookOpen, Code2, Palette } from 'lucide-react'

const timelineItems = [
  {
    side: 'left',
    icon: BookOpen,
    period: '2022 – Present',
    title: 'BSc in Computer Science & Engineering',
    org: 'Daffodil International University, Dhaka',
    type: 'education',
    bullets: [
      'CGPA: 3.33 / 4.00',
      'Coursework: DSA, Software Engineering, DBMS, OS, OOP, Computer Networks',
      'Built 4 full-stack projects during studies',
    ],
  },
  {
    side: 'right',
    icon: Code2,
    period: '2022 – Present',
    title: 'Freelance Academic Tutor',
    org: 'C Programming · OOP · ICT — Dhaka',
    type: 'experience',
    bullets: [
      'Tutored secondary and university-level students',
      'Broke down complex CS concepts into approachable lessons',
      'Developed clear technical communication skills',
    ],
  },
  {
    side: 'left',
    icon: Palette,
    period: '2021 – 2023',
    title: 'Graphic Designer & Social Media Manager',
    org: 'Online Community — Facebook, Instagram, X',
    type: 'experience',
    bullets: [
      'Designed event posters, banners, and logos with Adobe Photoshop',
      'Maintained consistent visual identity across platforms',
      'Built UI sensibility and attention to detail applicable to frontend work',
    ],
  },
  {
    side: 'right',
    icon: Briefcase,
    period: '2025 – Present',
    title: 'Undergraduate ML Researcher',
    org: 'Supervised by Ms. Nazmun Nessa Moon, DIU',
    type: 'research',
    bullets: [
      'Early dengue severity prediction from clinical lab data',
      'ML pipeline with SHAP-based model interpretability',
      'Planned web-based clinical deployment',
    ],
  },
]

const typeColors = {
  education:  { bg: 'bg-blue-500/10',   text: 'text-blue-600 dark:text-blue-400',   dot: 'bg-blue-500'   },
  experience: { bg: 'bg-emerald-500/10', text: 'text-emerald-600 dark:text-emerald-400', dot: '' },
  research:   { bg: 'bg-purple-500/10',  text: 'text-purple-600 dark:text-purple-400',  dot: 'bg-purple-500' },
}

export default function Timeline() {
  return (
    <SectionWrapper id="timeline" className="bg-slate-50 dark:bg-[#0c0e16]">
      <div className="container-x">
        <SectionHeader
          eyebrow="My Journey"
          title="Experience & Education"
          subtitle="Where I've been and what I've been working on."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Center vertical line — visible on md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="flex flex-col gap-8 md:gap-12"
          >
            {timelineItems.map((item, i) => {
              const Icon = item.icon
              const isLeft = item.side === 'left'
              const colors = typeColors[item.type]

              return (
                <motion.div
                  key={i}
                  variants={isLeft ? slideLeft : slideRight}
                  className={`
                    relative flex flex-col
                    ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}
                    md:items-start gap-6 md:gap-8
                  `}
                >
                  {/* Card (half width on desktop) */}
                  <div className="md:w-[calc(50%-2rem)] w-full">
                    <div className="glass-card p-5 hover:border-emerald-500/30 dark:hover:border-emerald-400/20 transition-colors duration-300">
                      {/* Period badge */}
                      <span className={`font-mono text-xs px-2 py-0.5 rounded-sm ${colors.bg} ${colors.text}`}>
                        {item.period}
                      </span>

                      {/* Title */}
                      <h3 className="font-syne font-semibold text-base text-slate-900 dark:text-slate-100 mt-3 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{item.org}</p>

                      {/* Bullets */}
                      <ul className="mt-3 flex flex-col gap-1.5">
                        {item.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                            <span
                              className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                              style={{ background: 'var(--accent)' }}
                            />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center dot + icon — only on md+ */}
                  <div className="hidden md:flex flex-col items-center justify-start pt-4 flex-shrink-0 z-10">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-white dark:border-[#0c0e16] shadow-sm"
                      style={{ background: 'var(--accent-muted)', color: 'var(--accent)' }}
                    >
                      <Icon size={16} />
                    </div>
                  </div>

                  {/* Empty spacer for opposite side */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
