"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { previousEvents } from "@/lib/constants";
import { CalendarDays, Sparkles, Rocket } from "lucide-react";
import Image from "next/image";

const icons = [<Sparkles key="sparkles" />, <Rocket key="rocket" />, <CalendarDays key="calendar" />];

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
        {/* --- Previous Events Info Cards --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Previous Events</h1>
          <p className="text-gray-300 text-lg">
            Highlights from some of our major past events.
          </p>
        </div>

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
                {`The ${event.title} was a remarkable event focusing on ${event.title
                  .toLowerCase()
                  .split(" ")[0]}.`}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Event Gallery Section --- */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4">Event Gallery</h2>
          <p className="text-gray-300 text-lg">
            A visual walkthrough of all our previous events.
          </p>
        </div>
        <div className="w-full grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 gap-2 auto-rows-[120px]">
  {previousEvents.map((event, index) => {
    // Create varied sizes for collage effect
    const getColSpan = (index: number) => {
      const patterns = [3, 2, 4, 2, 3, 5, 2, 3, 4, 2, 3, 2];
      return patterns[index % patterns.length];
    };
    
    const getRowSpan = (index: number) => {
      const patterns = [2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2];
      return patterns[index % patterns.length];
    };

    return (
              <div 
        key={index} 
        className={`relative rounded-lg overflow-hidden border border-white/20 shadow-lg
                   col-span-${getColSpan(index)} row-span-${getRowSpan(index)}
                   hover:shadow-xl hover:shadow-white/10 hover:-translate-y-1 
                   transition-all duration-300 cursor-pointer group`}
        style={{
          gridColumn: `span ${getColSpan(index)}`,
          gridRow: `span ${getRowSpan(index)}`
        }}
      >
        <Image
          src={event.image}
          alt={`Gallery Image ${index + 1}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
    );
  })}
</div>

        
      </div>
    </section>
  );
}
