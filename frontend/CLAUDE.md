# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack
- React 19 (Vite) + Tailwind CSS v4 (theme tokens in `src/index.css` via `@theme`, no `tailwind.config.js`)
- react-router-dom, using `HashRouter` — required because this deploys as a static site to GitHub Pages, which has no server-side rewrite support for client-side routes
- No backend yet — Phase 1 is fully static, deploys to GitHub Pages
- Node via nvm
- Not a git repository (no `.git`) — don't attempt git operations here

## Commands
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — run oxlint
- `npm run preview` — preview the production build

No test suite is configured yet.

## Structure
- `src/pages/` — one component per route (`Home`, `Experience`, `Projects`, `Skills`, `Contact`), wired to URLs in `src/App.jsx` via `<Routes>`. The site was originally a single-page scroll design (`src/sections/`) and has since moved to real routing — don't reintroduce anchor-scroll nav.
- `src/components/` — reusable UI shared across pages (e.g. `Navbar`)
- `src/data/` — content as JS objects (e.g. `projects.js`), imported and rendered by pages/components — content is never hardcoded directly in JSX
- `src/assets/` — images, resume PDF
- `public/icons.svg` — a single SVG sprite of icons, referenced with `<use href="/icons.svg#some-id" />`, used for generic UI icons (nav, social links, etc.)
- `react-icons` — used specifically for tech/brand logos (e.g. Skills page stack icons); don't move these into the sprite

## Design system
- Dark theme only, no light mode: bg `#0a0e14`, surface `#111722`, border `#1f2733`, accent cyan `#22d3ee`
- 5 routes — `/`, `/experience`, `/projects`, `/skills`, `/contact` — navigated via a persistent `Navbar`. `HashRouter` means URLs look like `/#/projects`; this is intentional so direct links and refreshes work on GitHub Pages without rewrite config.

## Conventions
- Functional components only, no class components
- Content lives in `src/data/`; components/pages just render it
- Don't add new npm packages without asking first
- Each page gets its content/layout spec worked out with the user before being built (interactively, sometimes captured in `SPEC.md`) — don't fabricate copy, bios, links, or content that hasn't actually been provided
