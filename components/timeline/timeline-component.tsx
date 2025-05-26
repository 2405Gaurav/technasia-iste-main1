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

  const getDateKey = (fullDate: string) =>
    fullDate.split(",")[0].split("-")[0].trim();

  const eventsByDate = competitions.reduce((acc, comp) => {
    const key = getDateKey(comp.date);
    if (!acc[key]) acc[key] = [];
    acc[key].push(comp);
    return acc;
  }, {} as Record<string, typeof competitions>);

  const dateKeys = Object.keys(eventsByDate);

  return (
    <section className="py-16 px-4 flex justify-center  text-white">
      <div className="container max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Event Schedule</h1>
          <p className="text-lg text-gray-300">
            Mark your calendar for these exciting competitions at TECHNASIA&apos;25
          </p>
        </div>

        <div ref={ref} className="relative border-l-4 border-green-500 pl-6">
          {dateKeys.map((date, dateIndex) => (
            <motion.div
              key={date}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: dateIndex * 0.1 }}
              className="mb-20"
            >
              <h2 className="text-2xl font-semibold mb-12 text-green-400 text-center">
                {date}
              </h2>

              <div className="flex flex-col md:flex-row justify-between gap-10">
                {eventsByDate[date].map((comp, idx) => (
                  <motion.div
                    key={comp.id}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="w-full md:w-[48%]"
                  >
                    <Link href={`/competitions/${comp.id}`} className="block group">
                      <Card className="h-full  border border-gray-700 bg-[#1a1a1a] group-hover:shadow-lg transition-all hover:scale-[1.02] duration-300">
                        <div className="relative w-full h-40">
                          <div className="relative w-full h-40">
                            <Image
                              src={comp.image}
                              alt={comp.title}
                              fill
                              className="object-cover rounded-t-md"
                            />
                          </div>

                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <Badge className="bg-green-600 text-white hover:bg-green-700">
                              {comp.date}
                            </Badge>
                            <div className="flex items-center text-sm text-gray-300">
                              <MapPin className="h-4 w-4 mr-1" />
                              {comp.location}
                            </div>
                          </div>
                          <h3 className="text-lg font-semibold mb-2 text-white">{comp.title}</h3>
                          <p className="text-sm text-gray-400 line-clamp-3">
                            {comp.description}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
