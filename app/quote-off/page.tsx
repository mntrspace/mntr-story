import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { QuoteBlock } from "@/components/quote-block";
import { QuoteOfDay } from "@/components/quote-of-day";
import { quoteOff } from "@/lib/quotes";

export const metadata: Metadata = {
  title: "Quote Off — Mantra Manan Saraswat",
  description:
    "Quotes I keep coming back to — with where each one comes from and why it stuck with me.",
};

export default function QuoteOff() {
  return (
    <>
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16 sm:py-20">
        <Link
          href="/"
          className="mono text-sm text-muted transition-colors hover:text-accent"
        >
          ← Back home
        </Link>

        <p className="mono mt-8 text-xs uppercase tracking-widest text-accent">
          Quote Off
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Words I keep coming back to
        </h1>
        <p className="mt-3 max-w-prose text-muted">
          A running collection. Open{" "}
          <span className="text-foreground">the story</span> under any quote for
          where it&apos;s from and why it stuck with me.
        </p>

        <div className="mt-10">
          <QuoteOfDay />
        </div>

        <h2 className="mono mt-16 text-xs uppercase tracking-widest text-muted">
          The collection
        </h2>
        <div className="mt-8 flex flex-col gap-12">
          {quoteOff.map((q, idx) => (
            <QuoteBlock key={idx} entry={q} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
