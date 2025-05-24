"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { sponsors } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function SponsorsPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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

  // Filter platinum sponsors for preview
  const platinumSponsors = sponsors.filter(sponsor => sponsor.tier === "platinum");

  return (
    <section className="py-20 bg-card/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Sponsors</h2>
          <p className="text-muted-foreground">
            TECHNASIA&apos;25 is proudly supported by industry leaders committed to advancing technology and innovation
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12"
        >
          {platinumSponsors.map((sponsor) => (
            <motion.a
              key={sponsor.name}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-xl hover:shadow-md transition-all"
            >
              <div className="relative h-32 w-full mb-4">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-medium">{sponsor.name}</h3>
              <span className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                {sponsor.tier} Sponsor
              </span>
            </motion.a>
          ))}
        </motion.div>

        <div className="text-center">
          <Button asChild>
            <Link href="/sponsors">
              View All Sponsors
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}