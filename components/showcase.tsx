import { Section } from "@/components/section";
import { showcase } from "@/lib/content";

export function Showcase() {
  return (
    <Section id="showcase" eyebrow="A bit more" title="Showcase">
      <div className="grid gap-4 sm:grid-cols-2">
        {showcase.map((g) => (
          <div
            key={g.category}
            className="rounded-xl border border-border bg-card p-6"
          >
            <h3 className="font-semibold">
              <span aria-hidden className="mr-2">
                {g.icon}
              </span>
              {g.category}
            </h3>
            <ul className="mt-3 space-y-2">
              {g.items.map((it) => (
                <li key={it.label} className="text-sm">
                  {it.href ? (
                    <a
                      href={it.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted transition-colors hover:text-accent"
                    >
                      {it.label} <span className="text-accent">↗</span>
                    </a>
                  ) : (
                    <span className="text-muted">{it.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
