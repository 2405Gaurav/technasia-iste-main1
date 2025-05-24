"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Event Director",
    bio: "With 15 years of experience in tech event management, Sarah brings her expertise to make TECHNASIA'25 an unforgettable experience.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@technasia.com",
    },
  },
  {
    name: "Michael Wong",
    role: "Technical Lead",
    bio: "Former Google engineer with a passion for innovative technology and creating platforms for the next generation of tech enthusiasts.",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "michael@technasia.com",
    },
  },
  {
    name: "Priya Sharma",
    role: "Partnerships Director",
    bio: "Bringing together industry leaders and educational institutions to create meaningful collaborations and opportunities.",
    image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "priya@technasia.com",
    },
  },
  {
    name: "David Kim",
    role: "Marketing Director",
    bio: "Creative strategist with a track record of building tech event brands that resonate with global audiences.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "david@technasia.com",
    },
  },
];

export function TeamSection() {
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
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-card/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
          <p className="text-muted-foreground">
            The dedicated professionals behind TECHNASIA&apos;25 working to create an exceptional event experience
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden border-0 bg-card/70 backdrop-blur-sm hover:shadow-md transition-all">
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="flex space-x-3">
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}