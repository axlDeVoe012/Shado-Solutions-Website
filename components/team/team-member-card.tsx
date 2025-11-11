"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"
import type { TeamMember } from "@/lib/team-data"

interface TeamMemberCardProps {
  member: TeamMember
  index: number
  onClick: () => void
}

export default function TeamMemberCard({ member, index, onClick }: TeamMemberCardProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const cardBg = isDark ? "bg-black/50" : "bg-white/80"
  const cardBorder = isDark ? "border-white/10" : "border-gray-200"
  const cardHoverBorder = isDark ? "hover:border-white/30" : "hover:border-gray-300"
  const textColor = isDark ? "text-white" : "text-gray-900"
  const mutedTextColor = isDark ? "text-gray-300" : "text-gray-600"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`${cardBg} backdrop-blur-sm rounded-xl border ${cardBorder} ${cardHoverBorder} overflow-hidden transition-all cursor-pointer hover:shadow-lg`}
      onClick={onClick}
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={member.image || "/placeholder.svg?height=400&width=400&text=Team+Member"}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className={`text-xl font-bold mb-1 ${textColor}`}>{member.name}</h3>
        <p className={`${mutedTextColor} mb-3`}>{member.title}</p>

        <div className="flex space-x-3">
          
          
        </div>
      </div>
    </motion.div>
  )
}
