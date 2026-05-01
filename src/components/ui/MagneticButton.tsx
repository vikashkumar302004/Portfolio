'use client'

import React, { useRef, useState } from 'react'
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'ghost' | 'outline';
  className?: string;
  target?: string;
  onClick?: () => void;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ 
  children, 
  href, 
  variant = 'primary', 
  className,
  target,
  onClick
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 15, stiffness: 150 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    const distanceX = clientX - centerX
    const distanceY = clientY - centerY

    x.set(distanceX * 0.4)
    y.set(distanceY * 0.4)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const variants = {
    primary: "bg-gradient-brand text-white border-transparent",
    ghost: "bg-transparent border-default text-primary hover:border-violet hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]",
    outline: "bg-transparent border-violet text-violet hover:bg-violet hover:text-white"
  }

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={cn(
        "relative inline-flex items-center justify-center px-8 py-3 rounded-full font-medium transition-all duration-300 border",
        variants[variant],
        className
      )}
    >
      {children}
    </motion.div>
  )

  if (href) {
    return (
      <Link href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className="inline-block">
        {content}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className="inline-block focus:outline-none">
      {content}
    </button>
  )
}

export default MagneticButton
