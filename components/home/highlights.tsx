"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Users, Lightbulb, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: <Trophy className="h-10 w-10" />,
    title: "Prestigious Competitions",
    description:
      "Compete in cutting-edge challenges with substantial prizes across multiple tech domains.",
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Industry Networking",
    description:
      "Connect with tech leaders, recruiters, and professionals from top companies worldwide.",
  },
  {
    icon: <Lightbulb className="h-10 w-10" />,
    title: "Innovative Workshops",
    description:
      "Learn from experts in specialized workshops covering the latest tech trends and skills.",
  },
  {
    icon: <Rocket className="h-10 w-10" />,
    title: "Startup Opportunities",
    description:
      "Showcase your entrepreneurial ideas and gain access to investors and mentorship.",
  },
];

export function HighlightsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-card/60 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold mb-4 tracking-tight text-primary">
            Event Highlights
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover what makes TECHNASIA&apos;25 the most anticipated tech event of the year
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {highlights.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className="h-full border-0 bg-card/40 backdrop-blur-md
                           flex flex-col items-center text-center
                           p-8 rounded-xl
                           hover:shadow-xl hover:scale-[1.05]
                           transition-transform transition-shadow duration-300"
              >
                <CardContent className="p-0 flex flex-col items-center gap-4">
                  <div className="text-primary mb-3">{item.icon}</div>
                  <h3
                    className="text-2xl font-semibold relative
                               after:absolute after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2
                               after:w-16 after:h-[3px] after:bg-gradient-to-r after:from-blue-500 after:to-purple-600
                               after:rounded-full after:opacity-0 after:transition-opacity after:duration-300
                               hover:after:opacity-100"
                  >
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground max-w-xs">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
