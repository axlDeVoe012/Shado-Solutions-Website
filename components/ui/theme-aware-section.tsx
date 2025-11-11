"use client"

import type { ReactNode } from "react"
import { useTheme } from "next-themes"

interface ThemeAwareSectionProps {
  children: ReactNode
  darkBg?: string
  lightBg?: string
  className?: string
}

export default function ThemeAwareSection({
  children,
  darkBg = "bg-black",
  lightBg = "bg-gray-50",
  className = "",
}: ThemeAwareSectionProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return <div className={`${isDark ? darkBg : lightBg} ${className}`}>{children}</div>
}
