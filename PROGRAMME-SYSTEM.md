# Programme Page System

How to build an Exchange programme page (API Broker, Affiliate, Market Maker, OTC) from the shared parts.
The API Broker page is the approved reference. Every page shares one visual language (tokens, type, rhythm, motion, materials), but each page's structure follows its own content: sections are picked from one library and ordered per programme, and each programme gets its own hero illustration.

| Document | Holds |
| --- | --- |
| `PROGRAMME-SYSTEM.md` (this file) | How the system fits together and how to use each component |
| `DESIGN.md` | Full visual spec: tokens, named rules, component details, do's and don'ts |
| `PRODUCT.md` | Audience, constraints, source hierarchy, content-integrity rules |
| `CONTENT-AUDIT.md` | Claim-by-claim sources for the API Broker page |
| `CONTENT-AUDIT-DRAFTS.md` | Sources, omissions and open questions for the Affiliate, Market Maker and OTC drafts |

## 1. Structure

```
src/
  system/tokens.css        all colours, type, spacing, radii, elevation, motion
  system/base.css          reset, .container / .section / .section-head, reveal, review mode
  system/breakpoints.ts    breakpoints for script (CSS repeats the same literals)
  program/types.ts         ProgramConfig: the content contract
  program/ProgramPage.tsx  the page: fixed section order, sections render only if present
  components/              one component per section, plus primitives (Cta, SectionHead, …)
  programs/<id>.ts         one config per programme; _template.ts to start a new one
  programs/index.ts        registry (?program=<id> selects)
  programs/shared.ts       CONFIRM prefix, image helper, the borrowed draft hero and legal line
public/assets/<id>/        that programme's graded hero image
public/assets/partners/    authentic partner logos + SOURCES.md
scripts/grade_images.py    grades any photograph into the system palette
```

Content lives only in `programs/<id>.ts`. Presentation lives only in `components/` and `system/`.
A new page should not need any change outside its config and its assets.

## 2. Foundations (summary; exact values in `tokens.css`, rationale in `DESIGN.md`)

| Area | Tokens |
| --- | --- |
| **Surfaces** | `--bg` Graphite Night `#0b0c0e`; `--bg-raised` `#101114` (the one lifted panel only) |
| **Text** | `--text` Platinum, `--text-2` Satin Silver, `--text-3` Pewter. All pass WCAG AA on both surfaces. |
| **Accent** | `--accent` Blue Titanium. Use for focus rings, the attributed code line and the current-step ring only. |
| **Lines** | `--line` (rows), `--line-2` (block rules, panel border), `--line-3` (rails, hover rules) |
| **Material** | `--plate-press`, `--identifier-wash`, `--code-inset`, `--header-glass`, `--hero-light`, `--panel-sheen` |
| **Elevation** | `--shadow-panel` (one panel per page), `--shadow-plate` and `--shadow-plate-bloom` (primary CTA) |
| **Type** | Inter Variable. Display 40→60, statement 32→48, headline 30→40, title 20, lede 17→20, body 17, small 15, UI 14, caption 13. Mono (JetBrains) for code, identifiers and ordered numerals only. Max weight 500. |
| **Layout** | 1200px measure, 12 columns, 24px gutter, page gutter 20→40px, section rhythm 88→160px. Paired blocks start content at column 5. |
| **Radii** | `--radius-pill` (buttons), `--radius-l` 18 (panel), `--radius-m` 12 (code well), `--radius-s` 6 (tags), `--radius-xs` 4 (identifiers, focus) |
| **Motion** | `--ease-out` default, `--ease-in-out` (sheen), `--ease-soft` (long hairline draws). Durations: press 120 · quick 200 · default 260 · enter 300 · slow 560 · draw 960 / draw-out 640 · hero-in 900 · sheen 1100 · photo 1600 · light 2400 ms. Reduced motion keeps 150ms fades and drops all travel. |
| **Breakpoints** | 420 · 767/768 · 860 · 1023/1024 · 1199/1200 (see `breakpoints.ts`) |

