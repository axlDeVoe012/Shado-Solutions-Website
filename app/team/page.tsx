import TeamHeader from "@/components/team/team-header"
import TeamGrid from "@/components/team/team-grid"
import type { Metadata } from "next"
import { BeamsBackground } from "@/components/ui/beams-background"
import FloatingParticles from "@/components/ui/floating-particles"

export const metadata: Metadata = {
  title: "Our Team | The Varsity Hackathon",
  description: "Meet the dedicated team behind The Varsity Hackathon",
}

export default function TeamPage() {
  return (
    <main className="min-h-screen pt-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background to-background/80 dark:from-black dark:to-black/90"></div>

      <div className="container mx-auto px-4 relative z-10 py-16">
        
        <div className="fixed inset-0 z-0">
          <FloatingParticles />
        </div>
        <TeamHeader />
        <TeamGrid />
        
      </div>
    </main>
  )
}
