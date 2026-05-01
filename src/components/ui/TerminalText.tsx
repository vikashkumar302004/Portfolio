'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TerminalTextProps {
  lines: string[];
}

const TerminalText: React.FC<TerminalTextProps> = ({ lines }) => {
  const [visibleLines, setVisibleLines] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)

  useEffect(() => {
    if (currentLineIndex >= lines.length) return

    const line = lines[currentLineIndex]
    
    const timeout = setTimeout(() => {
      if (currentCharIndex < line.length) {
        // Typing characters
        const newVisibleLines = [...visibleLines]
        if (currentCharIndex === 0) {
          newVisibleLines.push(line[0])
        } else {
          newVisibleLines[currentLineIndex] = line.substring(0, currentCharIndex + 1)
        }
        setVisibleLines(newVisibleLines)
        setCurrentCharIndex(currentCharIndex + 1)
      } else {
        // Move to next line
        setCurrentLineIndex(currentLineIndex + 1)
        setCurrentCharIndex(0)
      }
    }, 30) // Typing speed

    return () => clearTimeout(timeout)
  }, [currentLineIndex, currentCharIndex, lines, visibleLines])

  return (
    <div className="w-full bg-void border border-subtle rounded-xl overflow-hidden font-mono shadow-2xl">
      <div className="bg-elevated px-4 py-2 border-b border-subtle flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        </div>
        <span className="text-[10px] text-muted">bash — vikash.dev</span>
      </div>
      <div className="p-6 text-sm md:text-base min-h-[240px] bg-void/50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03)_0%,transparent_70%)] pointer-events-none" />
        {visibleLines.map((line, i) => (
          <div key={i} className="mb-1 flex gap-2">
            <span className="text-emerald shrink-0">
              {line.startsWith('>') ? ' ' : '$'}
            </span>
            <span className={line.startsWith('>') ? 'text-secondary' : 'text-emerald'}>
              {line.startsWith('>') ? line.substring(2) : line}
            </span>
          </div>
        ))}
        {currentLineIndex < lines.length && (
          <div className="inline-block w-2 h-4 bg-emerald animate-pulse ml-1 align-middle" />
        )}
      </div>
    </div>
  )
}

export default TerminalText
