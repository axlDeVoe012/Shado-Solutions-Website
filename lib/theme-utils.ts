"use client"

import { useTheme } from "next-themes"

// Helper function to get theme-specific colors
export function getThemeColors(theme: string | undefined) {
  const isDark = theme === "dark"

  return {
    background: isDark ? "bg-black" : "bg-white",
    text: isDark ? "text-white" : "text-gray-900",
    muted: isDark ? "text-gray-400" : "text-gray-600",
    border: isDark ? "border-white/10" : "border-gray-200",
    card: isDark ? "bg-black/50" : "bg-white/80",
    cardHover: isDark ? "hover:bg-black/70" : "hover:bg-white/90",
    primary: "bg-tvh-red",
    primaryHover: "hover:bg-tvh-red/80",
    secondary: isDark ? "bg-tvh-blue" : "bg-tvh-blue/90",
    accent: "bg-tvh-yellow",
  }
}

// Hook to get current theme colors
export function useThemeColors() {
  const { theme } = useTheme()
  return getThemeColors(theme)
}
