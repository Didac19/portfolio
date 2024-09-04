import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Reveal from '@/components/Reveal'
import { AboutSection, ExpSection, ProjectSection, SkillSection } from '@/components/Section'

export default function Home() {
  return (
    <div className='bg-[#0a0e47] text-[#5640e7] min-h-screen'>
      <Header name='Diego' lastName='CG' />
      <main className="container mx-auto px-4 md:px-6 py-12 space-y-24">
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
      <Reveal>
        <Footer />
      </Reveal>
    </div>
  )
}