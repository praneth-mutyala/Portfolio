# Experience Section — Spec

## Roles included (reverse chronological)
1. Generative AI Engineer — Northern Trust, Remote (Sep 2025 – Present)
2. AI/ML Engineer — Humana, Remote (May 2024 – Aug 2025)
3. Python Developer — Birlasoft, Hyderabad (Apr 2021 – Jul 2023)

## Content model (per role entry)
- title (role)
- company
- location
- startDate
- endDate (nullable — null renders as "Present")
- bullets (array of strings, full detail, no truncation)

Lives in `src/data/experience.js` as an array of objects, ordered reverse-chronological (most recent first).

## Layout
- Vertical timeline: connecting line down the left with a dot per entry, accent cyan
- Each entry header: role, company, location, date range
- Full bullet list below the header, always visible
- Date range shown as-is (e.g. "Sep 2025 – Present") — no computed duration

## Interactivity
- No expand/collapse, no filtering
- No tech tag pills — bullets are prose only, not parsed into tags
- No resume download button (no PDF exists in `src/assets` yet — revisit once one does)

## Edge cases
- Ongoing role (no `endDate`) → renders "Present"
- Layout must not assume exactly 3 entries (works for 1..n)
- No truncation on long bullet lists — page scrolls

