"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import BentoGallery from "./bento-gallery"
import GalleryItem from "./gallery-item"
import { galleryData } from "@/lib/gallery-data"

interface GallerySectionProps {
  year: string
}

export default function GallerySection({ year }: GallerySectionProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filteredImages = year === "all" ? galleryData : galleryData.filter((item) => item.year === year)

  const featuredImages = filteredImages.slice(0, 8) // First 8 images for bento layout
  const remainingImages = filteredImages.slice(8) // Rest of the images for grid layout

  const textColor = isDark ? "text-white" : "text-gray-900"
  const mutedTextColor = isDark ? "text-gray-300" : "text-gray-600"

  return (
    <div>
      {/* Bento layout for featured images */}
      {featuredImages.length > 0 && (
        <div className="mb-12">
          <h2 className={`text-2xl font-bold mb-6 ${textColor}`}>
            {year === "all" ? "Featured Photos" : `Featured Photos from ${year}`}
          </h2>
          <BentoGallery images={featuredImages} onImageClick={(id) => setSelectedImage(id)} />
        </div>
      )}

      {/* Grid layout for remaining images */}
      {remainingImages.length > 0 && (
        <div>
          <h2 className={`text-2xl font-bold mb-6 ${textColor}`}>
            {year === "all" ? "More Photos" : `More Photos from ${year}`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {remainingImages.map((item, index) => (
              <GalleryItem key={item.id} item={item} index={index} onClick={() => setSelectedImage(item.id)} />
            ))}
          </div>
        </div>
      )}

      {/* Lightbox for selected image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryData.find((item) => item.id === selectedImage)?.image || "/placeholder.svg"}
                alt={galleryData.find((item) => item.id === selectedImage)?.title}
                className="w-full h-full object-contain"
              />
              <button
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2"
                onClick={() => setSelectedImage(null)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 text-white">
                <h3 className="text-xl font-bold">{galleryData.find((item) => item.id === selectedImage)?.title}</h3>
                <p className="text-gray-300">{galleryData.find((item) => item.id === selectedImage)?.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
