"use client";

import { useEffect, useState } from "react";

const units = [
  { label: "Days", ms: 86_400_000 },
  { label: "Hours", ms: 3_600_000 },
  { label: "Minutes", ms: 60_000 },
  { label: "Seconds", ms: 1_000 },
];

/**
 * Days, hours, minutes and seconds until `to` (an ISO date-time with its timezone).
 * Renders dashes until it mounts, so the server and browser never disagree about the time; shows nothing once the date has passed.
 */
export function Countdown({ to, label }: { to: string; label: string }) {
  const target = new Date(to).getTime();
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  if (now !== null && now >= target) return null;

  let left = now === null ? null : target - now;
  return (
    <div role="timer" aria-label={label} className="inline-grid grid-cols-4 gap-x-5 sm:gap-x-8">
      {units.map((u) => {
        const value = left === null ? null : Math.floor(left / u.ms);
        if (left !== null && value !== null) left -= value * u.ms;
        return (
          <div key={u.label} className="text-center md:text-left" aria-hidden>
            <p className="text-[clamp(1.9rem,4.2vw,3.5rem)] leading-none tracking-[-0.05em] font-medium tabular-nums">
              {value === null ? "–" : String(value).padStart(2, "0")}
            </p>
            <p className="micro mt-2">{u.label}</p>
          </div>
        );
      })}
    </div>
  );
}
