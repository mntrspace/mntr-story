import { socials } from "@/lib/content";
import { SocialLinks } from "@/components/social-links";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          © 2026 Mantra Manan Saraswat · Perpetually Work-in-Progress
        </p>
        <SocialLinks socials={socials} />
      </div>
    </footer>
  );
}
