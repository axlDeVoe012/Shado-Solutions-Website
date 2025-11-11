"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useTheme } from "next-themes"
import { FloatingPaper } from "@/components/floating-paper"

export default function FAQ() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const faqs = [
    {
      question: "What is TVH?",
      answer:
        "Tshwane Varsity Hackathon is an annual hacking competition, open to all universities and gives students industry problems to solve. It is a product of TUT, in partnership with City of Tshwane Metropolitan Municipality. TVH also provides first-hand experience at real-life technological problems; of which also builds on student's CV and experience, which is crucial in industry during the job hunt. Hackathon for all universities to compete and the community is more than welcome to provide their problems to contestants. Through this initiative, TUT aims to engage and grow the South African youth.  CoT is not only providing problem statement. It's also bringing industry mentors, financial backing and platform to pilot solutions that are service delivery focused or benefiting as CoT is also investing in youth and innovative Contacts.",
    },
    {
      question: "Who can compete?",
      answer:
        "Students of TUT and any student from a South African tertiary institution in Tshwane with backgrounds in ICT, Entrepreneurship, UI/UX etc. Participation from mentors and coaches from industry is not just encouraged but would be highly appreciated (Although we're closed for this year). Community members can also enter by bring community problems that can be solved through digital solutions. Problems most prominent in South African townships such as GBV, poverty, water and electricity availability are welcome to be brought forth on our website, but obviously we cannot address all the problems at once.",
    },
    {
      question: "Where is it taking place?",
      answer:
        "Tshwane University of Technology TB Hall main campus (Pretoria West)",
    },
    {
      question: "What should I bring to the hackathon?",
      answer:
        "You should bring your laptop, charger, any other devices you might need, a valid student ID, comfortable clothes, toiletries, and a sleeping bag if you plan to stay overnight. Meals will be provided during the event.",
    },
    {
      question: "Is there a registration fee?",
      answer:
        "No, TVH is completely free for all participants. We provide meals, snacks, and beverages throughout the event, as well as a comfortable hacking space and Wi-Fi.",
    },
    {
      question: "What kind of projects can we build?",
      answer:
        "You can build any type of software or hardware project that addresses the hackathon theme or challenges. This includes web applications, mobile apps, games, IoT solutions, AI/ML projects, and more.",
    },
    {
      question: "Will there be prizes?",
      answer:
        "Yes! TVH offers Gifts, Vouchers and training across various categories including Best Overall Project, Most Innovative Solution, Best Technical Implementation, and more. Specific prize details will be announced at the opening ceremony.",
    },
  ]

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="py-20 md:py-32 relative overflow-hidden theme-transition"
    >
      {/* Background elements */}
      
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute top-0 left-0 w-full h-full ${
            isDark
              ? "bg-gradient-to-b from-black/95 to-black"
              : "bg-gradient-to-b from-gray-50 to-white"
          }`}
        ></div>
        <div
          className={`absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full ${
            isDark ? "bg-tvh-yellow/10" : "bg-tvh-yellow/5"
          } blur-3xl`}
        ></div>
      </div>

      {/* Floating papers background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPaper count={6} />
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
            className={`text-3xl md:text-5xl font-bold mb-6 font-heading ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Got questions about TVH? Find answers to the most common queries
            below.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left p-6 rounded-xl flex justify-between items-center transition-all ${
                  activeIndex === index
                    ? isDark
                      ? "bg-black/70 border-2 border-tvh-yellow/30"
                      : "bg-white shadow-md border-2 border-tvh-yellow/30"
                    : isDark
                    ? "bg-black/50 border border-white/10 hover:border-white/30"
                    : "bg-white shadow-sm border border-gray-100 hover:border-gray-200"
                }`}
              >
                <h3
                  className={`text-lg font-medium ${
                    isDark ? "text-white" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`h-5 w-5 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  } transition-transform ${
                    activeIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 mt-2 rounded-xl bg-gray-50 dark:bg-black/50"
                >
                  <p className={`text-gray-700 dark:text-gray-300`}>
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
