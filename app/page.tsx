"use client"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Timeline from "@/components/sections/timeline"
import Sponsors from "@/components/sections/sponsors"
import FAQ from "@/components/sections/faq"
import Contact from "@/components/sections/contact"
import Announcements from "@/components/sections/announcements"
import PostersSection from "@/components/sections/posters"
import Themes from "@/components/sections/themes"
import FloatingParticles from "@/components/ui/floating-particles"
import { FlickeringGrid } from "@/components/ui/flickering-grid"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"
import { BeamsBackground } from "@/components/ui/beams-background"


export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Dynamic background with particles */}

      <div className="relative z-10">
        <Hero />
        <About />
        <Announcements />
        <PostersSection />
        <Themes/>
        <Timeline />
        <Sponsors />
        <FAQ />
        <Contact />
      </div>
    </main>
  );
}
