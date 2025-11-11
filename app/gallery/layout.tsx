import type React from "react"
import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"
import BentoLayout from "./bento-layout"

export const metadata: Metadata = {
  title: "TVH Gallery | Tshwane Varsity Hackathon",
  description: "Browse photos from TVH events from 2018 to 2024",
}

export default function GalleryLayout({
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
