# mntr-story

Personal portfolio for **Mantra Manan Saraswat** — a public showcase of bio, experience, and work. Built with Next.js.

> **Content source of truth:** [`lib/content.ts`](./lib/content.ts). Edit that file to update the site — the components are pure presentation.

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4**
- Static, all Server Components (no client-side JS)
- Deploys on **Vercel**

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npm run lint     # eslint
```

## Structure

```
app/
  layout.tsx            root layout — Geist fonts + metadata
  page.tsx              composes the section components
  globals.css           theme tokens + base styles
  icon.png              favicon (auto-wired by Next.js)
  apple-icon.png        apple touch icon
  opengraph-image.png   social share preview
components/              one component per section (hero, about, experience, …)
lib/
  content.ts            ← ALL site content lives here (typed data)
public/
  avatar.png            hero portrait
  portrait.png          about-section portrait
  horizon.png           closing "horizon" quote banner
```

## Editing content

Everything you'd want to change — bio, tagline, experience, skills, projects,
education, links — is typed data in `lib/content.ts`. Update the data and the
site reflects it. Design lives entirely in `components/` and `app/globals.css`,
so you can redesign freely without touching content.

## Images

- `app/icon.png` → browser-tab favicon (Next.js generates the `<link>` tags from it)
- `public/*.png` → page imagery, rendered via `next/image`

## Deploy

Push to `main`, import the repo on [Vercel](https://vercel.com/new), and it
auto-deploys on every push. Update `metadataBase` in `app/layout.tsx` to the
final domain (e.g. `https://mntr.space`) so OG/social tags resolve correctly.
