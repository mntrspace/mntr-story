import { Section } from "@/components/section";
import { experiences } from "@/lib/content";
import { OrgLogo } from "@/components/org-logo";
import { Meta } from "@/components/meta";
import { FiMapPin, FiCalendar } from "react-icons/fi";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Career" title="Experience">
      <div className="space-y-6">
        {experiences.map((e) => (
          <div
            key={e.company}
            className="rounded-xl border border-border bg-card p-6"
          >
            <OrgLogo name={e.company} className="mb-4" />

            <div className="flex flex-wrap items-baseline justify-between gap-x-2">
              <h3 className="text-lg font-semibold">
                {e.companyUrl ? (
                  <a
                    href={e.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    {e.company}
                  </a>
                ) : (
                  <span className="text-accent">{e.company}</span>
                )}
              </h3>
              {e.roles.length > 1 ? (
                <span className="mono text-xs text-accent">↑ promoted</span>
              ) : null}
            </div>
            <div className="mt-1">
              <Meta icon={FiMapPin}>{e.location}</Meta>
            </div>

            <div className="mt-4 space-y-4">
              {e.roles.map((r, i) => (
                <div key={i}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                    <span className="text-sm font-medium">{r.title}</span>
                    <Meta icon={FiCalendar}>{r.period}</Meta>
                  </div>
                  {r.highlights.length ? (
                    <details className="story mt-2">
                      <summary className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted transition-colors hover:border-accent hover:text-accent">
                        <span className="chev text-accent">›</span>
                        <span className="lbl-closed">details</span>
                        <span className="lbl-open">hide</span>
                      </summary>
                      <ul className="mt-3 space-y-2 border-l border-border pl-4">
                        {r.highlights.map((h, j) => (
                          <li key={j} className="flex gap-2 text-sm text-muted">
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

            <p className="mt-4 text-muted">{e.reflection}</p>

            {e.quote ? (
              <blockquote className="mt-4 border-l-2 border-accent pl-4 text-sm italic text-muted">
                &ldquo;{e.quote.text}&rdquo;
                {e.quote.author ? (
                  <span className="mono ml-1 not-italic"> — {e.quote.author}</span>
                ) : null}
              </blockquote>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}
