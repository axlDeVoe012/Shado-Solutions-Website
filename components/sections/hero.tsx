"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { assets } from "@/lib/assets"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import CountdownTimer from "@/components/ui/countdown-timer"
import { useTheme } from "next-themes"
import { FloatingPaper } from "@/components/floating-paper";
import { FlickeringGrid } from "../ui/flickering-grid"
import { ImagesSlider } from "../ui/images-slider"
import { WavyBackground } from "../ui/wavy-background"

export default function Hero() {
  // Set the hackathon date (example: October 15, 2024)
  const hackathonDate = new Date("2025-09-21T09:00:00")
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const bgGradient = isDark
    ? "bg-gradient-to-b from-black via-black/90 to-black"
    : "bg-gradient-to-b from-white via-white/95 to-white"
  const textColor = isDark ? "text-white" : "text-gray-900"
  const mutedTextColor = isDark ? "text-gray-300" : "text-gray-600"

  const images = [
    "/assets/img/gallery/2025/11.webp",
    "/assets/img/gallery/2024/7.webp",
    "/assets/img/portfolio/22_1.webp",
    "/assets/img/portfolio/19_5.webp",
    "/assets/img/gallery/IMG_0135.webp",
  ];

  return (
    <section id="home" className="min-h-screen pt-20 relative overflow-hidden">
      {/* Background elements */}

      <div className="absolute inset-0 z-0">
        <div
          className={`absolute top-0 left-0 w-full h-full ${bgGradient}`}
        ></div>
        <div className="absolute top-20 left-0 w-96 h-96 rounded-full bg-tvh-red/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 rounded-full bg-tvh-blue/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-16 md:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-heading ${textColor}`}
            >
              Tshwane <span className="gradient-text">Varsity</span> Hackathon
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-xl ${mutedTextColor} mb-8 max-w-xl`}
            >
              South Africa's premier inter-university hackathon competition.
              Join hundreds of students for 53 hours of coding, innovation,
              and`` fun!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-tvh-yellow mr-2" />
                <span className={mutedTextColor}>September 21-23, 2025</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-tvh-blue mr-2" />
                <span className={mutedTextColor}>Ga-rankuwa, South Africa</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl gradient-border">
              <Image
                src={"/assets/img/Gallery/2025/11.webp"}
                alt="TVH Hackathon Event"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 md:mt-24 text-center"
        >
          <h2 className={`text-2xl font-bold mb-6 ${textColor}`}>
            Countdown to Hackathon
          </h2>
          <CountdownTimer targetDate={hackathonDate} />
        </motion.div>
      </div>
    </section>
  );
}
