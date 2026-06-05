/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: 'var(--accent)',
          light: 'var(--accent-light)',
          muted: 'var(--accent-muted)',
        },
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'blink': 'blink 1s step-end infinite',
        'spin-slow': 'spin 8s linear infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
