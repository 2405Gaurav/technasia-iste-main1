"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { previousEvents } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function PreviousEventsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
          <h1 className="text-4xl font-bold mb-4">Previous Events</h1>
          <p className="text-muted-foreground">
            Explore the highlights and achievements from our past events
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-20"
        >
          {previousEvents.map((event, index) => (
            <motion.div
              key={event.year}
              variants={itemVariants}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <Badge className="mb-4 bg-primary/80 hover:bg-primary">
                  {event.year}
                </Badge>
                <h2 className="text-3xl font-bold mb-4">{event.title}</h2>
                <p className="text-muted-foreground mb-6">{event.description}</p>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3">Event Highlights</h3>
                  <ul className="space-y-2">
                    {event.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Testimonials</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {event.testimonials.map((testimonial, i) => (
                      <Card key={i} className="border-0 bg-card/50 backdrop-blur-sm">
                        <CardContent className="p-4">
                          <div className="flex items-center mb-3">
                            <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                              <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium text-sm">{testimonial.name}</h4>
                              <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                            </div>
                          </div>
                          <p className="text-sm italic text-muted-foreground">
                            &quot;{testimonial.quote}&quot;
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className={`relative h-[400px] w-full rounded-xl overflow-hidden ${
                index % 2 === 1 ? "lg:order-1" : ""
              }`}>
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}