'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, Mail } from 'lucide-react'
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
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-void">
      {/* Cinematic Backgrounds */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.1),transparent_70%)]" />
      <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* Profile Image - Shifted slightly more to the left for better balance */}
      <div className="absolute inset-0 z-[5] flex items-center justify-start lg:justify-center lg:pl-[8%] pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.1
          }}
          className="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px] pointer-events-auto ml-[5%] lg:ml-[8%]"
        >
          {/* Inner Image Container */}
          <div className="relative w-full h-full rounded-full border-[1px] border-white/10 bg-black/40 backdrop-blur-md p-1.5 shadow-[0_0_80px_rgba(124,58,237,0.2)] group overflow-hidden">
            <div className="w-full h-full rounded-full overflow-hidden relative border border-white/5">
              <Image 
                src="/assets/WhatsApp Image 2026-05-02 at 9.58.09 AM.jpeg" 
                alt="Vikash Kumar" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-[1.1] group-hover:scale-100"
                priority
              />
              <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.8)] pointer-events-none" />
            </div>
            <div className="absolute inset-0 rounded-full border border-violet/20 animate-[pulse_4s_ease-in-out_infinite] opacity-40" />
          </div>
          
          <div className="absolute inset-[-15px] rounded-full border border-white/5 animate-[spin_20s_linear_infinite] opacity-20" />
          <div className="absolute inset-[-30px] rounded-full border border-violet/5 animate-[spin_30s_linear_infinite_reverse] opacity-10" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-2xl lg:pl-8"
        >
          {/* Status Pill */}
          <motion.div variants={fadeUp} className="mb-8">
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-violet/10 border border-violet/20 text-violet-light text-[11px] font-mono font-bold uppercase tracking-widest backdrop-blur-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet"></span>
              </span>
              Available for Internships · 2025
            </div>
          </motion.div>

          {/* Top Badge */}
          <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-lighter/50 border border-white/5 text-secondary text-[13px] font-mono backdrop-blur-md">
              <Image src="/assets/kiet-logo.png" alt="KIET" width={18} height={18} className="rounded-sm" />
              KIET Group · IT · 2028
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 variants={fadeUp} className="mb-4 text-5xl md:text-7xl leading-tight font-grotesk font-bold">
            Hi, I&apos;m<br />
            <span className="gradient-text">Vikash Kumar</span>
          </motion.h1>

          {/* Typewriter Subtitle */}
          <motion.div variants={fadeUp} className="text-xl md:text-2xl font-grotesk mb-8 flex items-center gap-2">
            <span className="text-secondary/80">I build </span>
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
              <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-brand opacity-30" />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p variants={fadeUp} className="text-lg text-secondary max-w-lg mb-10 leading-relaxed">
            2nd-year IT engineer at <span className="text-primary font-medium">KIET</span>, specializing in the intersection of
            <strong className="text-violet-light"> Full Stack</strong>, <strong className="text-cyan">Generative AI</strong>, and
            <strong className="text-emerald"> AWS Cloud</strong>. Passionate about building systems that scale.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-12">
            <MagneticButton href="#projects" className="group shadow-lg shadow-violet/20">
              View My Work <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            <MagneticButton href="/resume.pdf" target="_blank" variant="ghost" className="border-subtle hover:border-violet/50">
              Resume <ExternalLink size={16} className="ml-2" />
            </MagneticButton>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            {[
              { icon: SiGithub, href: 'https://github.com/vikashkumar302004', label: 'GitHub' },
              { icon: FaLinkedin, href: 'https://www.linkedin.com/in/vikash-kumar-3009b0342/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:vikash981103@gmail.com', label: 'Email' }
            ].map((social, i) => (
              <Link 
                key={i} 
                href={social.href} 
                target="_blank"
                className="w-11 h-11 rounded-xl border border-subtle bg-surface/50 backdrop-blur-sm flex items-center justify-center text-secondary hover:text-white hover:border-violet hover:shadow-[0_0_20px_rgba(124,58,237,0.2)] transition-all duration-300"
              >
                <social.icon size={20} />
              </Link>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content / Stats */}
        <div className="hidden lg:flex flex-col justify-end h-full pb-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col gap-4 self-end"
          >
            {[
              { label1: '2024 →', label2: 'Coding since' },
              { label1: '2x AWS', label2: 'Certified' },
              { label1: '3+ Projects', label2: 'Shipped' }
            ].map((stat, i) => (
              <div key={i} className="px-6 py-3 rounded-xl bg-surface/40 backdrop-blur-md border border-white/5 border-l-2 border-l-violet min-w-[160px] shadow-xl hover:bg-white/5 transition-all">
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
        transition={{ delay: 1.5 }}
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
