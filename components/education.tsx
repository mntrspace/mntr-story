import { Section } from "@/components/section";
import { education, academicAchievements } from "@/lib/content";
import { OrgLogo } from "@/components/org-logo";
import { Meta } from "@/components/meta";
import { FiMapPin, FiCalendar } from "react-icons/fi";

export function Education() {
  return (
    <Section id="education" eyebrow="Foundations" title="Education">
      <div className="space-y-4">
        {education.map((e) => (
          <div
            key={e.school}
            className="rounded-xl border border-border bg-card p-6"
          >
            <OrgLogo name={e.school} className="mb-3" />
            <h3 className="font-semibold">{e.school}</h3>
            <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
              <Meta icon={FiCalendar}>{e.period}</Meta>
              <Meta icon={FiMapPin}>{e.location}</Meta>
            </div>
            <p className="mt-3 text-sm text-muted">{e.detail}</p>

            {e.highlights ? (
              <details className="story mt-3">
                <summary className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted transition-colors hover:border-accent hover:text-accent">
                  <span className="chev text-accent">›</span>
                  <span className="lbl-closed">details</span>
                  <span className="lbl-open">hide</span>
                </summary>
                <ul className="mt-3 space-y-1.5 border-l border-border pl-4">
                  {e.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm text-muted">
                      <span className="text-accent">·</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </details>
            ) : null}

            {e.projects ? (
              <div className="mt-4">
                <h4 className="mono text-[0.7rem] uppercase tracking-widest text-muted">
                  Academic projects
                </h4>
                <ul className="mt-2 space-y-2">
                  {e.projects.map((p) => (
                    <li key={p.name}>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                        <span className="text-sm font-medium">{p.name}</span>
                        <Meta icon={FiCalendar}>{p.period}</Meta>
                      </div>
                      <p className="text-xs text-muted">{p.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
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
