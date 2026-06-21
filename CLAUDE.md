# CLAUDE.md — mntr-story

Guidance for Claude Code (and other agents) working in this repo.

> **Next.js 16 note:** this project uses Next.js 16 (App Router, React 19), which has breaking changes
> vs older versions. See `AGENTS.md` — read `node_modules/next/dist/docs/` before using unfamiliar
> Next.js APIs rather than relying on training data.

## What this is

The **public personal portfolio** for Mantra Manan Saraswat. Live at
**https://mntr-storyspace.vercel.app**. Routes:

- `/` — home (hero, about, achievements, experience, skills, projects, showcase, education, volunteer)
- `/journey` — horizontal-scroll life/career timeline (Born → school → work) + name pronunciation
- `/quote-off` — quotes collection (two-panel scroll-snap)
- `/interesting` — Quote Off + Goodreads links (two-panel scroll-snap)

## ⚠️ Privacy boundary (important)

This repo is **PUBLIC**. Only public-facing bio/portfolio content belongs here.
**NEVER** add private content from the Obsidian vault (`mntr-obsidian-space`) — salary negotiations,
finances, daily journals, internal/work docs, credentials, client names under NDA. When in doubt,
leave it out.

## Publishing safety — sensitivity scan (enforced)

A scanner guards every commit and push so nothing sensitive ships by accident.

- **Run anytime:** `npm run check`. **Automatic:** git hooks (`.githooks/pre-commit`, `pre-push`),
  installed via `npm install` (the `prepare` script sets `core.hooksPath`). A flagged commit/push aborts.
- **Secrets** (keys, tokens, service-account JSON, `.env`) → always hard-blocked.
- **Private content** (salary/ESOP/cap-table/₹ terms, vault paths, credential filenames) → blocked,
  override with `ALLOW_SENSITIVE=1 git push`.
- **Claude (you): never bypass on your own.** If blocked, STOP and show the finding; only use
  `ALLOW_SENSITIVE=1` / `--no-verify` when the user *explicitly* says so — the override is THEIR permission.
- Patterns live in `scripts/check-sensitive.mjs`; mark a false positive with a `sensitivity-ok`
  comment. (`CLAUDE.md` / `README.md` are exempt from the *private-content* rules so policy-word
  examples here don't self-trip.)

## Content

- **Source of truth for the _information_:** the private **Obsidian vault**
  (`~/Documents/GitHub/mntr-obsidian-space`); the public Notion page
  (`mntr-space.notion.site/Mantra-Manan-Saraswat`) mirrors much of it.
- **Source of truth for what the _site renders_:** the typed data in `lib/` — a hand-curated,
  public-safe **projection**. Components are pure presentation.
  - `lib/content.ts` — profile, socials, achievements, experiences (grouped by company; per-role
    highlights + reflection + quote), skills (+ tools), projects + bitsProjects, education, volunteer,
    showcase, interesting, pronunciation, resume.
  - `lib/journey.ts` — `/journey` milestones (born → schools → jobs).
  - `lib/quotes.ts` — `/quote-off` quotes.
  - `lib/logos.ts` — org/school name → logo path (used by `components/org-logo.tsx`).
- **Flow:** vault (private) → cherry-pick public-safe subset → `lib/*` (public) → site. **Not**
  auto-synced — deliberately manual so private notes can't leak. To update the site, edit `lib/*`.

## Architecture

- Next.js 16 App Router, React 19, TypeScript, Tailwind v4. **Mostly Server Components**, with a few
  **client islands** for interactivity: `site-header` (scroll-collapsing header), `journey-timeline`
  (horizontal scroll + jump nav), `quote-of-day` (daily-rotating spotlight), `pronounce` (audio
  player), `snap-scroll` (toggles full-page scroll-snap on /quote-off + /interesting). Keep components
  server-side unless they genuinely need interactivity.
- `app/layout.tsx` — fonts (Geist + Caveat via `next/font`) + metadata. `app/page.tsx` composes the
  home sections. Theme tokens in `app/globals.css`.
- Theme: light/editorial. Color tokens (`background`, `foreground`, `muted`, `border`, `accent`,
  `card`) are CSS vars exposed via `@theme inline` → use `text-muted`, `bg-card`, `border-border`,
  `text-accent`. Fonts use the `.mono` / `.serif` / `.hand` utility classes (not the Tailwind font
  utilities), robust against Tailwind v4 `@theme inline` font-var resolution. Expandable accordions
  reuse the `.story` `<details>` pattern (chev / lbl-open / lbl-closed).
- Shared bits: `components/section.tsx` (section wrapper), `org-logo.tsx` (logo via `lib/logos.ts`),
  `meta.tsx` (icon+text chips — react-icons Feather `FiMapPin` / `FiCalendar`), `social-links.tsx`
  (brand icons + filled brand-color hover; `iconOnly` variant for the header).
- **No shadcn/ui** — kept lean for a content site. Add later with `npx shadcn@latest init -d` if needed.
- Assets: `app/icon.png` favicon; `public/logos/*` org logos; `public/{avatar,about,horizon}.*`
  imagery; `public/mantra-pronunciation.m4a` audio; `public/Mantra-Manan-Saraswat-Resume.pdf` résumé
  (linked from the hero; the displayed date lives in `resume.updated` in `lib/content.ts`).

## Design

Light/editorial, intentionally simple — a redesign is expected. Because content lives in `lib/*`, it
survives any redesign of `components/` + `globals.css`.

## Deploy

Vercel project `mntr-storyspace`, GitHub push-to-deploy on `main` →
**https://mntr-storyspace.vercel.app**. Update `metadataBase` in `app/layout.tsx` for a custom domain.

## Relationship to the vault

`~/Documents/GitHub/mntr-obsidian-space` = private knowledge base (Life OS) and the **upstream source
of truth** for the bio/career facts surfaced here. **This** repo = the public showcase, holding only
the curated public projection. Separate by design — never auto-synced.
