"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Eye, X, Globe, Users, Award, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Enhanced sponsor data with detailed information
const sponsors = [
  {
    name: "Google",
    logo: "/api/placeholder/200/100",
    website: "https://google.com",
    description: "Leading the future of technology with innovative solutions in cloud computing, AI, and developer tools.",
    partnership: "Principal Technology Partner",
    since: 2020,
    employees: "156,000+",
    focus: ["Cloud Computing", "Artificial Intelligence", "Developer Tools", "Mobile Technology"],
    contribution: "Providing cloud infrastructure and AI services for all hackathon participants",
    benefits: ["$10,000 in Google Cloud credits", "Mentorship sessions", "Priority hiring opportunities"]
  },
  {
    name: "Microsoft",
    logo: "/api/placeholder/200/100", 
    website: "https://microsoft.com",
    description: "Empowering every person and organization on the planet to achieve more through cutting-edge technology.",
    partnership: "Cloud Infrastructure Partner",
    since: 2019,
    employees: "220,000+",
    focus: ["Azure Cloud", "Office 365", "AI & Machine Learning", "Enterprise Solutions"],
    contribution: "Azure cloud services and development tools for innovative project development",
    benefits: ["$15,000 in Azure credits", "Technical workshops", "Direct access to Microsoft engineers"]
  },
  {
    name: "Apple",
    logo: "/api/placeholder/200/100",
    website: "https://apple.com",
    description: "Creating innovative products that enrich people's lives and push the boundaries of technology.",
    partnership: "Innovation Partner",
    since: 2021,
    employees: "164,000+",
    focus: ["iOS Development", "Hardware Innovation", "User Experience", "Privacy Technology"],
    contribution: "Supporting mobile app development and user experience innovation",
    benefits: ["iOS development resources", "Design thinking workshops", "App Store promotion opportunities"]
  },
  {
    name: "Amazon",
    logo: "/api/placeholder/200/100",
    website: "https://amazon.com",
    description: "Building the future of e-commerce, cloud computing, and artificial intelligence solutions.",
    partnership: "E-commerce & AWS Partner",
    since: 2018,
    employees: "1,500,000+",
    focus: ["AWS Cloud", "E-commerce", "Logistics", "Machine Learning"],
    contribution: "AWS infrastructure and e-commerce platform integration support",
    benefits: ["$20,000 in AWS credits", "E-commerce APIs", "Logistics optimization tools"]
  },
  {
    name: "Meta",
    logo: "/api/placeholder/200/100",
    website: "https://meta.com",
    description: "Connecting the world through social technology and building the next generation of social experiences.",
    partnership: "Social Innovation Partner",
    since: 2022,
    employees: "86,000+",
    focus: ["Social Media", "VR/AR Technology", "Metaverse", "Community Building"],
    contribution: "VR/AR development kits and social platform integration tools",
    benefits: ["Meta Quest development kits", "AR/VR workshops", "Social media API access"]
  },
  {
    name: "Netflix",
    logo: "/api/placeholder/200/100",
    website: "https://netflix.com",
    description: "Revolutionizing entertainment through streaming technology and original content creation.",
    partnership: "Media Technology Partner",
    since: 2023,
    employees: "12,800+",
    focus: ["Streaming Technology", "Content Delivery", "Data Analytics", "User Experience"],
    contribution: "Streaming technology expertise and content delivery network solutions",
    benefits: ["Streaming APIs", "Content recommendation algorithms", "Media processing tools"]
  },
  {
    name: "Tesla",
    logo: "/api/placeholder/200/100",
    website: "https://tesla.com",
    description: "Accelerating the world's transition to sustainable energy through innovative electric vehicles and clean energy solutions.",
    partnership: "Sustainable Technology Partner",
    since: 2023,
    employees: "140,000+",
    focus: ["Electric Vehicles", "Battery Technology", "Autonomous Driving", "Clean Energy"],
    contribution: "Sustainable technology solutions and autonomous driving datasets",
    benefits: ["EV charging network access", "Battery technology insights", "Sustainability workshops"]
  },
  {
    name: "Spotify",
    logo: "/api/placeholder/200/100",
    website: "https://spotify.com",
    description: "Transforming the way people discover and enjoy music through innovative audio streaming technology.",
    partnership: "Audio Technology Partner",
    since: 2024,
    employees: "9,800+",
    focus: ["Audio Streaming", "Music Discovery", "Podcast Technology", "Personalization"],
    contribution: "Audio streaming APIs and music recommendation technology",
    benefits: ["Spotify Web API access", "Audio analysis tools", "Music recommendation engines"]
  }
];

type Sponsor = typeof sponsors[0];

