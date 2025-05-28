"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { competitions } from "@/lib/constants";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 24 * 60 * 60));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="text-center text-green-600 font-mono text-2xl font-bold mb-8">
      {hours.toString().padStart(2, "0")}:
      {minutes.toString().padStart(2, "0")}:
      {seconds.toString().padStart(2, "0")}
    </div>
  );
}

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
    <section className="py-16 text-white w-full">
      <div className="max-w-[75rem] mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
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
          className="relative space-y-32"
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-green-500" />

          {competitions.map((comp, index) => (
            <motion.div
              key={comp.id}
              variants={itemVariants}
              className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-4 h-4 bg-green-500 rounded-full border-4 border-white" />
              </div>

              {/* Text Section */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : "lg:order-1"} px-2`}>
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
                className={`relative w-full h-[690px] rounded-xl overflow-hidden shadow-lg border-4 border-green-600 transition-transform duration-300 hover:scale-105 hover:shadow-green-500/30 ${
                  index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <Image
                  src={comp.image}
                  alt={comp.title}
                  fill
                  className="object-contain p-4 bg-black"
                  priority
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
