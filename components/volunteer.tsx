import { Section } from "@/components/section";
import { volunteer } from "@/lib/content";
import { Meta } from "@/components/meta";
import { FiCalendar } from "react-icons/fi";

export function Volunteer() {
  return (
    <Section id="volunteer" eyebrow="Giving Back" title="Volunteer Experience">
      <div className="space-y-4">
        {volunteer.map((v) => (
          <div key={v.org} className="rounded-xl border border-border bg-card p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-2">
              <h3 className="font-semibold">{v.org}</h3>
              <Meta icon={FiCalendar}>{v.period}</Meta>
            </div>
            {v.role ? <p className="mt-1 text-sm text-accent">{v.role}</p> : null}
            {v.highlights ? (
              <details className="story mt-3">
                <summary className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted transition-colors hover:border-accent hover:text-accent">
                  <span className="chev text-accent">›</span>
                  <span className="lbl-closed">details</span>
                  <span className="lbl-open">hide</span>
                </summary>
                <ul className="mt-3 space-y-2 border-l border-border pl-4">
                  {v.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted">
                      <span className="text-accent">·</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </details>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}
