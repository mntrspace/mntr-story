import type { ReactNode } from "react";
import type { IconType } from "react-icons";

// Small icon + text metadata chip (location, dates, …).
export function Meta({ icon: Icon, children }: { icon: IconType; children: ReactNode }) {
  return (
    <span className="mono inline-flex items-center gap-1.5 text-xs text-muted">
      <Icon className="shrink-0 opacity-70" aria-hidden />
      {children}
    </span>
  );
}
