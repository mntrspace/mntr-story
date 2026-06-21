import { Section } from "@/components/section";
import { projects } from "@/lib/content";

export function Projects() {
  return (
    <Section id="projects" eyebrow="Selected Work" title="Projects">
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) =>
          p.href ? (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent"
            >
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-semibold">{p.name}</h3>
                <span className="mono text-xs text-muted">{p.period}</span>
              </div>
              <p className="mt-2 text-sm text-muted">{p.description}</p>
              <span className="mono mt-3 inline-block text-xs text-accent">
                View ↗
              </span>
            </a>
          ) : (
            <div
              key={p.name}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-semibold">{p.name}</h3>
                <span className="mono text-xs text-muted">{p.period}</span>
              </div>
              <p className="mt-2 text-sm text-muted">{p.description}</p>
            </div>
          ),
        )}
      </div>
    </Section>
  );
}
