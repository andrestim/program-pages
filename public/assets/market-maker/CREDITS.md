# market-maker — image sources

The images on this page are AI-generated, made 2026-10-30 by Codex (built-in image generation; the model is not disclosed) from the approved art direction (`ART-DIRECTION.md`) and the prompts in `asset-requests/v2/prompts/`. The raw files and the generation log are in `asset-requests/v2/output/` (`LOG.md`). They are material or architectural metaphors only: they depict no product, interface, data, person, brand or logo, and they make no claim. Confirm that the generator's output terms match your organisation's agreement before launch.

| File | Subject | Raw source | Processing |
| --- | --- | --- | --- |
| `hero-*.webp` | Two machined faces meeting, the gap as one lit line across the frame (the spread) | `asset-requests/v2/output/market-maker-hero-v2.png` | `grade_images.py --crush 9`, widths 1000 and 1536; the line sits at 66% height (`hero--horizon`) |
| `hero-portrait-*.webp` | Same | Same | Crop 0.25–0.89 width, widths 800 and 980 |

## Section figures (reused from v1)

| File | Subject | Raw source | Processing |
| --- | --- | --- | --- |
| `figures/capital.webp` | Flush-fitted inserts, cropped (Schedule A) | `asset-requests/output/market-maker-vignette-capital.png` (v1) | crop (814, 276, 1294, 636) px, then crush 13 and gamma 1.6 to match the v2 key, graphite grade; native size, not upscaled |

These v1 images were re-cropped into the v2 language (cropped, low-key, edges only) and used as single section figures, not as a vignette row.

The raw output is 1536 × 1024, so the largest export is 1536 px (not upscaled). Other v1 images (`asset-requests/output/`) remain unused.
