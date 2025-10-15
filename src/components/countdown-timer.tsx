"use client";

import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string; // ISO date string
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer({ targetDate, className = "" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const calculateTimeLeft = (): TimeLeft => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className={`flex gap-4 justify-center ${className}`}>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 min-w-[70px]">
              <div className="text-2xl sm:text-3xl font-bold">00</div>
            </div>
            <div className="text-xs sm:text-sm text-gray-400 mt-2">Loading</div>
          </div>
        ))}
      </div>
    );
  }

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className={`flex gap-3 sm:gap-4 justify-center ${className}`}>
      {timeUnits.map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 sm:px-4 py-2 sm:py-3 min-w-[60px] sm:min-w-[70px]">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold tabular-nums">
              {String(value).padStart(2, '0')}
            </div>
          </div>
          <div className="text-xs sm:text-sm text-gray-400 mt-2 uppercase tracking-wider">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

