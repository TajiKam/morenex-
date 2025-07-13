import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Dancing_Script } from "next/font/google"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-script",
})

export const metadata: Metadata = {
  title: "Morenex Virtual Solutions - Your E-commerce Success Partner",
  description:
    "From optimized websites to automated email flows, we help you convert more customers and scale sustainably. Virtual solutions that drive real results.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${dancingScript.variable} bg-black text-white`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
