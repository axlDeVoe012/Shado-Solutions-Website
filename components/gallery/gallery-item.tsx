"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import Image from "next/image"
import type { GalleryImage } from "@/lib/gallery-data"

interface GalleryItemProps {
  item: GalleryImage
  index: number
  onClick: () => void
}

export default function GalleryItem({ item, index, onClick }: GalleryItemProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  // Determine if this should be a featured (larger) item
  const isFeatured = index % 7 === 0 || index % 11 === 0
  const isWide = index % 5 === 0
  const isTall = index % 9 === 0

  const gridClasses = isFeatured
    ? "md:col-span-2 md:row-span-2"
    : isWide
      ? "md:col-span-2"
      : isTall
        ? "md:row-span-2"
        : ""

  const cardBg = isDark ? "bg-black/50" : "bg-white/80"
  const cardBorder = isDark ? "border-white/10" : "border-gray-200"
  const textColor = isDark ? "text-white" : "text-gray-900"
  const mutedTextColor = isDark ? "text-gray-300" : "text-gray-600"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`${gridClasses} group cursor-pointer overflow-hidden rounded-xl border ${cardBorder} ${cardBg} backdrop-blur-sm transition-all hover:shadow-lg`}
      onClick={onClick}
    >
      <div className="relative h-full w-full overflow-hidden">
        <div className="relative h-48 md:h-full w-full">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="bg-black/70 backdrop-blur-sm p-3 rounded-lg">
            <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.year}</p>
          </div>
        </div>

        <div className="absolute top-3 right-3">
          <span className="bg-tvh-red/90 text-white text-xs px-2 py-1 rounded-full">{item.year}</span>
        </div>
      </div>
    </motion.div>
  )
}