## 3. Page anatomy

The hero comes first and the closing last; both are required. Between them, `sections` lists any of the kinds below, in the order the programme's own page needs (the `#` column is only the API Broker order). A kind can be used more than once. Choose kinds by what the content is, not to fill a template:

| # | Component | Config key | Required | Content shape and rules |
| --- | --- | --- | --- | --- |
| 1 | `Hero` | `hero` | Yes | Two-sentence headline (the second line renders in Satin Silver). Lede that names the programme. One primary CTA, plus an optional text link. Optional audience list. One graded photograph, with an optional mobile portrait crop. |
| 1b | `KeyFigures` | `figures` | No | 2–4 headline numbers straight after the hero (`value`, optional `prefix` such as "Up to", `label`). Primary-source figures only; the first is the lead claim. |
| 2 | `Benefits` | `benefits` | No | 2–4 items (3 is the default rhythm), each a title and short body. No icons or numbers. Optional `image` per item: a material vignette, given to every item or to none (see section 5). |
| 3 | `PartnerLogoStrip` | `partners` | No | Only partners the programme's existing page lists. Authentic logo files only. Give each logo's intrinsic `width`/`height`; optical sizing and the muted treatment are automatic. |
| 4 | `FeatureSteps` | `feature` | No | 2–4 ordered steps (label, title, body). Every step needs a panel: `flow` (stages; optional quoted `action`; `emphasis` only for the current step), `formula` (a documented calculation as named terms; optional `example` figures on every term, anchored to a published number and called illustrative in the note), `code` (a documented example; wrap the key line in ⟦ ⟧; optional `annotation` names it), or `ledger` (verified data only). |
| 5 | `ProgramDetails` | `details` | No | A `process` timeline (2–5 steps on one rail, numbered automatically), a `terms` table, or both. Inline identifiers like `broker_id` are set as code automatically. |
| 6 | `Faq` | `faq` | No | 4–6 questions. The first opens by default. Optional `contact` line (lead text plus a link) under the list. |
| 7 | `ClosingCta` | `closing` | Yes | Statement, one sentence, and the same primary action. No image. When the live page splits its application by audience, `paths` (2–3) gives each its own column and plate. Optional `note` for fine print such as an eligibility disclaimer. |
| — | `Estimator` | `estimator` | No | A published calculator, step by step: `steps` copy each published input and output, `initial` is the live default. Never computed or extrapolated. A lifted panel with a ring rail (filled ring = selected). Affiliate. |
| — | `Audience` | `audience` | No | Who the programme is for, as a ruled two-column list of large light names. Affiliate. |
| — | `Grid` | `grid` | No | 3–6 ruled peers (perks, channels, features) in three columns: title, body, optional `link` each; optional footnote `note`. Denser than Benefits. Affiliate, Market Maker, OTC. |
| — | `SpecSheet` | `specs` | No | Termsheet rows: term, headline value (optional `prefix`), one line of detail. Primary-source values only. Market Maker, OTC. |
| — | (layouts) | `layout` on a section | No | Composition variants, so pages share parts without sharing a look:
- `estimator`: `panel` / `arc`
- `audience`: `list` / `roll`
- `grid`: `cells` / `ledger` / `schedule`
- `specs`: `rows` / `termsheet` (with `columns`, `notes` and row `mark`)
- `benefits`: `columns` / `plate` (with `plate`)
- `range`: `panel` / `threshold`
- `hero.layout`: `standard` / `horizon` / `tall`
- `closing.layout`: `standard` / `signature` / `doors`
- any section's `head`: `split` / `stacked`

