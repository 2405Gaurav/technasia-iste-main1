import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">{siteConfig.name}</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              {siteConfig.description}
            </p>
            <div className="flex space-x-4">
              {Object.entries(siteConfig.links).map(([platform, url]) => (
                <Button
                  key={platform}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="rounded-full"
                >
                  <Link href={url} target="_blank" rel="noopener noreferrer">
                    <span className="sr-only">{platform}</span>
                    <span className="capitalize">{platform.charAt(0)}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {navLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">More</h3>
            <nav className="flex flex-col space-y-2">
              {navLinks.slice(4).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <address className="not-italic space-y-2 text-sm text-muted-foreground">
              <p>{siteConfig.venue}</p>
              <p>
                Email:{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </p>
            </address>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}