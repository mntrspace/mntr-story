# CLAUDE.md — mntr-story

Guidance for Claude Code (and other agents) working in this repo.

> **Next.js 16 note:** this project uses Next.js 16, which has breaking changes
> vs older versions. See `AGENTS.md` — read `node_modules/next/dist/docs/` before
> using unfamiliar Next.js APIs rather than relying on training data.

## What this is

The **public personal portfolio** for Mantra Manan Saraswat (bio, experience,
projects, skills). A static Next.js site, intended for Vercel.

## ⚠️ Privacy boundary (important)

This repo is **PUBLIC**. Only public-facing bio/portfolio content belongs here.

**NEVER** add private content from the Obsidian vault (`mntr-obsidian-space`) —
salary negotiations, finances, daily journals, internal/work docs, credentials,
client names under NDA. When in doubt, leave it out.

## Publishing safety — sensitivity scan (enforced)

A scanner guards every commit and push so nothing sensitive ships by accident.

- **Run anytime:** `npm run check` (scans all tracked files).
- **Automatic:** git hooks (`.githooks/pre-commit`, `.githooks/pre-push`) run it for
  you. They install via `npm install` (the `prepare` script sets `core.hooksPath`).
  A flagged commit/push **aborts**.
- **Secrets** (keys, tokens, service-account JSON, `.env`) → always hard-blocked.
- **Private content** (salary/ESOP/cap-table/₹ terms, vault paths, credential
  filenames) → blocked, with an easy override: `ALLOW_SENSITIVE=1 git push`.
- **Claude (you): never bypass this on your own.** If a commit/push is blocked,
  STOP and show the user the exact finding. Only use `ALLOW_SENSITIVE=1` or
  `--no-verify` when the user *explicitly* tells you to — the override is THEIR
  permission, never yours.
- Patterns live in `scripts/check-sensitive.mjs`; mark a false positive with a
  `sensitivity-ok` comment on that line.

## Content

- **Source of truth for the _information_:** the **Obsidian vault**
  (`~/Documents/GitHub/mntr-obsidian-space`, private) is the canonical home for
  Mantra's bio, career, and project facts. The public Notion page
  (`mntr-space.notion.site/Mantra-Manan-Saraswat`) mirrors much of the same.
- **Source of truth for what the _site renders_:** `lib/content.ts` — a
  hand-curated, public-safe **projection** of the vault. All on-page text lives
  here as typed data; components are pure presentation.
- **Flow:** vault (private, everything) → cherry-pick the public-safe subset →
  `lib/content.ts` (public) → site. Content is **not** auto-synced from the
  vault — it's deliberately manual so private notes can never leak. To update
  the site, edit `lib/content.ts`, pulling fresh facts from the vault as needed.

## Architecture

- Next.js 16 App Router, React 19, TypeScript, Tailwind v4.
- **Server Components only** — no client JS needed. The nav uses anchor links +
  CSS `scroll-behavior: smooth`; don't add `'use client'` unless a feature
  genuinely needs interactivity.
- `app/layout.tsx` — fonts (Geist via `next/font`) + metadata.
  `app/page.tsx` composes `components/*`. Theme tokens live in `app/globals.css`.
- Theme: light/editorial. Color tokens (`background`, `foreground`, `muted`,
  `border`, `accent`, `card`) are CSS vars exposed to Tailwind via `@theme inline`
  → use `text-muted`, `bg-card`, `border-border`, `text-accent`, etc.
  Fonts use the `.mono` class / body default (not the Tailwind font utilities),
  to stay robust against Tailwind v4 `@theme inline` font-var resolution.
- **No shadcn/ui** — kept lean for a content site. It's built for dashboards/data
  UIs and would add Radix deps. Add later with `npx shadcn@latest init -d` only if
  a redesign needs primitives.
- Images: `app/icon.png` is the favicon (file convention); content images in
  `public/`, rendered with `next/image`.

## Design

Intentionally minimal — a starting point. A full redesign is expected; because
content is isolated in `lib/content.ts`, it survives any redesign of
`components/` and `globals.css`.

## Deploy

Vercel, auto-deploy on push to `main`. Update `metadataBase` in `app/layout.tsx`
to the final domain.

## Relationship to the vault

`~/Documents/GitHub/mntr-obsidian-space` = private knowledge base (Life OS) and
the **upstream source of truth** for the bio/career information surfaced here.
**This** repo = the public showcase, holding only the curated public projection
of that information. Separate by design — the vault is never auto-synced.
