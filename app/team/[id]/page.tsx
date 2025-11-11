import { notFound } from "next/navigation"
import { teamData } from "@/lib/team-data"
import TeamMemberDetails from "@/components/team/team-member-details"
import type { Metadata, ResolvingMetadata } from "next"

interface TeamMemberPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: TeamMemberPageProps, parent: ResolvingMetadata): Promise<Metadata> {
  const member = teamData.find((m) => m.id === params.id)

  if (!member) {
    return {
      title: "Team Member Not Found",
    }
  }

  return {
    title: `${member.name} - ${member.title} | TVH Team`,
    description: `Learn more about ${member.name}, ${member.title} at The Varsity Hackathon.`,
  }
}

export default function TeamMemberPage({ params }: TeamMemberPageProps) {
  const member = teamData.find((m) => m.id === params.id)

  if (!member) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background to-background/80 dark:from-black dark:to-black/90"></div>

      <div className="relative z-10 py-16">
        <TeamMemberDetails member={member} />
      </div>
    </main>
  )
}

export async function generateStaticParams() {
  return teamData.map((member) => ({
    id: member.id,
  }))
}
