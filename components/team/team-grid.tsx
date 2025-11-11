"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import TeamMemberCard from "./team-member-card"
import TeamMemberModal from "./team-member-modal"
import { teamData, type TeamMember } from "@/lib/team-data"

export default function TeamGrid() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  const textColor = isDark ? "text-white" : "text-gray-900"

  // Group team members by department
  const departments = teamData.reduce(
    (acc, member) => {
      if (!acc[member.department]) {
        acc[member.department] = []
      }
      acc[member.department].push(member)
      return acc
    },
    {} as Record<string, TeamMember[]>,
  )

  // Sort departments by priority
  const departmentOrder = [
    "Executive Organizing Team",
    "Executive Committee Team",
    "Organizing Team",
    "Partners",
  ];

  return (
    <div>
      {departmentOrder.map((department) => {
        if (!departments[department]) return null

        return (
          <div key={department} className="mb-16  align-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`text-2xl md:text-3xl font-bold mb-8 ${textColor} align-center`}
            >
              {department}
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {departments[department].map((member, index) => (
                <TeamMemberCard
                  key={member.id}
                  member={member}
                  index={index}
                  onClick={() => setSelectedMember(member)}
                />
              ))}
            </div>
          </div>
        )
      })}

      <TeamMemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </div>
  )
}
