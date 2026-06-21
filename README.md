# mntr-story

Personal portfolio for **Mantra Manan Saraswat** — a public showcase of bio, experience, and work.
Live at **https://mntr-storyspace.vercel.app**.

> **Content source of truth:** the typed data in [`lib/`](./lib) (`content.ts`, `journey.ts`,
> `quotes.ts`, `logos.ts`). Edit those — the components are pure presentation.

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript** · **Tailwind CSS v4**
- Mostly static Server Components + a few small client islands (header, timeline, audio, scroll-snap)
- Deploys on **Vercel**

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npm run lint     # eslint
npm run check    # sensitivity scan (also runs automatically on commit/push)
```

## Routes

- `/` — home: hero, about, achievements, experience, skills, projects, showcase, education, volunteer
- `/journey` — horizontal-scroll life/career timeline + how-to-say-my-name
- `/quote-off` — quotes I keep coming back to (two-panel scroll-snap)
- `/interesting` — Quote Off + Goodreads (two-panel scroll-snap)

## Structure

```
app/
  layout.tsx              root layout — Geist + Caveat fonts, metadata
  page.tsx                home (composes the section components)
  journey/page.tsx        /journey
  quote-off/page.tsx      /quote-off
  interesting/page.tsx    /interesting
  globals.css             theme tokens + base styles
  icon.png / apple-icon.png / opengraph-image.png
components/                section + UI components (hero, experience, showcase,
                           site-header, journey-timeline, pronounce, social-links, …)
lib/
  content.ts              ← most site content (profile, experience, skills, showcase, résumé, …)
  journey.ts              /journey milestones
  quotes.ts               /quote-off quotes
  logos.ts                org/school → logo path
public/
  logos/                  org + school logos
  avatar.png / about.jpg / horizon.png
  mantra-pronunciation.m4a
  Mantra-Manan-Saraswat-Resume.pdf
scripts/check-sensitive.mjs   sensitivity scanner (git hooks live in .githooks/)
```

## Editing content

Everything you'd change — bio, experience (incl. the per-role detail bullets), skills, projects,
showcase, education, the journey, the quotes, the résumé date — is typed data in `lib/`. Update the
data and the site reflects it. Design lives in `components/` + `app/globals.css`, so you can redesign
freely without touching content.

## Deploy

**Live:** https://mntr-storyspace.vercel.app — Vercel project `mntr-storyspace`, push-to-deploy on
`main`. Update `metadataBase` in `app/layout.tsx` for a custom domain (e.g. `mntr.space`).

## Publishing safety

A sensitivity scanner runs before every commit/push (git hooks in `.githooks/`, installed by
`npm install`):

- Blocks **secrets** (keys, tokens, `.env`, service-account JSON) outright.
- Blocks **private content** (salary/comp terms, vault paths, credential filenames) unless you
  override with `ALLOW_SENSITIVE=1 git push`.
- Run manually anytime: `npm run check`. Patterns in `scripts/check-sensitive.mjs`; whitelist a line
  with a `sensitivity-ok` comment.

Defense-in-depth on top of the content model (only `lib/*` is published; nothing auto-syncs from the
private vault).
