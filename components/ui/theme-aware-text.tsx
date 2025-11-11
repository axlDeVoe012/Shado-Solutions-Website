"use client"

import type { ReactNode } from "react"
import { useTheme } from "next-themes"

interface ThemeAwareTextProps {
  children: ReactNode
  darkClass?: string
  lightClass?: string
  className?: string
}

export default function ThemeAwareText({
  children,
  darkClass = "text-white",
  lightClass = "text-gray-900",
  className = "",
}: ThemeAwareTextProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return <span className={`${isDark ? darkClass : lightClass} ${className}`}>{children}</span>
}
