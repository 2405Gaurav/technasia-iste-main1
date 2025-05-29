"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { title: "Home", href: "home" },
  { title: "About", href: "about" },
  { title: "Timeline", href: "timeline" },
  { title: "Sponsors", href: "sponsors" },
  { title: "Previous Events", href: "previous-events" },
  { title: "FAQs", href: "faqs" },
  { title: "Registration", href: "register", special: true },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        {/* Logo */}
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="flex items-center space-x-2 cursor-pointer select-none"
        >
          <motion.div
            initial={{ rotate: -10 }}
            animate={{ rotate: 10 }}
            transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
          >
            <img
              src="/logo/logo_technisia.svg"
              alt="Technisia Logo"
              className={cn(
                "block",
                isScrolled ? "h-6 w-6 md:h-8 md:w-8" : "h-8 w-8 md:h-10 md:w-10"
              )}
            />
          </motion.div>
          <span
            className={cn(
              "font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 select-none",
              isScrolled ? "text-lg md:text-xl" : "text-xl md:text-2xl"
            )}
          >
            TECHNISIA
          </span>
        </ScrollLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.href}
              to={link.href}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onSetActive={() => setActiveSection(link.href)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer select-none",
                link.special
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-blue-600/40"
                  : activeSection === link.href
                    ? "text-purple-400 bg-purple-950/30"
                    : "text-white/80 hover:text-white hover:bg-white/10"
              )}
            >
              {link.title}
            </ScrollLink>
          ))}
        </nav>

        {/* Desktop Button */}
        <Button
          asChild
          className="hidden md:flex bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
        >
          <a
            href="mailto:contact@example.com"
            className="cursor-pointer"
          >
            Contact Us
          </a>
        </Button>


        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black/95 border-white/10 w-72">
            <SheetHeader className="border-b border-white/20 pb-4">
              <SheetTitle className="text-purple-400 text-xl font-bold flex items-center gap-2">
                <img
                  src="/logo/logo_technisia.svg"
                  alt="Technisia Logo"
                  className="h-8 w-8"
                />
                Menu
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-3 mt-6">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.href}
                  to={link.href}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={cn(
                    "px-4 py-3 rounded-md text-sm font-medium cursor-pointer select-none transition-colors",
                    link.special
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.title}
                </ScrollLink>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
