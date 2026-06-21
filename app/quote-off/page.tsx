import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { QuoteBlock } from "@/components/quote-block";
import { QuoteOfDay } from "@/components/quote-of-day";
import { SnapScroll } from "@/components/snap-scroll";
import { quoteOff } from "@/lib/quotes";

export const metadata: Metadata = {
  title: "Quote Off — Mantra Manan Saraswat",
  description:
    "Quotes I keep coming back to — with where each one comes from and why it stuck with me.",
};

export default function QuoteOff() {
  return (
    <>
      <SnapScroll />

      {/* Panel 1 — full screen: today's inspiration */}
      <section className="flex min-h-dvh snap-start flex-col px-6 py-10">
        <Link
          href="/"
          className="mono text-sm text-muted transition-colors hover:text-accent"
        >
          ← Back home
        </Link>

        <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center">
          <QuoteOfDay />
        </div>

        <a
          href="#collection"
          className="mono mx-auto flex flex-col items-center gap-1 text-xs text-muted transition-colors hover:text-accent"
        >
          the collection
          <span className="bounce" aria-hidden>
            ↓
          </span>
        </a>
      </section>

      {/* Panel 2 — the full collection */}
      <section id="collection" className="min-h-dvh snap-start">
        <div className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-24">
          <p className="mono text-xs uppercase tracking-widest text-accent">
            Quote Off
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Words I keep coming back to
          </h1>
          <p className="mt-3 max-w-prose text-muted">
            A running collection of lines that I live by. They inspire me every
            day, in every action and reaction, and in all my thoughts.
          </p>

          <div className="mt-12 flex flex-col gap-12">
            {quoteOff.map((q, idx) => (
              <QuoteBlock key={idx} entry={q} />
            ))}
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}
