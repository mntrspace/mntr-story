"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { socials } from "@/lib/content";
import { SocialLinks } from "@/components/social-links";

const navLinks = [
  { href: "#about", label: "About", route: false },
  { href: "#experience", label: "Experience", route: false },
  { href: "#skills", label: "Skills", route: false },
  { href: "#projects", label: "Projects", route: false },
  { href: "#education", label: "Education", route: false },
  { href: "/journey", label: "Journey", route: true },
  { href: "/interesting", label: "Interesting", route: true },
];

// Collapsed header bar: hidden at the top (the big hero is the header there),
// slides + fades in once you scroll past the hero — small pic + name + nav +
// icon-only socials.
export function SiteHeader() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur transition-all duration-300 ${
        shown
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-6">
        <a href="#top" className="flex shrink-0 items-center gap-2">
          <Image
            src="/avatar.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 rounded-full border border-border"
          />
          <span className="hidden truncate text-sm font-semibold tracking-tight sm:inline">
            Mantra Manan Saraswat
          </span>
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-5 lg:flex">
          {navLinks.map((l) =>
            l.route ? (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ),
          )}
        </nav>

        <div className="ml-auto lg:ml-0">
          <SocialLinks socials={socials} iconOnly />
        </div>
      </div>
    </header>
  );
}
