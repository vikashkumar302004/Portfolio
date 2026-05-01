import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Certifications from '@/components/sections/Certifications'
import Contact from '@/components/sections/Contact'
import NoiseBg from '@/components/ui/NoiseBg'

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <NoiseBg />
      
      {/* Scroll sections */}
      <div id="home">
        <Hero />
      </div>
      
      <div id="about">
        <About />
      </div>
      
      <div id="skills">
        <Skills />
      </div>
      
      <div id="projects">
        <Projects />
      </div>
      
      <div id="certifications">
        <Certifications />
      </div>
      
      <div id="contact" className="pb-24">
        <Contact />
      </div>
    </div>
  )
}
