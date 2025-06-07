import { picture } from "framer-motion/client";

export const siteConfig = {
  name: "TECHNASIA'25",
  organisation:"ISTE    ",
  logo:"/logo/logotechnisia.svg",
  
  description: "The biggest tech fest of Asia - Where Innovation Meets Opportunity",
  date: "SEPT 13-16, 2025",
  venue: "CHANDIGARH UNIVERSITY,MOHALI",
  email: "gauravthakur83551@gmial.com",
  phone: "6284001268",
  links: {
    twitter: "https://twitter.com/technasia",
    github: "https://github.com/technasia",
    instagram: "https://instagram.com/technasia",
    linkedin: "https://linkedin.com/company/technasia",
  },
};

export const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Timeline",
    href: "/timeline",
  },
  {
    title: "Competitions",
    href: "/competitions",
  },
  {
    title: "Sponsors",
    href: "/sponsors",
  },
  {
    title: "Registration",
    href: "/register",
  },
  {
    title: "Previous Events",
    href: "/previous-events",
  },
  {
    title: "FAQs",
    href: "/faqs",
  },
];

export const competitions = [
  {
    id: "CUMUN",
    title: "CU-MUN",
    description:
      "A 24-hour coding marathon where teams build innovative solutions to real-world problems.",
    longDescription:
      "Join us for an exhilarating 24-hour coding marathon where teams of up to 4 members collaborate to create groundbreaking solutions to real-world challenges. Participants will have access to mentors, workshops, and resources to bring their ideas to life. This is your chance to showcase your technical skills, creativity, and problem-solving abilities while competing for substantial prizes.",
    image: "/competition/mun.png",
    prize: "$5,000",
    date: "March 15-16, 2025",
    location: "Main Campus",
    registrationDeadline: "March 1, 2025",
    teamSize: "2-4 members",
    allowsTeam: true,
    requirements: [
      "Laptop with necessary development tools",
      "Student ID or professional ID",
      "Preliminary project idea",
    ],
    judges: [
      "Dr. Emily Chen - AI Research Lead",
      "Mark Johnson - Senior Software Architect",
      "Priya Sharma - Tech Entrepreneur",
    ],
  },
  {
    id: "GAMING",
    title: "GAME-X",
    description:
      "Test your problem-solving skills in this competitive programming challenge.",
    longDescription:
      "Challenge yourself in this intense competitive programming contest designed to test your algorithmic thinking and coding efficiency. Participants will face a series of increasingly difficult problems that must be solved under time constraints. The contest will cover data structures, algorithms, and mathematical concepts, providing a platform for coders to demonstrate their technical prowess.",
    image: "/competition/1.png",
    prize: "$2,500",
    date: "March 14, 2025",
    location: "Tech Building",
    registrationDeadline: "March 1, 2025",
    teamSize: "Individual",
    allowsTeam: false,
    requirements: [
      "Proficiency in at least one programming language",
      "Laptop with development environment",
      "Student ID or professional ID",
    ],
    judges: [
      "Prof. James Wilson - Computer Science Department",
      "Aisha Khan - Competitive Programming Champion",
      "David Lee - Software Engineer at Google",
    ],
  },
  {
    id: "ROBO",
    title: "ROBO WAR",
    description:
      "Design intuitive and beautiful interfaces for next-generation applications.",
    longDescription:
      "Unleash your creativity in our UI/UX Challenge where participants design user-centered interfaces for real-world applications. You'll be given a design brief for a product or service, and your task will be to create an intuitive, accessible, and visually appealing user experience. This contest highlights the importance of design thinking and user research in creating digital products that truly meet user needs.",
    image: "/competition/4.png",
    prize: "$3,000",
    date: "March 14, 2025",
    location: "Design Lab",
    registrationDeadline: "March 1, 2025",
    teamSize: "1-2 members",
    allowsTeam: true,
    requirements: [
      "Design software (Figma, Adobe XD, or similar)",
      "Portfolio of previous work (optional)",
      "Laptop with necessary design tools",
    ],
    judges: [
      "Sarah Williams - UX Director at Apple",
      "Raj Patel - Product Design Lead",
      "Nina Rodriguez - Design Researcher",
    ],
  },
  {
    id: "show",
    title: "TECH ROAST SHOW",
    description:
      "Demonstrate innovative applications of artificial intelligence and machine learning.",
    longDescription:
      "The AI/ML Showcase invites participants to present cutting-edge applications of artificial intelligence and machine learning technologies. Whether it's a novel algorithm, an innovative use case, or an improvement to existing methods, this competition is your platform to demonstrate how AI can solve complex problems and create value. Projects will be evaluated based on innovation, technical implementation, practical applicability, and potential impact.",
    image: "/competition/5.png",
    prize: "$4,000",
    date: "March 15, 2025",
    location: "Innovation Center",
    registrationDeadline: "March 1, 2025",
    teamSize: "1-3 members",
    allowsTeam: true,
    requirements: [
      "Project demonstration materials",
      "Documentation of methodology",
      "Data sources and processing explanation",
    ],
    judges: [
      "Dr. Michael Chang - AI Research Scientist",
      "Leila Ahmadi - ML Engineering Director",
      "Tom Richards - Data Science Lead",
    ],
  },
  {
    id: "cft",
    title: "CAPTURE THE FLAG",
    description:
      "Present your startup idea to a panel of investors and industry experts.",
    longDescription:
      "The Startup Pitch competition offers aspiring entrepreneurs the chance to present their business ideas to a panel of investors and industry experts. Participants will deliver a compelling pitch that covers their product, market opportunity, business model, and growth strategy. This is not just a competition but a platform to gain valuable feedback, networking opportunities, and potential investment for your venture.",
    image: "/competition/6.png",
    prize: "$10,000 Investment Opportunity",
    date: "March 16, 2025",
    location: "Business Center",
    registrationDeadline: "February 28, 2025",
    teamSize: "1-4 members",
    allowsTeam: true,
    requirements: [
      "Business plan or pitch deck",
      "Prototype or MVP (if available)",
      "Market research data",
    ],
    judges: [
      "Alexandra Chen - Venture Capitalist",
      "Robert Kim - Successful Tech Entrepreneur",
      "Jessica Moore - Angel Investor",
    ],
  },
];

