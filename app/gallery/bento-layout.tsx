"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import Image from "next/image"
import { galleryData, type GalleryImage } from "@/lib/gallery-data"
import GalleryLightbox from "@/components/gallery/gallery-lightbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "lucide-react"

export default function BentoLayout() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const [activeYear, setActiveYear] = useState<string>("all")
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>(galleryData)

  const years = ["all", "2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018"]

  useEffect(() => {
    if (activeYear === "all") {
      setFilteredImages(galleryData)
    } else {
      setFilteredImages(galleryData.filter((item) => item.year === activeYear))
    }
    setSelectedImageIndex(null)
  }, [activeYear])

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index)
  }

  const handlePrevious = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1)
    }
  }

  const handleNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < filteredImages.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1)
    }
  }

  // Define the bento grid layout for desktop
  const bentoGridAreas = [
    "a a b c", // Row 1
    "a a d e", // Row 2
    "f g g e", // Row 3
    "h g g i", // Row 4
    "j j k i", // Row 5
  ]

  // Assign grid areas to the first 11 images (a-k)
  const gridAreas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"]

  return (
    <div className="mb-16">
      <Tabs defaultValue="all" className="w-full mb-8">
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
              >
                {/* Desktop Bento Grid */}
                <div className="hidden lg:block">
                  <div
                    className="grid gap-4 h-[1200px]"
                    style={{
                      gridTemplateColumns: "repeat(4, 1fr)",
                      gridTemplateRows: "repeat(5, 1fr)",
                      gridTemplateAreas: `"${bentoGridAreas.join('" "')}"`,
                    }}
                  >
                    {(year === "all" ? galleryData : galleryData.filter((item) => item.year === year))
                      .slice(0, 11)
                      .map((image, index) => (
                        <motion.div
                          key={image.id}
                          style={{ gridArea: gridAreas[index] }}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                          className={`relative overflow-hidden rounded-xl border ${
                            isDark ? "border-white/10" : "border-gray-200"
                          } ${isDark ? "bg-black/50" : "bg-white/80"} backdrop-blur-sm cursor-pointer group`}
                          onClick={() => handleImageClick(index)}
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
                            <span className="bg-tvh-red/90 text-white text-xs px-2 py-1 rounded-full">
                              {image.year}
                            </span>
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
                </div>

                {/* Mobile/Tablet Grid */}
                <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
                  {(year === "all" ? galleryData : galleryData.filter((item) => item.year === year)).map(
                    (image, index) => (
                      <motion.div
                        key={image.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        className={`group cursor-pointer overflow-hidden rounded-xl border ${
                          isDark ? "border-white/10" : "border-gray-200"
                        } ${isDark ? "bg-black/50" : "bg-white/80"} backdrop-blur-sm transition-all hover:shadow-lg`}
                        onClick={() => handleImageClick(index)}
                      >
                        <div className="relative h-full w-full overflow-hidden">
                          <div className="relative h-48 md:h-64 w-full">
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
                            <span className="bg-tvh-red/90 text-white text-xs px-2 py-1 rounded-full">
                              {image.year}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ),
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </TabsContent>
        ))}
      </Tabs>

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <GalleryLightbox
          image={filteredImages[selectedImageIndex]}
          onClose={() => setSelectedImageIndex(null)}
          onPrevious={handlePrevious}
          onNext={handleNext}
          hasPrevious={selectedImageIndex > 0}
          hasNext={selectedImageIndex < filteredImages.length - 1}
        />
      )}
    </div>
  )
}
