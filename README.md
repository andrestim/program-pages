# Programme Landing Pages

A configuration-driven site of institutional programme pages: **API Broker** (the approved reference), **Affiliate**,
**Market Maker** and **OTC**. They share one visual language; each page has its own composition and imagery
(see `ART-DIRECTION.md`).

```
npm install
npm run dev        # http://localhost:5178
npm run build      # typecheck + production build to dist/
```

- No parameter shows the hub, which lists every programme.
- `?program=<id>` opens a programme: `api-broker`, `affiliate`, `market-maker`, `otc`.
- `?review` highlights every claim or link that still needs sign-off, with the reason.

**Access code.** The site opens behind a courtesy access gate (default `8888`; see `src/site/Gate.tsx` to change it).
It keeps casual visitors and search engines out; it is not security, because a static site ships every page to the browser.

**Deploy.** Every push to `main` builds and publishes to GitHub Pages (`.github/workflows/deploy.yml`). The build uses a
relative base, so it works under any sub-path.

> **Building another programme page?** Start with [PROGRAMME-SYSTEM.md](PROGRAMME-SYSTEM.md): components, content rules, art direction and the new-page checklist.

## Creative direction

**Graphite, light, and one meeting point.** The hero is the only expressive moment: a single sculpted surface lit
from one side, set in deep negative space with the copy in the dark half (asymmetric balance, calm, nothing distressed).
Every section after it is flat graphite, hairlines and type, and the page closes on flat graphite with the Platinum
button as its only light.

Quality comes from proportion and restraint: one bright object per screen (the soft-white primary button), hairline
structure instead of boxed cards, headings that carry each section without kickers or decorative numbering, and a single
smoked-glass panel for the technical UI. The full system lives in `DESIGN.md`.

## Structure

```
src/
  program/types.ts        ProgramConfig schema — the contract every programme fills in
  program/ProgramPage.tsx Shared page frame: hero, the programme's own ordered sections, closing
  programs/<id>.ts        Each programme's content, links and review notes
  site/                   Hub (programme index) and the access gate
  programs/_template.ts   Starting point for the next programme
  components/             Header, Hero, Benefits, FeatureSteps, ProgramDetails, Faq, ClosingCta, Footer, primitives
  system/tokens.css       Colour, type, spacing, radius and motion tokens
  system/base.css         Reset, layout primitives (.container, .section, .section-head), reveal, review mode
scripts/grade_images.py   Grades any photo into the palette and exports dithered responsive WebP
```

What varies per programme: copy, links, nav labels, the hero image, feature-panel data, and optional token overrides
(`theme: { '--accent': '…' }`). Everything else — layout, grid, components, motion, responsive rules — is shared.

Sections:

| # | Section | Component | Notes |
| --- | --- | --- | --- |
| 01 | Hero | `Hero` | Full-bleed photo ≥768px; copy-first recomposition on mobile |
| 02 | Benefits | `Benefits` | Three equal editorial columns on one hairline rule |
| — | Partners (optional) | `PartnerLogoStrip` | Configurable logo strip; verified partners and authentic files only |
| 03 | Feature | `FeatureSteps` | Accessible vertical tabs + technical panel (`flow`, `code`, `ledger` kinds) |
| 04 | Programme | `ProgramDetails` | Process timeline + technical-data terms table |
| 05 | FAQ | `Faq` | Accordion, multiple open, first open by default |
| 06 | Closing | `ClosingCta` | Image-free statement + same primary action |

## Tokens (summary)

| Group | Values |
| --- | --- |
| Surfaces | `--bg #0b0c0e`, `--bg-raised #101114`, `--surface #14161a` |
| Text | `--text #eceef1`, `--text-2 #a2a7ae`, `--text-3 #80858c` (all WCAG AA) |
| Accent | `--accent #9eb1c4` (desaturated steel — two uses only: active flow nodes, highlighted code line) |
| Type | Inter Variable (optical sizes); JetBrains Mono only for code, identifiers and ordered numerals. Display 40→60px, statement 32→48px, H2 30→40px, body 17px |
| Layout | 1200px max content, 12-col grid, 24px gap, gutters 20→40px, section rhythm 88→160px |
| Motion | `--ease-out cubic-bezier(.22,1,.36,1)`; 260ms UI, 560ms entrances; one 12px entrance per section heading |

## Motion

- CTA: colour + 3px arrow shift (260ms). Text links draw an underline.
- Entrances: one per section heading (560ms, 12px rise) via IntersectionObserver; content is visible without JS.
- Tabs and accordion: `grid-template-rows` 0fr→1fr, so no height measuring.
- Hero: copy rises once via CSS keyframes (never waits on script); photo fades in on decode; one 16s light drift.
- Header turns to frosted glass on scroll; its CTA only appears while no in-page primary CTA is visible.
- `prefers-reduced-motion`: durations collapse to 0, light drift stops, reveals become plain opacity.

## Content sources (checked 2026-10-30)

- Primary: the existing Broker Programme page (crypto.com/exchange/broker-programme) and its registration form.
- Secondary: the Help Centre articles (API Broker Programme, Fast API, Sub-brokers) and the Broker Program API docs.
- Competitor pages (OKX, Bitget, Bybit) were used only for which questions prospects ask, not wording or layout.

## Content integrity

Every factual claim on the page is source-tagged in `src/programs/api-broker.ts`, following the hierarchy in
`PRODUCT.md`. The full audit is in [CONTENT-AUDIT.md](CONTENT-AUDIT.md). It covers:

- confirmed claims and their sources;
- illustrative and placeholder content;
- items flagged **NEEDS BUSINESS CONFIRMATION**, most importantly payout cadence, which the programme page states as both
  daily and monthly.

Open the page with `?review` to see each flag in place.

Placeholder wordmark `EXCHANGE` is used instead of any real logo.
