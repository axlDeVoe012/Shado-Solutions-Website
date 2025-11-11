import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Timeline from "@/components/sections/timeline"
import Sponsors from "@/components/sections/sponsors"
import FAQ from "@/components/sections/faq"
import Contact from "@/components/sections/contact"
import LightModeFloatingParticles from "@/components/ui/light-mode-floating-particles"
import { ThemeProvider } from "@/components/theme-provider"

export default function ThemePage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <main className="relative overflow-hidden">
        {/* Dynamic background with particles */}
        <div className="fixed inset-0 z-0">
          <LightModeFloatingParticles />
        </div>

        <div className="relative z-10">
          <Hero />
          <About />
          <Timeline />
          <Sponsors />
          <FAQ />
          <Contact />
        </div>
      </main>
    </ThemeProvider>
  )
}
