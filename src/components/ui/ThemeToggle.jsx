'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <button className="w-9 h-9 rounded-md border border-slate-200 dark:border-slate-700" aria-label="Toggle theme" />
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className="
        w-9 h-9 flex items-center justify-center rounded-md
        border border-slate-200 dark:border-slate-700
        text-slate-500 dark:text-slate-400
        hover:text-slate-900 dark:hover:text-slate-100
        hover:border-slate-400 dark:hover:border-slate-500
        hover:bg-slate-100 dark:hover:bg-slate-800
        transition-all duration-200
      "
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
