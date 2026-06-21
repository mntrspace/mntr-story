import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import { SiGoodreads } from "react-icons/si";
import { FaQuoteLeft } from "react-icons/fa6";
import { Section } from "@/components/section";
import { interesting, horizonQuote } from "@/lib/content";

const ICONS: Record<string, IconType> = {
  "Quote Off": FaQuoteLeft,
  "Shelf-Worthy": SiGoodreads,
};

const cardClass =
  "block rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent";

export function Interesting() {
  return (
    <Section
      id="interesting"
      eyebrow="Because you made it here"
      title="Interesting Things"
    >
      <div className="grid gap-4 sm:grid-cols-2">
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
          return item.external ? (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cardClass}
            >
              {inner}
            </a>
          ) : (
            <Link key={item.label} href={item.href} className={cardClass}>
              {inner}
            </Link>
          );
        })}
      </div>
      <figure className="mt-8 overflow-hidden rounded-xl border border-border">
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
    </Section>
  );
}
