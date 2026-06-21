import Image from "next/image";
import { Meta } from "@/components/meta";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import type { Milestone } from "@/lib/journey";

const KIND_LABEL: Record<Milestone["kind"], string> = {
  birth: "Born",
  education: "Education",
  work: "Work",
};

export function JourneyCard({ m }: { m: Milestone }) {
  return (
    <article
      id={`m-${m.id}`}
      className="flex w-[300px] shrink-0 snap-center flex-col rounded-2xl border border-border bg-card p-6 sm:w-[360px]"
    >
      <div className="flex items-center gap-2">
        <span aria-hidden className="text-lg">
          {m.icon}
        </span>
        <span className="mono text-[0.7rem] uppercase tracking-widest text-accent">
          {KIND_LABEL[m.kind]}
        </span>
        <span className="ml-auto">
          <Meta icon={FiCalendar}>{m.period}</Meta>
        </span>
      </div>

      <div className="mt-5 h-9">
        {m.logo ? (
          <div className="relative h-9 w-44">
            <Image
              src={m.logo}
              alt={`${m.org} logo`}
              fill
              sizes="180px"
              className="object-contain object-left"
            />
          </div>
        ) : (
          <span className="text-3xl" aria-hidden>
            {m.icon}
          </span>
        )}
      </div>

      <h3 className="mt-4 text-lg font-bold tracking-tight">{m.org}</h3>
      {m.blurb ? <p className="mt-1 text-sm text-muted">{m.blurb}</p> : null}
      {m.location ? (
        <div className="mt-1">
          <Meta icon={FiMapPin}>{m.location}</Meta>
        </div>
      ) : null}

      {m.roles ? (
        <div className="mt-4 space-y-1.5">
          {m.roles.map((r, i) => (
            <div key={i} className="flex items-baseline gap-2 text-sm">
              {i > 0 ? (
                <span className="text-accent" aria-hidden>
                  ↑
                </span>
              ) : null}
              <span className="font-medium">{r.title}</span>
              <span className="mono ml-auto whitespace-nowrap text-xs text-muted">
                {r.period}
              </span>
            </div>
          ))}
          {m.roles.length > 1 ? (
            <p className="mono text-[0.7rem] text-accent">↑ promoted</p>
          ) : null}
        </div>
      ) : null}

      {m.achievements ? (
        <div className="mt-4 space-y-2">
          {m.achievements.map((a, i) => (
            <div
              key={i}
              className="rounded-lg border border-border bg-background px-3 py-2"
            >
              <div className="flex items-baseline gap-2">
                <span className="text-accent" aria-hidden>
                  ★
                </span>
                <span className="mono text-sm font-semibold">{a.metric}</span>
                <span className="mono ml-auto text-xs text-muted">{a.date}</span>
              </div>
              <p className="mt-0.5 text-xs text-muted">{a.title}</p>
            </div>
          ))}
        </div>
      ) : null}

      {m.projects ? (
        <div className="mt-4">
          <h4 className="mono text-[0.7rem] uppercase tracking-widest text-muted">
            Academic projects
          </h4>
          <ul className="mt-2 space-y-1.5">
            {m.projects.map((p) => (
              <li key={p.name} className="text-sm">
                <span className="font-medium">{p.name}</span>
                <span className="mono ml-2 text-xs text-muted">{p.period}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {m.note ? (
        <details className="story mt-4">
          <summary className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted transition-colors hover:border-accent hover:text-accent">
            <span className="chev text-accent">›</span>
            <span className="lbl-closed">what I learned</span>
            <span className="lbl-open">close</span>
          </summary>
          <p className="hand mt-3 text-xl leading-snug text-foreground">{m.note}</p>
        </details>
      ) : null}
    </article>
  );
}