See DESIGN.md. |
| — | `Pathway` | `pathway` | No | A conceptual left-to-right diagram, 3–5 stages, in the lifted panel. Only stages the primary page names; the `note` says it is conceptual. Market Maker. |
| — | `Range` | `range` | No | One published span (`min` → `max`) with an optional dashed `beyond`. OTC ticket size. |

**Shared chrome**
- `SiteHeader`: wordmark, programme label, and nav. Nav items pointing at absent sections are dropped. The CTA appears only while no in-page CTA is visible.
- `SiteFooter`: legal line plus automatic photo credit.

**Shared fields**
- **`review`:** any item can carry it. It is invisible normally and highlighted with `?review`. Prefix conflicts with `NEEDS BUSINESS CONFIRMATION:`.
- **Links:** `LinkConfig.href: null` renders a disabled control. Never fake a destination.

## 4. Building a new programme page

1. **Collect sources first.** Use the programme's existing page as primary, then Help Centre and docs, per `PRODUCT.md`. Start that programme's `CONTENT-AUDIT`.
2. **Copy the template.** Copy `programs/_template.ts` to `programs/<id>.ts`. Delete the optional sections the content does not support, and fill the rest with source-tagged copy.
3. **Prepare the hero image.** Follow the art direction in section 5 below, then run:
   `python scripts/grade_images.py <source> public/assets/<id> hero` (add `--crop` for the portrait).
4. **Register the page.** Add it to `programs/index.ts`, then open `?program=<id>&review` and check it at 375 / 768 / 1024 / 1440.
5. **Run the checks.** Run `npm run build` and the Impeccable detector (`impeccable detect src index.html`). Both should be clean.

## 5. Hero art direction (shared across programmes)

- One precision-made object or surface, lit from one side, on deep graphite, with negative space for the copy on the left.
- Clean metal, glass or machined forms. No people, logos, coins, screens, neon, grain or distressed texture.
- Grade it with `grade_images.py` so its black point equals `--bg`. The image must dissolve into the page, with no visible edge.
- Each programme may use a different object, but the light, grade and composition must match the API Broker hero.
- Record the source and licence in `public/assets/<id>/CREDITS.md` (and in `hero.image.credit` for a photograph with an author).
- Generated heroes: request them through `asset-requests/` (README, manifest, prompts; `v2/` is the approved, cropped-environment brief), then grade them with `grade_images.py` like a photograph. `scripts/pad_hero.py` exists for a subject that sits whole on a void and needs more negative space, but the approved direction avoids such subjects.

**Benefit vignettes (optional)** extend the same art direction to small studio objects: clean titanium, smoked glass or steel, with one upper-left key light. Each composition is distinct, but all are generated or shot as one series. Keep raw files in `source-art/`, then crop and grade them together:
`python scripts/grade_images.py <raw> public/assets/<id>/benefits <name> --crush <bg level> --crop l,t,r,b --widths 720,1080`
Measure the raw background first. Generated "black" is usually 8–12, so crush just above it until the corners equal `--bg`.

## 6. Extending the system (only when content demands it)

- **New panel kind** (e.g., a verified comparison table): add a type to `FeaturePanel` in `types.ts` and a renderer in `FeatureSteps.tsx`. Reuse the existing tokens.
- **New section kind:** add it to the `ProgramSection` union in `types.ts` and a case in `ProgramPage`'s `Section`. Build it from existing tokens, hairlines and motion; prefer reusing a kind with different content before adding one.
- **Theme:** `theme` can override tokens per programme. Keep the palette unless brand convergence requires a change.

## 7. Known limitations

- **Hero preload is a table in `index.html`.** An inline script preloads only the selected programme's hero, using widths listed per programme. Keep that table in step with each config. Production should give each programme its own HTML entry (Vite multi-page inputs) with static preload links.
- **Programme selection is query-string only.** `?program=<id>` is fine for review builds. Production should map one URL per programme.
- **Breakpoints are duplicated.** CSS media queries repeat the breakpoint literals; keep them in step with `breakpoints.ts`.
