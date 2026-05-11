# AMT — Consulting Website

Premium, 3D-animated marketing site for **AMT**, a consulting firm covering EU
funds, financial-accounting services and tax consulting. Built as a one-page
experience that can be split into dedicated pages later without restructuring
the codebase.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with a custom corporate theme
- **Framer Motion** for orchestrated animations
- **React Three Fiber** + **drei** + **three.js** for the 3D scenes
- **GSAP** available as a dependency for additional scroll work
- Fully responsive, dark, premium aesthetic with glassmorphism and aurora
  backgrounds

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server (http://localhost:3000)
npm run dev

# 3. Production build
npm run build
npm run start
```

> Node 18.17+ is required.

## Project structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout, fonts, SEO metadata
│   ├── page.tsx                # Home (assembles every section)
│   ├── globals.css             # Tailwind layers + design tokens
│   ├── politica-confidentialitate/page.tsx
│   ├── termeni-conditii/page.tsx
│   └── gdpr/page.tsx
├── components/
│   ├── Header.tsx              # Sticky glass header + mobile menu
│   ├── Footer.tsx              # Footer with navigation & contact
│   ├── LoadingScreen.tsx       # Premium loading splash
│   ├── LegalLayout.tsx         # Shared layout for legal pages
│   ├── sections/               # Page sections (Hero, About, Services, …)
│   └── three/                  # React Three Fiber scenes
├── hooks/
│   ├── usePrefersReducedMotion.ts
│   └── useIsMobile.ts
├── lib/
│   ├── content.ts              # All editable text & placeholders
│   ├── motion.ts               # Framer Motion variants
│   └── utils.ts                # `cn` class helper
public/
├── images/                     # Static images (poster, og, …)
└── videos/                     # Drop `amt-hero.mp4` here for the hero video
```

## Where to edit what

| Need to change…                  | Edit                                           |
| -------------------------------- | ---------------------------------------------- |
| Copy (headlines, bullets, FAQs)  | `src/lib/content.ts`                           |
| Contact details / company info   | `src/lib/content.ts` → `company`               |
| Placeholder metrics              | `src/lib/content.ts` → `metrics`               |
| Navigation entries               | `src/lib/content.ts` → `navigation`            |
| Services list                    | `src/lib/content.ts` → `services`              |
| Case studies                     | `src/lib/content.ts` → `caseStudies`           |
| FAQs                             | `src/lib/content.ts` → `faqs`                  |
| SEO (title, description, keys)   | `src/lib/content.ts` → `seo`                   |
| Brand colors                     | `tailwind.config.ts` (`accent`, `gold`, `ink`) |
| Global styles, gradients, glass  | `src/app/globals.css`                          |
| Animation variants               | `src/lib/motion.ts`                            |
| Hero video                       | Drop `amt-hero.mp4` in `public/videos/`        |
| Hero / 3D scenes                 | `src/components/three/*.tsx`                   |
| Section layouts                  | `src/components/sections/*.tsx`                |
| Legal copy                       | `src/app/{politica…,termeni…,gdpr}/page.tsx`   |

### Hero video

The hero references `/videos/amt-hero.mp4`. The video is:

- `muted` / `autoplay` / `loop` / `playsInline`
- hidden on mobile (the 3D scene is the fallback)
- if the file is missing or fails, the layered 3D scene + aurora gradient acts
  as the fallback

To customise the poster used while the video loads, replace
`public/images/hero-poster.svg`.

### Placeholder values

Anywhere you see `XX`, `[de completat]`, or `[valoare de completat]`, the value
is a placeholder. These intentionally do **not** assert numbers or guarantees
about AMT before real data is provided. Replace them in `src/lib/content.ts`.

## Performance & accessibility

- 3D scenes are **dynamically imported (SSR off)** and only mount when the
  containing section enters the viewport.
- The site respects `prefers-reduced-motion` (animations are tamed both in
  Tailwind and in the 3D layer via `usePrefersReducedMotion`).
- The hero video is skipped on mobile / narrow viewports to save bandwidth.
- Fonts are loaded via `next/font` with `display: swap`.
- All interactive elements are keyboard reachable; semantic landmarks are used.

## Brand & content guardrails

The site explicitly avoids:

- inventing AMT statistics (clients, projects, sums, years of experience),
- guaranteeing approval of EU funding or fiscal outcomes,
- displaying official EU / ANAF / Comisia Europeană logos.

If you add real metrics or program-specific information, replace the
placeholder strings in `src/lib/content.ts` and remove the `placeholder: true`
flag on each metric.

## License

Proprietary — © AMT.
