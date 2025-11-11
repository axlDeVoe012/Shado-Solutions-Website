"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ChevronRight, Bell, Megaphone, ExternalLink } from "lucide-react"
import Link from "next/link"
import { announcementsData } from "@/lib/announcements-data"

export default function Announcements() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [visibleCount, setVisibleCount] = useState(3)

  const textColor = isDark ? "text-white" : "text-gray-900"
  const mutedTextColor = isDark ? "text-gray-300" : "text-gray-600"
  const cardBg = isDark ? "bg-black/50" : "bg-white/80"
  const cardBorder = isDark ? "border-white/10" : "border-gray-200"
  const cardHoverBorder = isDark ? "hover:border-white/30" : "hover:border-gray-300"

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, announcementsData.length))
  }

  return (
    <section id="announcements" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute top-0 left-0 w-full h-full ${
            isDark ? "bg-gradient-to-b from-black/95 to-black" : "bg-gradient-to-b from-gray-50 to-white"
          }`}
        ></div>
        <div
          className={`absolute top-1/3 right-1/4 w-96 h-96 rounded-full ${
            isDark ? "bg-tvh-yellow/10" : "bg-tvh-yellow/5"
          } blur-3xl`}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Megaphone className="h-8 w-8 text-tvh-red mr-3" />
            <h2 className={`text-3xl md:text-5xl font-bold font-heading ${textColor}`}>
              Latest <span className="gradient-text">Announcements</span>
            </h2>
          </div>
          <p className={`text-xl ${mutedTextColor} max-w-3xl mx-auto`}>
            Stay updated with the latest news, event updates, and important information about TVH.
          </p>
        </motion.div>

        <div className="space-y-6 mb-12">
          {announcementsData.slice(0, visibleCount).map((announcement, index) => (
            <motion.div
              key={announcement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${cardBg} backdrop-blur-sm rounded-xl border ${cardBorder} ${cardHoverBorder} overflow-hidden transition-all`}
            >
              <div
                className={`p-6 cursor-pointer ${
                  announcement.priority === "high"
                    ? "border-l-4 border-tvh-red"
                    : announcement.priority === "medium"
                      ? "border-l-4 border-tvh-yellow"
                      : "border-l-4 border-tvh-blue"
                }`}
                onClick={() => toggleExpand(announcement.id)}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-center mb-2 md:mb-0">
                    <Badge
                      className={`${
                        announcement.priority === "high"
                          ? "bg-tvh-red/20 text-tvh-red border-tvh-red/30"
                          : announcement.priority === "medium"
                            ? "bg-tvh-yellow/20 text-tvh-yellow border-tvh-yellow/30"
                            : "bg-tvh-blue/20 text-tvh-blue border-tvh-blue/30"
                      } mr-3`}
                    >
                      {announcement.priority === "high"
                        ? "Important"
                        : announcement.priority === "medium"
                          ? "Announcement"
                          : "Update"}
                    </Badge>
                    <h3 className={`text-xl font-bold ${textColor}`}>{announcement.title}</h3>
                  </div>
                  <div className="flex items-center">
                    <Calendar className={`h-4 w-4 ${mutedTextColor} mr-2`} />
                    <span className={`text-sm ${mutedTextColor}`}>{announcement.date}</span>
                  </div>
                </div>

                <p className={`${mutedTextColor} mb-4`}>{announcement.summary}</p>

                <div className="flex items-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`p-0 ${isDark ? "text-tvh-blue hover:text-tvh-blue/80" : "text-tvh-blue hover:text-tvh-blue/80"} flex items-center`}
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleExpand(announcement.id)
                    }}
                  >
                    {expandedId === announcement.id ? "Show less" : "Read more"}
                    <ChevronRight
                      className={`ml-1 h-4 w-4 transition-transform ${expandedId === announcement.id ? "rotate-90" : ""}`}
                    />
                  </Button>
                </div>

                <AnimatePresence>
                  {expandedId === announcement.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-dashed border-gray-200 dark:border-gray-700"
                    >
                      <div className={`${mutedTextColor} space-y-4`}>
                        {announcement.content.map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))}
                      </div>

                      {announcement.link && (
                        <div className="mt-4">
                          <Link
                            href={announcement.link.url}
                            className="inline-flex items-center text-tvh-blue hover:text-tvh-blue/80"
                            download={announcement.link.download}
                          >
                            {announcement.link.text}
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {visibleCount < announcementsData.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Button
              onClick={loadMore}
              className="bg-tvh-blue hover:bg-tvh-blue/80 text-white font-medium flex items-center"
            >
              <Bell className="mr-2 h-4 w-4" />
              Load More Announcements
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
