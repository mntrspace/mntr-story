import Image from "next/image";
import { profile, socials } from "@/lib/content";
import { SocialLinks } from "@/components/social-links";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-12 pt-14 sm:pt-20">
      <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
        <Image
          src="/avatar.png"
          alt="Illustrated portrait of Mantra Manan Saraswat"
          width={160}
          height={160}
          priority
          className="h-32 w-32 rounded-full border border-border object-cover sm:h-40 sm:w-40"
        />
        <div>
          <p className="mono text-sm text-accent">Hi, I&apos;m Mantr 👋</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 max-w-xl text-lg text-muted">{profile.tagline}</p>
          <div className="mt-5">
            <SocialLinks socials={socials} />
          </div>
        </div>
      </div>
    </section>
  );
}
