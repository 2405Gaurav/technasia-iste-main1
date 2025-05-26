'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import { siteConfig } from "@/lib/constants"

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black">
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black"
        style={{ zIndex: 2 }}
      />

      <div
        className="relative z-10 max-w-4xl text-center px-6"
        style={{ zIndex: 3 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-8xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600
              drop-shadow-[0_0_8px_rgba(0,255,180,0.7)]"
          >
            TECHNASIA&apos;25
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-6 text-white drop-shadow-[0_0_5px_rgba(0,255,180,0.5)]">
            Where Innovation Meets Opportunity
          </p>
          <p className="text-gray-400 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Join Asia&apos;s biggest tech festival celebrating innovation,
            creativity, and entrepreneurship. Four days of competitions,
            workshops, and networking.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-sm md:text-base text-gray-400">
              <Calendar className="h-4 w-4" />
              <span>{siteConfig.date}</span>
            </div>
            <div className="hidden sm:block h-4 border-r border-gray-700" />
            <div className="flex items-center gap-2 text-sm md:text-base text-gray-400">
              <MapPin className="h-4 w-4" />
              <span>{siteConfig.venue}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white shadow-[0_0_8px_rgba(0,255,180,0.8)] transition-shadow duration-300"
              asChild
            >
              <Link href="/register">
                Register Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-500 text-green-500 hover:bg-green-500/20 hover:shadow-[0_0_10px_rgba(0,255,180,0.7)] transition duration-300"
              asChild
            >
              <Link href="/competitions">Explore Competitions</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