export const sponsors = [
  {
    name: "TechCorp",
    logo: "https://images.pexels.com/photos/5717479/pexels-photo-5717479.jpeg",
    tier: "platinum",
    website: "https://techcorp.example.com",
  },
  {
    name: "InnovateX",
    logo: "https://images.pexels.com/photos/5849592/pexels-photo-5849592.jpeg",
    tier: "platinum",
    website: "https://innovatex.example.com",
  },
  {
    name: "FutureTech",
    logo: "https://images.pexels.com/photos/6266966/pexels-photo-6266966.jpeg",
    tier: "gold",
    website: "https://futuretech.example.com",
  },
  {
    name: "DigitalWave",
    logo: "https://images.pexels.com/photos/5717410/pexels-photo-5717410.jpeg",
    tier: "gold",
    website: "https://digitalwave.example.com",
  },
  {
    name: "CloudNine",
    logo: "https://images.pexels.com/photos/5717416/pexels-photo-5717416.jpeg",
    tier: "silver",
    website: "https://cloudnine.example.com",
  },
  {
    name: "CodeMasters",
    logo: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg",
    tier: "silver",
    website: "https://codemasters.example.com",
  },
  {
    name: "DevHub",
    logo: "https://images.pexels.com/photos/5849544/pexels-photo-5849544.jpeg",
    tier: "bronze",
    website: "https://devhub.example.com",
  },
  {
    name: "TechStart",
    logo: "https://images.pexels.com/photos/5849551/pexels-photo-5849551.jpeg",
    tier: "bronze",
    website: "https://techstart.example.com",
  },
];

