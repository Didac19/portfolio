"use client"

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { AboutSection, ExpSection, ProjectSection, SkillSection } from '@/components/Section'
import { Button } from '@/components/ui/button'
import Reveal from '@/components/Reveal'

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <AboutSection />
      case 'projects':
        return <ProjectSection />
      case 'skills':
        return <SkillSection />
      case 'experience':
        return <ExpSection />
      default:
        return <AboutSection />
    }
  }

  return (
    <div className='bg-[#0a0e47] text-[#5640e7] min-h-screen flex flex-col'>

      <Header name='Diego' lastName='CG'/>
      <nav className="container mx-auto px-4 py-4 hidden justify-center space-x-4 sm:flex">
        {['about', 'projects', 'skills', 'experience'].map((section) => (
          <Button
            key={section}
            onClick={() => setActiveSection(section)}
            variant={activeSection === section ? "default" : "outline"}
            className="capitalize"
          >
            {section}
          </Button>
        ))}
      </nav>
      <main className="container mx-auto px-4 md:px-6 py-12 flex-grow hidden md:flex">
        {renderSection()}
      </main>
      <main className="mx-auto px-4 md:px-6 py-12 flex-grow flex-col sm:hidden">
        <Reveal>
            <AboutSection />
          </Reveal>
          <Reveal>
            <ProjectSection />
          </Reveal>
          <Reveal>
            <SkillSection />
          </Reveal>
          <Reveal>
            <ExpSection />
          </Reveal>
      </main>
      <Footer />
    </div>
  )
}