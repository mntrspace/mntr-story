import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        {eyebrow ? (
          <p className="mono text-xs uppercase tracking-widest text-accent">
            {eyebrow}
          </p>
        ) : null}
        {title ? (
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
        ) : null}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
