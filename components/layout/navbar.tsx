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
  { title: "Previous Events", href: "previous-events" },
  { title: "FAQs", href: "faqs" },
  { title: "Registration", href: "register", special: true },
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
      role="banner"
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="flex items-center gap-2 cursor-pointer select-none"
          aria-label="Go to Home section"
          tabIndex={0}
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

        <nav
          className="hidden md:flex items-center space-x-8"
          role="navigation"
          aria-label="Primary navigation"
        >
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
                  "hover:shadow-xl active:scale-95 text-sm md:text-base",
                  // underline for special button (maybe no underline for button? You can add if you want)
                )}
                tabIndex={0}
                aria-current="page"
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
                  "text-sm font-medium transition-colors cursor-pointer select-none flex items-center",
                  "border-b-2 border-transparent", // base underline invisible
                  "hover:border-primary", // underline on hover
                  "active:scale-95",
                )}
                activeClass="border-primary text-primary" // active underline and text color
                tabIndex={0}
                aria-current="page"
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
            className="relative rounded-full"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun
              className={cn(
                "h-5 w-5 transition-all duration-300 absolute inset-0 m-auto",
                theme === "light"
                  ? "opacity-100 scale-100 rotate-0"
                  : "opacity-0 scale-75 rotate-45 pointer-events-none"
              )}
              aria-hidden="true"
            />
            <Moon
              className={cn(
                "h-5 w-5 transition-all duration-300 absolute inset-0 m-auto",
                theme === "dark"
                  ? "opacity-100 scale-100 rotate-0"
                  : "opacity-0 scale-75 rotate-45 pointer-events-none"
              )}
              aria-hidden="true"
            />
          </Button>

          {/* Mobile menu */}
          <div className="block md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open menu"
                  className="p-2"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left text-lg font-semibold">
                    Menu
                  </SheetTitle>
                </SheetHeader>
                <nav
                  className="flex flex-col mt-8 space-y-4"
                  role="navigation"
                  aria-label="Mobile navigation"
                >
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
                        tabIndex={0}
                        aria-current="page"
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
                          "text-base font-medium transition-colors cursor-pointer select-none flex items-center",
                          "border-b-2 border-transparent",
                          "hover:border-primary",
                          "active:scale-95"
                        )}
                        activeClass="border-primary text-primary"
                        tabIndex={0}
                        aria-current="page"
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
