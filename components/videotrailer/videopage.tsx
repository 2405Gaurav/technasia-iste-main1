import * as React from "react";
import { Play } from "lucide-react";
import Link from "next/link";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface VideoProps {
  className?: string;
  order?: "left" | "right";
  src?: string;
}

export const Video = ({ className = "", order = "right", src }: VideoProps) => {
  return (
    <section className="w-full py-16 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${order === "right" ? "" : "lg:flex-row-reverse"
            }`}
        >
          {/* Left Side - About Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-green-500 text-lg font-medium mb-2">ABOUT THE EVENT</h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Welcome to the Amazing<br />
                <span className="text-green-500">TECHNISIA '25</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                TECHNASIA is not just an event, it's an interstellar journey through the cosmos of technology. With over 5000 participants from across the galaxy, our annual tech extravaganza brings together the brightest minds to innovate, compete, and celebrate the future of tech.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="border-l-2 border-green-500 pl-4">
                <p className="text-2xl font-bold">5K+</p>
                <p className="text-gray-400 text-sm">Participants</p>
              </div>
              <div className="border-l-2 border-green-500 pl-4">
                <p className="text-2xl font-bold">20+</p>
                <p className="text-gray-400 text-sm">Events</p>
              </div>
              <div className="border-l-2 border-green-500 pl-4">
                <p className="text-2xl font-bold">10L+</p>
                <p className="text-gray-400 text-sm">Price Pool</p>
              </div>
              <div className="border-l-2 border-green-500 pl-4">
                <p className="text-2xl font-bold">50+</p>
                <p className="text-gray-400 text-sm">Sponsors</p>
              </div>
            </div>

            <Link href={'previous-events'}>
              <button className="px-6 py-3 my-6 bg-green-600 hover:bg-green-700 rounded-md font-medium transition-colors">
                Explore Past Events
              </button>
            </Link>
          </div>

          {/* Right Side - Video */}
          <Dialog>
            <DialogTrigger asChild>
              <div className="w-full h-[400px] lg:h-[500px] relative rounded-lg overflow-hidden shadow-lg border-2 border-green-600 group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-all">
                  <div className="bg-black/50 rounded-full p-4 group-hover:bg-black/70 transition-all">
                    <Play className="w-12 h-12 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="flex items-center justify-center h-64 bg-gray-900 rounded-lg shadow-lg">
                  <p
                    className="text-4xl text-indigo-400 font-bold tracking-wide italic animate-pulse text-center"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    Click it. Feel it. Live the Thrill!
                  </p>
                </div>

              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0 bg-black border-purple-500/20">
              <DialogTitle className="sr-only">Technisia 2024 Recap Video</DialogTitle>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Technisia 2024 Recap"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};