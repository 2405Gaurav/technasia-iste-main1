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
      className="cursor-pointer border-0 bg-card/70 backdrop-blur-md p-8 flex flex-col items-center justify-center
      transition-transform duration-300 hover:scale-105 hover:shadow-lg"
    >
      <CardContent className="p-0 flex flex-col items-center gap-4">
        <div className="text-primary">{icon}</div>
        <div className="text-5xl font-extrabold">
          {prefix}
          {count.toLocaleString()}
          {suffix}
        </div>
        <div className="uppercase text-sm tracking-wide text-muted-foreground">{label}</div>
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
    <div ref={containerRef} className="py-16 bg-card/50">
      <div className="container max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-6">About TECHNASIA@aspos25</h1>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-12">
          TECHNASIA@aspos25 is India@asposs premier national-level hackathon, a celebration of innovation and technological excellence. It
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
          className="cursor-pointer border-0 bg-card/70 backdrop-blur-md p-8 flex items-center justify-center
          transition-transform duration-300 hover:scale-105 hover:shadow-lg max-w-4xl mx-auto"
          style={{ minHeight: "140px" }}
        >
          <CardContent className="p-0">
            <p className="text-xl font-semibold text-muted-foreground">
              TECHNASIA@apos;25 celebrates India, its developers, and their spirit of innovation.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
