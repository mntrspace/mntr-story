import { Section } from "@/components/section";
import { projects } from "@/lib/content";
import { Meta } from "@/components/meta";
import { FiCalendar } from "react-icons/fi";

export function Projects() {
  return (
    <Section id="projects" eyebrow="Selected Work" title="Projects">
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => {
          const inner = (
            <>
              <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                <h3 className="font-semibold">{p.name}</h3>
                <Meta icon={FiCalendar}>{p.period}</Meta>
              </div>
              <p className="mt-2 text-sm text-muted">{p.description}</p>
              {p.href ? (
                <span className="mono mt-3 inline-block text-xs text-accent">
                  View ↗
                </span>
              ) : null}
            </>
          );
          return p.href ? (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent"
            >
              {inner}
            </a>
          ) : (
            <div
              key={p.name}
              className="rounded-xl border border-border bg-card p-6"
            >
              {inner}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
