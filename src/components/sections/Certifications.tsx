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
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <SectionBadge>Credentials</SectionBadge>
          <h2 className="mb-6">Validated <span className="gradient-text">Expertise</span></h2>
          <p className="text-secondary text-lg">
            A reflection of my commitment to continuous learning and mastery of industry-standard cloud and AI technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {certifications.map((cert) => (
            <ScrollReveal key={cert.id}>
              <GlowCard 
                accentColor={cert.glowColor}
                className="group p-0 overflow-hidden h-full flex flex-col"
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
                
                <div className="p-8 md:p-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-current opacity-20 blur-2xl rounded-full scale-150" style={{ color: cert.accentColor }} />
                      <Image 
                        src={cert.badgeImage} 
                        alt={cert.title} 
                        width={100} 
                        height={100} 
                        className="relative z-10 drop-shadow-2xl"
                      />
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="px-3 py-1 rounded-full bg-emerald/10 border border-emerald/20 text-emerald text-[10px] font-mono flex items-center gap-1.5 font-bold uppercase tracking-wider">
                        <CheckCircle2 size={12} />
                        Verified
                      </div>
                      <span className="text-muted font-mono text-xs">{cert.year}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold font-grotesk mb-2 text-primary">
                    {cert.title}
                  </h3>
                  <div className="text-sm font-mono text-muted mb-6">
                    Issued by {cert.issuer}
                  </div>

                  <p className="text-secondary text-sm mb-8 leading-relaxed flex-grow">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="px-2 py-0.5 rounded-lg bg-surface border border-subtle text-[10px] font-mono text-muted">
                        #{skill}
                      </span>
                    ))}
                  </div>

                  <MagneticButton href={cert.credentialUrl} target="_blank" variant="ghost" className="w-full text-sm">
                    Verify Credential <ExternalLink size={14} className="ml-2" />
                  </MagneticButton>
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Education Card */}
        <ScrollReveal>
          <GlowCard className="border-l-4 border-l-violet">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 p-2 rounded-2xl bg-white flex items-center justify-center shrink-0">
                <Image src="/assets/kiet-logo.png" alt="KIET" width={80} height={80} />
              </div>
              <div className="flex-grow text-center md:text-left">
                <div className="text-violet-light font-mono text-sm uppercase tracking-widest mb-1">Education</div>
                <h3 className="text-3xl font-bold font-grotesk mb-2 text-primary">KIET Group of Institutions</h3>
                <div className="text-xl text-secondary mb-2">B.Tech — Information Technology</div>
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 text-muted font-mono text-sm">
                  <span className="flex items-center gap-2">2024 → 2028</span>
                  <span className="w-1 h-1 rounded-full bg-border-subtle" />
                  <span>Ghaziabad, UP</span>
                </div>
              </div>
              <div className="px-6 py-3 rounded-2xl bg-violet/5 border border-violet/10 text-violet text-sm font-bold font-mono">
                Current GPA: 8.5+ (Expected)
              </div>
            </div>
          </GlowCard>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Certifications
