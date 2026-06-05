# Imtiaz Ahamed — Portfolio

Personal portfolio website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v3 + custom CSS variables
- **Animation**: Framer Motion
- **Theming**: next-themes (dark default)
- **Contact**: EmailJS (no backend required)
- **Icons**: Lucide React + skillicons.dev
- **Fonts**: Syne (headings) + Outfit (body) + Space Mono (labels)

## Getting Started

```bash
# Install dependencies
npm install

# Copy env example and fill in your EmailJS credentials
cp .env.local.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Project Structure

```
src/
├── app/              # Next.js App Router pages
│   └── admin/        # Hidden admin panel (future feature)
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, About, Skills, Projects, Timeline, Achievements, Contact
│   └── ui/           # Reusable components
├── data/             # Static data (projects, skills, achievements)
└── lib/              # Framer Motion variants
```

## Deployment

Deploy on [Vercel](https://vercel.com) in one click. Add the EmailJS environment variables in your Vercel project settings.

## Admin Panel (Coming Soon)

A hidden `/admin` route will allow adding/editing projects and skills without touching code. Backend: Express + MongoDB (same pattern as StudyDesk).
