import { Section } from "@/components/section";
import { experiences } from "@/lib/content";
import { OrgLogo } from "@/components/org-logo";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Career" title="Experience">
      <div className="space-y-6">
        {experiences.map((e, i) => (
          <div
            key={`${e.company}-${i}`}
            className="rounded-xl border border-border bg-card p-6"
          >
            <OrgLogo name={e.company} className="mb-4" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">
                {e.role}
                {" · "}
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
              <span className="mono text-sm text-muted">{e.period}</span>
            </div>
            <p className="mono mt-1 text-xs text-muted">{e.location}</p>
            <p className="mt-3 text-muted">{e.note}</p>
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
