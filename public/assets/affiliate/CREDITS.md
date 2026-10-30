# affiliate — image sources

The images on this page are AI-generated, made 2026-10-30 by Codex (built-in image generation; the model is not disclosed) from the approved art direction (`ART-DIRECTION.md`) and the prompts in `asset-requests/v2/prompts/`. The raw files and the generation log are in `asset-requests/v2/output/` (`LOG.md`). They are material or architectural metaphors only: they depict no product, interface, data, person, brand or logo, and they make no claim. Confirm that the generator's output terms match your organisation's agreement before launch.

| File | Subject | Raw source | Processing |
| --- | --- | --- | --- |
| `hero-*.webp` | Macro of concentric machined grooves sweeping off the frame (reach) | `asset-requests/v2/output/affiliate-hero-v2.png` | `grade_images.py --crush 10`, widths 1000 and 1536 |
| `hero-portrait-*.webp` | Same | Same | Crop 0.30–0.94 width, widths 800 and 980 |

## Section figures (reused from v1)

| File | Subject | Raw source | Processing |
| --- | --- | --- | --- |
| `figures/payouts.webp` | Bezel ring with index marks, cropped (Why partner, beside the ledger) | `asset-requests/output/affiliate-vignette-payouts.png` (v1) | crop (722, 225, 1234, 609) px, then crush 13 and gamma 1.6 to match the v2 key, graphite grade; native size, not upscaled |
| `figures/team.webp` | Glass discs stepping down, cropped (How to become an affiliate) | `asset-requests/output/affiliate-vignette-team.png` (v1) | crop (768, 205, 1308, 610) px, then crush 13 and gamma 1.6 to match the v2 key, graphite grade; native size, not upscaled |

These v1 images were re-cropped into the v2 language (cropped, low-key, edges only) and used as single section figures, not as a vignette row.

The raw output is 1536 × 1024, so the largest export is 1536 px (not upscaled). Other v1 images (`asset-requests/output/`) remain unused.
