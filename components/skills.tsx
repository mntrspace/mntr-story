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
            {s.tools ? (
              <details className="story mt-3">
                <summary className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted transition-colors hover:border-accent hover:text-accent">
                  <span className="chev text-accent">›</span>
                  <span className="lbl-closed">tools</span>
                  <span className="lbl-open">hide</span>
                </summary>
                <div className="mt-3 space-y-2 border-l border-border pl-4">
                  {s.tools.map((t) => (
                    <div key={t.group}>
                      <p className="text-xs font-medium">{t.group}</p>
                      <p className="text-xs text-muted">{t.items.join(" · ")}</p>
                    </div>
                  ))}
                </div>
              </details>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}
