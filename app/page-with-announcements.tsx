import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Timeline from "@/components/sections/timeline"
import Sponsors from "@/components/sections/sponsors"
import FAQ from "@/components/sections/faq"
import Contact from "@/components/sections/contact"
import Announcements from "@/components/sections/announcements"
import FloatingParticles from "@/components/ui/floating-particles"
import { FlickeringGrid } from "@/components/ui/flickering-grid"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"


export default function HomeWithAnnouncements() {
  return (
    <main className="relative overflow-hidden">
      {/* Dynamic background with particles */}
      <div className="fixed inset-0 z-0">
        <FloatingParticles />
      </div>

      <div className="relative z-10">
      
        <Hero />
        <About />
        <Announcements />
        <Timeline />
        <Sponsors />
        <FAQ />
        <Contact />
      </div>
    </main>
  )
}
