"use client";

import { useRef } from "react";
import { journey } from "@/lib/journey";
import { JourneyCard } from "@/components/journey-card";

function shortName(org: string) {
  if (org.startsWith("St. Anne's")) return "St. Anne's";
  if (org.startsWith("Vinayak")) return "Vinayak";
  if (org.startsWith("BITS")) return "BITS";
  return org;
}

export function JourneyTimeline() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollToCard(id: string) {
    document
      .getElementById(`m-${id}`)
      ?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }

  function nudge(dir: number) {
    const t = trackRef.current;
    if (t) t.scrollBy({ left: dir * t.clientWidth * 0.8, behavior: "smooth" });
  }

  return (
    <div>
      {/* jump nav */}
      <div className="flex flex-wrap gap-2">
        {journey.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => scrollToCard(m.id)}
            className="mono rounded-full border border-border bg-card px-2.5 py-1 text-xs text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <span aria-hidden>{m.icon}</span> {shortName(m.org)}
          </button>
        ))}
      </div>

      {/* horizontal track */}
      <div
        ref={trackRef}
        className="mt-6 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {journey.map((m) => (
          <JourneyCard key={m.id} m={m} />
        ))}
      </div>

      {/* arrows + hint */}
      <div className="mt-3 flex items-center justify-between">
        <p className="mono text-xs text-muted">drag / swipe through the years</p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => nudge(-1)}
            aria-label="Scroll back"
            className="rounded-full border border-border bg-card px-3 py-1 text-muted transition-colors hover:border-accent hover:text-accent"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => nudge(1)}
            aria-label="Scroll forward"
            className="rounded-full border border-border bg-card px-3 py-1 text-muted transition-colors hover:border-accent hover:text-accent"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
