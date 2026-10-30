# Visual asset request — Affiliate, Market Maker, OTC

**For the image agent (Codex):** generate the 12 images listed in `manifest.json` and save each one as a PNG at its `file` path in `output/`. Do not create, edit, move or delete anything outside `asset-requests/output/`.

## How to work

1. Read `manifest.json`. Each asset gives you:
   - `prompt`: the full prompt to use, verbatim;
   - `references`: style references to attach (art direction only; never copy their subjects);
   - `file`: the exact output name;
   - `aspect`, `minSize` and `preferredSize`: the format;
   - `safeZone` and `emptyZone`: where the subject must and must not be.
2. Generate in this order, so each page's series stays consistent: all `affiliate-*`, then `market-maker-*`, then `otc-*`. Within a page, make the hero first, then its three vignettes. Use the earlier images of that page as extra style references for the later ones.
3. Check every image against the QA list below. If it fails, regenerate or edit it, keeping the subject, angle and light; change only what failed.
4. Save as PNG at the exact `file` path. Do not upscale, crop, grade, sharpen or compress. Grading and cropping happen afterwards with `scripts/grade_images.py`.
5. Add `output/LOG.md`, with one line per asset: file name, pixel size, generator or model, date, the number of attempts, and any deviation from the prompt.

## QA — every image must pass all of these

- [ ] Landscape 3:2, at least 1536 × 1024 px (heroes: 2400 × 1600 or larger where possible).
- [ ] The whole subject sits inside `safeZone`, and `emptyZone` (the left side) is completely empty.
- [ ] The background is plain, uniform, near-black graphite (#0b0c0e or darker): no gradient, floor line, horizon, vignette or texture.
- [ ] Strictly monochrome graphite and silver, with no colour cast (check for warm or blue tints).
- [ ] One key light from the upper left. Highlights are fine reflected lines, never glow, bloom or light rays.
- [ ] Only the objects the subject describes: no text, numerals, logos, symbols, screens, coins, people or props.
- [ ] Clean materials, with no scratches, dust or AI artefacts (melted edges, impossible geometry, duplicated parts).
- [ ] Within one page, the hero and its three vignettes read as one series, and they match the API Broker references.

## The 12 assets

| # | File | Page and slot | What it stands for |
| --- | --- | --- | --- |
| 1 | `affiliate-hero.png` | Affiliate hero | Concentric titanium rings spreading out: reach |
| 2 | `affiliate-vignette-payouts.png` | Affiliate, benefit 1: paid daily in USDC | A flat bezel ring with index marks: a daily cadence |
| 3 | `affiliate-vignette-team.png` | Affiliate, benefit 2: grow with your team | Three glass discs in a cascade: one source, a team |
| 4 | `affiliate-vignette-support.png` | Affiliate, benefit 3: support and events | A glass plate in a titanium stand: an invitation or pass |
| 5 | `market-maker-hero.png` | Market Maker hero | Two blocks a hairline apart: a tight spread |
| 6 | `market-maker-vignette-link.png` | Market Maker, perk: virtual private link | Two blocks joined by one steel rod: a direct link |
| 7 | `market-maker-vignette-rate-limits.png` | Market Maker, perk: increased rate limits | Tightly spaced fins: throughput |
| 8 | `market-maker-vignette-capital.png` | Market Maker, perk: capital efficiency | A tray of flush-fitted inserts: nothing wasted |
| 9 | `otc-hero.png` | OTC hero | A heavy block on a glass slab: size, off the book |
| 10 | `otc-vignette-portal.png` | OTC, solution: OTC Portal | An empty glass panel on a base: a window on screen |
| 11 | `otc-vignette-desk.png` | OTC, solution: Private OTC Desk | A closed titanium case with one seam: discretion |
| 12 | `otc-vignette-api.png` | OTC, solution: OTC API | A block with three bored ports: plug in |

Each image is a material metaphor only. None depicts a product, interface, data, number, brand or person, and none makes a product claim. That is required by the content-integrity rules in `PRODUCT.md`.

## Why these images (the visual plan, for the human reader)

See `VISUAL-PLAN.md`.
