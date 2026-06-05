import { Github, Linkedin, Instagram, Facebook, ExternalLink } from 'lucide-react'

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/gitimtiaz',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/imtiaz-cse-ahamed/',
    icon: Linkedin,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/a.imtiaz.7/',
    icon: Instagram,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/imtiaz.parvez.188',
    icon: Facebook,
  },
  {
    label: 'BeeCrowd',
    href: 'https://judge.beecrowd.com/en/profile/785422',
    icon: ExternalLink,
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0c0e16]">
      <div className="container-x py-10 flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Left: name + credit */}
        <div className="text-center sm:text-left">
          <p className="font-syne font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            <span style={{ color: 'var(--accent)' }}>IA</span>.dev
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-600 mt-1 font-mono">
            © {year} Imtiaz Ahamed. Built with Next.js + Tailwind.
          </p>
        </div>

        {/* Right: social icons */}
        <div className="flex items-center gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="
                w-9 h-9 flex items-center justify-center rounded-md
                text-slate-400 dark:text-slate-500
                hover:text-slate-900 dark:hover:text-slate-100
                hover:bg-slate-100 dark:hover:bg-slate-800
                border border-transparent hover:border-slate-200 dark:hover:border-slate-700
                transition-all duration-200
              "
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
