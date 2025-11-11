import type React from "react"
import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Our Team | The Varsity Hackathon",
  description: "Meet the dedicated team behind The Varsity Hackathon",
}

export default function TeamLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <Header />
      {children}
    </ThemeProvider>
  )
}
