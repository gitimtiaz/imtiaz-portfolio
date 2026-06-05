'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeader from '@/components/ui/SectionHeader'
import { stagger, fadeUp, scaleIn } from '@/lib/motion'
import { stats } from '@/data/achievements'
import { MapPin, GraduationCap, Phone, Mail } from 'lucide-react'

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-white dark:bg-[#0f1119]">
      <div className="container-x">
        <SectionHeader
          eyebrow="Who I am"
          title="About Me"
          subtitle="A developer who cares about clean code, real solutions, and continuous growth."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">

          {/* ─── Left: Photo + Info card (2 cols) ─── */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Photo */}
            <div className="relative mx-auto lg:mx-0 w-56 h-56 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/60 shadow-lg">
              <Image
                src="/imtiaz.png"
                alt="Imtiaz Ahamed"
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Info card */}
            <div className="glass-card p-5 flex flex-col gap-3 text-sm">
              <InfoRow icon={<MapPin size={14} />} text="Dhaka, Bangladesh" />
              <InfoRow icon={<Mail size={14} />} text="imtiazp32@gmail.com" />
              <InfoRow icon={<Phone size={14} />} text="+880 1303-317901" />
              <InfoRow
                icon={<GraduationCap size={14} />}
                text="BSc CSE — Daffodil International University"
              />
              <div className="pt-2 border-t border-slate-100 dark:border-slate-700/50">
                <p className="font-mono text-xs text-slate-400 dark:text-slate-500 mb-1">Expected graduation</p>
                <p className="font-medium text-slate-800 dark:text-slate-200">December 2026</p>
              </div>
            </div>
          </motion.div>

          {/* ─── Right: Bio + Stats (3 cols) ─── */}
          <div className="lg:col-span-3 flex flex-col gap-8">

            {/* Bio */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <motion.p variants={fadeUp} className="text-slate-600 dark:text-slate-400 leading-7">
                I'm a 4th-year Computer Science & Engineering student passionate about building
                full-stack web applications that are clean, functional, and fast. I work
                primarily with the <span className="text-slate-800 dark:text-slate-200 font-medium">MERN stack</span> and{' '}
                <span className="text-slate-800 dark:text-slate-200 font-medium">Next.js</span>,
                with three live, deployed projects covering booking systems, skill-sharing platforms,
                and relationship management tools.
              </motion.p>
              <motion.p variants={fadeUp} className="text-slate-600 dark:text-slate-400 leading-7">
                Outside of web development, I compete in algorithmic programming and am currently
                conducting undergraduate ML research focused on predicting dengue severity from
                routine clinical data — a project I care about for its real-world clinical impact.
              </motion.p>
              <motion.p variants={fadeUp} className="text-slate-600 dark:text-slate-400 leading-7">
                I'm looking for an <span className="text-slate-800 dark:text-slate-200 font-medium">internship or junior developer role</span>{' '}
                where I can contribute practical code, learn from a real engineering team, and grow quickly.
              </motion.p>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {stats.map(({ value, label }) => (
                <motion.div
                  key={label}
                  variants={scaleIn}
                  className="glass-card p-4 text-center group hover:border-emerald-500/30 dark:hover:border-emerald-400/30 transition-colors duration-300"
                >
                  <p
                    className="font-syne font-bold text-2xl sm:text-3xl"
                    style={{ color: 'var(--accent)' }}
                  >
                    {value}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-outfit leading-snug">
                    {label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Education highlight */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card p-5 flex items-start gap-4"
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-md flex items-center justify-center"
                style={{ background: 'var(--accent-muted)' }}
              >
                <GraduationCap size={18} style={{ color: 'var(--accent)' }} />
              </div>
              <div>
                <p className="font-syne font-semibold text-slate-900 dark:text-slate-100 text-sm">
                  Daffodil International University
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  B.Sc. in Computer Science & Engineering · CGPA: 3.33 / 4.00
                </p>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5 font-mono">
                  2022 – Dec 2026 (Expected)
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

function InfoRow({ icon, text }) {
  return (
    <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
      <span style={{ color: 'var(--accent)' }}>{icon}</span>
      <span className="text-sm leading-snug">{text}</span>
    </div>
  )
}
