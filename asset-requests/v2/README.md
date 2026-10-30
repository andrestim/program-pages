# Visual asset request v2 — approved art direction

**For the image agent (Codex):** generate the 4 images in `manifest.json`.
- Your generator may save its raw output to its own default location.
- Copy each image (do not move or re-encode it) into `v2/output/` under its exact `file` name.
- Do not create, edit, move or delete any other file in the project.

This replaces the v1 heroes and vignettes (see `../../ART-DIRECTION.md`). The direction changed from "a whole object on a void" to **cropped, low-key, environmental subjects that bleed off the frame**, like the API Broker hero.

## How to work

1. Use each asset's `prompt` file verbatim.
2. Attach the files in `references` as the primary art-direction reference. `rejectedExamples` shows the previous attempt; it is what NOT to make (whole objects, bright, glossy, literal).
3. Generate a landscape 3:2 PNG at the largest size available.
4. Check the result against the QA list below. If it fails, regenerate or edit, keeping the subject and light and changing only what failed.
5. Copy it into `v2/output/<id>.png`.
6. Write `v2/output/LOG.md`, with one line per asset: file, pixel size, model, date, attempts, original path, and any QA item it still fails.

## QA

- [ ] No complete object on a background. The subject is cropped and bleeds off at least one edge.
- [ ] The overall exposure is low. The darkest areas are near-black (#0b0c0e), with no grain, gradient banding or texture.
- [ ] Strictly monochrome graphite and silver.
- [ ] Highlights are thin grazing lines or soft surface gradients. No glow, flare, beams or fog.
- [ ] The composition matches the asset's own `Composition` paragraph:
  - **affiliate:** the left 40% is dark;
  - **market-maker:** one line runs the full width at about 68% of the height;
  - **otc-hero:** the slit sits at about 68% across;
  - **otc-plate:** the slit sits exactly at 50%, and the image is symmetrical.
- [ ] No text, numerals, logos, people or props. No AI artefacts (melted edges, broken lines, impossible geometry).

## The 4 assets

| File | Page | Use |
| --- | --- | --- |
| `affiliate-hero-v2.png` | Affiliate | Hero: a macro of concentric machined grooves sweeping off the frame |
| `market-maker-hero-v2.png` | Market Maker | Hero: two block faces meeting, with the gap as one lit line across the frame |
| `otc-hero-v2.png` | OTC | Hero: two monumental slabs with a slit of light, in deep perspective |
| `otc-plate-v2.png` | OTC | Signature section: the same slabs face-on and symmetrical, split later into wall, light and wall |

Each image is a material or architectural metaphor only. It depicts no product, interface, data, brand or person, and it makes no claim.