export const timelineEvents = [
  {
    date: "March 13, 2025",
    events: [
      {
        time: "09:00 AM - 10:30 AM",
        title: "Opening Ceremony",
        description: "Official inauguration with keynote speeches from industry leaders",
        location: "Main Auditorium"
      },
      {
        time: "11:00 AM - 05:00 PM",
        title: "Workshop Series",
        description: "Specialized workshops on AI, Blockchain, and Cloud Computing",
        location: "Workshop Halls"
      }
    ]
  },
  {
    date: "March 14, 2025",
    events: [
      {
        time: "09:00 AM - 06:00 PM",
        title: "Coding Contest",
        description: "Individual programming challenge with algorithmic problems",
        location: "Tech Building"
      },
      {
        time: "10:00 AM - 08:00 PM",
        title: "UI/UX Challenge",
        description: "Design competition for creating innovative user interfaces",
        location: "Design Lab"
      }
    ]
  },
  {
    date: "March 15, 2025",
    events: [
      {
        time: "08:00 AM - Next Day",
        title: "24-Hour Hackathon",
        description: "Team-based hackathon to build innovative solutions",
        location: "Main Campus"
      },
      {
        time: "10:00 AM - 06:00 PM",
        title: "AI/ML Showcase",
        description: "Exhibition of artificial intelligence projects",
        location: "Innovation Center"
      }
    ]
  },
  {
    date: "March 16, 2025",
    events: [
      {
        time: "09:00 AM - 04:00 PM",
        title: "Startup Pitch Competition",
        description: "Pitch your startup idea to investors and experts",
        location: "Business Center"
      },
      {
        time: "05:00 PM - 07:00 PM",
        title: "Closing Ceremony & Awards",
        description: "Prize distribution and celebration of achievements",
        location: "Main Auditorium"
      }
    ]
  }
];

export const previousEvents = [
  {
    year: "2024",
    image: "/previous_events/1.jpg",
    title: "CU-MUN ",
    description: "An annual technology festival showcasing the latest innovations and projects by students and professionals.",
    location: "Chandigarh University Campus",
    date: "March 15-17, 2024"
  },
  {
    year: "2024",
    image: "/previous_events/2.jpg",
    title: "Mind Spirint",
    description: "A gathering of industry leaders, startups, and enthusiasts to discuss emerging trends and groundbreaking ideas.",
    location: "Chandigarh University Campus",
    date: "November 10, 2023"
  },
  {
    year: "2024",
    image: "/previous_events/3.jpg",
    title: "Threejs Workshop",
    description: "Exploring advancements in artificial intelligence, machine learning, and their impact on various industries.",
    location: "Online Virtual Event",
    date: "September 20-22, 2023"
  },
  {
    year: "2023",
    image: "/previous_events/4.jpg",
    title: "Robotics Workshop",
    description: "Hands-on sessions teaching robotics fundamentals, programming, and building autonomous robots.",
    location: "TechLab, Chandigarh",
    date: "July 5-7, 2023"
  },
  {
    year: "2023",
    image: "/previous_events/5.jpg",
    title: "Cybersecurity Talk",
    description: "Expert talks and panel discussions focusing on current cybersecurity threats and best defense practices.",
    location: "Cyber Tower, New Delhi",
    date: "May 18, 2023"
  },
  {
    year: "2023",
    image: "/previous_events/6.jpg",
    title: "Blockchain Bootcamp",
    description: "An intensive bootcamp covering blockchain technology, smart contracts, and decentralized apps development.",
    location: "Innovation Hub, Mumbai",
    date: "April 12-15, 2023"
  },
  {
    year: "2023",
    image: "/previous_events/7.jpg",
    title: "IoT Expo",
    description: "Exhibition and talks on Internet of Things devices, applications, and future prospects.",
    location: "Expo Center, Bangalore",
    date: "February 22-24, 2023"
  },
  {
    year: "2022",
    image: "/previous_events/8.jpg",
    title: "Data Science Meetup",
    description: "Community meetup for data scientists to network, share knowledge, and discuss recent data science trends.",
    location: "Tech Park Auditorium, Pune",
    date: "December 10, 2022"
  },
  {
    year: "2022",
    image: "/previous_events/9.jpg",
    title: "Data Science Meetup",
    description: "Community meetup for data scientists to network, share knowledge, and discuss recent data science trends.",
    location: "Tech Park Auditorium, Pune",
    date: "December 10, 2022"
  },
  {
    year: "2022",
    image: "/previous_events/10.jpg",
    title: "Data Science Meetup",
    description: "Community meetup for data scientists to network, share knowledge, and discuss recent data science trends.",
    location: "Tech Park Auditorium, Pune",
    date: "December 10, 2022"
  },
  {
    year: "2022",
    image: "/previous_events/11.jpg",
    title: "Data Science Meetup",
    description: "Community meetup for data scientists to network, share knowledge, and discuss recent data science trends.",
    location: "Tech Park Auditorium, Pune",
    date: "December 10, 2022"
  },
  {
    year: "2022",
    image: "/previous_events/12.jpg",
    title: "Data Science Meetup",
    description: "Community meetup for data scientists to network, share knowledge, and discuss recent data science trends.",
    location: "Tech Park Auditorium, Pune",
    date: "December 10, 2022"
  },
  {
    year: "2022",
    image: "/previous_events/13.jpg",
    title: "Data Science Meetup",
    description: "Community meetup for data scientists to network, share knowledge, and discuss recent data science trends.",
    location: "Tech Park Auditorium, Pune",
    date: "December 10, 2022"
  },

];





