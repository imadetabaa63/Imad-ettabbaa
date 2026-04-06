import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/layout/theme-provider"
import { Suspense } from "react"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Imad Et-Tabbaa | Développeur Full-Stack MERN — Casablanca",
  description:
    "Développeur Full-Stack junior spécialisé React, Node.js et MongoDB. Disponible pour CDI, freelance ou remote. Basé à Casablanca, ouvert aux opportunités.",
  openGraph: {
    title: "Imad Et-Tabbaa — Développeur Full-Stack MERN",
    description:
      "Portfolio de projets web full-stack : React, Node.js, MongoDB. Disponible pour CDI ou freelance.",
    url: "https://www.imadet.site",
    siteName: "Imad Et-Tabbaa",
    images: [
      {
        url: "https://www.imadet.site/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Imad Et-Tabbaa — Développeur Full-Stack MERN",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imad Et-Tabbaa | Développeur Full-Stack MERN",
    description: "Portfolio de développeur full-stack junior — React, Node.js, MongoDB.",
  },
  keywords: ["développeur full-stack", "MERN", "React", "Node.js", "MongoDB", "Casablanca", "Maroc", "remote"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${poppins.variable} antialiased`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
