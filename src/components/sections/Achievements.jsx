'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeader from '@/components/ui/SectionHeader'
import { achievements } from '@/data/achievements'
import { stagger, scaleIn, fadeUp } from '@/lib/motion'
import { Trophy, Award, FlaskConical, ExternalLink, Code2 } from 'lucide-react'

const iconMap = {
  trophy: Trophy,
  award:  Award,
  flask:  FlaskConical,
}

const typeStyles = {
  competitive: {
    border:  'border-amber-400/40 dark:border-amber-400/20',
    iconBg:  'bg-amber-500/10',
    iconClr: 'text-amber-600 dark:text-amber-400',
    badge:   'bg-amber-500/10 text-amber-700 dark:text-amber-400',
    label:   'Competitive Programming',
  },
  contest: {
    border:  'border-emerald-500/30 dark:border-emerald-400/20',
    iconBg:  'bg-emerald-500/10',
    iconClr: 'text-emerald-600 dark:text-emerald-400',
    badge:   'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400',
    label:   'Contest',
  },
  research: {
    border:  'border-purple-500/30 dark:border-purple-400/20',
    iconBg:  'bg-purple-500/10',
    iconClr: 'text-purple-600 dark:text-purple-400',
    badge:   'bg-purple-500/10 text-purple-700 dark:text-purple-400',
    label:   'Research',
  },
}

export default function Achievements() {
  const featured    = achievements.filter((a) => a.highlight)
  const rest        = achievements.filter((a) => !a.highlight)

  return (
    <SectionWrapper id="achievements" className="bg-white dark:bg-[#0f1119]">
      <div className="container-x">
        <SectionHeader
          eyebrow="Recognition & Research"
          title="Achievements"
          subtitle="A few things I'm genuinely proud of beyond coursework."
        />

        {/* Featured card — BeeCrowd */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8"
        >
          {featured.map((item) => {
            const Icon   = iconMap[item.icon]
            const styles = typeStyles[item.type]

            return (
              <div
                key={item.id}
                className={`
                  glass-card p-7 border-2 ${styles.border}
                  flex flex-col sm:flex-row items-start gap-6
                `}
              >
                {/* Icon */}
                <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${styles.iconBg}`}>
                  <Icon size={26} className={styles.iconClr} />
                </div>

                <div className="flex-grow">
                  {/* Badge */}
                  <span className={`font-mono text-xs px-2 py-0.5 rounded-sm ${styles.badge}`}>
                    {styles.label}
                  </span>

                  <h3 className="font-syne font-bold text-xl text-slate-900 dark:text-slate-50 mt-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-mono">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-3 max-w-xl">
                    {item.description}
                  </p>

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        mt-4 inline-flex items-center gap-2 text-sm font-medium
                        transition-colors duration-200
                      "
                      style={{ color: 'var(--accent)' }}
                    >
                      <ExternalLink size={14} />
                      {item.linkText}
                    </a>
                  )}
                </div>

                {/* Stat highlight */}
                <div className="flex-shrink-0 text-center sm:text-right">
                  <p
                    className="font-syne font-extrabold text-5xl leading-none"
                    style={{ color: 'var(--accent)' }}
                  >
                    3%
                  </p>
                  <p className="text-xs font-mono text-slate-400 dark:text-slate-500 mt-1">
                    Global rank
                  </p>
                  <p
                    className="font-syne font-bold text-2xl mt-3"
                    style={{ color: 'var(--accent)' }}
                  >
                    142
                  </p>
                  <p className="text-xs font-mono text-slate-400 dark:text-slate-500">
                    Problems solved
                  </p>
                </div>
              </div>
            )
          })}
        </motion.div>

        {/* Rest of achievements */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {rest.map((item) => {
            const Icon   = iconMap[item.icon]
            const styles = typeStyles[item.type]

            return (
              <motion.div
                key={item.id}
                variants={scaleIn}
                className={`glass-card p-5 border ${styles.border} flex items-start gap-4`}
              >
                <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${styles.iconBg}`}>
                  <Icon size={18} className={styles.iconClr} />
                </div>
                <div>
                  <span className={`font-mono text-[10px] px-2 py-0.5 rounded-sm ${styles.badge}`}>
                    {styles.label}
                  </span>
                  <h3 className="font-syne font-semibold text-sm text-slate-900 dark:text-slate-100 mt-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.subtitle}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-2">
                    {item.description}
                  </p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-xs font-medium"
                      style={{ color: 'var(--accent)' }}
                    >
                      <ExternalLink size={11} />
                      {item.linkText}
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Coursework strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800"
        >
          <p className="eyebrow mb-4">Relevant coursework</p>
          <div className="flex flex-wrap gap-2">
            {[
              'Data Structures & Algorithms', 'Software Engineering',
              'Database Management Systems', 'Operating Systems',
              'Computer Networks', 'Object-Oriented Programming',
              'Compiler Design', 'Computer Architecture',
            ].map((course) => (
              <span key={course} className="tech-tag flex items-center gap-1.5">
                <Code2 size={10} />
                {course}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
