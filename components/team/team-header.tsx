"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Users } from "lucide-react"

export default function TeamHeader() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const textColor = isDark ? "text-white" : "text-gray-900"
  const mutedTextColor = isDark ? "text-gray-300" : "text-gray-600"

  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center mb-4">
          <Users className="h-8 w-8 text-tvh-blue mr-3" />
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 font-heading ${textColor}`}>
            Meet Our <span className="gradient-text">Team</span>
          </h1>
        </div>
        <p className={`text-xl ${mutedTextColor} max-w-3xl mx-auto`}>
          The passionate individuals behind The Varsity Hackathon who work tirelessly to create an amazing experience
          for all participants.
        </p>
      </motion.div>
    </div>
  )
}
