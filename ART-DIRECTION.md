# Art direction, Phase 1 — Affiliate, Market Maker, OTC

> ⚠️ DEGRADED: single-context. The critique ran inline rather than as two isolated sub-agents, because this session does not spawn agents unasked. Detector evidence was gathered after the design review was written.

**Status:** approved 2026-10-30 (direction A on all three pages) and implemented. The v2 imagery (three heroes and the OTC plate) is generated, graded and live; sources are in `public/assets/<page>/CREDITS.md`. After review, four v1 images were re-cropped into the same low-key language and placed as single section figures (Affiliate: why partner and how to; Market Maker: Schedule A; OTC: execution). They give the text-only sections a picture without bringing back the vignette row. The Broker page is the benchmark and is untouched.

**Evidence**
- All four pages captured at 1440 px.
- Section-by-section structure measured.
- Live source reviewed.
- Impeccable detector: clean (`[]`). The problems below are matters of art direction, not rule violations.

---

## 1. Why Broker feels more considered

| | API Broker (benchmark) | Affiliate, Market Maker, OTC today |
| --- | --- | --- |
| **Hero image** | A cropped, ambiguous sculpture that bleeds off the top and right edges. Low-key, lit only on its edges. It reads as an environment rather than an object. | Whole objects sitting on a void, fully visible, evenly and brightly lit. They read as catalogue renders or 3D stock, and the metaphors are literal (rings = reach, a gap = spread). |
| **Signature moment** | Interactive integration panels (flow, code, formula) drawn from the real mechanism. They are the page's proof and its peak. | Affiliate has a partial one (the estimator). Market Maker's pathway is a generic four-node diagram. OTC's range is thin. Nothing carries the same weight. |
| **Rhythm** | Dense and light sections alternate: a figures band, vignettes, a partner strip for breath, a heavy interactive panel, then the timeline and terms. | Every section opens with the same head (title on the left, lede on the right) and has similar weight. The scroll becomes a metronome. |
| **Imagery system** | One hero plus one restrained vignette row. | The same three-vignette row appears on all three pages, so they read as Broker clones with different nouns. |
| **Vignettes** | Dark, low-contrast material studies. | Brighter and glossier: a dumbbell, a heat sink, a box. They drift toward "random 3D objects". |
| **Typography** | Only the hero uses type expressively. | No page uses type as an image. Section titles all sit at one size. |
| **Copy** | Every heading is tied to a mechanism. | Some filler headings ("Connected for speed.", "And a team behind every trade."). |
| **Interaction** | Tabs with travelling panels, rules drawn on hover, the CTA sheen, hero parallax. | Static, apart from the estimator. |

### Scorecard (1–5, against Broker = 5)

| Criterion | Affiliate | Market Maker | OTC |
| --- | --- | --- | --- |
| Visual sophistication | 3 | 3 | 3 |
| Art direction | 2 | 2 | 2.5 |
| Hero composition | 2 | 2 | 2.5 |
| Illustration quality | 2.5 | 2 | 2.5 |
| Layout originality | 2.5 | 2.5 | 2 |
| Typography and spacing | 3.5 | 3.5 | 3.5 |
| Visual storytelling | 3 | 2 | 2 |
| Interaction quality | 3.5 | 2 | 2 |
| Overall premium feel | 2.5 | 2.5 | 2.5 |

The foundations hold (tokens, type and spacing). The gaps are composition, imagery and a missing peak.

### Fixes that apply to all three pages
1. **Change the hero image.** Replace "object on a void" with a cropped, low-key subject that bleeds off the frame, as on Broker. Each page gets its own crop logic, not just a different object.
2. **Give each page one peak.** One bespoke section per page, built from that programme's real content, at the weight of Broker's integration panel.
3. **Break the section-head metronome.** Let each page own a different composition: centred, full-bleed, asymmetric or typographic.
4. **Stop repeating the vignette row.** At most one page besides Broker uses vignettes. The others carry their identity through typography, structure or architectural imagery.
5. **Rewrite filler headings.** Each heading should say something only that page can say.

---

## 2. What stays shared, what becomes unique

**Shared on every page**
- Tokens: the graphite, platinum and titanium palette, the type ramp, spacing and radii.
- The header and footer, the CTA plate and its sheen, the FAQ accordion, review mode, the reveal and motion tokens and the hairline vocabulary.
- The photographic grade, with its black point at `#0b0c0e`.
- The closing section's structure, and the content-integrity rules.

**Unique per page**
- Hero composition (crop, placement and copy position).
- The key-visual family.
- One signature section.
- The page's layout signature (how its sections open and pace).
- Its imagery policy.
- Its motion moment. One orchestrated moment per page, never scattered effects.

---

## 3. Affiliate — refined connectivity, relationships, networks

**Why it feels less refined.** The rings hero is a literal emblem of "reach". The audience list is good but plain. Why-partner copies Broker's vignette row. The estimator, the page's real asset, sits in a standard panel at standard size.

### Direction A — "Reach, measured" (recommended)

