// ─────────────────────────────────────────────────────────────
// /admin  —  Portfolio CMS (Coming Soon)
//
// Planned features:
//   • Password-protected login (no accounts, single admin key)
//   • Add / edit / delete projects  →  POST /api/projects
//   • Add / edit / remove skills    →  POST /api/skills
//   • Backend: Express + MongoDB (same pattern as StudyDesk)
//   • Data stored in MongoDB; portfolio fetches from API
//     instead of static /data/*.js files
//
// To activate: implement the backend, replace /data/ imports
// in each section with SWR/fetch calls to your API.
// ─────────────────────────────────────────────────────────────

export const metadata = {
  title: 'Admin | Imtiaz Portfolio',
  robots: { index: false, follow: false },
}

export default function AdminPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#0c0e16] px-4">
      <div className="max-w-sm w-full text-center">
        <p className="font-mono text-xs text-slate-400 dark:text-slate-600 tracking-widest uppercase mb-3">
          admin
        </p>
        <h1 className="font-syne font-bold text-2xl text-slate-900 dark:text-slate-100 mb-2">
          CMS — Coming Soon
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
          The admin panel for managing projects and skills without touching code
          is planned for a future release.
        </p>
        <a
          href="/"
          className="text-sm font-medium transition-colors"
          style={{ color: 'var(--accent)' }}
        >
          ← Back to portfolio
        </a>
      </div>
    </main>
  )
}
