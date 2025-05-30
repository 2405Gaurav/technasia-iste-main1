"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
    bio: "Built 57 microservices to serve Maggi in the hostel canteen. If it's not crashing, it's not deployed yet – his mantra for production readiness.",
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
    bio: "Believes in 'push to main' as a lifestyle. Famous for making buttons that look too good to click. Once made a portfolio site that only works in dark mode.",
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
  {
    name: "Rajesh the Rocket",
    role: "DevOps Destroyer",
    bio: "Deploys on Fridays just for the thrill. Once brought down production with a single semicolon. Claims it was 'feature testing'.",
    image: "",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "rajesh@funcollege.in",
    },
  },
  {
    name: "Priya the Prodigy",
    role: "AI Whisperer",
    bio: "Talks to neural networks in their sleep. Built a chatbot so smart it started giving her life advice. Currently in therapy with GPT-4.",
    image: "",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "priya@funcollege.in",
    },
  },
  {
    name: "Rohit the Rockstar",
    role: "Full Stack Phantom",
    bio: "Codes in 12 languages but still googles 'how to center a div'. Built an app so good that it got featured in his own portfolio. Debugging master by day, Stack Overflow hero by night.",
    image: "",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "rohit@funcollege.in",
    },
  },
];

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      y: 60, 
      opacity: 0, 
      scale: 0.8,
      rotateX: 25,
      rotateY: -15,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 120,
        damping: 15,
      },
    },
  };

  // Split members into two rows (4 each)
  const firstRow = teamMembers.slice(0, 4);
  const secondRow = teamMembers.slice(4, 8);

  return (
    <section className="py-20 flex justify-center relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-green-900/20 to-slate-900">
        {/* Floating 3D Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 border-2 border-green-400/30"
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
            rotateZ: [0, 180],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        />
        
        <motion.div
          className="absolute top-32 right-20 w-16 h-16 bg-green-400/10 rotate-45"
          animate={{
            rotateX: [0, 180, 360],
            rotateZ: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        />

        <motion.div
          className="absolute bottom-32 left-1/4 w-12 h-12 border border-green-300/40 rounded-full"
          animate={{
            rotateY: [0, 360],
            translateZ: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Animated Grid Background
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-12 h-full gap-1">
            {Array.from({ length: 144 }).map((_, i) => (
              <motion.div
                key={i}
                className="border border-green-400/20"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.02,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div> */}
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20, rotateX: 30 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2 
            className="text-3xl font-bold mb-4 text-green-400 drop-shadow-[0_0_6px_rgba(0,255,180,0.7)]"
            animate={{
              textShadow: [
                "0 0 6px rgba(0,255,180,0.7)",
                "0 0 20px rgba(0,255,180,0.9)",
                "0 0 6px rgba(0,255,180,0.7)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Meet the Team
          </motion.h2>
          <motion.p 
            className="text-green-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            The dedicated professionals behind TECHNASIA&apos;25 working to create an exceptional event experience.
          </motion.p>
        </motion.div>

        {/* First Row - 4 Members */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
        >
          {firstRow.map((member, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 8,
                rotateX: -5,
                z: 100,
                transition: { duration: 0.3 }
              }}
              className="group"
              style={{ 
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              <motion.div
                className="
                  relative overflow-hidden border border-green-500 bg-black/10
                  transition-all duration-500 rounded-2xl
                  group-hover:border-green-400
                "
                whileHover={{
                  boxShadow: [
                    "0 0 20px rgba(0,255,180,0.7)",
                    "0 0 40px rgba(0,255,180,0.9)",
                    "0 0 60px rgba(0,255,180,1)",
                    "0 0 40px rgba(0,255,180,0.9)",
                    "0 0 20px rgba(0,255,180,0.7)",
                  ],
                }}
                transition={{
                  boxShadow: { duration: 2, repeat: Infinity }
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative h-64 w-full overflow-hidden">
                  {member.image ? (
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      whileHover={{ 
                        scale: 1.15,
                        rotateZ: 2,
                      }}
                      transition={{ duration: 0.6 }}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full bg-green-900/20 text-green-400 text-2xl font-bold relative">
                      <motion.div
                        whileHover={{ 
                          scale: 1.3, 
                          rotateY: 180,
                          color: "#00ffb4"
                        }}
                        transition={{ 
                          duration: 0.6,
                          type: "spring",
                          stiffness: 200
                        }}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        {member.name.charAt(0)}
                      </motion.div>
                       <motion.div
                  className="absolute top-1/4 right-1/4 w-16 h-16 border border-green-400/40 rounded-full"
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.8, 0.2, 0.8],
                    rotateZ: [0, 180, 360]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.div
                    className="absolute inset-2 border border-green-300/60 rounded-full"
                    animate={{
                      scale: [1, 0.5, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
                
                      
                      {/* 3D Floating Elements */}
                      {/* <motion.div
                        className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full"
                        animate={{
                          translateZ: [0, 20, 0],
                          rotateY: [0, 360],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <motion.div
                        className="absolute bottom-4 left-4 w-2 h-2 bg-green-300 rounded-full"
                        animate={{
                          translateZ: [0, -15, 0],
                          rotateX: [0, 360],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      /> */}
                    </div>
                  )}
                  
                  {/* Enhanced Hover Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4"
                    initial={{ rotateX: 90 }}
                    whileHover={{ rotateX: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ transformOrigin: "bottom" }}
                  >
                    <div className="flex space-x-3">
                      <motion.a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 transition-colors p-2 rounded-full bg-green-600/20"
                        whileHover={{ 
                          scale: 1.3, 
                          rotateZ: 360,
                          backgroundColor: "rgba(34, 197, 94, 0.3)"
                        }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Linkedin className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href={`mailto:${member.social.email}`}
                        className="text-green-400 hover:text-green-300 transition-colors p-2 rounded-full bg-green-600/20"
                        whileHover={{ 
                          scale: 1.3, 
                          rotateZ: -360,
                          backgroundColor: "rgba(34, 197, 94, 0.3)"
                        }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Mail className="h-5 w-5" />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>

                <div className="p-6 text-center relative">
                  <motion.h3 
                    className="text-xl font-semibold mb-1 text-green-300 drop-shadow-[0_0_6px_rgba(0,255,180,0.7)]"
                    whileHover={{ 
                      scale: 1.1, 
                      rotateX: 10,
                      textShadow: "0 0 15px rgba(0,255,180,1)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {member.name}
                  </motion.h3>
                  <motion.p 
                    className="text-green-400 text-sm mb-3"
                    whileHover={{ 
                      scale: 1.05,
                      color: "#00ffb4"
                    }}
                  >
                    {member.role}
                  </motion.p>
                  <motion.p 
                    className="text-green-200 text-sm"
                    whileHover={{ 
                      scale: 1.02,
                      opacity: 0.9
                    }}
                  >
                    {member.bio}
                  </motion.p>
                </div>

                {/* 3D Glow Effect */}
                {/* <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-green-600 via-green-400 to-green-600 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10"
                  animate={{
                    rotateZ: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                /> */}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Second Row - 4 Members */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center"
        >
          {secondRow.map((member, index) => (
            <motion.div 
              key={index + 4} 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 8,
                rotateX: -5,
                z: 100,
                transition: { duration: 0.3 }
              }}
              className="group"
              style={{ 
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              <motion.div
                className="
                  relative overflow-hidden border border-green-500 bg-black/10
                  transition-all duration-500 rounded-2xl
                  group-hover:border-green-400
                "
                whileHover={{
                  boxShadow: [
                    "0 0 20px rgba(0,255,180,0.7)",
                    "0 0 40px rgba(0,255,180,0.9)",
                    "0 0 60px rgba(0,255,180,1)",
                    "0 0 40px rgba(0,255,180,0.9)",
                    "0 0 20px rgba(0,255,180,0.7)",
                  ],
                }}
                transition={{
                  boxShadow: { duration: 2, repeat: Infinity }
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative h-64 w-full overflow-hidden">
                  {member.image ? (
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      whileHover={{ 
                        scale: 1.15,
                        rotateZ: 2,
                      }}
                      transition={{ duration: 0.6 }}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full bg-green-900/20 text-green-400 text-2xl font-bold relative">
                      <motion.div
                        whileHover={{ 
                          scale: 1.3, 
                          rotateY: 180,
                          color: "#00ffb4"
                        }}
                        transition={{ 
                          duration: 0.6,
                          type: "spring",
                          stiffness: 200
                        }}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        {member.name.charAt(0)}
                      </motion.div>
                      
                      {/* 3D Floating Elements */}
                      <motion.div
                        className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full"
                        animate={{
                          translateZ: [0, 20, 0],
                          rotateY: [0, 360],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <motion.div
                        className="absolute bottom-4 left-4 w-2 h-2 bg-green-300 rounded-full"
                        animate={{
                          translateZ: [0, -15, 0],
                          rotateX: [0, 360],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </div>
                  )}
                  
                  {/* Enhanced Hover Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4"
                    initial={{ rotateX: 90 }}
                    whileHover={{ rotateX: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ transformOrigin: "bottom" }}
                  >
                    <div className="flex space-x-3">
                      <motion.a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 transition-colors p-2 rounded-full bg-green-600/20"
                        whileHover={{ 
                          scale: 1.3, 
                          rotateZ: 360,
                          backgroundColor: "rgba(34, 197, 94, 0.3)"
                        }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Linkedin className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href={`mailto:${member.social.email}`}
                        className="text-green-400 hover:text-green-300 transition-colors p-2 rounded-full bg-green-600/20"
                        whileHover={{ 
                          scale: 1.3, 
                          rotateZ: -360,
                          backgroundColor: "rgba(34, 197, 94, 0.3)"
                        }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Mail className="h-5 w-5" />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>

                <div className="p-6 text-center relative">
                  <motion.h3 
                    className="text-xl font-semibold mb-1 text-green-300 drop-shadow-[0_0_6px_rgba(0,255,180,0.7)]"
                    whileHover={{ 
                      scale: 1.1, 
                      rotateX: 10,
                      textShadow: "0 0 15px rgba(0,255,180,1)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {member.name}
                  </motion.h3>
                  <motion.p 
                    className="text-green-400 text-sm mb-3"
                    whileHover={{ 
                      scale: 1.05,
                      color: "#00ffb4"
                    }}
                  >
                    {member.role}
                  </motion.p>
                  <motion.p 
                    className="text-green-200 text-sm"
                    whileHover={{ 
                      scale: 1.02,
                      opacity: 0.9
                    }}
                  >
                    {member.bio}
                  </motion.p>
                </div>

                {/* 3D Glow Effect */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-green-600 via-green-400 to-green-600 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10"
                  animate={{
                    rotateZ: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}