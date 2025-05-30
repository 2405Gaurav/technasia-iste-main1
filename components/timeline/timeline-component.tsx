"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Calendar, Users, Trophy, Clock, Star } from "lucide-react";

// Mock competitions data - replace with your actual data
const competitions = [
  {
    id: 1,
    title: "AI Innovation Challenge",
    description: "Showcase your artificial intelligence prowess in this cutting-edge competition where innovation meets technology.",
    date: "March 15, 2025",
    time: "09:00 AM - 06:00 PM",
    location: "Main Auditorium, Tech Block",
    participants: "150+ Teams",
    prize: "₹50,000",
    difficulty: "Advanced",
    category: "Technology",
    highlights: ["Machine Learning Models", "Neural Networks", "Real-world Problem Solving", "Industry Mentorship"],
    image: ""  
  },
  {
    id: 2,
    title: "CodeFest Marathon",
    description: "The ultimate coding showdown where algorithms dance and logic reigns supreme. Test your programming skills against the best.",
    date: "March 16, 2025",
    time: "10:00 AM - 08:00 PM",
    location: "Computer Lab Complex",
    participants: "200+ Coders",
    prize: "₹30,000",
    difficulty: "Intermediate",
    category: "Programming",
    highlights: ["Data Structures", "Algorithm Optimization", "Competitive Programming", "Live Coding Sessions"],
    image: "/api/placeholder/600/400"
  },
  {
    id: 3,
    title: "RoboWars Championship",
    description: "Enter the arena where metal meets mayhem! Design, build, and battle your way to robotic supremacy in this thrilling competition.",
    date: "March 17, 2025",
    time: "11:00 AM - 07:00 PM",
    location: "Engineering Workshop Arena",
    participants: "80+ Robots",
    prize: "₹75,000",
    difficulty: "Expert",
    category: "Robotics",
    highlights: ["Combat Robotics", "Mechanical Design", "Strategic Warfare", "Live Battle Arena"],
    image: "/api/placeholder/600/400"
  },
  {
    id: 4,
    title: "Web Dev Wizardry",
    description: "Craft digital masterpieces and weave web magic in this comprehensive full-stack development competition.",
    date: "March 18, 2025",
    time: "09:30 AM - 05:30 PM",
    location: "Digital Innovation Center",
    participants: "120+ Developers",
    prize: "₹40,000",
    difficulty: "Intermediate",
    category: "Web Development",
    highlights: ["Frontend Frameworks", "Backend Architecture", "Database Design", "UI/UX Excellence"],
    image: "/api/placeholder/600/400"
  }
];
interface FlyingSpaceshipProps {
  right?: string;
  left?: string;
  top?: string;
  duration?: number;
  color?: "green" | "blue" | "purple";
  direction?: "leftToRight" | "rightToLeft";
}

