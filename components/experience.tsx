import { Section } from "@/components/section";
import { experiences, type Experience } from "@/lib/content";
import { OrgLogo } from "@/components/org-logo";

type Group = {
  company: string;
  companyUrl: string | null;
  location: string;
  note: string;
  quote: Experience["quote"];
  roles: { role: string; period: string }[];
};

// Collapse the flat role list into one entry per company (newest role first),
// keeping a representative note + the quote any role carries.
function groupByCompany(items: Experience[]): Group[] {
  const groups: Group[] = [];
  for (const e of items) {
    let g = groups.find((x) => x.company === e.company);
    if (!g) {
      g = {
        company: e.company,
        companyUrl: e.companyUrl,
        location: e.location,
        note: e.note,
        quote: e.quote,
        roles: [],
      };
      groups.push(g);
    }
    g.roles.push({ role: e.role, period: e.period });
    if (!g.quote && e.quote) g.quote = e.quote;
  }
  return groups;
}

export function Experience() {
  const groups = groupByCompany(experiences);

  return (
    <Section id="experience" eyebrow="Career" title="Experience">
      <div className="space-y-6">
        {groups.map((g) => (
          <div
            key={g.company}
            className="rounded-xl border border-border bg-card p-6"
          >
            <OrgLogo name={g.company} className="mb-4" />

            <div className="flex flex-wrap items-baseline justify-between gap-x-2">
              <h3 className="text-lg font-semibold">
                {g.companyUrl ? (
                  <a
                    href={g.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    {g.company}
                  </a>
                ) : (
                  <span className="text-accent">{g.company}</span>
                )}
              </h3>
              {g.roles.length > 1 ? (
                <span className="mono text-xs text-accent">↑ promoted</span>
              ) : null}
            </div>

            <p className="mono mt-1 text-xs text-muted">{g.location}</p>

            <div className="mt-3 space-y-1">
              {g.roles.map((r, i) => (
                <div
                  key={i}
                  className="flex flex-wrap items-baseline justify-between gap-x-2 text-sm"
                >
                  <span className="font-medium">{r.role}</span>
                  <span className="mono text-xs text-muted">{r.period}</span>
                </div>
              ))}
            </div>

            <p className="mt-3 text-muted">{g.note}</p>

            {g.quote ? (
              <blockquote className="mt-4 border-l-2 border-accent pl-4 text-sm italic text-muted">
                &ldquo;{g.quote.text}&rdquo;
                {g.quote.author ? (
                  <span className="mono ml-1 not-italic"> — {g.quote.author}</span>
                ) : null}
              </blockquote>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}
