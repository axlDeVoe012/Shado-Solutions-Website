"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { assets } from "@/lib/assets"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { useTheme } from "next-themes"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const bgColor = isDark ? "bg-black" : "bg-gray-50"
  const textColor = isDark ? "text-white" : "text-gray-900"
  const mutedTextColor = isDark ? "text-gray-400" : "text-gray-600"
  const borderColor = isDark ? "border-gray-800" : "border-gray-200"
  const hoverColor = "hover:text-tvh-red"
  const cardBg = isDark ? "bg-black/50" : "bg-white/70"
  const cardBorder = isDark ? "border-white/10" : "border-gray-200"
  const cardHoverBorder = isDark ? "hover:border-white/30" : "hover:border-gray-300"
  const iconBg = isDark ? "bg-black/70" : "bg-gray-100"

const Logo = () => {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className="relative h-10 w-auto mb-6">
      <Image
        src="/assets/img/clients/logo2.png" 
        alt="TUT logo"
        width={150}
        height={120}
        className="h-20 w-auto object-contain"
      />
    </div>
  );
}

  return (
    <footer
      className={`${bgColor} ${textColor} pt-16 pb-8 relative overflow-hidden`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-tvh-red blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-tvh-blue blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-1"
          >
            <div className="flex items-center mb-4">
              <div className="relative h-150 w-120 mr-2">
                <Logo />
              </div>
            </div>
            <p className={`${mutedTextColor} mb-4`}>
              South Africa's premier inter-university hackathon competition
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://x.com/TUT_TVH"
                className={`${mutedTextColor} hover:text-tvh-red transition-colors`}
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/tshwane.varsity.hackathon?igsh=ankwcHJieWUwbXhv"
                className={`${mutedTextColor} hover:text-tvh-yellow transition-colors`}
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://www.facebook.com/tshwanevarsityhackathon"
                className={`${mutedTextColor} hover:text-tvh-blue transition-colors`}
              >
                <Facebook size={20} />
              </Link>
              
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-lg font-bold mb-4 ${textColor}`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className={`${mutedTextColor} ${hoverColor} transition-colors`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className={`${mutedTextColor} ${hoverColor} transition-colors`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#timeline"
                  className={`${mutedTextColor} ${hoverColor} transition-colors`}
                >
                  Timeline
                </Link>
              </li>
              <li>
                <Link
                  href="#sponsors"
                  className={`${mutedTextColor} ${hoverColor} transition-colors`}
                >
                  Sponsors
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-lg font-bold mb-4 ${textColor}`}>Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className={`${mutedTextColor} ${hoverColor} transition-colors`}
                >
                  Rules
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={`${mutedTextColor} ${hoverColor} transition-colors`}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={`${mutedTextColor} ${hoverColor} transition-colors`}
                >
                  Code of Conduct
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={`${mutedTextColor} ${hoverColor} transition-colors`}
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-lg font-bold mb-4 ${textColor}`}>Contact</h3>
            <ul className="space-y-2">
              <li className={mutedTextColor}>Email: MagasengQM@tut.ac.za</li>
              <li className={mutedTextColor}>Phone: +27 12 345 6789</li>
              <li className={mutedTextColor}>
                Address: Johannesburg, South Africa
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className={`border-t ${borderColor} pt-8 text-center ${mutedTextColor} text-sm`}
        >
          <p>© Copyright {currentYear} TVH. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
