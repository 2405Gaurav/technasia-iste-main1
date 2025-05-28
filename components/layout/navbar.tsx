"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "next-themes";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        isScrolled
          ? "bg-black/95 backdrop-blur-xl shadow-2xl border-b border-green-500/20 py-2"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-sm py-4"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="flex items-center gap-3 cursor-pointer select-none group"
        >
          <div className="relative">
            <img 
              src="/logo/logo_technisia.svg" 
              alt="Technisia Logo" 
              className={cn(
                "transition-all duration-300 filter drop-shadow-lg group-hover:drop-shadow-xl",
                isScrolled ? "h-12 w-12 sm:h-14 sm:w-14" : "h-16 w-16 sm:h-20 sm:w-20"
              )}
            />
            <div className="absolute inset-0 bg-green-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "text-green-400 font-black tracking-wider drop-shadow-lg transition-all duration-300 group-hover:text-green-300",
              isScrolled ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl"
            )}>
              {siteConfig.organisation}
            </span>
            <span className="text-xs text-gray-400 font-medium tracking-widest uppercase opacity-80">
              Tech Festival
            </span>
          </div>
        </ScrollLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
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
                "relative px-4 py-2 text-sm font-semibold transition-all duration-300 cursor-pointer rounded-lg group",
                link.special
                  ? "text-black bg-gradient-to-r from-green-400 to-green-500 hover:from-green-300 hover:to-green-400 shadow-lg hover:shadow-green-500/25 transform hover:scale-105"
                  : activeSection === link.href
                  ? "text-green-400"
                  : "text-gray-300 hover:text-white"
              )}
            >
              {link.title}
              {!link.special && (
                <span className={cn(
                  "absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-green-400 to-green-500 transition-all duration-300",
                  activeSection === link.href ? "w-full" : "w-0 group-hover:w-full"
                )} />
              )}
            </ScrollLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="block lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                aria-label="Menu" 
                className="p-2 text-gray-300 hover:text-green-400 hover:bg-green-500/10 transition-all duration-300 rounded-lg border border-transparent hover:border-green-500/30"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-black/95 backdrop-blur-xl border-l border-green-500/30 w-80">
              <SheetHeader className="border-b border-green-500/20 pb-4">
                <SheetTitle className="text-green-400 text-xl font-bold flex items-center gap-2">
                  <img 
                    src="/logo/logo_technisia.svg" 
                    alt="Technisia Logo" 
                    className="h-8 w-8"
                  />
                  Menu
                </SheetTitle>
              </SheetHeader>
              
              {/* Mobile Navigation */}
              <nav className="flex flex-col gap-2 mt-8">
                {navLinks.map((link, index) => (
                  <ScrollLink
                    key={link.href}
                    to={link.href}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className={cn(
                      "flex items-center px-4 py-3 text-sm font-medium transition-all duration-300 cursor-pointer rounded-lg group relative overflow-hidden",
                      link.special
                        ? "text-black bg-gradient-to-r from-green-400 to-green-500 hover:from-green-300 hover:to-green-400 shadow-lg"
                        : "text-gray-300 hover:text-white hover:bg-green-500/10 border border-transparent hover:border-green-500/30"
                    )}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="relative z-10">{link.title}</span>
                    {!link.special && (
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/5 to-green-500/0 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                    )}
                  </ScrollLink>
                ))}
              </nav>

              {/* Mobile Footer */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-center text-xs text-gray-500 border-t border-green-500/20 pt-4">
                  © 2024 {siteConfig.organisation}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}