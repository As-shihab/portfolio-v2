import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Experience } from '@/components/Experience'
import { Education } from '@/components/Education'
import { Projects } from '@/components/Projects'
import { Gallery } from '@/components/Gallery'
import { TechStack } from '@/components/TechStack'
import { Blogs } from '@/components/Blogs'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { BackgroundParallax } from '@/components/BackgroundParallax'

export default function Home() {
  return (
    <div className="app">
      <BackgroundParallax />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Gallery />
        <TechStack />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
