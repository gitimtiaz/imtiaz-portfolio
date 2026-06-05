import Image from 'next/image'

export default function SkillIcon({ name, icon }) {
  return (
    <div
      className="
        flex flex-col items-center gap-2.5 p-4 rounded-md
        border border-slate-200 dark:border-slate-700/60
        bg-white dark:bg-[#141621]
        hover:border-emerald-500/40 dark:hover:border-emerald-400/30
        hover:-translate-y-1 hover:shadow-md hover:shadow-emerald-500/10
        transition-all duration-250 cursor-default group
      "
    >
      <div className="relative w-9 h-9 flex-shrink-0">
        <Image
          src={`https://skillicons.dev/icons?i=${icon}`}
          alt={name}
          fill
          className="object-contain"
          unoptimized
        />
      </div>
      <span className="text-xs font-mono text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors leading-tight text-center">
        {name}
      </span>
    </div>
  )
}
