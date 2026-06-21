import type { QuoteEntry } from "@/lib/quotes";

export function QuoteBlock({
  entry,
  variant = "list",
}: {
  entry: QuoteEntry;
  variant?: "list" | "spotlight";
}) {
  const spotlight = variant === "spotlight";
  const hasStory = Boolean(entry.origin || entry.note);

  return (
    <figure>
      <blockquote
        className={
          spotlight
            ? "serif text-3xl leading-tight sm:text-[2.5rem]"
            : "serif text-2xl leading-snug"
        }
      >
        {entry.text}
      </blockquote>

      {entry.author ? (
        <figcaption className="mono mt-4 text-sm text-muted">
          — {entry.author}
        </figcaption>
      ) : null}

      {hasStory ? (
        <details className="story mt-5">
          <summary className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted transition-colors hover:border-accent hover:text-accent">
            <span className="chev text-accent">›</span>
            <span className="lbl-closed">the story</span>
            <span className="lbl-open">close</span>
          </summary>
          <div className="mt-5 space-y-5 border-l border-border pl-5">
            {entry.origin ? (
              <div>
                <h3 className="mono text-[0.7rem] uppercase tracking-widest text-muted">
                  Where it&apos;s from
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
                  {entry.origin}
                </p>
              </div>
            ) : null}
            {entry.note ? (
              <div>
                <h3 className="mono text-[0.7rem] uppercase tracking-widest text-accent">
                  Why it stuck with me
                </h3>
                <p className="hand mt-1 text-2xl leading-snug text-foreground">
                  {entry.note}
                </p>
              </div>
            ) : null}
          </div>
        </details>
      ) : null}
    </figure>
  );
}
