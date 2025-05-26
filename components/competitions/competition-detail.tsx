"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { 
  Calendar, 
  MapPin, 
  Trophy, 
  Clock, 
  Users, 
  ClipboardList,
  Award
} from "lucide-react";
import { competitions } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CompetitionDetailProps {
  id: string;
}

export function CompetitionDetail({ id }: CompetitionDetailProps) {
  const competition = competitions.find(comp => comp.id === id);
  
  const detailsRef = useRef(null);
  const requirementsRef = useRef(null);
  const judgesRef = useRef(null);
  
  const detailsInView = useInView(detailsRef, { once: true, amount: 0.3 });
  const requirementsInView = useInView(requirementsRef, { once: true, amount: 0.3 });
  const judgesInView = useInView(judgesRef, { once: true, amount: 0.3 });

  if (!competition) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Competition Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The competition youre looking for doesn&rsquo;t exist.
        </p>
        <Button asChild>
          <Link href="/competitions">View All Competitions</Link>
        </Button>
      </div>
    );
  }

  return (
    <section className="py-12">
      <div className="container">
        {/* Hero Banner */}
        <div className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden mb-12">
          <Image
            src={competition.image}
            alt={competition.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <Badge className="mb-4 bg-primary/80 hover:bg-primary">
              {competition.prize}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{competition.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center bg-background/30 backdrop-blur-sm rounded-full px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{competition.date}</span>
              </div>
              <div className="flex items-center bg-background/30 backdrop-blur-sm rounded-full px-4 py-2">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{competition.location}</span>
              </div>
              <div className="flex items-center bg-background/30 backdrop-blur-sm rounded-full px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                <span>Registration Deadline: {competition.registrationDeadline}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Competition Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <motion.div
              ref={detailsRef}
              initial={{ opacity: 0, y: 20 }}
              animate={detailsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold mb-4">About the Competition</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {competition.longDescription}
              </p>
              <div className="flex justify-center">
                <Button size="lg" asChild>
                  <Link href="/register">
                    Register Now
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              ref={requirementsRef}
              initial={{ opacity: 0, y: 20 }}
              animate={requirementsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold mb-4">Requirements</h2>
              <ul className="space-y-3">
                {competition.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <ClipboardList className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{requirement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              ref={judgesRef}
              initial={{ opacity: 0, y: 20 }}
              animate={judgesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-4">Judges</h2>
              <div className="space-y-3">
                {competition.judges.map((judge, index) => (
                  <div key={index} className="flex items-start">
                    <Award className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{judge}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div>
            <Card className="sticky top-24 border-0 bg-card/70 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Competition Details</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Prize</div>
                    <div className="flex items-center">
                      <Trophy className="h-5 w-5 text-primary mr-2" />
                      <span className="font-medium">{competition.prize}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Team Size</div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-primary mr-2" />
                      <span className="font-medium">{competition.teamSize}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Date</div>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-primary mr-2" />
                      <span className="font-medium">{competition.date}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Location</div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-primary mr-2" />
                      <span className="font-medium">{competition.location}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Registration Deadline</div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-primary mr-2" />
                      <span className="font-medium">{competition.registrationDeadline}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button className="w-full" asChild>
                    <Link href="/register">Register Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}