'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, CheckCircle2 } from 'lucide-react'
import { certifications } from '@/data/certifications'
import GlowCard from '@/components/ui/GlowCard'
import SectionBadge from '@/components/ui/SectionBadge'
import ScrollReveal from '@/components/ui/ScrollReveal'
import MagneticButton from '@/components/ui/MagneticButton'
import Image from 'next/image'

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald/5 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <SectionBadge>Credentials</SectionBadge>
          <h2 className="mb-6">Validated <span className="gradient-text">Expertise</span></h2>
          <p className="text-secondary text-lg leading-relaxed">
            A reflection of my commitment to continuous learning and mastery of industry-standard cloud and AI technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {certifications.map((cert) => (
            <ScrollReveal key={cert.id}>
              <GlowCard 
                accentColor={cert.glowColor}
                className="group p-0 overflow-hidden h-full flex flex-col border-subtle/50 hover:border-glow/50"
              >
                {/* Shimmer / Scan Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:animate-shimmer-slide" />
                </div>
                
                <div className="p-8 md:p-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-8">
                    <div className="relative group/badge">
                      <div className="absolute inset-0 bg-current opacity-10 blur-xl rounded-full scale-125" style={{ color: cert.accentColor }} />
                      <div className="relative z-10 p-2 rounded-2xl bg-surface/30 backdrop-blur-sm border border-white/5">
                        <Image 
                          src={cert.badgeImage} 
                          alt={cert.title} 
                          width={90} 
                          height={90} 
                          className="relative z-10 drop-shadow-2xl transition-transform duration-500 group-hover/badge:scale-105"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-3">
                      <div 
                        className="px-3 py-1 rounded-full bg-emerald/10 border border-emerald/20 text-emerald text-[10px] font-mono flex items-center gap-1.5 font-bold uppercase tracking-wider"
                      >
                        <CheckCircle2 size={12} />
                        Verified
                      </div>
                      <span className="text-muted font-mono text-xs">{cert.year}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold font-grotesk mb-2 text-primary">
                    {cert.title}
                  </h3>
                  <div className="text-sm font-mono text-muted mb-6 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-border-subtle" />
                    Issued by {cert.issuer}
                  </div>

                  <p className="text-secondary text-sm mb-8 leading-relaxed flex-grow">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="px-2 py-0.5 rounded-lg bg-surface border border-subtle text-[10px] font-mono text-muted">
                        #{skill}
                      </span>
                    ))}
                  </div>

                  <MagneticButton href={cert.credentialUrl} target="_blank" variant="ghost" className="w-full text-sm group/btn border-subtle hover:border-glow">
                    <span className="flex items-center justify-center gap-2">
                      Verify Credential 
                      <ExternalLink size={14} />
                    </span>
                  </MagneticButton>
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Education Card */}
        <ScrollReveal>
          <GlowCard className="border-l-4 border-l-violet group/edu p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-violet/20 blur-2xl rounded-full scale-150 group-hover/edu:scale-[2] transition-transform duration-700" />
                <div className="relative z-10 w-28 h-28 p-3 rounded-2xl bg-white shadow-2xl flex items-center justify-center transform transition-transform duration-500 group-hover/edu:rotate-3">
                  <Image src="/assets/kiet-logo.png" alt="KIET" width={90} height={90} />
                </div>
              </div>
              <div className="flex-grow text-center md:text-left">
                <div className="inline-flex items-center gap-2 text-violet-light font-mono text-[10px] uppercase tracking-[0.2em] mb-3">
                  <span className="w-8 h-[1px] bg-violet/30" />
                  Education
                </div>
                <h3 className="text-3xl font-bold font-grotesk mb-2 text-primary">KIET Group of Institutions</h3>
                <div className="text-xl text-secondary mb-4 font-medium">B.Tech — Information Technology</div>
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-muted font-mono text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet animate-pulse" />
                    2024 → 2028
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-border-subtle" />
                  <div className="flex items-center gap-2">
                    Ghaziabad, UP
                  </div>
                </div>
              </div>
              <div className="relative group/gpa">
                <div className="absolute inset-0 bg-violet/10 blur-xl rounded-2xl opacity-0 group-hover/gpa:opacity-100 transition-opacity duration-500" />
                <div className="relative px-8 py-5 rounded-2xl bg-violet/5 border border-violet/10 text-violet text-sm font-bold font-mono text-center backdrop-blur-sm transition-all duration-300 group-hover/gpa:border-violet/30 group-hover/gpa:scale-105">
                  <div className="text-[10px] uppercase tracking-wider opacity-60 mb-1">Current GPA</div>
                  <div className="text-2xl">8.5+ <span className="text-xs opacity-50">(Expected)</span></div>
                </div>
              </div>
            </div>
          </GlowCard>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Certifications
