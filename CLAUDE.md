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

## Content

- **Source of truth:** `lib/content.ts` — all text lives here as typed data.
  To update the site, edit this file. Components are pure presentation.
- **Canonical bio:** the public Notion page
  (`mntr-space.notion.site/Mantra-Manan-Saraswat`) and the private vault.
  This repo holds a curated, hand-picked subset — content is **not** auto-synced
  from the vault (deliberate, to avoid leaking private notes).

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

`~/Documents/GitHub/mntr-obsidian-space` = private knowledge base (Life OS).
**This** repo = the public showcase. Separate by design.
