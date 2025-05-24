"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Trophy } from "lucide-react";
import { competitions } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function CompetitionGrid() {
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
          <h1 className="text-4xl font-bold mb-4">Competitions</h1>
          <p className="text-muted-foreground">
            Challenge yourself and showcase your skills in our diverse range of competitions
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {competitions.map((competition) => (
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
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{competition.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{competition.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Trophy className="h-4 w-4 mr-2" />
                      <span>Team Size: {competition.teamSize}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
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