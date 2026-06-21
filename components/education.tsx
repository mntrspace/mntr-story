import { Section } from "@/components/section";
import { education, academicAchievements } from "@/lib/content";

export function Education() {
  return (
    <Section id="education" eyebrow="Foundations" title="Education">
      <div className="space-y-4">
        {education.map((e) => (
          <div
            key={e.school}
            className="rounded-xl border border-border bg-card p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold">{e.school}</h3>
              <span className="mono text-sm text-muted">{e.period}</span>
            </div>
            <p className="mt-2 text-sm text-muted">{e.detail}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-xl border border-border bg-card p-6">
        <h3 className="mono text-xs uppercase tracking-widest text-muted">
          Academic Achievements
        </h3>
        <ul className="mt-3 space-y-2">
          {academicAchievements.map((a) => (
            <li key={a} className="flex gap-2 text-muted">
              <span className="text-accent">★</span>
              {a}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
