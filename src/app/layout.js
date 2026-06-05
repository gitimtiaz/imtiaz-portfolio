import './globals.css'
import { ThemeProvider } from '@/components/ui/ThemeProvider'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Imtiaz Ahamed | Junior MERN Developer',
  description:
    'Portfolio of Imtiaz Ahamed — Junior MERN Developer and 4th-year CSE student at Daffodil International University. Building full-stack web applications with Next.js, React, Node.js, and MongoDB.',
  keywords: ['MERN Developer', 'Next.js', 'React', 'Full Stack', 'Imtiaz Ahamed', 'Bangladesh'],
  authors: [{ name: 'Imtiaz Ahamed', url: 'https://github.com/gitimtiaz' }],
  openGraph: {
    title: 'Imtiaz Ahamed | Junior MERN Developer',
    description: 'Full-stack web developer specializing in Next.js and MERN stack.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
