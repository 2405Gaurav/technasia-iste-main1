"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { timelineEvents } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function TimelineComponent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Group events by date
  const eventsByDate = timelineEvents.reduce((acc, event) => {
    if (!acc[event.date]) {
      acc[event.date] = [];
    }
    acc[event.date].push(event);
    return acc;
  }, {} as Record<string, typeof timelineEvents>);

  const dates = Object.keys(eventsByDate);

  return (
    <section className="py-12">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">Event Schedule</h1>
          <p className="text-muted-foreground">
            Mark your calendar for these exciting events at TECHNASIA&apos;25
          </p>
        </div>

        <div className="flex flex-col space-y-12" ref={ref}>
          {dates.map((date, dateIndex) => (
            <motion.div
              key={date}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: dateIndex * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 mr-4">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">{date}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-14">
                {eventsByDate[date].map((event, eventIndex) => (
                  <motion.div
                    key={`${date}-${eventIndex}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: dateIndex * 0.1 + eventIndex * 0.1 }}
                  >
                    <Card className="h-full border-0 bg-card/70 backdrop-blur-sm hover:shadow-md transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <Badge variant="outline">{event.time}</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-1" />
                            {event.location}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                      </CardContent>
                    </Card>
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