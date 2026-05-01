import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/animations'

interface SectionBadgeProps {
  children: React.ReactNode;
}

const SectionBadge: React.FC<SectionBadgeProps> = ({ children }) => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet/10 border border-violet/30 text-violet-light text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] mb-4"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-violet animate-pulse" />
      {children}
    </motion.div>
  )
}

export default SectionBadge
