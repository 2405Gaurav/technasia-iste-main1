import Link from "next/link";
import { GraduationCap, Twitter, Github, Linkedin, Facebook, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
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
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-green-500/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 md:px-8 lg:px-12 py-8 lg:py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-4">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <img 
                    src="/logo/logo_technisia.svg" 
                    alt="Technisia Logo" 
                    className="h-10 w-10 filter drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-green-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-xl tracking-wider text-green-400 group-hover:text-green-300 transition-colors duration-300">
                    {siteConfig.name}
                  </span>
                  <span className="text-xs text-gray-400 font-medium tracking-widest uppercase">
                    Tech Festival
                  </span>
                </div>
              </Link>
              
              <p className="text-gray-300 max-w-xs leading-relaxed text-sm">
                {siteConfig.description}
              </p>
              
              {/* Social Media Icons */}
              <div className="flex space-x-1">
                {Object.entries(siteConfig.links).map(([platform, url]) => (
                  <Button
                    key={platform}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="relative rounded-xl h-10 w-10 hover:bg-green-500/20 border border-transparent hover:border-green-500/30 transition-all duration-300 group overflow-hidden"
                    aria-label={`Visit our ${platform} page`}
                  >
                    <Link href={url} target="_blank" rel="noopener noreferrer">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                      <span className="relative z-10 text-gray-400 group-hover:text-green-400 transition-colors duration-300">
                        {socialIcons[platform.toLowerCase()] ?? (
                          <span className="capitalize font-semibold">{platform.charAt(0)}</span>
                        )}
                      </span>
                    </Link>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-bold text-base text-green-400 relative">
                Quick Links
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-green-400 to-green-500 mt-1"></div>
              </h3>
              <nav className="flex flex-col space-y-2">
                {navLinks.slice(0, 4).map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-all duration-300 text-sm group flex items-center gap-2 w-fit"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-green-400 transition-all duration-300"></span>
                    {link.title}
                  </Link>
                ))}
              </nav>
            </div>

            {/* More Links */}
            <div className="space-y-4">
              <h3 className="font-bold text-base text-green-400 relative">
                More
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-green-400 to-green-500 mt-1"></div>
              </h3>
              <nav className="flex flex-col space-y-2">
                {navLinks.slice(4).map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-all duration-300 text-sm group flex items-center gap-2 w-fit"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-green-400 transition-all duration-300"></span>
                    {link.title}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="font-bold text-base text-green-400 relative">
                Get in Touch
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-green-400 to-green-500 mt-1"></div>
              </h3>
              <address className="not-italic space-y-3 text-gray-300 text-sm">
                <div className="flex items-start gap-3 group">
                  <MapPin className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="group-hover:text-white transition-colors duration-300">{siteConfig.venue}</p>
                </div>
                
                <div className="flex items-center gap-3 group">
                  <Mail className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-green-400 transition-colors duration-300 underline decoration-transparent hover:decoration-green-400"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                
                <div className="flex items-center gap-3 group">
                  <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="hover:text-green-400 transition-colors duration-300 underline decoration-transparent hover:decoration-green-400"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </address>
            </div>
          </div>
        </div>

        {/* Animated Separator */}
        <div className="relative">
          <Separator className="border-green-500/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/20 to-transparent h-px"></div>
        </div>

        {/* Bottom Section */}
        <div className="container mx-auto px-4 md:px-8 lg:px-12 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center gap-4 text-gray-400 text-sm">
              <p className="flex items-center gap-2">
                <span>&copy; {new Date().getFullYear()}</span>
                <span className="text-green-400 font-semibold">{siteConfig.name}</span>
                <span>All rights reserved.</span>
              </p>
              <div className="hidden md:block w-px h-4 bg-green-500/30"></div>
              <p className="text-xs text-gray-500">
                Built with ❤️ for innovation
              </p>
            </div>
            
            <div className="flex space-x-6">
              <Link 
                href="/privacy" 
                className="text-gray-400 hover:text-green-400 transition-all duration-300 text-sm group flex items-center gap-1"
              >
                Privacy Policy
                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-400 hover:text-green-400 transition-all duration-300 text-sm group flex items-center gap-1"
              >
                Terms of Service
                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* Back to Top Indicator */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-green-400 to-green-500 rounded-b-full"></div>
      </div>
    </footer>
  );
}