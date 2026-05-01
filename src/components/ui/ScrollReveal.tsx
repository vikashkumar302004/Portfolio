'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, scaleIn, slideFromLeft, slideFromRight } from '@/lib/animations'
import { cn } from '@/lib/utils'

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: 'fadeUp' | 'scaleIn' | 'slideLeft' | 'slideRight';
  width?: "auto" | "full";
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className, 
  delay = 0, 
  variant = 'fadeUp',
  width = "auto"
}) => {
  const variants = {
    fadeUp,
    scaleIn,
    slideLeft: slideFromLeft,
    slideRight: slideFromRight
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants[variant]}
      transition={{ delay }}
      className={cn(width === 'full' && "w-full", className)}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal
