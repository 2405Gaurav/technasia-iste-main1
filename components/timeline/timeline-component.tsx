"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { competitions } from "@/lib/constants";

export function TimelineComponent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Event Schedule</h1>
          <p className="text-lg text-gray-300">
            Mark your calendar for these exciting competitions at TECHNASIA&apos;25
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-24"
        >
          {competitions.map((comp, index) => (
            <motion.div
              key={comp.id}
              variants={itemVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              {/* Text Section */}
              <div className={index % 2 === 1 ? "lg:order-2" : "lg:order-1"}>
                <Badge className="mb-4 bg-green-600 text-white hover:bg-green-700">
                  {comp.date}
                </Badge>
                <h2 className="text-3xl font-semibold mb-4 text-white">{comp.title}</h2>
                <p className="text-base text-gray-300 mb-6">{comp.description}</p>

                <div className="flex items-center text-sm text-gray-300 mb-8">
                  <MapPin className="h-4 w-4 mr-2" />
                  {comp.location}
                </div>

                <Link href={`/competitions/${comp.id}`}>
                  <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition">
                    View Details
                  </button>
                </Link>
              </div>

              {/* Image Section */}
              <div
                className={`relative h-[400px] w-full rounded-xl overflow-hidden shadow-md ${
                  index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <Image
                  src={comp.image}
                  alt={comp.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