export const faqs = [
  {
    question: "When and where is TECHNASIA'25 taking place?",
    answer: "TECHNASIA'25 will be held from March 13-16, 2025, at the Tech Innovation Center in Asia. The venue is equipped with state-of-the-art facilities to ensure all participants have an exceptional experience.",
  },
  {
    question: "How can I register for the event?",
    answer: "Registration can be completed online through our registration page. Simply fill out the form with your details and select the competitions or workshops you wish to participate in. Early bird registration is available until January 31, 2025.",
  },
  {
    question: "Is there a registration fee?",
    answer: "General admission to TECHNASIA'25 is free, but some competitions and workshops may have a nominal fee. Early bird registrants receive discounted rates. Please check the specific competition or workshop page for fee details.",
  },
  {
    question: "Can international students participate?",
    answer: "Absolutely! TECHNASIA'25 welcomes participants from around the world. International participants may need to arrange their own travel and accommodation, but we offer guidance and may provide special rates with partner hotels.",
  },
  {
    question: "What should I bring to the event?",
    answer: "Participants should bring their own laptops, chargers, and any specific equipment required for their competitions. A valid ID is required for entry. For hackathon participants, we recommend bringing sleeping bags or personal comfort items for the overnight session.",
  },
  {
    question: "Will accommodation be provided?",
    answer: "We do not provide accommodation as part of the registration, but we have partnered with several nearby hotels to offer discounted rates for participants. Information about these hotels will be shared after registration.",
  },
  {
    question: "How are the competitions judged?",
    answer: "Each competition has a panel of judges comprised of industry experts, academics, and professionals. Judging criteria vary by competition but generally include innovation, technical implementation, presentation, and practical application. Detailed criteria will be provided to all participants.",
  },
  {
    question: "Is there Wi-Fi available at the venue?",
    answer: "Yes, high-speed Wi-Fi will be available throughout the venue for all participants. The network details will be provided during check-in.",
  },
  {
    question: "Can I participate in multiple competitions?",
    answer: "Yes, you can register for multiple competitions as long as their schedules do not conflict. We recommend checking the event timeline carefully before registering for multiple events.",
  },
  {
    question: "Are there food options available at the venue?",
    answer: "Yes, food courts and cafes will be operating throughout the event. Participants in full-day competitions like the Hackathon will be provided with meals as part of their registration.",
  },
];