**The story.** Your audience → their volume → your income, told through the one published thing the page owns: the earnings calculator.

- **Hero.** A macro crop of finely machined concentric grooves. The camera sits close and low, so the arcs sweep off the right and bottom edges like a ripple caught mid-spread. No whole object is visible. The headline sits lower-left, over deep negative space.
- **Signature: the earnings arc.** A full-bleed section with no panel box. The published curve is drawn huge, across the full content width. The five stops sit on a baseline like a ruler, and the selected figure is set at display size.
  - Interaction: pressing a stop draws the curve up to it (one continuous stroke, about 600 ms). The figure settles with a critically damped spring, starting from wherever it currently is, so mid-animation changes are smooth.
  - Keyboard: the arrow keys move along the stops.
  - Content stays to the five published points and "T&Cs apply".
- **Affiliate circle as type.** The six profiles at display scale, two per line, set like a roll call. Type is the image here; there are no boxes.
- **Why partner as a ledger.** A two-column layout: a single statement on the left, and the six benefits as a ruled list on the right. **No vignettes**, which is the cleanest break from Broker.
- **Layout signature.** The page widens and narrows: full bleed (the arc) → display type → narrow ledger.
- **Motion moment.** The curve drawing on its first reveal.

```
┌──────────────────────────────────────────────────────────┐
│ Turn your reach into income.          ╭─────── arcs bleed│
│ Earn up to 50% for life.            ╭─╯  ╭──── off edge  │
│ [Become an Affiliate]             ──╯ ╭──╯               │
├──────────────────────────────────────────────────────────┤
│                                            ╱ 25,000 USDC │
│                                  ╱────────╱              │
│  ───────●──────●──────◉──────●──────●───── (full bleed)  │
│      $100K  $500K    $1M    $5M   $10M                   │
├──────────────────────────────────────────────────────────┤
│ Key opinion leaders        Content creators              │
│ Finance publishers         Affiliate networks   (display)│
├──────────────────────────────────────────────────────────┤
│ Why partner with us.   │ Daily USDC payouts ──────────── │
│                        │ Campaign Builder ────────────── │
└──────────────────────────────────────────────────────────┘
```

### Direction B — "The thread"

- **Hero.** A macro of woven titanium strands: a fine metal weave, cropped edge to edge with shallow depth of field.
- **Signature: the circle map.** The six audience profiles are placed on an orbit around a quiet centre, joined by hairlines. On hover, a profile's line brightens.
  - The map is purely relational, with no numbers.
  - The estimator stays in a smaller form.
- **A continuous hairline** runs down the page, linking Apply → Promote → Earn.

**Why A over B.** A is built on verified data (the published calculator) and tells a cause-and-effect story. B is more decorative: an orbit map risks reading as an invented "network graph", and the thread motif is close to a cliché.

**New assets for A:** 1 hero (macro grooves). No vignettes; the three current ones are retired.

---

## 4. Market Maker — precision, engineered systems, liquidity, balance

**Why it feels less refined.** The hero is a whole block on a void. The spec sheet is the strongest idea, but it arrives as just another section. The pathway is a generic diagram. The vignettes (dumbbell, heat sink, tray) are the weakest images in the family.

### Direction A — "The termsheet" (recommended)

**The story.** The live page's single call to action is "access the termsheet", so the whole page is composed like an engineered specification.

- **Hero.** An extreme close-up of two machined faces meeting, so the hairline gap becomes one bright line running across the whole frame. It is abstract, cropped and low-key: the "spread" as a horizon. The copy sits above the line.
- **Signature: the termsheet.** A full-width ruled document, built from the current spec sheet:
  - columns for term, value and condition;
  - a hairline grid that draws in once, row by row (like a plotter);
  - values in light figures, conditions as footnote marks ("Subject to jurisdictional limitations" as a real footnote);
  - connectivity folded in as a single row (FIX · REST · WebSocket → virtual private link) rather than a separate diagram.

  It reads like the document the CTA promises.
- **Perks.** Six items set as a numbered schedule, "Schedule A, items 1–6", in a two-column ruled list. Numbering is legitimate here, because a schedule is an ordered document. **No vignettes.**
- **Closing.** It mirrors a termsheet signature block: the statement, the CTA and the eligibility fine print aligned to the grid.
- **Layout signature.** One strict grid, visible as hairlines, used everywhere. It is the most architectural and rectilinear page of the four.
- **Motion moment.** The termsheet grid plotting in.

```
┌──────────────────────────────────────────────────────────┐
│ Add liquidity. Get rewarded.                             │
│ [Apply now]  Get in touch                                │
│━━━━━━━━━━━━━━━━━━━━ the gap, a single lit line ━━━━━━━━━━━│
├───────────────┬───────────────────────┬──────────────────┤
│ TERM          │ VALUE                 │ CONDITION        │
├───────────────┼───────────────────────┼──────────────────┤
│ Taker fee     │ as low as 0.02%       │ + maker rebates  │
│ Qualification │ from 0.1%             │ of total volume  │
│ Connectivity  │ FIX · REST · WS       │ ↳ private link¹  │
│ Account mgmt  │ 24/7                  │ dedicated team   │
├───────────────┴───────────────────────┴──────────────────┤
│ Schedule A  1 Capital efficiency²   4 Support            │
│             2 Rate limits           5 Reports            │
│             3 Virtual private link  6 Market insights    │
└──────────────────────────────────────────────────────────┘
```

