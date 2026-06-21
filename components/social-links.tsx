import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import {
  SiGmail,
  SiGithub,
  SiX,
  SiInstagram,
  SiYoutube,
  SiBehance,
} from "react-icons/si";
import { FaLinkedin, FaLink } from "react-icons/fa6";
import type { Social } from "@/lib/content";

// Brand icon + brand color, keyed by the social `label` in lib/content.ts.
const SOCIAL_META: Record<string, { Icon: IconType; color: string }> = {
  Email: { Icon: SiGmail, color: "#EA4335" },
  LinkedIn: { Icon: FaLinkedin, color: "#0A66C2" },
  GitHub: { Icon: SiGithub, color: "#181717" },
  X: { Icon: SiX, color: "#000000" },
  Instagram: { Icon: SiInstagram, color: "#E4405F" },
  YouTube: { Icon: SiYoutube, color: "#FF0000" },
  Behance: { Icon: SiBehance, color: "#1769FF" },
};

const FALLBACK = { Icon: FaLink, color: "#6f6f6f" };

export function SocialLink({
  social,
  iconOnly = false,
}: {
  social: Social;
  iconOnly?: boolean;
}) {
  const { Icon, color } = SOCIAL_META[social.label] ?? FALLBACK;
  const isMail = social.href.startsWith("mailto:");
  const common = {
    href: social.href,
    target: isMail ? undefined : "_blank",
    rel: isMail ? undefined : "noopener noreferrer",
    style: { "--brand": color } as CSSProperties,
  };

  if (iconOnly) {
    return (
      <a
        {...common}
        aria-label={social.label}
        title={social.label}
        className="group flex h-7 w-7 items-center justify-center rounded-full border border-border bg-card text-muted transition-colors hover:border-[var(--brand)] hover:bg-[var(--brand)] hover:text-white"
      >
        <Icon className="text-[var(--brand)] transition-colors group-hover:text-white" aria-hidden />
      </a>
    );
  }

  return (
    <a
      {...common}
      className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-muted transition-colors hover:border-[var(--brand)] hover:bg-[var(--brand)] hover:text-white"
    >
      <Icon className="text-[var(--brand)] transition-colors group-hover:text-white" aria-hidden />
      <span>{social.label}</span>
    </a>
  );
}

export function SocialLinks({
  socials,
  iconOnly = false,
}: {
  socials: Social[];
  iconOnly?: boolean;
}) {
  return (
    <div className={`flex flex-wrap ${iconOnly ? "gap-1.5" : "gap-2"}`}>
      {socials.map((s) => (
        <SocialLink key={s.label} social={s} iconOnly={iconOnly} />
      ))}
    </div>
  );
}
