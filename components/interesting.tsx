import Image from "next/image";
import { Section } from "@/components/section";
import { interesting, horizonQuote } from "@/lib/content";

export function Interesting() {
  return (
    <Section
      id="interesting"
      eyebrow="Because you made it here"
      title="Interesting Things"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {interesting.map((i) => (
          <a
            key={i.label}
            href={i.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent"
          >
            <h3 className="font-semibold">{i.label} ↗</h3>
            <p className="mt-2 text-sm text-muted">{i.description}</p>
          </a>
        ))}
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
