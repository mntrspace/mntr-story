import { Section } from "@/components/section";
import { skills } from "@/lib/content";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Toolbox" title="Skills & Technologies">
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((s) => (
          <div
            key={s.category}
            className="rounded-xl border border-border bg-card p-6"
          >
            <h3 className="font-semibold">{s.category}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {s.items.map((it) => (
                <span
                  key={it}
                  className="rounded-md border border-border bg-background px-2.5 py-1 text-sm text-muted"
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
