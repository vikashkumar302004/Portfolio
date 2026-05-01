'use client'

import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface TypewriterTextProps {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  words,
  speed = 100,
  deleteSpeed = 50,
  pauseTime = 2000,
  className
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWordIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setCurrentText(word.substring(0, currentText.length + 1))
        
        if (currentText.length === word.length) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        // Deleting
        setCurrentText(word.substring(0, currentText.length - 1))
        
        if (currentText.length === 0) {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? deleteSpeed : speed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words, speed, deleteSpeed, pauseTime])

  return (
    <span className={cn("inline-block", className)}>
      {currentText}
    </span>
  )
}

export default TypewriterText
