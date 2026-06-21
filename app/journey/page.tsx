import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { JourneyTimeline } from "@/components/journey-timeline";
import { Pronounce } from "@/components/pronounce";

export const metadata: Metadata = {
  title: "The Journey — Mantra Manan Saraswat",
  description:
    "From born-in-Jodhpur to building agentic AI — the journey through school, BITS Pilani, and work, with the key milestones along the way.",
};

export default function Journey() {
  return (
    <>
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16 sm:py-20">
        <Link
          href="/"
          className="mono text-sm text-muted transition-colors hover:text-accent"
        >
          ← Back home
        </Link>

        <p className="mono mt-8 text-xs uppercase tracking-widest text-accent">
          ♊ → 🎓 → 💼 · The Journey
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Born to building
        </h1>
        <p className="mt-3 max-w-prose text-muted">
          The whole arc — Jodhpur to agentic AI. Jump to any chapter, then open{" "}
          <span className="text-foreground">what I learned</span> on each.
        </p>

        <div className="mt-10">
          <Pronounce variant="full" />
        </div>

        <div className="mt-14">
          <JourneyTimeline />
        </div>
      </main>
      <Footer />
    </>
  );
}
