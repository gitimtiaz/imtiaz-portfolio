'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'

export default function SectionWrapper({ children, id, className = '' }) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      variants={fadeUp}
      className={`section-py ${className}`}
    >
      {children}
    </motion.section>
  )
}
