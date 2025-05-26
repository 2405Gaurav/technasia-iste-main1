import * as React from "react";
import { Play } from "lucide-react";

interface VideoProps {
  className?: string;
  order?: "left" | "right";
  src?: string;
}

export const Video = ({ className = "", order = "right", src }: VideoProps) => {
  return (
    <section className="w-full py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            order === "right" ? "" : "lg:flex-row-reverse"
          }`}
        >
          {/* Left Side - Text Placeholder */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Experience the Excitement</h2>
            <p className="text-gray-300 text-lg">
              Witness the thrill of TECHNASIA through this short video. From the energy of the crowd to the brilliance of competitions, here’s a glimpse of what’s to come.
            </p>
            <p className="text-sm text-gray-500">Scroll down for more updates 👇</p>
          </div>

          {/* Right Side - Video */}
          <div className="w-full h-[400px] lg:h-[500px] relative rounded-lg overflow-hidden shadow-lg border-2 border-green-600">
            {src ? (
              <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
              >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-gray-800 text-gray-400 text-xl">
                Event video will play here
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
