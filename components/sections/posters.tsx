"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { posterList} from "@/lib/poster-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Eye,
  Download,
  Share2,
  Calendar,
  Users,
  Grid3X3,
  LayoutGrid,
} from "lucide-react";

export default function Posters() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const posters = posterList;
  const [selectedView, setSelectedView] = useState<"grid" | "carousel">("grid");

  const textColor = isDark ? "text-white" : "text-gray-900";
  const mutedTextColor = isDark ? "text-gray-300" : "text-gray-600";
  const cardBg = isDark ? "bg-black/50" : "bg-white/80";
  const cardBorder = isDark ? "border-white/10" : "border-gray-200";
  const bgGradient = isDark
    ? "bg-gradient-to-b from-black/95 to-black"
    : "bg-gradient-to-b from-gray-50 to-white";

  const handleDownload = (poster: any) => {
    console.log(`Downloading ${poster.title}`);
    // In a real implementation, this would trigger an actual download
  };

  const handleShare = async (poster: any) => {
    try {
      await navigator.clipboard.writeText(
        `Check out this poster: ${poster.title}`
      );
      console.log(`Shared ${poster.title}`);
    } catch (err) {
      console.log("Share failed:", err);
    }
  };

  const PosterCard = ({ poster, index }: { poster: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative"
    >
      <Card
        className={`overflow-hidden ${cardBg} backdrop-blur-sm border ${cardBorder} hover:shadow-xl transition-all duration-500`}
      >
        <div className="relative overflow-hidden">
          <img
            src={poster.imageUrl || "/placeholder.svg"}
            alt={poster.title}
            className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay with actions */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex gap-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full bg-white/90 hover:bg-white transform hover:scale-110 transition-all duration-200"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>{poster.title}</DialogTitle>
                    <DialogDescription>{poster.description}</DialogDescription>
                  </DialogHeader>
                  <div className="mt-4">
                    <img
                      src={poster.imageUrl || "/placeholder.svg"}
                      alt={poster.title}
                      className="w-full max-h-[70vh] object-contain rounded-lg"
                    />
                  </div>
                </DialogContent>
              </Dialog>

              

              
            </div>
          </div>

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <Badge className="bg-tvh-red text-white shadow-lg">
              {poster.category}
            </Badge>
          </div>

          {/* Featured indicator */}
          {poster.featured && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-tvh-yellow text-black">🔥 Featured</Badge>
            </div>
          )}
        </div>

        <CardContent className="p-6 relative">
          <div className="space-y-3">
            <h3
              className={`text-xl font-bold mb-2 group-hover:text-tvh-red transition-colors duration-300 ${textColor}`}
            >
              {poster.title}
            </h3>
            <p className={`leading-relaxed ${mutedTextColor}`}>
              {poster.description}
            </p>

            {/* Additional metadata */}
            
          </div>

          {/* Interactive progress bar */}
          <div
            className={`absolute bottom-0 left-0 w-full h-1 ${
              isDark ? "bg-gray-800" : "bg-gray-200"
            }`}
          >
            <div className="h-full bg-gradient-to-r from-tvh-red to-tvh-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <section
      id="posters"
      className={`py-20 md:py-32 relative overflow-hidden ${bgGradient}`}
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute top-1/4 right-1/4 w-96 h-96 rounded-full ${
            isDark ? "bg-tvh-blue/10" : "bg-tvh-blue/5"
          } blur-3xl`}
        ></div>
        <div
          className={`absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full ${
            isDark ? "bg-tvh-red/10" : "bg-tvh-red/5"
          } blur-3xl`}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className={`text-3xl md:text-5xl font-bold mb-6 font-heading ${textColor}`}
          >
            Event <span className="gradient-text">Posters</span>
          </h2>
          <p className={`text-xl ${mutedTextColor} max-w-3xl mx-auto mb-8`}>
            Check out our promotional materials and event posters showcasing TVH
            across the years. Download and share to spread the word about South
            Africa's premier hackathon.
          </p>

          {/* View toggle buttons */}
          <div className="flex justify-center gap-2">
            <Button
              variant={selectedView === "grid" ? "default" : "outline"}
              onClick={() => setSelectedView("grid")}
              className={`transition-all duration-300 ${
                selectedView === "grid" ? "bg-tvh-red hover:bg-tvh-red/80" : ""
              }`}
            >
              <Grid3X3 className="mr-2 h-4 w-4" />
              Grid View
            </Button>
            <Button
              variant={selectedView === "carousel" ? "default" : "outline"}
              onClick={() => setSelectedView("carousel")}
              className={`transition-all duration-300 ${
                selectedView === "carousel"
                  ? "bg-tvh-blue hover:bg-tvh-blue/80"
                  : ""
              }`}
            >
              <LayoutGrid className="mr-2 h-4 w-4" />
              Carousel View
            </Button>
          </div>
        </motion.div>

        {/* Dynamic content based on view */}
        {selectedView === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {posters.map((poster, index) => (
              <PosterCard key={poster.id} poster={poster} index={index} />
            ))}
          </div>
        ) : (
          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent className="-ml-4">
                {posters.map((poster, index) => (
                  <CarouselItem
                    key={poster.id}
                    className="pl-4 md:basis-1/2 lg:basis-1/2"
                  >
                    <PosterCard poster={poster} index={index} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        )}

        {/* Call to action */}
        
      </div>
    </section>
  );
}
