"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Gaurav the Geek",
    role: "Chief Debugger",
    bio: "Known for fixing bugs at 3AM and crashing the server at 3:05AM. Gaurav once tried to run an ML model on his toaster. Still pending results.",
    image: "",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "gaurav@funcollege.in",
    },
  },
  {
    name: "Abhay aka API King",
    role: "Backend Wizard",
    bio: "Built 57 microservices to serve Maggi in the hostel canteen. If it’s not crashing, it’s not deployed yet – his mantra for production readiness.",
    image: "",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "abhay@funcollege.in",
    },
  },
  {
    name: "Yash the Yolo Coder",
    role: "Frontend Magician",
    bio: "Believes in ‘push to main’ as a lifestyle. Famous for making buttons that look too good to click. Once made a portfolio site that only works in dark mode.",
    image: "",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "yash@funcollege.in",
    },
  },
  {
    name: "Tilli Don",
    role: "Design Mafia",
    bio: "Designs with such swag that even Figma asks for his permission. Owns more fonts than books. Once created a UI that made a professor cry (tears of joy… maybe).",
    image: "",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "tilli@funcollege.in",
    },
  },
  {
    name: "Billu Don",
    role: "Meme Strategist",
    bio: "Runs the official college meme page. Converts daily struggles into viral reels. Once turned a coding error into a trending meme.",
    image: "",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "billu@funcollege.in",
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
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-card/30 flex justify-center">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
          <p className="text-muted-foreground">
            The dedicated professionals behind TECHNASIA&apos;25 working to create an exceptional event experience.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group overflow-hidden border border-transparent bg-card/70 backdrop-blur-sm hover:shadow-xl hover:border-primary transition-all duration-300 rounded-2xl">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
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
                       
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 text-center">
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
