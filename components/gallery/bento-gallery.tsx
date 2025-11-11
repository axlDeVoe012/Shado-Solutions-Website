"use client"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import Image from "next/image"
import type { GalleryImage } from "@/lib/gallery-data"

interface BentoGalleryProps {
  images: GalleryImage[]
  onImageClick: (id: string) => void
}

export default function BentoGallery({ images, onImageClick }: BentoGalleryProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const cardBg = isDark ? "bg-black/50" : "bg-white/80"
  const cardBorder = isDark ? "border-white/10" : "border-gray-200"

  // Define the bento grid layout
  const bentoLayout = [
    { gridArea: "1 / 1 / 3 / 3", priority: 1 }, // Large square (2x2)
    { gridArea: "1 / 3 / 2 / 5", priority: 2 }, // Wide rectangle (1x2)
    { gridArea: "2 / 3 / 3 / 4", priority: 3 }, // Small square
    { gridArea: "2 / 4 / 3 / 5", priority: 4 }, // Small square
    { gridArea: "3 / 1 / 4 / 2", priority: 5 }, // Small square
    { gridArea: "3 / 2 / 5 / 4", priority: 6 }, // Medium rectangle (2x2)
    { gridArea: "3 / 4 / 5 / 5", priority: 7 }, // Tall rectangle (2x1)
    { gridArea: "4 / 1 / 5 / 2", priority: 8 }, // Small square
  ]

  // Assign images to layout positions
  const assignedImages = images.slice(0, bentoLayout.length).map((image, index) => ({
    ...image,
    layout: bentoLayout[index % bentoLayout.length],
  }))

  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-4 h-[800px] mb-12">
      {assignedImages.map((image, index) => (
        <motion.div
          key={image.id}
          style={{ gridArea: image.layout.gridArea }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          className={`relative overflow-hidden rounded-xl border ${cardBorder} ${cardBg} backdrop-blur-sm cursor-pointer group`}
          onClick={() => onImageClick(image.id)}
        >
          <div className="absolute inset-0">
            <Image
              src={image.image || "/placeholder.svg"}
              alt={image.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className="absolute top-3 right-3 z-10">
            <span className="bg-tvh-red/90 text-white text-xs px-2 py-1 rounded-full">{image.year}</span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
            <div className="bg-black/70 backdrop-blur-sm p-3 rounded-lg">
              <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
              <p className="text-gray-300 text-sm">{image.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
