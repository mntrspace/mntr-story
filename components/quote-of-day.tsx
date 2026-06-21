"use client";

import { useEffect, useState } from "react";
import { QuoteBlock } from "@/components/quote-block";
import { quoteOff } from "@/lib/quotes";

function dayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  return Math.floor((now.getTime() - start.getTime()) / 86_400_000);
}

export function QuoteOfDay() {
  // Stable index for the server / first client render (avoids hydration
  // mismatch), then settle on today's quote after mount.
  const [i, setI] = useState(0);

  useEffect(() => {
    setI(dayOfYear() % quoteOff.length);
  }, []);

  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-3">
        <p className="mono text-xs uppercase tracking-widest text-accent">
          Inspiration for today
        </p>
        <button
          type="button"
          onClick={() => setI(Math.floor(Math.random() * quoteOff.length))}
          className="mono text-xs text-muted transition-colors hover:text-accent"
        >
          another ↻
        </button>
      </div>
      <div className="mt-8">
        <QuoteBlock entry={quoteOff[i]} variant="spotlight" />
      </div>
    </div>
  );
}
