"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import Image from "next/image"
import type { GalleryImage } from "@/lib/gallery-data"
import GalleryLightbox from "./gallery-lightbox"

interface GalleryMasonryProps {
  images: GalleryImage[]
}

export default function GalleryMasonry({ images }: GalleryMasonryProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  // Split images into columns for masonry layout
  const getColumns = () => {
    // For mobile, return a single column
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return [images]
    }

    // For tablet, return 2 columns
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      const col1 = images.filter((_, i) => i % 2 === 0)
      const col2 = images.filter((_, i) => i % 2 === 1)
      return [col1, col2]
    }

    // For desktop, return 3 columns
    const col1 = images.filter((_, i) => i % 3 === 0)
    const col2 = images.filter((_, i) => i % 3 === 1)
    const col3 = images.filter((_, i) => i % 3 === 2)
    return [col1, col2, col3]
  }

  const [columns, setColumns] = useState<GalleryImage[][]>([])

  useEffect(() => {
    setColumns(getColumns())

    const handleResize = () => {
      setColumns(getColumns())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [images])

  const handleImageClick = (image: GalleryImage) => {
    const index = images.findIndex((img) => img.id === image.id)
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
    <div>
      <div className="flex gap-4">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="flex-1 space-y-4">
            {column.map((image, imgIndex) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (colIndex * column.length + imgIndex) * 0.05 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`group cursor-pointer overflow-hidden rounded-xl border ${
                  isDark ? "border-white/10" : "border-gray-200"
                } ${isDark ? "bg-black/50" : "bg-white/80"} backdrop-blur-sm transition-all hover:shadow-lg`}
                onClick={() => handleImageClick(image)}
              >
                <div className="relative w-full overflow-hidden">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={image.image || "/placeholder.svg"}
                      alt={image.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="bg-black/70 backdrop-blur-sm p-3 rounded-lg">
                      <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                      <p className="text-gray-300 text-sm">{image.year}</p>
                    </div>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="bg-tvh-red/90 text-white text-xs px-2 py-1 rounded-full">{image.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      {/* Lightbox */}
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
