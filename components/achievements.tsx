import { Section } from "@/components/section";
import { achievements } from "@/lib/content";

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Highlights" title="Key Achievements">
      <div className="grid gap-4 sm:grid-cols-3">
        {achievements.map((a) => (
          <div
            key={a.title}
            className="rounded-xl border border-border bg-card p-6"
          >
            <p className="mono text-2xl font-bold text-accent">{a.metric}</p>
            <h3 className="mt-2 font-semibold">{a.title}</h3>
            <p className="mt-2 text-sm text-muted">{a.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
