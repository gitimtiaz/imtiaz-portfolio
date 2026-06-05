'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import ThemeToggle from '@/components/ui/ThemeToggle'

const navLinks = [
  { label: 'About',        href: '#about'        },
  { label: 'Skills',       href: '#skills'       },
  { label: 'Projects',     href: '#projects'     },
  { label: 'Experience',   href: '#timeline'     },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact',      href: '#contact'      },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled]       = useState(false)
  const [mobileOpen, setMobileOpen]       = useState(false)

  // Detect scroll to add background blur
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section via IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isScrolled
          ? 'bg-slate-50/90 dark:bg-[#0c0e16]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80'
          : 'bg-transparent border-b border-transparent'}
      `}
    >
      <nav className="container-x h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
          className="font-syne font-bold text-lg tracking-tight text-slate-900 dark:text-slate-100 select-none"
        >
          <span style={{ color: 'var(--accent)' }}>IA</span>
          <span className="text-slate-400 dark:text-slate-600 font-light">.</span>
          <span className="hidden sm:inline">dev</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => {
            const id = href.replace('#', '')
            const isActive = activeSection === id
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
                  className={`
                    relative px-3 py-2 text-sm font-outfit transition-colors duration-200 rounded-md
                    ${isActive
                      ? 'text-slate-900 dark:text-slate-100'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60'}
                  `}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0.5 left-3 right-3 h-[2px] rounded-full"
                      style={{ background: 'var(--accent)' }}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                </a>
              </li>
            )
          })}
          {/* Hidden admin link — will be styled/revealed later */}
          <li>
            <Link
              href="/admin"
              className="text-transparent hover:text-slate-300/20 text-xs px-2 py-2 transition-colors duration-300 select-none"
              tabIndex={-1}
              aria-hidden="true"
            >
              ·
            </Link>
          </li>
        </ul>

        {/* Right side: theme toggle + mobile menu */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-md text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-slate-50/95 dark:bg-[#0c0e16]/95 backdrop-blur-md"
          >
            <ul className="container-x py-4 flex flex-col gap-1">
              {navLinks.map(({ label, href }) => {
                const id = href.replace('#', '')
                const isActive = activeSection === id
                return (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
                      className={`
                        block px-4 py-3 rounded-md text-sm font-outfit transition-colors
                        ${isActive
                          ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-medium'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}
                      `}
                    >
                      {label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
