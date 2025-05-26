"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "next-themes";
import { Menu } from "lucide-react";
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
  { title: "Competitions", href: "competitions" },
  { title: "Sponsors", href: "sponsors" },
  { title: "Previous Events", href: "previous-events" },
  { title: "FAQs", href: "faqs" },
  { title: "Registration", href: "register", special: true },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-filter",
        isScrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="flex items-center gap-2 cursor-pointer select-none"
        >
          <span className="text-green-500 font-extrabold text-3xl sm:text-4xl tracking-wide drop-shadow-md">
            {siteConfig.organisation}
          </span>
          <span className="text-white font-extrabold text-3xl sm:text-4xl tracking-wide drop-shadow-md">
            {siteConfig.name}
          </span>
        </ScrollLink>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.href}
              to={link.href}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={cn(
                "text-sm font-medium transition-colors hover:text-green-500 cursor-pointer",
                link.special
                  ? "text-green-500"
                  : "text-gray-300"
              )}
            >
              {link.title}
            </ScrollLink>
          ))}
        </nav>

        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu" className="p-2 text-gray-300 hover:text-green-500">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-black border-l border-gray-800">
              <SheetHeader>
                <SheetTitle className="text-green-500">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <ScrollLink
                    key={link.href}
                    to={link.href}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-green-500 cursor-pointer",
                      link.special
                        ? "text-green-500"
                        : "text-gray-300"
                    )}
                  >
                    {link.title}
                  </ScrollLink>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
