"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import GalleryItem from "./gallery-item"
import { galleryData } from "@/lib/gallery-data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "lucide-react"

export default function GalleryGrid() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const [activeYear, setActiveYear] = useState<string>("all")
  const [filteredImages, setFilteredImages] = useState(galleryData)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const years = ["all", "2025", "2024", "2023", "2022", "2021", "2020", "2019"]

  useEffect(() => {
    if (activeYear === "all") {
      setFilteredImages(galleryData)
    } else {
      setFilteredImages(galleryData.filter((item) => item.year === activeYear))
    }
  }, [activeYear])

  const textColor = isDark ? "text-white" : "text-gray-900"
  const mutedTextColor = isDark ? "text-gray-300" : "text-gray-600"
  const cardBg = isDark ? "bg-black/50" : "bg-white/80"
  const cardBorder = isDark ? "border-white/10" : "border-gray-200"

  return (
    <div>
      <Tabs defaultValue="all" className="w-full mb-12">
        <TabsList className="flex flex-wrap justify-center h-auto bg-transparent gap-2 mb-8">
          {years.map((year) => (
            <TabsTrigger
              key={year}
              value={year}
              onClick={() => setActiveYear(year)}
              className={`${
                activeYear === year
                  ? isDark
                    ? "bg-tvh-red text-white"
                    : "bg-tvh-red text-white"
                  : isDark
                    ? "bg-black/50 text-white"
                    : "bg-white text-gray-700"
              } border ${isDark ? "border-white/10" : "border-gray-200"} px-4 py-2 rounded-md`}
            >
              {year === "all" ? (
                "All Years"
              ) : (
                <span className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  {year}
                </span>
              )}
            </TabsTrigger>
          ))}
        </TabsList>

        {years.map((year) => (
          <TabsContent key={year} value={year} className="mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={year}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-auto"
              >
                {(year === "all" ? galleryData : galleryData.filter((item) => item.year === year)).map(
                  (item, index) => (
                    <GalleryItem key={item.id} item={item} index={index} onClick={() => setSelectedImage(item.id)} />
                  ),
                )}
              </motion.div>
            </AnimatePresence>
          </TabsContent>
        ))}
      </Tabs>

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
