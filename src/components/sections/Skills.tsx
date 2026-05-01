'use client'

import React from 'react'
import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import * as SimpleIcons from 'react-icons/si'
import { skillCategories } from '@/data/skills'
import GlowCard from '@/components/ui/GlowCard'
import SectionBadge from '@/components/ui/SectionBadge'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { staggerContainer } from '@/lib/animations'

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <SectionBadge>Technical Arsenal</SectionBadge>
          <h2 className="mb-6">Tools I <span className="gradient-text">Build With</span></h2>
          <p className="text-secondary text-lg">
            A curated selection of technologies I use to architect and ship production-grade systems, 
            focused on performance, scalability, and developer experience.
          </p>
        </div>

        <motion.div 
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => {
            // @ts-ignore
            const Icon = LucideIcons[category.icon] || LucideIcons.Code2
            
            return (
              <GlowCard 
                key={category.id} 
                accentColor={category.glowColor}
                className="h-full flex flex-col"
              >
                {/* Header Line */}
                <div 
                  className="absolute top-0 left-0 w-full h-[2px]" 
                  style={{ background: `linear-gradient(90deg, transparent, ${category.accentColor}, transparent)` }}
                />

                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div 
                      className="p-2 rounded-lg bg-surface border border-subtle group-hover:border-glow transition-colors"
                      style={{ color: category.accentColor }}
                    >
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-grotesk font-semibold text-primary">
                      {category.category}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-muted uppercase">
                    {category.skills.length} Tools
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-auto">
                  {category.skills.map((skill, i) => {
                    // @ts-ignore
                    const SkillIcon = SimpleIcons[skill.icon] || LucideIcons.Terminal
                    
                    return (
                      <motion.div 
                        key={i}
                        variants={{
                          hidden: { opacity: 0, scale: 0.9 },
                          visible: { opacity: 1, scale: 1 }
                        }}
                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.03] border border-subtle hover:border-current transition-colors duration-300 group/skill"
                        style={{ color: category.accentColor }}
                      >
                        <SkillIcon className="text-secondary group-hover/skill:text-current transition-colors" size={16} />
                        <span className="text-sm font-medium text-secondary group-hover/skill:text-primary transition-colors">
                          {skill.name}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </GlowCard>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
