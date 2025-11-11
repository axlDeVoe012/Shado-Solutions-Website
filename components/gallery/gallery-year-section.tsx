"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import GalleryItem from "./gallery-item"
import type { GalleryImage } from "@/lib/gallery-data"
import GalleryLightbox from "./gallery-lightbox"

interface GalleryYearSectionProps {
  year: string
  images: GalleryImage[]
}

export default function GalleryYearSection({ year, images }: GalleryYearSectionProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const textColor = isDark ? "text-white" : "text-gray-900"

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index)
  }

  const handlePrevious = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1)
    }
  }

  const handleNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1)
    }
  }

  return (
    <div className="mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={`text-3xl font-bold mb-8 ${textColor}`}
      >
        {year}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <GalleryItem key={image.id} item={image} index={index} onClick={() => handleImageClick(index)} />
        ))}
      </div>

      {selectedImageIndex !== null && (
        <GalleryLightbox
          image={images[selectedImageIndex]}
          onClose={() => setSelectedImageIndex(null)}
          onPrevious={handlePrevious}
          onNext={handleNext}
          hasPrevious={selectedImageIndex > 0}
          hasNext={selectedImageIndex < images.length - 1}
        />
      )}
    </div>
  )
}
