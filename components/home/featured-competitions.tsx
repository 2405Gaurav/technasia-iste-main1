"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { competitions } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function FeaturedCompetitions() {
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
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Featured Competitions</h2>
            <p className="text-muted-foreground max-w-2xl">
              Showcase your skills, creativity, and innovation in our diverse range of competitions designed to challenge and inspire tech enthusiasts.
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0" asChild>
            <Link href="/competitions">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {competitions.slice(0, 3).map((competition) => (
            <motion.div key={competition.id} variants={itemVariants}>
              <Card className="h-full overflow-hidden border-0 shadow-md hover:shadow-lg transition-all">
                <div className="relative h-48 w-full">
                  <Image
                    src={competition.image}
                    alt={competition.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-primary/80 hover:bg-primary">
                    {competition.prize}
                  </Badge>
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">{competition.title}</h3>
                  <p className="text-muted-foreground mb-4">{competition.description}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                    <span className="bg-secondary rounded-full px-3 py-1">
                      {competition.date}
                    </span>
                    <span className="bg-secondary rounded-full px-3 py-1">
                      {competition.location}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full" asChild>
                    <Link href={`/competitions/${competition.id}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}