"use client";

import { useEffect, useRef, useState } from "react";
import { Trophy, Users, BarChart4 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    icon: <Trophy className="h-12 w-12" />,
    value: 5,
    label: "Competitions",
    suffix: "+",
  },
  {
    icon: <Users className="h-12 w-12" />,
    value: 5000,
    label: "Participants",
    suffix: "+",
  },
  {
    icon: <BarChart4 className="h-12 w-12" />,
    value: 25000,
    label: "Prize Pool",
    prefix: "$",
    suffix: "+",
  },
  {
    icon: <BarChart4 className="h-12 w-12" />,
    value: 25000,
    label: "Prize Pool",
    prefix: "$",
    suffix: "+",
  },
];

function useCountUp(targetNumber: number, startOnView: boolean) {
  const [count, setCount] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!startOnView) return;

    const duration = 1500;
    const increment = targetNumber / (duration / 30);

    function update() {
      setCount((prev) => {
        const next = prev + increment;
        if (next >= targetNumber) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          return targetNumber;
        }
        return next;
      });
    }

    intervalRef.current = window.setInterval(update, 30);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startOnView, targetNumber]);

  return Math.floor(count);
}

function StatCard({
  icon,
  value,
  label,
  prefix = "",
  suffix = "",
  startAnimation,
}: {
  icon: React.ReactNode;
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  startAnimation: boolean;
}) {
  const count = useCountUp(value, startAnimation);

  return (
    <Card
      className="
        h-full
        border border-green-500
        bg-black/30 backdrop-blur-md
        rounded-2xl
        p-6
        flex flex-col items-center text-center
        cursor-pointer
        transition-transform duration-300
        hover:scale-[1.04]
        hover:shadow-[0_0_20px_rgba(0,255,180,0.7)]
        min-w-[180px]
      "
      style={{ minHeight: "180px" }}
    >
      <CardContent className="p-0 flex flex-col items-center gap-4">
        <div className="text-green-400 drop-shadow-[0_0_6px_rgba(0,255,180,0.7)]">{icon}</div>
        <div className="text-4xl font-semibold text-green-400 drop-shadow-[0_0_10px_rgba(0,255,180,0.9)]">
          {prefix}
          {count.toLocaleString()}
          {suffix}
        </div>
        <h3
          className="
            text-lg font-semibold relative text-green-400 drop-shadow-[0_0_6px_rgba(0,255,180,0.7)]
            after:absolute after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2
            after:w-16 after:h-[3px] after:bg-gradient-to-r after:from-green-400 after:to-green-600
            after:rounded-full after:opacity-0 after:transition-opacity after:duration-300
            hover:after:opacity-100
          "
        >
          {label}
        </h3>
      </CardContent>
    </Card>
  );
}

export function AboutContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="py-16">
      <div className="container max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-6 text-white">About TECHNASIA&rsquo;25</h1>

        <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-12 text-gray-200">
          TECHNASIA@aspos25 is India&apos;s premier national-level hackathon, a celebration of innovation and technological excellence. It
          stands as a testament to the incredible tech talent flourishing across our nation, bringing together the brightest minds from every
          corner of India to forge solutions that resonate globally.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
          {stats.map(({ icon, value, label, prefix, suffix }, index) => (
            <StatCard
              key={index}
              icon={icon}
              value={value}
              label={label}
              prefix={prefix}
              suffix={suffix}
              startAnimation={visible}
            />
          ))}
        </div>

       <Card
  className="
    cursor-pointer border border-green-500 bg-black/30 backdrop-blur-md p-8
    flex items-center justify-center
    transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,180,0.7)]
    max-w-4xl mx-auto rounded-2xl
  "
  style={{ minHeight: "140px" }}
>
  <CardContent className="p-0">
    <p className="text-xl font-semibold text-green-400 drop-shadow-[0_0_6px_rgba(0,255,180,0.7)]">
      TECHNASIA@apos;25 celebrates India, its developers, and their spirit of innovation.
    </p>
  </CardContent>
</Card>


      </div>
    </div>
  );
}
