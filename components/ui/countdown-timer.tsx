"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

interface CountdownTimerProps {
  targetDate: Date
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const { theme } = useTheme()
  const isDark = theme === "dark"

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ]

  const bgColor = isDark ? "bg-black/50" : "bg-white/50"
  const borderColor = isDark ? "border-white/10" : "border-gray-200"
  const textColor = isDark ? "text-white" : "text-gray-900"
  const labelColor = isDark ? "text-gray-400" : "text-gray-600"

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex flex-col items-center"
        >
          <div
            className={`w-24 h-24 ${bgColor} backdrop-blur-sm ${borderColor} rounded-lg flex items-center justify-center gradient-border ${
              isDark ? "glow" : "shadow-md"
            }`}
          >
            <span className={`text-4xl font-bold ${textColor}`}>{unit.value.toString().padStart(2, "0")}</span>
          </div>
          <span className={`mt-2 ${labelColor}`}>{unit.label}</span>
        </motion.div>
      ))}
    </div>
  )
}
