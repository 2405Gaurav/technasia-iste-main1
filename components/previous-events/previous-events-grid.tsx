"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { previousEvents } from "@/lib/constants";
import { CalendarDays, Sparkles, Rocket } from "lucide-react";
import Image from "next/image";

const icons = [<Sparkles key="sparkles" />, <Rocket key="rocket" />, <CalendarDays key="calendar" />];

function GalleryImage({ event, className }: { event: any; className: string }) {
  return (
    <div className={`${className} group relative cursor-pointer overflow-hidden rounded-sm`}>
      <Image
        src={event.image}
        alt={`${event.title} - ${event.year}`}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="text-white font-semibold text-xs sm:text-sm mb-1">{event.title}</h3>
          <p className="text-white/80 text-xs">{event.year}{event.location ? ` • ${event.location}` : ""}</p>
        </div>
      </div>
    </div>
  );
}

export function PreviousEventsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
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
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Previous Events</h1>
          <p className="text-gray-300 text-lg">Highlights from some of our major past events.</p>
        </div>

        {/* Event Info Cards */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {previousEvents.slice(0, 3).map((event, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 rounded-xl border border-green-500 bg-black/30 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-3 text-green-400 text-3xl mb-4">
                {icons[index % icons.length]}
                <h2 className="text-xl font-semibold text-white">{event.title}</h2>
              </div>
              <p className="text-sm text-gray-300 mb-2">Year: {event.year}</p>
              <p className="text-gray-400">
                The <strong>{event.title}</strong> was a remarkable event focusing on{" "}
                {event.title.toLowerCase().split(" ")[0]}.
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Event Gallery */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4">Event Gallery</h2>
          <p className="text-gray-300 text-lg">A visual walkthrough of all our previous events.</p>
        </div>

        {/* Simple 4 Rows x 3 Columns Grid */}
        <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto">
          {previousEvents.slice(0, 12).map((event, index) => (
            <GalleryImage 
              key={index}
              event={event} 
              className="h-64 border-2 border-white/50" 
            />
          ))}
        </div>
      </div>
    </section>
  );
}