export default function SponsorsGrid() {
  const sponsorsRef = useRef(null);
  const sponsorsInView = useInView(sponsorsRef, { once: true, amount: 0.2 });
  const [selectedSponsor, setSelectedSponsor] = useState<Sponsor | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      },
    },
  };

  const openDetails = (sponsor: Sponsor) => {
    setSelectedSponsor(sponsor);
  };

  const closeDetails = () => {
    setSelectedSponsor(null);
  };

  // Floating background elements
  const floatingElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 15 + 8,
    duration: Math.random() * 8 + 12,
    delay: Math.random() * 4,
    x: Math.random() * 100,
    y: Math.random() * 100
  }));

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_70%,transparent_110%)]" />
      </div>

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
            y: [-15, 15, -15],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-green-400/10 to-green-600/10 rounded-full backdrop-blur-sm border border-green-500/20" />
        </motion.div>
      ))}

      <div className="container relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 mb-6 bg-green-500/10 border border-green-500/30 rounded-full backdrop-blur-sm"
          >
            <Award className="h-4 w-4 mr-2 text-green-400" />
            <span className="text-sm font-medium text-green-400">Trusted Partners</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-500 to-emerald-400">
              Our Sponsors
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            TECHNASIA&apos;25 is proudly supported by these industry leaders committed to advancing technology and innovation across Asia
          </p>
        </motion.div>

        {/* Sponsors Grid */}
        <motion.div
          ref={sponsorsRef}
          variants={containerVariants}
          initial="hidden"
          animate={sponsorsInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {sponsors.map((sponsor) => (
            <motion.div
              key={sponsor.name}
              variants={itemVariants}
              className="group"
            >
              <Card className="relative h-full overflow-hidden bg-black/40 backdrop-blur-sm border-2 border-green-500/20 hover:border-green-400/40 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] transition-all duration-500 hover:scale-[1.02]">
                <CardContent className="p-6">
                  {/* Logo Section */}
                  <div className="relative h-24 w-full mb-4 p-4 rounded-lg border-2 border-green-500/30 bg-green-500/5 group-hover:border-green-400/50 transition-all duration-300">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105 filter brightness-110"
                    />
                  </div>

                  {/* Basic Info */}
                  <div className="space-y-2 mb-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                      {sponsor.name}
                    </h3>
                    <p className="text-sm text-green-400 font-medium">
                      {sponsor.partnership}
                    </p>
                    <p className="text-xs text-gray-400 line-clamp-2">
                      {sponsor.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => openDetails(sponsor)}
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 hover:border-green-400/50 rounded-lg transition-all duration-300 text-green-400 hover:text-green-300 font-medium text-sm"
                    >
                      <Eye className="h-4 w-4" />
                      View Details
                    </button>
                    <a
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-2 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 hover:border-green-400/50 rounded-lg transition-all duration-300 text-green-400 hover:text-green-300"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Sponsor Details Modal */}
      <AnimatePresence>
        {selectedSponsor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeDetails}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900/95 backdrop-blur-md border-2 border-green-500/30 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-24 p-2 rounded-lg border border-green-500/30 bg-green-500/5">
                    <Image
                      src={selectedSponsor.logo}
                      alt={selectedSponsor.name}
                      fill
                      className="object-contain filter brightness-110"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">{selectedSponsor.name}</h2>
                    <p className="text-green-400 font-medium">{selectedSponsor.partnership}</p>
                  </div>
                </div>
                <button
                  onClick={closeDetails}
                  className="p-2 hover:bg-red-500/20 border border-red-500/30 hover:border-red-400/50 rounded-lg transition-all duration-300 text-red-400 hover:text-red-300"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-green-400 mb-3">About</h3>
                <p className="text-gray-300 leading-relaxed">{selectedSponsor.description}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-green-400 font-medium">Partner Since</span>
                  </div>
                  <span className="text-white font-bold text-lg">{selectedSponsor.since}</span>
                </div>
                <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-green-400 font-medium">Global Team</span>
                  </div>
                  <span className="text-white font-bold text-lg">{selectedSponsor.employees}</span>
                </div>
              </div>

              {/* Focus Areas */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-green-400 mb-3">Focus Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedSponsor.focus.map((area, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-sm text-green-300"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contribution */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-green-400 mb-3">Event Contribution</h3>
                <p className="text-gray-300 leading-relaxed">{selectedSponsor.contribution}</p>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-green-400 mb-3">Participant Benefits</h3>
                <ul className="space-y-2">
                  {selectedSponsor.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-300">
                      <div className="h-1.5 w-1.5 bg-green-400 rounded-full"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visit Website Button */}
              <a
                href={selectedSponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-medium rounded-lg shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300 transform hover:scale-105"
              >
                <Globe className="h-4 w-4" />
                Visit Website
                <ExternalLink className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}