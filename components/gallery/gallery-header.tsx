"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export default function GalleryHeader() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const [activeYear, setActiveYear] = useState<string>("all")

  const years = ["all","2025", "2024", "2023", "2022", "2021", "2020", "2019"]

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
        <h1 className={`text-4xl md:text-6xl font-bold mb-6 font-heading ${textColor}`}>
          TVH <span className="gradient-text">Gallery</span>
        </h1>
        <p className={`text-xl ${mutedTextColor} max-w-3xl mx-auto`}>
          Browse photos from TVH events from 2019 to 2024. Relive the moments, innovations, and celebrations.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mb-8"
      >
        {years.map((year, index) => (
          <Button
            key={year}
            variant={activeYear === year ? "default" : "outline"}
            className={`${
              activeYear === year
                ? "bg-tvh-red hover:bg-tvh-red/90"
                : isDark
                  ? "border-white/20 hover:bg-white/10"
                  : "border-gray-300 hover:bg-gray-100"
            } transition-all`}
            onClick={() => setActiveYear(year)}
          >
            {year === "all" ? (
              "All Years"
            ) : (
              <span className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                {year}
              </span>
            )}
          </Button>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={`text-center ${mutedTextColor} mb-8`}
      >
        <p>{activeYear === "all" ? "Showing photos from all TVH events" : `Showing photos from TVH ${activeYear}`}</p>
      </motion.div>
    </div>
  )
}
