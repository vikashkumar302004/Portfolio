'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, Mail, Code2, BarChart2 } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { fadeUp } from '@/lib/animations'
import TypewriterText from '@/components/ui/TypewriterText'
import MagneticButton from '@/components/ui/MagneticButton'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const HeroScene = dynamic(() => import('@/components/ui/HeroScene'), { 
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-void" /> 
})

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Cinematic Backgrounds */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.05),transparent_70%)]" />
      <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Subtle AI Brain Backdrop */}
      <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] opacity-[0.04] pointer-events-none rotate-12">
        <Image 
          src="/assets/ai-brain.png" 
          alt="AI Backdrop" 
          fill 
          className="object-contain"
        />
      </div>

      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-60 md:opacity-100">
        <HeroScene />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-[20%] left-[45%] text-violet/20"
        >
          <Code2 size={120} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          className="absolute bottom-[25%] left-[55%] text-cyan/20"
        >
          <BarChart2 size={160} />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Top Badge */}
          <motion.div variants={fadeUp} className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald/10 border border-emerald/20 text-emerald text-[13px] font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
              <Image src="/assets/kiet-logo.png" alt="KIET" width={18} height={18} className="rounded-sm" />
              KIET Group of Institutions · IT · 2024–2028
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 variants={fadeUp} className="mb-4">
            Hi, I&apos;m<br />
            <span className="gradient-text">Vikash Kumar</span>
          </motion.h1>

          {/* Typewriter Subtitle */}
          <motion.div variants={fadeUp} className="text-xl md:text-2xl font-grotesk mb-6 flex items-center gap-2">
            <span className="text-secondary">Building </span>
            <div className="relative">
              <TypewriterText
                words={[
                  "Full Stack Systems",
                  "Intelligent AI Agents",
                  "Cloud Architectures",
                  "Production-Grade APIs",
                  "LLM-Powered Apps"
                ]}
                className="gradient-text font-bold"
              />
              <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-brand opacity-50" />
            </div>
            <span className="animate-blink">|</span>
          </motion.div>

          {/* Description */}
          <motion.p variants={fadeUp} className="text-lg text-secondary max-w-lg mb-10 leading-relaxed">
            2nd-year IT engineer at KIET, building at the intersection of
            <strong className="text-primary"> Full Stack</strong>, <strong className="text-primary">Generative AI</strong>, and
            <strong className="text-primary"> AWS Cloud</strong>. Dual AWS certified. Passionate about
            shipping systems that actually work at scale.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-12">
            <MagneticButton href="#projects" className="group">
              View My Work <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            <MagneticButton href="/resume.pdf" target="_blank" variant="ghost">
              Resume <ExternalLink size={16} className="ml-2" />
            </MagneticButton>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            {[
              { icon: SiGithub, href: 'https://github.com/vikashkumar302004', color: '#fff' },
              { icon: FaLinkedin, href: 'https://www.linkedin.com/in/vikash-kumar-3009b0342/', color: '#0077b5' },
              { icon: Mail, href: 'mailto:vikash981103@gmail.com', color: '#ea4335' }
            ].map((social, i) => (
              <Link 
                key={i} 
                href={social.href} 
                target="_blank"
                className="w-10 h-10 rounded-xl border border-subtle bg-surface flex items-center justify-center text-secondary hover:text-white hover:border-violet hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all duration-300"
              >
                <social.icon size={20} />
              </Link>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content / Stats */}
        <div className="hidden lg:flex flex-col justify-end h-full pb-20">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex gap-4 self-end"
          >
            {[
              { label1: '2024 →', label2: 'Coding since' },
              { label1: '2x AWS', label2: 'Certified' },
              { label1: '3+ Projects', label2: 'Shipped' }
            ].map((stat, i) => (
              <div key={i} className="px-6 py-4 rounded-2xl bg-surface/80 backdrop-blur-md border border-subtle border-l-2 border-l-violet min-w-[140px] shadow-2xl">
                <div className="text-sm font-mono text-violet leading-tight mb-1">{stat.label1}</div>
                <div className="text-xs font-sans text-secondary leading-tight">{stat.label2}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-muted uppercase tracking-[0.3em]">scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-muted"
        >
          <ArrowRight size={20} className="rotate-90" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
