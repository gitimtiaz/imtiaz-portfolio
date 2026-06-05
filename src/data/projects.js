export const projects = [
  {
    id: 1,
    number: '01',
    title: 'StudyDesk',
    subtitle: 'Full-Stack Study Room Management Platform',
    description:
      'A complete study room booking platform with user authentication, real-time conflict detection, and a dynamic dashboard. Built a RESTful API backend with Express and MongoDB, featuring JWT auth, Google OAuth, and protected CRUD routes. Deployed frontend on Vercel and backend on Render.',
    tags: ['Next.js', 'Express.js', 'MongoDB', 'JWT', 'Google OAuth', 'Tailwind CSS'],
    github: 'https://github.com/gitimtiaz/study-desk',
    live: 'https://study-desk-neon.vercel.app/',
    featured: true,
    highlights: [
      'JWT + bcrypt authentication with Google OAuth',
      'Booking conflict detection algorithm',
      'Role-based route protection',
      'Deployed on Vercel + Render',
    ],
  },
  {
    id: 2,
    number: '02',
    title: 'SkillNest',
    subtitle: 'Skill-Sharing & Learning Platform',
    description:
      'A responsive skill-sharing platform with modern UI components and dynamic data rendering. Architected a scalable frontend with reusable React components and integrated a Node.js/MongoDB backend to support collaborative learning workflows.',
    tags: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/gitimtiaz/skill-nest',
    live: 'https://skill-nest-ten.vercel.app/',
    featured: false,
    highlights: [
      'Skill and course-focused content organization',
      'Dynamic data rendering with MongoDB',
      'Reusable React component architecture',
    ],
  },
  {
    id: 3,
    number: '03',
    title: 'KinKeeper',
    subtitle: 'Relationship & Friendship Tracking App',
    description:
      'A full-stack app for organizing contacts, shared memories, and interaction history. Features personalized user management, a context-based state system with localStorage, and a clean responsive interface built with Next.js App Router.',
    tags: ['Next.js', 'React', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/gitimtiaz/keenkeeper-nextjs-a7',
    live: 'https://keenkeeper-nextjs-a7.vercel.app/',
    featured: false,
    highlights: [
      'TimelineContext with localStorage persistence',
      'Dynamic interaction-based features',
      'Next.js App Router with protected routes',
    ],
  },
  {
    id: 4,
    number: '04',
    title: 'DigiTools Platform',
    subtitle: 'Digital Tools Marketplace (SPA)',
    description:
      'A single-page digital tools marketplace with categorized listings, search functionality, and a mobile-first layout. Data is cleanly separated into a data layer for easy future API integration.',
    tags: ['React', 'Tailwind CSS', 'DaisyUI', 'Vite'],
    github: 'https://github.com/gitimtiaz/DigiTools.Platform.A6',
    live: 'https://digitools-a6-imtiaz.netlify.app/',
    featured: false,
    highlights: [
      'Categorized listings with search',
      'Separated data layer for API-ready migration',
      'Fully responsive mobile-first design',
    ],
  },
]
