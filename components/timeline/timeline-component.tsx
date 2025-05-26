"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { competitions } from "@/lib/constants";



export function TimelineComponent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const getDateKey = (fullDate: string) => fullDate.split(",")[0].split("-")[0].trim();

  const eventsByDate = competitions.reduce((acc, comp) => {
    const key = getDateKey(comp.date);
    if (!acc[key]) acc[key] = [];
    acc[key].push(comp);
    return acc;
  }, {} as Record<string, typeof competitions>);

  const dateKeys = Object.keys(eventsByDate);

  return (
    <section className="py-12 flex justify-center">
      <div className="container max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">Event Schedule</h1>
          <p className="text-muted-foreground">
            Mark your calendar for these exciting competitions at TECHNASIA&apos;25
          </p>
        </div>

        <div
          ref={ref}
          className="relative timeline-container border-l-2 border-primary/60"
        >
          {dateKeys.map((date, dateIndex) => (
            <motion.div
              key={date}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: dateIndex * 0.1 }}
              className="timeline-date-block relative mb-20"
            >
              {/* Date marker on center line */}
              {/* <div className="date-marker absolute left-9 top-0 w-10 h-10 rounded-full bg-primary text-background border-4 border-background flex items-center justify-center shadow-lg z-10">
                <Calendar className="w-4 h-4" />
              </div> */}
              <h2 className="text-xl font-semibold mb-12 text-center">{date}</h2>

              <div className="flex flex-col md:flex-row justify-between gap-10">
                {eventsByDate[date].map((comp, idx) => (
                  <motion.div
                    key={comp.id}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`timeline-event relative w-full md:w-[48%]  ${idx % 2 === 0 ? "left-event" : "right-event" 
                      }  pl-16 md:pl-20`}
                  >
                    {idx !== 0 && (
                      <div className="absolute -top-3 left-0 w-full border-t border-dashed border-muted-foreground/40"></div>
                    )}

                    <Link href={`/competitions/${comp.id}`} className="block">
                      <Card className="h-full border-0 bg-card/70 backdrop-blur-sm hover:shadow-md transition-all overflow-hidden">
                        <div className="relative w-full h-40">
                          <Image
                            src={comp.image}
                            alt={comp.title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-t-md"
                          />
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <Badge variant="outline">{comp.date}</Badge>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4 mr-1" />
                              {comp.location}
                            </div>
                          </div>
                          <h3 className="text-lg font-semibold mb-2">{comp.title}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-3">
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

      <style jsx>{`
        .timeline-container {
          padding-left: 2rem;
          position: relative;
        }

        /* Center vertical line */
        .timeline-container::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 2.125rem;
          width: 4px;
          background-color: var(--primary);
          border-radius: 2px;
          opacity: 0.6;
          z-index: 0;
        }

        .date-marker {
          left: 50%;
          transform: translateX(-50%);
          top: 0;
          z-index: 10;
          position: absolute;
        }

        .timeline-date-block {
          position: relative;
          margin-bottom: 4rem;
        }

        .timeline-event {
          position: relative;
          z-index: 5;
          max-width: 100%;
        }

        .left-event {
          margin-left: auto;
          text-align: right;
        }

        .right-event {
          margin-right: auto;
          text-align: left;
        }

        /* Optional: line connecting event to timeline line */
        .left-event::before,
        .right-event::before {
          content: "";
          position: absolute;
          top: 2rem;
          width: 20px;
          height: 2px;
          background: var(--primary);
        }

        .left-event::before {
          right: -20px;
          border-radius: 0 4px 4px 0;
        }

        .right-event::before {
          left: -20px;
          border-radius: 4px 0 0 4px;
        }

        /* Responsive tweaks */
        @media (max-width: 768px) {
          .timeline-container {
            padding-left: 1rem;
          }
          .timeline-container::before {
            left: 1rem;
          }
          .date-marker {
            left: 1rem !important;
            transform: none !important;
          }
          .left-event,
          .right-event {
            margin: 0 auto !important;
            text-align: left !important;
          }
          .left-event::before,
          .right-event::before {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
