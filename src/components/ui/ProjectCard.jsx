'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Star } from 'lucide-react'
import { scaleIn } from '@/lib/motion'

export default function ProjectCard({ project }) {
  const { number, title, subtitle, description, tags, github, live, featured, highlights } = project

  return (
    <motion.article
      variants={scaleIn}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`
        glass-card p-6 flex flex-col gap-5 h-full
        transition-shadow duration-300
        hover:shadow-xl hover:shadow-emerald-500/5 dark:hover:shadow-emerald-400/5
        hover:border-emerald-500/30 dark:hover:border-emerald-400/20
        ${featured ? 'ring-1 ring-emerald-500/20 dark:ring-emerald-400/15' : ''}
      `}
    >
      {/* Top row: number + badges */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-slate-400 dark:text-slate-600 tracking-widest">
          {number}
        </span>
        <div className="flex items-center gap-2">
          {featured && (
            <span
              className="flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full"
              style={{
                background: 'var(--accent-muted)',
                color: 'var(--accent)',
                border: '1px solid var(--accent)',
                borderOpacity: 0.3,
              }}
            >
              <Star size={9} fill="currentColor" />
              Featured
            </span>
          )}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repo"
            className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live site"
            className="transition-colors"
            style={{ color: 'var(--accent)' }}
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Title */}
      <div>
        <h3 className="font-syne font-bold text-lg text-slate-900 dark:text-slate-50 leading-tight">
          {title}
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-outfit">{subtitle}</p>
      </div>

      {/* Description */}
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">
        {description}
      </p>

      {/* Highlights */}
      <ul className="flex flex-col gap-1.5">
        {highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
            {h}
          </li>
        ))}
      </ul>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-700/50">
        {tags.map((tag) => (
          <span key={tag} className="tech-tag">{tag}</span>
        ))}
      </div>
    </motion.article>
  )
}
