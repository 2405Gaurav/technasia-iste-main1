"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { sponsors } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";

export function SponsorsGrid() {
  const platinumRef = useRef(null);
  const goldRef = useRef(null);
  const silverRef = useRef(null);
  const bronzeRef = useRef(null);
  
  const platinumInView = useInView(platinumRef, { once: true, amount: 0.2 });
  const goldInView = useInView(goldRef, { once: true, amount: 0.2 });
  const silverInView = useInView(silverRef, { once: true, amount: 0.2 });
  const bronzeInView = useInView(bronzeRef, { once: true, amount: 0.2 });

  const platinumSponsors = sponsors.filter(sponsor => sponsor.tier === "platinum");
  const goldSponsors = sponsors.filter(sponsor => sponsor.tier === "gold");
  const silverSponsors = sponsors.filter(sponsor => sponsor.tier === "silver");
  const bronzeSponsors = sponsors.filter(sponsor => sponsor.tier === "bronze");

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-12">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Sponsors</h1>
          <p className="text-muted-foreground">
            TECHNASIA&apos;25 is proudly supported by these industry leaders committed to advancing technology and innovation
          </p>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-20">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-muted"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-background px-4 text-lg font-medium text-muted-foreground">
                Platinum Sponsors
              </span>
            </div>
          </div>
          
          <motion.div
            ref={platinumRef}
            variants={containerVariants}
            initial="hidden"
            animate={platinumInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10"
          >
            {platinumSponsors.map((sponsor) => (
              <motion.a
                key={sponsor.name}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="group"
              >
                <Card className="h-full overflow-hidden border-0 bg-card/70 backdrop-blur-sm hover:shadow-lg transition-all">
                  <CardContent className="p-8 flex flex-col items-center">
                    <div className="relative h-40 w-full mb-6">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 flex items-center">
                      {sponsor.name}
                      <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <span className="text-primary uppercase text-sm tracking-wider font-medium">
                      {sponsor.tier} Sponsor
                    </span>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-20">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-muted"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-background px-4 text-lg font-medium text-muted-foreground">
                Gold Sponsors
              </span>
            </div>
          </div>
          
          <motion.div
            ref={goldRef}
            variants={containerVariants}
            initial="hidden"
            animate={goldInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10"
          >
            {goldSponsors.map((sponsor) => (
              <motion.a
                key={sponsor.name}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="group"
              >
                <Card className="h-full overflow-hidden border-0 bg-card/70 backdrop-blur-sm hover:shadow-lg transition-all">
                  <CardContent className="p-6 flex flex-col items-center">
                    <div className="relative h-32 w-full mb-6">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 flex items-center">
                      {sponsor.name}
                      <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <span className="text-primary uppercase text-sm tracking-wider font-medium">
                      {sponsor.tier} Sponsor
                    </span>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-20">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-muted"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-background px-4 text-lg font-medium text-muted-foreground">
                Silver Sponsors
              </span>
            </div>
          </div>
          
          <motion.div
            ref={silverRef}
            variants={containerVariants}
            initial="hidden"
            animate={silverInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
          >
            {silverSponsors.map((sponsor) => (
              <motion.a
                key={sponsor.name}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="group"
              >
                <Card className="h-full overflow-hidden border-0 bg-card/70 backdrop-blur-sm hover:shadow-lg transition-all">
                  <CardContent className="p-6 flex flex-col items-center">
                    <div className="relative h-24 w-full mb-4">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-1 flex items-center">
                      {sponsor.name}
                      <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <span className="text-primary uppercase text-xs tracking-wider font-medium">
                      {sponsor.tier} Sponsor
                    </span>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bronze Sponsors */}
        <div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-muted"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-background px-4 text-lg font-medium text-muted-foreground">
                Bronze Sponsors
              </span>
            </div>
          </div>
          
          <motion.div
            ref={bronzeRef}
            variants={containerVariants}
            initial="hidden"
            animate={bronzeInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10"
          >
            {bronzeSponsors.map((sponsor) => (
              <motion.a
                key={sponsor.name}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="group"
              >
                <Card className="h-full overflow-hidden border-0 bg-card/70 backdrop-blur-sm hover:shadow-lg transition-all">
                  <CardContent className="p-4 flex flex-col items-center">
                    <div className="relative h-20 w-full mb-3">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-base font-semibold mb-1 flex items-center">
                      {sponsor.name}
                      <ExternalLink className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <span className="text-primary uppercase text-xs tracking-wider font-medium">
                      {sponsor.tier}
                    </span>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}