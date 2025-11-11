import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import ThemeAwareHeader from "@/components/layout/theme-aware-header"
import ThemeAwareFooter from "@/components/layout/theme-aware-footer"
import { ThemeProvider } from "@/components/theme-provider"
import seoKeywords from "@/lib/seoKeywords"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: {
    default: seoKeywords.primaryKeywords[0],
    template: `%s | ${seoKeywords.primaryKeywords[0]}`,
  },
  description: `${seoKeywords.longTailKeywords[0]}. ${seoKeywords.relatedTerms
    .slice(0, 3)
    .join(", ")}.`,
  keywords: [
    ...seoKeywords.primaryKeywords,
    ...seoKeywords.locationBasedKeywords,
  ],
  openGraph: {
    title: seoKeywords.primaryKeywords[1],
    description: `Join ${seoKeywords.audienceSpecificKeywords[0]} in ${seoKeywords.locationBasedKeywords[0]}`,
    type: "website",
    locale: "en_ZA",
    siteName: "Tshwane Varsity Hackathon",
  },
  twitter: {
    card: "summary_large_image",
    title: seoKeywords.primaryKeywords[2],
    description: seoKeywords.longTailKeywords[1],
  },
};

export default function ThemeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ThemeAwareHeader />
          {children}
          <ThemeAwareFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
