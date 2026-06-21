import { Section } from "@/components/section";
import { volunteer } from "@/lib/content";

export function Volunteer() {
  return (
    <Section id="volunteer" eyebrow="Giving Back" title="Volunteer Experience">
      <div className="grid gap-4 sm:grid-cols-3">
        {volunteer.map((v) => (
          <div
            key={v.org}
            className="rounded-xl border border-border bg-card p-6"
          >
            <h3 className="text-sm font-semibold">{v.org}</h3>
            <p className="mono mt-2 text-xs text-muted">{v.period}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
