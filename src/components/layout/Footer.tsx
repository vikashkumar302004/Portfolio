import React from 'react'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { Mail } from 'lucide-react'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-subtle relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-violet to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-lg font-bold font-grotesk gradient-text">vikash.dev</span>
          <p className="text-muted text-sm font-sans">
            Designed & Built by Vikash Kumar · 2025
          </p>
        </div>

        <div className="flex items-center gap-6">
          <Link href="https://github.com/vikashkumar302004" target="_blank" className="text-secondary hover:text-white transition-colors">
            <SiGithub size={20} />
          </Link>
          <Link href="https://www.linkedin.com/in/vikash-kumar-3009b0342/" target="_blank" className="text-secondary hover:text-white transition-colors">
            <FaLinkedin size={20} />
          </Link>
          <Link href="mailto:vikash981103@gmail.com" className="text-secondary hover:text-white transition-colors">
            <Mail size={20} />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
