import Image from "next/image";
import { Section } from "@/components/section";
import { profile } from "@/lib/content";

export function About() {
  return (
    <Section id="about" eyebrow="About">
      <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-start">
        <div>
          <p className="text-lg leading-relaxed">{profile.intro}</p>

          <h3 className="mono mt-8 text-xs uppercase tracking-widest text-muted">
            A little about me
          </h3>
          <ul className="mt-3 space-y-2">
            {profile.traits.map((t) => (
              <li key={t} className="flex gap-2 text-muted">
                <span className="text-accent">→</span>
                {t}
              </li>
            ))}
          </ul>

          <h3 className="mono mt-8 text-xs uppercase tracking-widest text-muted">
            Profile
          </h3>
          <ul className="mt-3 space-y-3">
            {profile.summary.map((s) => (
              <li key={s} className="text-muted">
                {s}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src="/portrait.png"
          alt="Portrait illustration of Mantr"
          width={220}
          height={317}
          className="hidden rounded-xl border border-border sm:block"
        />
      </div>
    </Section>
  );
}
