"use client";

import { useRef, useState } from "react";
import { pronunciation } from "@/lib/content";

export function Pronounce({ variant = "compact" }: { variant?: "compact" | "full" }) {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  function toggle() {
    const a = ref.current;
    if (!a) return;
    if (a.paused) {
      void a.play();
    } else {
      a.pause();
      a.currentTime = 0;
    }
  }

  const audio = (
    <audio
      ref={ref}
      src={pronunciation.audio}
      preload="none"
      onPlay={() => setPlaying(true)}
      onPause={() => setPlaying(false)}
      onEnded={() => setPlaying(false)}
    />
  );

  if (variant === "compact") {
    return (
      <button
        type="button"
        onClick={toggle}
        aria-label="Hear how to pronounce my name"
        className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
      >
        <span aria-hidden>{playing ? "⏸" : "🔊"}</span>
        <span>
          Say my name —{" "}
          <span className="text-foreground group-hover:text-accent">Mantr</span>
        </span>
        {audio}
      </button>
    );
  }

  return (
    <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <p className="mono text-xs uppercase tracking-widest text-accent">
        🔊 How to say my name
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={toggle}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          <span aria-hidden>{playing ? "⏸" : "▶"}</span>
          {playing ? "Playing…" : "Hear it"}
        </button>
        <div>
          <p className="text-lg font-semibold">Mantra Manan Saraswat</p>
          <p className="mono text-sm text-muted">{pronunciation.ipa}</p>
        </div>
      </div>
      <p className="mt-4 max-w-prose text-muted">{pronunciation.intro}</p>
      <div className="mt-5 grid gap-2 sm:grid-cols-3">
        {pronunciation.breakdown.map((b) => (
          <div
            key={b.part}
            className="rounded-lg border border-border bg-background px-3 py-2"
          >
            <p className="font-semibold">{b.part}</p>
            <p className="text-sm text-muted">{b.say}</p>
            <p className="mono text-xs text-muted">{b.ipa}</p>
          </div>
        ))}
      </div>
      {audio}
    </section>
  );
}
