"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import { useTheme } from "next-themes"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const { theme } = useTheme()
  const isDark = theme === "dark"

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log(formState)
    // Reset form
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    // Show success message
    alert("Thank you for your message! We'll get back to you soon.")
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-tvh-red" />,
      title: "Email",
      details: "MagasengQM@tut.ac.za",
      link: "mailto:info@tvh.co.za",
    },
    {
      icon: <Phone className="h-6 w-6 text-tvh-yellow" />,
      title: "Phone",
      details: "+27 12 345 6789",
      link: "tel:+27123456789",
    },
    {
      icon: <MapPin className="h-6 w-6 text-tvh-blue" />,
      title: "Location",
      details: "Ga-rankuwa, South Africa",
      link: "https://maps.google.com",
    },
  ]

  const bgGradient = isDark ? "bg-gradient-to-b from-black to-black/90" : "bg-gradient-to-b from-white to-gray-50"
  const textColor = isDark ? "text-white" : "text-gray-900"
  const mutedTextColor = isDark ? "text-gray-300" : "text-gray-600"
  const cardBg = isDark ? "bg-black/50" : "bg-white/80"
  const cardBorder = isDark ? "border-white/10" : "border-gray-200"
  const cardHoverBorder = isDark ? "hover:border-white/30" : "hover:border-gray-300"
  const inputBg = isDark ? "bg-black/70" : "bg-white"
  const inputBorder = isDark ? "border-white/20" : "border-gray-300"

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-0 left-0 w-full h-full ${bgGradient}`}></div>
        <div
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full ${isDark ? "bg-tvh-blue/10" : "bg-tvh-blue/5"} blur-3xl`}
        ></div>
        <div
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full ${isDark ? "bg-tvh-red/10" : "bg-tvh-red/5"} blur-3xl`}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-5xl font-bold mb-6 font-heading ${textColor}`}>
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className={`text-xl ${mutedTextColor} max-w-3xl mx-auto`}>
            Have questions about TVH? Reach out to us and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl font-bold mb-6 ${textColor}`}>Contact Information</h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-start p-4 ${cardBg} backdrop-blur-sm rounded-xl border ${cardBorder} ${cardHoverBorder} transition-all`}
                >
                  <div className={`${isDark ? "bg-black/70" : "bg-gray-100"} p-3 rounded-lg mr-4`}>{info.icon}</div>
                  <div>
                    <h4 className={`${textColor} font-medium mb-1`}>{info.title}</h4>
                    <p className={mutedTextColor}>{info.details}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <h3 className={`text-2xl font-bold mb-6 ${textColor}`}>Follow Us</h3>
            <p className={`${mutedTextColor} mb-4`}>
              Stay updated with TVH news, announcements, and more by following us on social media.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://x.com/TUT_TVH" target="_blank"
                className={`${isDark ? "bg-black/50" : "bg-gray-100"} p-3 rounded-lg ${isDark ? "text-gray-400" : "text-gray-500"} hover:text-tvh-red ${isDark ? "hover:bg-black/70" : "hover:bg-gray-200"} transition-colors`}
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
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/tshwane.varsity.hackathon?igsh=ankwcHJieWUwbXhv" target="_blank"
                className={`${isDark ? "bg-black/50" : "bg-gray-100"} p-3 rounded-lg ${isDark ? "text-gray-400" : "text-gray-500"} hover:text-tvh-yellow ${isDark ? "hover:bg-black/70" : "hover:bg-gray-200"} transition-colors`}
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
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/tshwanevarsityhackathon" target="_blank"
                className={`${isDark ? "bg-black/50" : "bg-gray-100"} p-3 rounded-lg ${isDark ? "text-gray-400" : "text-gray-500"} hover:text-tvh-blue ${isDark ? "hover:bg-black/70" : "hover:bg-gray-200"} transition-colors`}
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
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className={`${cardBg} backdrop-blur-sm p-6 rounded-xl border ${cardBorder}`}
          >
            <h3 className={`text-2xl font-bold mb-6 ${textColor}`}>Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={`block ${mutedTextColor} mb-2`}>
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className={`${inputBg} ${inputBorder} ${textColor}`}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block ${mutedTextColor} mb-2`}>
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className={`${inputBg} ${inputBorder} ${textColor}`}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={`block ${mutedTextColor} mb-2`}>
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className={`${inputBg} ${inputBorder} ${textColor}`}
                />
              </div>

              <div>
                <label htmlFor="message" className={`block ${mutedTextColor} mb-2`}>
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`${inputBg} ${inputBorder} ${textColor}`}
                />
              </div>

              <Button type="submit" className="w-full bg-tvh-red hover:bg-tvh-red/80 text-white font-medium">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
