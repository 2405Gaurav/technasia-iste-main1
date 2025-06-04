'use client';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, MapPin, Users, Trophy, Code, Zap } from "lucide-react"
import { siteConfig } from "@/lib/constants"
import PlanetScene from '@/components/planet-3d/planet-3d';


interface FlyingSpaceshipProps {
  right?: string;
  left?: string;
  top?: string;
  duration?: number;
  color?: "green" | "blue" | "purple";
  direction?: "leftToRight" | "rightToLeft";
}

export  function FlyingSpaceship({
  top = "top-[30%]",
  left = "left-[10%]",
  duration = 20,
  color = "green",
  direction = "leftToRight"
}: FlyingSpaceshipProps) {
  const colors = {
    green: {
      body: "from-green-400 via-green-500 to-green-600",
      inner: "from-green-300 to-green-400",
      wing: "bg-green-500",
      cockpit: "from-cyan-300 to-blue-400",
      trail: "from-green-400 via-green-300"
    },
    blue: {
      body: "from-blue-400 via-blue-500 to-blue-600",
      inner: "from-blue-300 to-blue-400",
      wing: "bg-blue-500",
      cockpit: "from-teal-300 to-blue-300",
      trail: "from-blue-400 via-blue-300"
    },
    purple: {
      body: "from-purple-400 via-purple-500 to-purple-600",
      inner: "from-purple-300 to-purple-400",
      wing: "bg-purple-500",
      cockpit: "from-pink-300 to-purple-400",
      trail: "from-purple-400 via-purple-300"
    }
  };

  const c = colors[color];
  const isLeftToRight = direction === "leftToRight";

  return (
    <motion.div
      className={`absolute ${top} ${left} w-32 h-20 pointer-events-none z-30`}
      initial={{ x: isLeftToRight ? -200 : 200 }}
      animate={{ x: isLeftToRight ? "100vw" : "-100vw" }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div
        className="relative w-24 h-12"
        animate={{
          rotateX: [0, 10, -5, 0],
          scale: [1, 1.1, 0.95, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Main Body */}
        <div className={`absolute inset-0 bg-gradient-to-r ${c.body} rounded-full shadow-lg transform rotate-12`}>
          <div className={`absolute inset-2 bg-gradient-to-r ${c.inner} rounded-full opacity-60`} />
        </div>

        {/* Wings */}
        <div className={`absolute -left-3 top-1/2 w-8 h-3 ${c.wing} transform -translate-y-1/2 rotate-45 rounded-full shadow-md`} />
        <div className={`absolute -right-3 top-1/2 w-8 h-3 ${c.wing} transform -translate-y-1/2 -rotate-45 rounded-full shadow-md`} />

        {/* Cockpit */}
        <div className={`absolute top-1 left-1/2 w-4 h-4 bg-gradient-to-br ${c.cockpit} rounded-full transform -translate-x-1/2 shadow-inner`}>
          <motion.div
            className="absolute inset-1 bg-white rounded-full opacity-80"
            animate={{ opacity: [0.8, 0.4, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        {/* Engine Glow */}
        <motion.div
          className="absolute -right-8 top-1/2 w-12 h-2 bg-gradient-to-r from-orange-400 via-yellow-300 to-transparent rounded-full transform -translate-y-1/2"
          animate={{
            scaleX: [1, 1.5, 0.8, 1.2, 1],
            opacity: [0.8, 1, 0.6, 0.9, 0.8]
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Particle Trail */}
        <motion.div
          className={`absolute -right-16 top-1/2 w-20 h-1 bg-gradient-to-r ${c.trail} to-transparent rounded-full transform -translate-y-1/2 opacity-60`}
          animate={{
            scaleX: [1, 1.3, 0.7, 1],
            opacity: [0.6, 0.8, 0.3, 0.6]
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  );
}
export function HeroSection() {
  const stats = [
    { icon: Users, label: "Participants", value: "5000+" },
    { icon: Trophy, label: "Competitions", value: "20+" },
    { icon: Code, label: "Projects", value: "100+" },
    { icon: Zap, label: "Workshops", value: "25+" }
  ]

  const floatingElements = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
    x: Math.random() * 100,
    y: Math.random() * 100
  }))

  return (
    <div className="relative min-h-screen flex items-center justify-start overflow-hidden bg-gradient-to-br scroll-smooth px-8 md:px-16">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_70%,transparent_110%)]" />
      </div>
        {/* <FlyingSpaceship top="top-[10%]" left="left-[5%]" duration={18} color="green" direction="leftToRight" /> */}
        <FlyingSpaceship top="top-[35%]" left="left-[90%]" duration={22} color="blue" direction="rightToLeft" />
        {/* <FlyingSpaceship top="top-[50%]" left="left-[30%]" duration={15} color="purple" direction="leftToRight" /> */}

      {/* Floating geometric shapes */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute pointer-events-none"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
          }}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full backdrop-blur-sm border border-green-500/30" />
        </motion.div>
      ))}

      {/* Planet scene - full screen width & height container, planet centered */}
      <div className="hidden md:flex absolute inset-0 pointer-events-none z-10 justify-center items-center">
        <div className="w-full h-full max-w-[1400px] max-h-[900px]">
          <PlanetScene />
        </div>
      </div>

      {/* Main gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/60" style={{ zIndex: 2 }} />

      {/* Content container aligned left */}
      <div className="relative z-20 max-w-3xl text-center mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 mb-8 bg-green-500/10 border border-green-500/30 rounded-full backdrop-blur-sm"
          >
            <Zap className="h-4 w-4 mr-2 text-green-400" />
            <span className="text-sm font-medium text-green-400">North India&apos;s Premier Tech Festival</span>
          </motion.div>

          {/* Main title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <div className="block">
              {['TECH', 'NISIA'].map((word, index) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.3,
                    ease: "easeOut"
                  }}
                  className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-500 to-emerald-400 mr-4"
                >
                  {word}
                </motion.span>
              ))}
            </div>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="block text-2xl md:text-4xl lg:text-5xl font-bold text-white/90 mt-2"
            >
              &apos;25
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-lg md:text-2xl font-semibold mb-4 text-white drop-shadow-lg"
          >
            Where Innovation Meets{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
              Opportunity
            </span>
          </motion.p>

          {/* Description */}
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.3 }} className="text-green-400 text-lg font-semibold mb-10 max-w-xl leading-tight">
            Experience India’s ultimate tech festival — innovate, compete, connect!
          </motion.p>


          {/* Stats section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-xl"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                className="bg-black/30 backdrop-blur-sm border border-green-500/20 rounded-lg p-3 hover:border-green-500/40 transition-colors duration-300"
              >
                <stat.icon className="h-5 w-5 text-green-400 mx-auto mb-2" />
                <div className="text-lg font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Event details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm border border-green-500/20 rounded-full">
              <Calendar className="h-4 w-4 text-green-400" />
              <span className="text-white text-sm font-medium">{siteConfig.date}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm border border-green-500/20 rounded-full">
              <MapPin className="h-4 w-4 text-green-400" />
              <span className="text-white text-sm font-medium">{siteConfig.venue}</span>
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.9 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold px-6  rounded-full shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(34,197,94,0.4)] transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="#register">
                Register Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-green-400 text-green-400 hover:bg-green-200/10  font-semibold px-6 py-3 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="#timeline">Explore Competitions</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" style={{ zIndex: 2 }} />
    </div>
  )
}