### Direction B — "Equilibrium"

- **Hero.** The family's only centred composition: a perfectly symmetrical pair of machined forms, mirrored about the centre of the viewport, with the headline centred above.
- **Signature: balance.** Each "why" pillar is set as a pair of mirrored columns about a central hairline axis, which carries through the page.
- **Motion.** The two halves settle into alignment on reveal.

**Why A over B.** A turns the page's real CTA (the termsheet) into its form, and needs almost no imagery. B is beautiful but abstract: its mirrored layout can feel like a bid/ask diagram, which edges towards implying a financial chart, and it strains on mobile.

**New assets for A:** 1 hero (the gap close-up). The three vignettes are retired.

---

## 5. OTC — discretion, substantial forms, architectural depth

**Why it feels less refined.** The hero is a handsome but complete block on a void. The solutions vignettes repeat Broker's row. The range is a good fact in a weak container. The page has no sense of space.

### Direction A — "The private room" (recommended)

**The story.** Large trades, handled out of sight: weight, stillness and depth.

- **Hero.** An architectural interior, not an object. Two monumental titanium slabs frame a narrow vertical slit of light, seen in deep perspective.
  - The hero runs the full viewport height, the tallest on any page. The copy sits low-left, small and quiet.
  - Parallax is slower than Broker's, to suggest mass.
- **Signature: three ways in.** The three solutions (Portal, Desk, API) become three tall columns, each a different crop of the same architectural image: left wall, slit, right wall. The three channels read as one building, and each column carries its own link.
  - On hover, the column's light slit brightens slightly (opacity only).
- **Ticket size as a threshold.** The range drawn full-bleed as a single floor line, from US$100 to US$5M and on into "larger, by request" where the line passes into darkness. The verified values stay.
- **Closing.** Two paths shown as two doors (Institution / VIP): tall, equal and quiet.
- **Layout signature.** Vertical proportions and generous height throughout. It is the slowest, tallest page in the family.
- **Motion moment.** The light in the hero slit rising once on load. It replaces the light catch Broker's hero has.

```
┌──────────────────────────────────────────────────────────┐
│█████████████████████│░│███████████████████████  slabs,   │
│█████████████████████│░│███████████████████████  slit of  │
│█████████████████████│░│███████████████████████  light    │
│ Move size, not the market.                               │
│ [Apply as an institution]  Apply as a VIP                │
├──────────────────┬──────────────────┬────────────────────┤
│  ▓ wall crop     │  ░ slit crop     │  ▓ wall crop       │
│  OTC Portal      │  Private Desk    │  OTC API           │
│  …               │  Contact →       │  API docs →        │
├──────────────────┴──────────────────┴────────────────────┤
│ US$100 ───────────────────────── US$5M · · · · Larger →  │
└──────────────────────────────────────────────────────────┘
```

### Direction B — "Memorandum"

- **Imagery.** Almost none: a single narrow, tall image strip on the right edge, showing the edge of a monolith.
- **Composition.** The page is set as a private memorandum: one centred reading column, generous leading and slow reveals.
- **Signature: an RFQ sequence.** Request → Firm quote → Settle, drawn as a quiet vertical sequence of what P1 documents (Firm Quote, atomic settlement, immediate or end-of-day settlement), with no figures.

**Why A over B.** A carries the brief ("substantial physical forms, architectural depth") directly, and gives OTC the strongest imagery in the family. B is elegant, but its single column underuses the desktop, and it is closest to a generic long-read layout.

**New assets for A:** 1 hero (slabs and slit, 3:2, plus a tall crop) and 1 wide architectural plate for the three-column crops. The three current vignettes are retired.

---

## 6. Summary of the recommendation

| Page | Direction | Peak section | Imagery after the change | Motion moment |
| --- | --- | --- | --- | --- |
| Broker | Unchanged | Integration panels | Hero + 3 vignettes | Hero light catch |
| Affiliate | A · Reach, measured | Full-bleed earnings arc | Hero only | The curve drawing |
| Market Maker | A · The termsheet | Ruled termsheet | Hero only | The grid plotting in |
| OTC | A · The private room | Three ways in (one building) | Hero + 1 architectural plate | The light rising in the slit |

Only Broker keeps a vignette row, so the family stops looking cloned. Each page has one peak and one motion moment, and every peak is built on verified content.

**Implementation, after approval**
1. A new asset request (4–5 images, replacing 9 vignettes and 3 heroes) through `asset-requests/`.
2. Three bespoke components: the earnings arc, the termsheet, and three ways in.
3. Section-head variants.
4. Retiring the generic pathway section, the three vignette rows and the duplicated grid use on these pages.

All shared components stay reusable. Broker is not touched.
