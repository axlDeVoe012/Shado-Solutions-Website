"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import Image from "next/image"
import { X, Linkedin, Twitter, Mail, Globe, MapPin, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { TeamMember } from "@/lib/team-data"

interface TeamMemberModalProps {
  member: TeamMember | null
  onClose: () => void
}

export default function TeamMemberModal({ member, onClose }: TeamMemberModalProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  if (!member) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className={`relative max-w-3xl w-full max-h-[85vh] overflow-hidden rounded-2xl ${
            isDark ? "bg-gradient-to-br from-black to-gray-900/90" : "bg-gradient-to-br from-white to-gray-50/95"
          } backdrop-blur-md border ${isDark ? "border-white/10" : "border-gray-200"} shadow-xl`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-tvh-red/10 blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-tvh-blue/10 blur-3xl -z-10"></div>

        

          <div className="overflow-y-auto max-h-[85vh] no-scrollbar">
            {/* Header with image and basic info */}
            <div className="relative">
              {/* Background header image - blurred version of profile pic */}
              <div className="absolute inset-0 h-40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
                <Image
                  src={member.image || "/placeholder.svg?height=400&width=400&text=Team+Member"}
                  alt=""
                  fill
                  className="object-cover blur-md scale-110 opacity-50"
                />
              </div>

              <div className="relative z-10 pt-6 px-6 pb-0 flex flex-col md:flex-row items-center md:items-end gap-4">
                {/* Profile image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="relative h-28 w-28 rounded-full overflow-hidden border-4 border-white shadow-lg"
                >
                  <Image
                    src={member.image || "/placeholder.svg?height=400&width=400&text=Team+Member"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Name and title */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center md:text-left pb-4"
                >
                  <h2 className="text-2xl font-bold text-white">{member.name}</h2>
                  <p className="text-gray-300 text-lg">{member.title}</p>
                </motion.div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Department and location */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 mb-6 text-sm"
              >
                <div
                  className={`flex items-center px-3 py-1.5 rounded-full ${
                    isDark ? "bg-tvh-red/20 text-tvh-red" : "bg-tvh-red/10 text-tvh-red"
                  }`}
                >
                  <Briefcase className="h-4 w-4 mr-1.5" />
                  <span>{member.department}</span>
                </div>

                
              </motion.div>

              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`space-y-3 mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                {member.bio.map((paragraph, i) => (
                  <p key={i} className="text-sm leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </motion.div>

              {/* Skills */}
              
            </div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className={`p-4 border-t ${
                isDark ? "border-white/10" : "border-gray-200"
              } flex justify-between items-center`}
            >
              <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                Part of the {member.department} Team
              </p>

              <Button
                size="sm"
                className="bg-tvh-blue hover:bg-tvh-blue/80 text-white text-xs h-8 px-3"
                onClick={onClose}
              >
                Close
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
