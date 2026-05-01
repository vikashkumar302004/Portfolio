'use client'

import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Send, Github, Linkedin, Mail, ArrowRight } from 'lucide-react'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import SectionBadge from '@/components/ui/SectionBadge'
import ScrollReveal from '@/components/ui/ScrollReveal'
import TerminalText from '@/components/ui/TerminalText'
import MagneticButton from '@/components/ui/MagneticButton'
import { cn } from '@/lib/utils'

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)
    
    try {
      // Use environment variables for EmailJS
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

      if (serviceId && templateId && publicKey) {
        await emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey)
        toast.success('Message sent successfully! I will get back to you soon.')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        // Fallback for demo if env vars are missing
        console.log('Form data:', formData)
        await new Promise(resolve => setTimeout(resolve, 1500))
        toast.success('Demo mode: Message "sent" successfully!')
        setFormData({ name: '', email: '', subject: '', message: '' })
      }
    } catch (error) {
      console.error('Email error:', error)
      toast.error('Failed to send message. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <SectionBadge>Contact</SectionBadge>
          <h2 className="mb-6">Let&apos;s Build Something <span className="gradient-text">Extraordinary</span></h2>
          <p className="text-secondary text-lg">
            Open to internships, freelance projects, and interesting collaborations. 
            If you have an idea or a question, don&apos;t hesitate to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Info & Terminal */}
          <div className="flex flex-col gap-10">
            <ScrollReveal variant="slideLeft">
              <TerminalText lines={[
                "$ whoami",
                "> vikash kumar — full stack + gen ai engineer",
                "$ contact --best-way",
                "> email: vikash981103@gmail.com",
                "$ availability",
                "> open to: internships, collabs, freelance",
                "$ status",
                "> actively building... ⚡"
              ]} />
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.2}>
              <div className="flex flex-col gap-6">
                <h3 className="text-xl font-bold font-grotesk">Connect with me</h3>
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: Github, label: 'GitHub', href: 'https://github.com/vikashkumar302004' },
                    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/vikash-kumar-3009b0342/' },
                    { icon: Mail, label: 'Email', href: 'mailto:vikash981103@gmail.com' }
                  ].map((social) => (
                    <MagneticButton 
                      key={social.label} 
                      href={social.href} 
                      target="_blank" 
                      variant="ghost" 
                      className="px-6 py-2.5 flex items-center gap-2 group"
                    >
                      <social.icon size={18} className="group-hover:text-violet transition-colors" />
                      {social.label}
                    </MagneticButton>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Form */}
          <ScrollReveal variant="slideRight">
            <div className="p-8 md:p-10 rounded-3xl bg-surface border border-subtle shadow-2xl relative group">
              <div className="absolute top-0 right-10 w-20 h-px bg-gradient-to-l from-violet to-transparent" />
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-mono text-secondary ml-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-6 py-4 rounded-xl bg-void/50 border border-subtle focus:border-violet focus:ring-1 focus:ring-violet transition-all outline-none text-primary placeholder:text-muted"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-mono text-secondary ml-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-6 py-4 rounded-xl bg-void/50 border border-subtle focus:border-violet focus:ring-1 focus:ring-violet transition-all outline-none text-primary placeholder:text-muted"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-mono text-secondary ml-1">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl bg-void/50 border border-subtle focus:border-violet focus:ring-1 focus:ring-violet transition-all outline-none text-primary appearance-none"
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Project Collaboration">Project Collaboration</option>
                    <option value="Freelance Opportunity">Freelance Opportunity</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-mono text-secondary ml-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full px-6 py-4 rounded-xl bg-void/50 border border-subtle focus:border-violet focus:ring-1 focus:ring-violet transition-all outline-none text-primary placeholder:text-muted resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full py-4 rounded-xl bg-gradient-brand text-white font-bold flex items-center justify-center gap-3 transition-all hover:shadow-[0_0_25px_rgba(124,58,237,0.4)] disabled:opacity-70 disabled:cursor-not-allowed group",
                    isSubmitting && "animate-pulse"
                  )}
                >
                  {isSubmitting ? (
                    "Sending Message..."
                  ) : (
                    <>
                      Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default Contact
