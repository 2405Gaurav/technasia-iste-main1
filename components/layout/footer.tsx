import Link from "next/link";
import { GraduationCap, Twitter, Github, Linkedin, Facebook } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const socialIcons: Record<string, React.ReactNode> = {
  twitter: <Twitter className="h-5 w-5" />,
  github: <Github className="h-5 w-5" />,
  linkedin: <Linkedin className="h-5 w-5" />,
  facebook: <Facebook className="h-5 w-5" />,
};

export function Footer() {
  return (
    <footer className="bg-[#0b0b0f] text-white py-6">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-3">
              <GraduationCap className="h-7 w-7 text-green-400" aria-hidden="true" />
              <span className="font-extrabold text-xl tracking-wide">{siteConfig.name}</span>
            </Link>
            <p className="text-green-300 max-w-xs">{siteConfig.description}</p>
            <div className="flex space-x-3 mt-3">
              {Object.entries(siteConfig.links).map(([platform, url]) => (
                <Button
                  key={platform}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="rounded-full hover:bg-green-700/30 transition"
                  aria-label={`Visit our ${platform} page`}
                >
                  <Link href={url} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
                    {socialIcons[platform.toLowerCase()] ?? (
                      <span className="capitalize text-green-400 font-semibold">{platform.charAt(0)}</span>
                    )}
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-md mb-3 text-green-400">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {navLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-green-300 hover:text-green-400 transition-colors text-sm"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-md mb-3 text-green-400">More</h3>
            <nav className="flex flex-col space-y-2">
              {navLinks.slice(4).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-green-300 hover:text-green-400 transition-colors text-sm"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-md mb-3 text-green-400">Contact</h3>
            <address className="not-italic space-y-2 text-green-300 text-sm">
              <p>{siteConfig.venue}</p>
              <p>
                Email:{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-green-400 transition-colors underline"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-green-400 transition-colors underline"
                >
                  {siteConfig.phone}
                </a>
              </p>
            </address>
          </div>
        </div>

        <Separator className="my-6 border-green-700" />

        <div className="flex flex-col md:flex-row justify-between items-center text-green-400 text-sm space-y-2 md:space-y-0">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-green-400 transition-colors underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-green-400 transition-colors underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
