import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import { SiGoodreads } from "react-icons/si";
import { FaQuoteLeft } from "react-icons/fa6";
import { Footer } from "@/components/footer";
import { SnapScroll } from "@/components/snap-scroll";
import { interesting, horizonQuote } from "@/lib/content";

export const metadata: Metadata = {
  title: "Interesting Things — Mantra Manan Saraswat",
  description: "Because you made it here — a few things worth your time.",
};

const ICONS: Record<string, IconType> = {
  "Quote Off": FaQuoteLeft,
  "Shelf-Worthy": SiGoodreads,
};

export default function Interesting() {
  return (
    <>
      <SnapScroll />

      {/* Panel 1 — full-screen intro */}
      <section className="flex min-h-dvh snap-start flex-col px-6 py-10">
        <Link
          href="/"
          className="mono text-sm text-muted transition-colors hover:text-accent"
        >
          ← Back home
        </Link>
        <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center text-center">
          <p className="mono text-xs uppercase tracking-widest text-accent">
            Because you made it here
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Interesting Things
          </h1>
          <p className="mt-3 text-muted">A couple of things worth your time.</p>
        </div>
        <a
          href="#more"
          className="mono mx-auto flex flex-col items-center gap-1 text-xs text-muted transition-colors hover:text-accent"
        >
          explore
          <span className="bounce" aria-hidden>
            ↓
          </span>
        </a>
      </section>

      {/* Panel 2 — the links + horizon banner */}
      <section id="more" className="flex min-h-dvh snap-start flex-col">
        <div className="mx-auto w-full max-w-3xl flex-1 px-6 py-16 sm:py-24">
          <p className="mono text-xs uppercase tracking-widest text-accent">
            Go on, explore
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Worth your time
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {interesting.map((item) => {
              const Icon = ICONS[item.label];
              const inner = (
                <>
                  <div className="flex items-center gap-2">
                    {Icon ? <Icon className="text-accent" aria-hidden /> : null}
                    <h3 className="font-semibold">
                      {item.label} {item.external ? "↗" : "→"}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-muted">{item.description}</p>
                </>
              );
              const cls =
                "block rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent";
              return item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cls}
                >
                  {inner}
                </a>
              ) : (
                <Link key={item.label} href={item.href} className={cls}>
                  {inner}
                </Link>
              );
            })}
          </div>

          <figure className="mt-10 overflow-hidden rounded-xl border border-border">
            <Image
              src="/horizon.png"
              alt={horizonQuote}
              width={2000}
              height={1293}
              sizes="100vw"
              className="h-auto w-full"
            />
            <figcaption className="sr-only">{horizonQuote}</figcaption>
          </figure>
        </div>
        <Footer />
      </section>
    </>
  );
}
