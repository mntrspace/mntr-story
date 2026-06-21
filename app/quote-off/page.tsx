import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { quoteOff } from "@/lib/quotes";

export const metadata: Metadata = {
  title: "Quote Off — Mantra Manan Saraswat",
  description: "A running collection of quotes I keep coming back to.",
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
        <p className="mt-3 text-muted">A running collection.</p>

        <div className="mt-10 space-y-8">
          {quoteOff.map((q, i) => (
            <figure key={i} className="border-l-2 border-accent pl-5">
              <blockquote className="text-lg leading-relaxed">{q.text}</blockquote>
              {q.author ? (
                <figcaption className="mono mt-3 text-sm text-muted">
                  — {q.author}
                </figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
