"use client"

import { motion, AnimatePresence } from "framer-motion"
import type { GalleryImage } from "@/lib/gallery-data"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface GalleryLightboxProps {
  image: GalleryImage | null
  onClose: () => void
  onPrevious: () => void
  onNext: () => void
  hasNext: boolean
  hasPrevious: boolean
}

export default function GalleryLightbox({
  image,
  onClose,
  onPrevious,
  onNext,
  hasNext,
  hasPrevious,
}: GalleryLightboxProps) {
  if (!image) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image */}
          <div className="relative h-[80vh] w-full flex items-center justify-center">
            <img
              src={image.image || "/placeholder.svg"}
              alt={image.title}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Close button */}
          <button
            className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
            onClick={onClose}
          >
            <X size={24} />
          </button>

          {/* Navigation buttons */}
          {hasPrevious && (
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                onPrevious()
              }}
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {hasNext && (
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                onNext()
              }}
            >
              <ChevronRight size={24} />
            </button>
          )}

          {/* Image info */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/70 backdrop-blur-sm text-white">
            <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
            <p className="text-gray-300 mb-2">{image.description}</p>
            <div className="flex items-center">
              <span className="bg-tvh-red/90 text-white text-sm px-3 py-1 rounded-full">{image.year}</span>
              {image.category && (
                <span className="bg-tvh-blue/90 text-white text-sm px-3 py-1 rounded-full ml-2">{image.category}</span>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