export  function FlyingSpaceship({
  top = "top-[30%]",
  left = "left-[10%]",
  duration = 20,
  color = "green",
  direction = "leftToRight"
}: FlyingSpaceshipProps) {
  const colors = {
    green: {
      body: "from-green-400 via-green-500 to-green-600",
      inner: "from-green-300 to-green-400",
      wing: "bg-green-500",
      cockpit: "from-cyan-300 to-blue-400",
      trail: "from-green-400 via-green-300"
    },
    blue: {
      body: "from-blue-400 via-blue-500 to-blue-600",
      inner: "from-blue-300 to-blue-400",
      wing: "bg-blue-500",
      cockpit: "from-teal-300 to-blue-300",
      trail: "from-blue-400 via-blue-300"
    },
    purple: {
      body: "from-purple-400 via-purple-500 to-purple-600",
      inner: "from-purple-300 to-purple-400",
      wing: "bg-purple-500",
      cockpit: "from-pink-300 to-purple-400",
      trail: "from-purple-400 via-purple-300"
    }
  };

  const c = colors[color];
  const isLeftToRight = direction === "leftToRight";

  return (
    <motion.div
      className={`absolute ${top} ${left} w-32 h-20 pointer-events-none z-30`}
      initial={{ x: isLeftToRight ? -200 : 200 }}
      animate={{ x: isLeftToRight ? "100vw" : "-100vw" }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div
        className="relative w-24 h-12"
        animate={{
          rotateX: [0, 10, -5, 0],
          scale: [1, 1.1, 0.95, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Main Body */}
        <div className={`absolute inset-0 bg-gradient-to-r ${c.body} rounded-full shadow-lg transform rotate-12`}>
          <div className={`absolute inset-2 bg-gradient-to-r ${c.inner} rounded-full opacity-60`} />
        </div>

        {/* Wings */}
        <div className={`absolute -left-3 top-1/2 w-8 h-3 ${c.wing} transform -translate-y-1/2 rotate-45 rounded-full shadow-md`} />
        <div className={`absolute -right-3 top-1/2 w-8 h-3 ${c.wing} transform -translate-y-1/2 -rotate-45 rounded-full shadow-md`} />

        {/* Cockpit */}
        <div className={`absolute top-1 left-1/2 w-4 h-4 bg-gradient-to-br ${c.cockpit} rounded-full transform -translate-x-1/2 shadow-inner`}>
          <motion.div
            className="absolute inset-1 bg-white rounded-full opacity-80"
            animate={{ opacity: [0.8, 0.4, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        {/* Engine Glow */}
        <motion.div
          className="absolute -right-8 top-1/2 w-12 h-2 bg-gradient-to-r from-orange-400 via-yellow-300 to-transparent rounded-full transform -translate-y-1/2"
          animate={{
            scaleX: [1, 1.5, 0.8, 1.2, 1],
            opacity: [0.8, 1, 0.6, 0.9, 0.8]
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Particle Trail */}
        <motion.div
          className={`absolute -right-16 top-1/2 w-20 h-1 bg-gradient-to-r ${c.trail} to-transparent rounded-full transform -translate-y-1/2 opacity-60`}
          animate={{
            scaleX: [1, 1.3, 0.7, 1],
            opacity: [0.6, 0.8, 0.3, 0.6]
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  );
}
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 24 * 60 * 60));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <motion.div 
      className="text-center text-green-400 font-mono text-3xl font-bold mb-12 relative"
      animate={{
        textShadow: ["0 0 10px rgba(34,197,94,0.8)", "0 0 20px rgba(34,197,94,1)", "0 0 10px rgba(34,197,94,0.8)"]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="flex justify-center space-x-4">
        <motion.div 
          className="bg-green-900/30 px-4 py-2 rounded-lg border border-green-500/50"
          whileHover={{ scale: 1.1, rotateY: 15 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {hours.toString().padStart(2, "0")}
          <div className="text-xs text-green-300">HOURS</div>
        </motion.div>
        <motion.div 
          className="bg-green-900/30 px-4 py-2 rounded-lg border border-green-500/50"
          whileHover={{ scale: 1.1, rotateY: 15 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {minutes.toString().padStart(2, "0")}
          <div className="text-xs text-green-300">MINS</div>
        </motion.div>
        <motion.div 
          className="bg-green-900/30 px-4 py-2 rounded-lg border border-green-500/50"
          whileHover={{ scale: 1.1, rotateY: 15 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {seconds.toString().padStart(2, "0")}
          <div className="text-xs text-green-300">SECS</div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function TimelineComponent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { 
      y: 100, 
      opacity: 0,
      scale: 0.8,
      rotateX: 25
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      },
    },
  };

  return (
    <section className="py-20 text-white w-full relative overflow-hidden">
      {/* Flying Spaceship */}
       <FlyingSpaceship top="top-[10%]" left="left-[5%]" duration={18} color="green" direction="leftToRight" />
  <FlyingSpaceship top="top-[35%]" left="left-[90%]" duration={22} color="blue" direction="rightToLeft" />
  <FlyingSpaceship top="top-[50%]" left="left-[30%]" duration={15} color="purple" direction="leftToRight" />
      
      {/* Enhanced 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating 3D Cubes */}
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 border-2 border-green-400/30"
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
            rotateZ: [0, 180],
            translateY: [-10, 10, -10]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformStyle: "preserve-3d" }}
        />
        
        <motion.div
          className="absolute top-1/3 right-16 w-12 h-12 bg-green-500/20 rounded-full"
          animate={{
            rotateY: [0, 360],
            translateZ: [0, 30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-32 left-1/4 w-20 h-20 border border-green-300/40 rotate-45"
          animate={{
            rotateZ: [45, 405],
            rotateX: [0, 180, 360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        

        {/* Animated Grid Particles */}
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-green-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.1, 0.8, 0.1],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-[75rem] mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 50, rotateX: 30 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h1 
            className="text-5xl lg:text-6xl font-bold mb-6 text-green-400"
            animate={{
              textShadow: [
                "0 0 10px rgba(34,197,94,0.8)",
                "0 0 30px rgba(34,197,94,1)",
                "0 0 10px rgba(34,197,94,0.8)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Event Schedule
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Mark your calendar for these exciting competitions at TECHNASIA&apos;25. 
            Join us for an unforgettable journey through innovation, technology, and excellence.
          </motion.p>
          <CountdownTimer />
        </motion.div>
<FlyingSpaceship />
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative space-y-32"
        >
          {/* Enhanced Timeline line with 3D effect */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-green-400 via-green-500 to-green-600 rounded-full"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{
              boxShadow: "0 0 20px rgba(34,197,94,0.6), inset 0 0 10px rgba(0,0,0,0.3)"
            }}
          />

          {competitions.map((comp, index) => (
            <motion.div
              key={comp.id}
              variants={itemVariants}
              className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Enhanced Timeline dot with 3D effect */}
              <motion.div 
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                whileHover={{ 
                  scale: 1.5,
                  rotateZ: 360,
                  transition: { duration: 0.6 }
                }}
              >
                <motion.div 
                  className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-4 border-white shadow-lg relative"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(34,197,94,0.8)",
                      "0 0 40px rgba(34,197,94,1)",
                      "0 0 20px rgba(34,197,94,0.8)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="absolute inset-2 bg-white rounded-full animate-pulse" />
                </motion.div>
              </motion.div>

              {/* Enhanced Text Section */}
              <motion.div 
                className={`${index % 2 === 1 ? "lg:order-2" : "lg:order-1"} px-4 relative`}
                whileHover={{ 
                  x: index % 2 === 1 ? -10 : 10,
                  transition: { duration: 0.3 }
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* 3D Floating Badge */}
                <motion.div 
                  className="mb-6 inline-block"
                  whileHover={{ 
                    rotateY: 15,
                    rotateX: 10,
                    scale: 1.05
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="bg-green-600/80 text-white px-4 py-2 rounded-full border border-green-400/50 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: [-100, 200] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="relative flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span className="font-semibold">{comp.date}</span>
                    </div>
                  </div>
                </motion.div>

                <motion.h2 
                  className="text-4xl font-bold mb-4 text-green-400"
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: "0 0 20px rgba(34,197,94,1)",
                    transition: { duration: 0.3 }
                  }}
                >
                  {comp.title}
                </motion.h2>
                
                <motion.p 
                  className="text-lg text-gray-300 mb-6 leading-relaxed"
                  whileHover={{ color: "#d1d5db" }}
                >
                  {comp.description}
                </motion.p>

                {/* Enhanced Info Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <motion.div 
                    className="flex items-center text-green-300 bg-green-900/20 p-3 rounded-lg border border-green-500/30"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(34, 197, 94, 0.1)",
                      rotateY: 5
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <Clock className="h-5 w-5 mr-2" />
                    <div>
                      <div className="text-xs text-gray-400">Time</div>
                      <div className="font-semibold">{comp.time}</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center text-green-300 bg-green-900/20 p-3 rounded-lg border border-green-500/30"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(34, 197, 94, 0.1)",
                      rotateY: -5
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <Users className="h-5 w-5 mr-2" />
                    <div>
                      <div className="text-xs text-gray-400">Participants</div>
                      <div className="font-semibold">{comp.participants}</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center text-green-300 bg-green-900/20 p-3 rounded-lg border border-green-500/30"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(34, 197, 94, 0.1)",
                      rotateY: 5
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <Trophy className="h-5 w-5 mr-2" />
                    <div>
                      <div className="text-xs text-gray-400">Prize Pool</div>
                      <div className="font-semibold">{comp.prize}</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center text-green-300 bg-green-900/20 p-3 rounded-lg border border-green-500/30"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(34, 197, 94, 0.1)",
                      rotateY: -5
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <Star className="h-5 w-5 mr-2" />
                    <div>
                      <div className="text-xs text-gray-400">Difficulty</div>
                      <div className="font-semibold">{comp.difficulty}</div>
                    </div>
                  </motion.div>
                </div>

                <motion.div 
                  className="flex items-center text-green-300 mb-6 bg-green-900/20 p-3 rounded-lg border border-green-500/30"
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: "rgba(34, 197, 94, 0.1)"
                  }}
                >
                  <MapPin className="h-5 w-5 mr-2" />
                  <div>
                    <div className="text-xs text-gray-400">Location</div>
                    <div className="font-semibold">{comp.location}</div>
                  </div>
                </motion.div>

                {/* Highlights Section */}
                <div className="mb-8">
                  <h4 className="text-green-400 font-semibold mb-3">Key Highlights:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {comp.highlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        className="text-sm text-gray-300 bg-green-900/10 px-3 py-2 rounded-full border border-green-500/20"
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: "rgba(34, 197, 94, 0.15)",
                          color: "#bbf7d0"
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        • {highlight}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.button
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 px-8 rounded-lg transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative font-semibold">View Details & Register</span>
                </motion.button>
              </motion.div>

              {/* Enhanced Image Section with Increased Height and 3D Objects */}
              <motion.div
                className={`relative w-full h-[650px] rounded-2xl overflow-hidden shadow-2xl border-2 border-green-500/50 ${
                  index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: index % 2 === 1 ? -8 : 8,
                  rotateX: -5,
                  boxShadow: "0 25px 50px rgba(34, 197, 94, 0.4)",
                  transition: { duration: 0.4 }
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="w-full h-full bg-gradient-to-br from-green-900/20 to-black/40 flex items-center justify-center relative">
                  <motion.div
                    className="text-8xl font-bold text-green-400/50"
                    whileHover={{ 
                      scale: 1.2,
                      rotateZ: 10,
                      color: "rgba(34, 197, 94, 0.8)"
                    }}
                  >
                    {comp.title.charAt(0)}
                  </motion.div>
                  
                  {/* 3D Floating Objects */}
                  <motion.div
                    className="absolute top-16 left-12 w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-lg"
                    animate={{
                      rotateX: [0, 360],
                      rotateY: [0, 180],
                      translateZ: [0, 30, 0],
                      translateY: [-10, 10, -10]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  />
                  
                  <motion.div
                    className="absolute bottom-20 right-16 w-16 h-16 border-4 border-green-400/60 rounded-full"
                    animate={{
                      rotateZ: [0, 360],
                      scale: [1, 1.3, 1],
                      translateZ: [0, -20, 0]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="absolute inset-4 bg-green-400/40 rounded-full" />
                  </motion.div>
                  
                  <motion.div
                    className="absolute top-1/3 right-8 w-8 h-20 bg-gradient-to-t from-green-500 to-green-300 rounded-full"
                    animate={{
                      rotateX: [0, 180, 360],
                      translateX: [-5, 5, -5],
                      translateZ: [0, 25, 0]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  />
                  
                  <motion.div
                    className="absolute bottom-1/3 left-8 w-10 h-10 bg-green-400/30 transform rotate-45"
                    animate={{
                      rotateZ: [45, 405],
                      rotateY: [0, 180],
                      translateZ: [0, 15, 0]
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  />
                  
                  {/* Orbiting Spheres */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-32 h-32 transform -translate-x-1/2 -translate-y-1/2"
                    animate={{ rotateZ: [0, 360] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  >
                    <motion.div
                      className="absolute -top-2 left-1/2 w-4 h-4 bg-green-400 rounded-full transform -translate-x-1/2"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute -bottom-2 left-1/2 w-3 h-3 bg-green-300 rounded-full transform -translate-x-1/2"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute top-1/2 -left-2 w-3 h-3 bg-green-500 rounded-full transform -translate-y-1/2"
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{ duration: 1.8, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute top-1/2 -right-2 w-3 h-3 bg-green-200 rounded-full transform -translate-y-1/2"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 0.9, 0.4]
                      }}
                      transition={{ duration: 2.2, repeat: Infinity }}
                    />
                  </motion.div>
                </div>
                
                {/* 3D Overlay Effects */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ rotateX: 90 }}
                  whileHover={{ rotateX: 0 }}
                  style={{ transformOrigin: "bottom", transformStyle: "preserve-3d" }}
                />

                {/* More Floating 3D Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-4 h-4 bg-green-400 rounded-full"
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
                  className="absolute bottom-4 left-4 w-3 h-3 bg-green-300 rounded-full"
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
                
                {/* Additional 3D Geometric Shapes */}
                <motion.div
                  className="absolute top-8 left-1/3 w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 transform rotate-45"
                  animate={{
                    rotateZ: [45, 405],
                    rotateX: [0, 180],
                    translateZ: [0, 20, -10, 0],
                    scale: [1, 1.2, 0.8, 1]
                  }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                />
                
                <motion.div
                  className="absolute bottom-12 right-1/3 w-8 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
                  animate={{
                    rotateY: [0, 360],
                    translateY: [-5, 5, -5],
                    translateZ: [0, 15, 0],
                    scaleX: [1, 1.5, 1]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                />
                
                {/* Hexagonal 3D Shape */}
                <motion.div
                  className="absolute top-1/2 left-8 w-10 h-10 border-2 border-yellow-400/60"
                  style={{
                    clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)"
                  }}
                  animate={{
                    rotateZ: [0, 360],
                    rotateY: [0, 180, 360],
                    translateZ: [0, 25, 0],
                    scale: [1, 1.3, 1]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                
                {/* Pulsing Energy Rings */}
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
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}