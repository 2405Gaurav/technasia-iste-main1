"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu } from "lucide-react";
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
  { title: "Registration", href: "register", special: true },
  { title: "Previous Events", href: "previous-events" },
  { title: "FAQs", href: "faqs" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
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
          ? "bg-background/90 backdrop-blur-md shadow-lg py-3"
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
          <span
            className={cn(
              "text-primary",
              "font-extrabold text-3xl sm:text-4xl tracking-wide",
              "drop-shadow-md"
            )}
          >
            {siteConfig.name}
          </span>
        </ScrollLink>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ title, href, special }) =>
            special ? (
              <ScrollLink
                key={href}
                to={href}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={cn(
                  "px-6 py-2 rounded-full font-semibold text-white transition-all cursor-pointer select-none flex items-center justify-center",
                  "bg-gradient-to-r from-blue-600 to-purple-700 shadow-lg hover:from-blue-700 hover:to-purple-800",
                  "hover:shadow-xl active:scale-95 text-sm md:text-base"
                )}
              >
                {title}
              </ScrollLink>
            ) : (
              <ScrollLink
                key={href}
                to={href}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary cursor-pointer select-none flex items-center",
                  "active:scale-95"
                )}
                activeClass="text-primary"
              >
                {title}
              </ScrollLink>
            )
          )}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            className="rounded-full"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          <div className="block md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu" className="p-2">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left text-lg font-semibold">
                    Menu
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col mt-8 space-y-4">
                  {navLinks.map(({ title, href, special }) =>
                    special ? (
                      <ScrollLink
                        key={href}
                        to={href}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className={cn(
                          "px-4 py-3 rounded-full font-semibold text-white text-center select-none",
                          "bg-gradient-to-r from-blue-600 to-purple-700 shadow-md hover:from-blue-700 hover:to-purple-800",
                          "active:scale-95 transition-transform cursor-pointer flex items-center justify-center"
                        )}
                      >
                        {title}
                      </ScrollLink>
                    ) : (
                      <ScrollLink
                        key={href}
                        to={href}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className={cn(
                          "text-base font-medium transition-colors hover:text-primary px-3 py-2 rounded-md cursor-pointer select-none flex items-center",
                          "active:scale-95"
                        )}
                        activeClass="bg-secondary text-primary"
                      >
                        {title}
                      </ScrollLink>
                    )
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
