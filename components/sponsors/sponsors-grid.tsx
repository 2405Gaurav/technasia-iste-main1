"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Eye, X, Globe, Users, Award, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const sponsors = [
  {
    name: "Google",
    logo: "/api/placeholder/200/100",
    website: "https://google.com",
    description:
      "Leading the future of technology with innovative solutions in cloud computing, AI, and developer tools.",
    partnership: "Principal Technology Partner",
    since: 2020,
    employees: "156,000+",
    focus: ["Cloud Computing", "Artificial Intelligence", "Developer Tools", "Mobile Technology"],
    contribution: "Providing cloud infrastructure and AI services for all hackathon participants",
    benefits: ["$10,000 in Google Cloud credits", "Mentorship sessions", "Priority hiring opportunities"],
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
    benefits: ["$15,000 in Azure credits", "Technical workshops", "Direct access to Microsoft engineers"],
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
    benefits: ["iOS development resources", "Design thinking workshops", "App Store promotion opportunities"],
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
    benefits: ["$20,000 in AWS credits", "E-commerce APIs", "Logistics optimization tools"],
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
    benefits: ["Meta Quest development kits", "AR/VR workshops", "Social media API access"],
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
    benefits: ["Streaming APIs", "Content recommendation algorithms", "Media processing tools"],
  },
  {
    name: "Tesla",
    logo: "/api/placeholder/200/100",
    website: "https://tesla.com",
    description:
      "Accelerating the world's transition to sustainable energy through innovative electric vehicles and clean energy solutions.",
    partnership: "Sustainable Technology Partner",
    since: 2023,
    employees: "140,000+",
    focus: ["Electric Vehicles", "Battery Technology", "Autonomous Driving", "Clean Energy"],
    contribution: "Sustainable technology solutions and autonomous driving datasets",
    benefits: ["EV charging network access", "Battery technology insights", "Sustainability workshops"],
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
    benefits: ["Spotify Web API access", "Audio analysis tools", "Music recommendation engines"],
  },
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
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const openDetails = (sponsor: Sponsor) => setSelectedSponsor(sponsor);
  const closeDetails = () => setSelectedSponsor(null);

  const floatingElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 15 + 8,
    duration: Math.random() * 8 + 12,
    delay: Math.random() * 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_70%,transparent_110%)]"
          aria-hidden="true"
        />
      </div>

      {/* Floating geometric shapes */}
      {floatingElements.map(({ id, size, duration, delay, x, y }) => (
        <motion.div
          key={id}
          className="absolute pointer-events-none rounded-full border border-green-500/20 bg-gradient-to-br from-green-400/10 to-green-600/10 backdrop-blur-sm"
          style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
          animate={{ y: [-15, 15, -15], rotate: [0, 180, 360], scale: [1, 1.2, 1] }}
          transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
        />
      ))}

      <div className="container relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-4xl mx-auto mb-16">
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-lime-400 to-green-500">
              Sponsors & Partners
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We’re proud to collaborate with industry leaders who fuel innovation and provide unmatched support to our hackathons.
          </p>
        </motion.div>

        {/* Sponsors Grid */}
        <motion.div
          ref={sponsorsRef}
          variants={containerVariants}
          initial="hidden"
          animate={sponsorsInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          role="list"
        >
          {sponsors.map((sponsor) => (
            <motion.article
              key={sponsor.name}
              variants={itemVariants}
              className="group relative flex flex-col items-center bg-gray-900/40 rounded-2xl border border-green-600/30 p-6 shadow-lg hover:shadow-2xl cursor-pointer focus:outline-none focus:ring-4 focus:ring-green-500"
              tabIndex={0}
              role="listitem"
              aria-label={`${sponsor.name} sponsor card, press enter or click for details`}
              onClick={() => openDetails(sponsor)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  openDetails(sponsor);
                  e.preventDefault();
                }
              }}
            >
              <div className="relative w-28 h-16 mb-4 flex-shrink-0">
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 112px, 112px"
                  unoptimized
                />
              </div>
              <h3 className="font-semibold text-lg text-green-400 mb-1 truncate text-center">{sponsor.name}</h3>
              <p className="text-sm text-gray-300 text-center line-clamp-3">{sponsor.description}</p>
              <motion.div
                className="mt-4 px-3 py-1 rounded-full text-xs font-semibold bg-green-700/40 text-green-100 select-none pointer-events-none"
                aria-hidden="true"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {sponsor.partnership}
              </motion.div>

              <motion.div
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl ring-2 ring-green-400/50 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity pointer-events-none"
              />
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Sponsor Details Modal */}
      <AnimatePresence>
        {selectedSponsor && (
          <motion.dialog
           
            open
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-modal="true"
            role="dialog"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <motion.div
              className="relative bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 shadow-2xl border border-green-600/50"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <button
                aria-label="Close sponsor details"
                className="absolute top-5 right-5 text-green-400 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-full"
                onClick={closeDetails}
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="relative w-40 h-24 flex-shrink-0 rounded-lg overflow-hidden border border-green-500/40 shadow-lg">
                  <Image
                    src={selectedSponsor.logo}
                    alt={`${selectedSponsor.name} logo`}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <div className="flex-1">
                  <h2 id="modal-title" className="text-3xl font-extrabold text-green-400 mb-3">
                    {selectedSponsor.name}
                  </h2>
                  <p id="modal-description" className="text-gray-300 mb-6">{selectedSponsor.description}</p>

                  <a
                    href={selectedSponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-400 hover:text-green-600 font-semibold mb-6 underline"
                  >
                    <Globe className="w-5 h-5" />
                    Visit Website
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-green-400" />
                      <span>Partner Since: <strong>{selectedSponsor.since}</strong></span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-green-400" />
                      <span>Employees: <strong>{selectedSponsor.employees}</strong></span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <strong className="text-green-400 mb-1">Focus Areas:</strong>
                      <ul className="list-disc list-inside text-gray-400">
                        {selectedSponsor.focus.map((area) => (
                          <li key={area}>{area}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col gap-1">
                      <strong className="text-green-400 mb-1">Contributions:</strong>
                      <p className="text-gray-400">{selectedSponsor.contribution}</p>
                    </div>
                    
                    <div className="flex flex-col gap-1">
                      <strong className="text-green-400 mb-1">Benefits to Participants:</strong>
                      <ul className="list-disc list-inside text-gray-400">
                        {selectedSponsor.benefits.map((benefit) => (
                          <li key={benefit}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.dialog>
        )}
      </AnimatePresence>
    </section>
  );
}
