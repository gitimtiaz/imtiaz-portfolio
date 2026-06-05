'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, Linkedin, ExternalLink, ArrowDown, Download } from 'lucide-react'
import { heroContainer, heroItem } from '@/lib/motion'

const roles = [
  'MERN Developer',
  'Next.js Enthusiast',
  'CS Researcher',
  'Competitive Programmer',
]

function useTypewriter(words) {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index]
    const speed = deleting ? 45 : 110
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayed(word.slice(0, displayed.length + 1))
        if (displayed.length + 1 === word.length) {
          setTimeout(() => setDeleting(true), 1800)
        }
      } else {
        setDisplayed(word.slice(0, displayed.length - 1))
        if (displayed.length - 1 === 0) {
          setDeleting(false)
          setIndex((i) => (i + 1) % words.length)
        }
      }
    }, speed)
    return () => clearTimeout(timeout)
  }, [displayed, deleting, index, words])

  return displayed
}

const socials = [
  { label: 'GitHub', href: 'https://github.com/gitimtiaz', Icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/imtiaz-cse-ahamed/', Icon: Linkedin },
  { label: 'BeeCrowd', href: 'https://judge.beecrowd.com/en/profile/785422', Icon: ExternalLink },
]

export default function Hero() {
  const role = useTypewriter(roles)

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="
        relative min-h-screen flex items-center
        bg-slate-50 dark:bg-[#0c0e16]
        overflow-hidden dot-grid
      "
    >
      {/* Ambient emerald glow — top right */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.07] dark:opacity-[0.12]"
        style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)' }}
      />
      {/* Ambient glow — bottom left */}
      <div
        className="pointer-events-none absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.05] dark:opacity-[0.08]"
        style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)' }}
      />

      <div className="container-x w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ─── Left: Text content ─── */}
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Eyebrow */}
            <motion.p variants={heroItem} className="eyebrow mb-5">
              Hello, world 👋
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={heroItem}
              className="font-syne font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-slate-900 dark:text-slate-50"
            >
              Imtiaz
              <br />
              <span style={{ color: 'var(--accent)' }}>Ahamed</span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              variants={heroItem}
              className="mt-5 h-9 flex items-center gap-2"
            >
              <span className="font-mono text-base text-slate-500 dark:text-slate-400">~/</span>
              <span className="font-mono text-base text-slate-700 dark:text-slate-300 font-medium">
                {role}
                <span
                  className="inline-block w-[2px] h-[1.1em] ml-[2px] align-middle rounded-sm animate-blink"
                  style={{ background: 'var(--accent)' }}
                />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={heroItem}
              className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-400 max-w-md font-outfit"
            >
              4th-year CSE student at{' '}
              <span className="text-slate-800 dark:text-slate-300 font-medium">Daffodil International University</span>,
              building and deploying full-stack web apps with the MERN stack and Next.js.
              Ranked Top 3% globally on BeeCrowd. Currently researching ML for clinical data.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={heroItem}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={scrollToProjects}
                className="
                  px-6 py-3 rounded-md text-sm font-medium font-outfit
                  text-white transition-all duration-200
                  hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0
                "
                style={{ background: 'var(--accent)' }}
              >
                View Projects
              </button>
              <a
                href="https://drive.google.com/uc?export=download&id=1ndrrHTongZZQRHgNcQNrFZUTgVqHHWbS"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-md text-sm font-medium font-outfit
                          border border-slate-300 dark:border-slate-700
                          text-slate-700 dark:text-slate-300
                          hover:border-emerald-500 dark:hover:border-emerald-400
                          hover:text-emerald-700 dark:hover:text-emerald-400
                          flex items-center gap-2 transition-all duration-200
                          hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download size={14} />
                Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={heroItem}
              className="mt-8 flex items-center gap-2"
            >
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="
                    w-10 h-10 flex items-center justify-center rounded-md
                    border border-slate-200 dark:border-slate-700/80
                    text-slate-500 dark:text-slate-400
                    hover:text-slate-900 dark:hover:text-slate-100
                    hover:border-slate-400 dark:hover:border-slate-500
                    hover:bg-slate-100 dark:hover:bg-slate-800
                    transition-all duration-200
                  "
                >
                  <Icon size={16} />
                </a>
              ))}
              <span className="ml-3 text-xs text-slate-400 dark:text-slate-600 font-mono">
                @gitimtiaz
              </span>
            </motion.div>
          </motion.div>

          {/* ─── Right: Profile photo ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div
                className="absolute -inset-3 rounded-full opacity-20 blur-xl"
                style={{ background: 'var(--accent)' }}
              />

              {/* Decorative ring */}
              <div
                className="absolute -inset-1.5 rounded-full opacity-30"
                style={{ border: '1px solid var(--accent)' }}
              />

              {/* Photo container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-emerald-400/40 dark:border-emerald-400/20">
                <Image
                  src="/imtiaz.png"
                  alt="Imtiaz Ahamed"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>

              {/* Floating status badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="
                  absolute -bottom-3 -right-2
                  flex items-center gap-2 px-3 py-2 rounded-full
                  bg-white dark:bg-slate-900
                  border border-slate-200 dark:border-slate-700
                  shadow-lg shadow-slate-200/40 dark:shadow-black/30
                "
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono text-slate-600 dark:text-slate-400">
                  Open to work
                </span>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-slate-400 dark:text-slate-600">
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} className="text-slate-400 dark:text-slate-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
