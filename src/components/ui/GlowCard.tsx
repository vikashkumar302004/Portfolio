import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  accentColor?: string;
}

const GlowCard: React.FC<GlowCardProps> = ({ children, className, accentColor = "rgba(99,102,241,0.3)" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01, y: -4 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative group rounded-2xl border border-subtle bg-surface p-6 transition-all duration-300 hover:border-glow hover:shadow-glow overflow-hidden",
        className
      )}
      style={{
        // @ts-ignore
        '--glow-color': accentColor
      } as React.CSSProperties}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}

export default GlowCard
