"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { assets } from "@/lib/assets"
import { Code, Lightbulb, Users } from "lucide-react"
import { useTheme } from "next-themes"
import { PhotoGallery } from "../ui/gallery"

export default function About() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const features = [
    {
      icon: <Lightbulb className="h-8 w-8 text-tvh-yellow" />,
      title: "Free Entry",
      description:
        "The tshwane varsity hackathon is open to all students and other respective universities no entry/ registration fee.",
    },
    {
      icon: <Users className="h-8 w-8 text-tvh-blue" />,
      title: "Organising Team",
      description:
        "The individuals involved in the organising and execution of the tswane varsity hackathon.Consisting of the lead organising team industry volunteers and the organising team.",
    },
    {
      icon: <Code className="h-8 w-8 text-tvh-red" />,
      title: "Rules & Regulations",
      description:
        "Turn your ideas into working prototypes with cutting-edge technology.",
    },
  ];

  const bgGradient = isDark ? "bg-gradient-to-b from-black to-black/95" : "bg-gradient-to-b from-white to-gray-50"
  const textColor = isDark ? "text-white" : "text-gray-900"
  const mutedTextColor = isDark ? "text-gray-300" : "text-gray-600"
  const cardBg = isDark ? "bg-black/50" : "bg-white/70"
  const cardBorder = isDark ? "border-white/10" : "border-gray-200"
  const cardHoverBorder = isDark ? "hover:border-white/20" : "hover:border-gray-300"
  const iconBg = isDark ? "bg-black/50" : "bg-white/80"
  const statsBg = isDark ? "bg-black" : "bg-white"
  const statsBorder = isDark ? "border-tvh-red/30" : "border-tvh-red/20"

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute top-0 left-0 w-full h-full ${bgGradient}`}
        ></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-tvh-yellow/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
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
            About <span className="gradient-text">TVH</span>
          </h2>
          <p className={`text-xl ${mutedTextColor} max-w-3xl mx-auto`}>
            The Tshwane Varsity Hackathon brings together the brightest minds from
            universities across Tshwane for 53 hours of innovation, coding,
            and fun.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl gradient-border">
              <Image
                src={"/assets/img/slide/PTA5.webp"}
                alt="TVH Hackathon Event"
                fill
                className="object-cover"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className={`absolute -bottom-8 -right-8 ${statsBg} p-4 rounded-xl border ${statsBorder} shadow-xl`}
            >
              <div className="flex items-center space-x-4">
                <div className="bg-tvh-red/20 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-tvh-red" />
                </div>
                <div>
                  <p className={`${textColor} font-bold text-xl`}>500+</p>
                  <p className={isDark ? "text-gray-400" : "text-gray-500"}>
                    Participants
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${textColor}`}>
              What The Hack?
            </h3>
            <p className={`${mutedTextColor} mb-6`}>
              TVH is an annual hacking competition that was introduced in 2018
              by its chief organizer Mr Mash Phurutsi. TVH is a tshwane
              university of technology hackathon competition organized by the
              faculty of ICT & directorate of research & innovation in
              partnership with the industry in support of, the national
              development plan (Vision 2030) of the Government of the Republic
              of South Africa by addressing chapter 9 of the plan that focuses
              on “Improving Education, Training and Innovation”. TVH is further
              aligned to TUT 2020 – 2025 strategic positioning on the ambitions
              to become a digitally-advanced university.
            </p>
            <p className={`${mutedTextColor} mb-6`}>
              TVH is an annual hacking competition that was introduced in 2018
              by its chief organizer Mr Mash Phurutsi. TVH is a tshwane
              university of technology hackathon competition organized by the
              faculty of ICT & directorate of research & innovation in
              partnership with the industry in support of, the national
              development plan (Vision 2030) of the Government of the Republic
              of South Africa by addressing chapter 9 of the plan that focuses
              on “Improving Education, Training and Innovation”. TVH is further
              aligned to TUT 2020 – 2025 strategic positioning on the ambitions
              to become a digitally-advanced university.
            </p>
            <p className={mutedTextColor}>
              The TVH will use a hackathon format, underpinned by Agile Scrum
              and AWS cloud computing practices, to deliver fresh ideas and
              solutions that catalyzes 4IR in the african continent.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${cardBg} backdrop-blur-sm p-6 rounded-xl border ${cardBorder} ${cardHoverBorder} transition-all group`}
            >
              <div
                className={`${iconBg} p-4 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform`}
              >
                {feature.icon}
              </div>
              <h3 className={`text-xl font-bold mb-3 ${textColor}`}>
                {feature.title}
              </h3>
              <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <PhotoGallery  /> 
    </section>
  );
}
