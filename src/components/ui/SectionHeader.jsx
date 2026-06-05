export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-16">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}
