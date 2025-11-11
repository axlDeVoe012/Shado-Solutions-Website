import BentoLayout from "./bento-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "TVH Gallery | The Varsity Hackathon",
  description: "Browse photos from TVH events from 2019 to 2024",
}

export default function GalleryPageWithBento() {
  return (
    <main className="min-h-screen pt-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background to-background/80 dark:from-black dark:to-black/90"></div>

      <div className="container mx-auto px-4 relative z-10 py-16">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading text-foreground dark:text-white">
            TVH <span className="gradient-text">Gallery</span>
          </h1>
          <p className="text-xl text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto">
            Browse photos from TVH events from 2019 to 2024. Relive the moments, innovations, and celebrations.
          </p>
        </div>

        <BentoLayout />
      </div>
    </main>
  )
}
