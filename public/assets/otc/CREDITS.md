# otc — image sources

The images on this page are AI-generated, made 2026-10-30 by Codex (built-in image generation; the model is not disclosed) from the approved art direction (`ART-DIRECTION.md`) and the prompts in `asset-requests/v2/prompts/`. The raw files and the generation log are in `asset-requests/v2/output/` (`LOG.md`). They are material or architectural metaphors only: they depict no product, interface, data, person, brand or logo, and they make no claim. Confirm that the generator's output terms match your organisation's agreement before launch.

| File | Subject | Raw source | Processing |
| --- | --- | --- | --- |
| `hero-*.webp` | Two monumental slabs and a slit of light, in deep perspective (the private room) | `asset-requests/v2/output/otc-hero-v2.png` | `grade_images.py --crush 10`, widths 1000 and 1536; the slit sits at 66% width (`hero--tall`) |
| `hero-portrait-*.webp` | Same | Same | Crop 0.40–0.96 width, widths 800 and 980 |
| `plate/plate-1536.webp` | The same slabs face-on and symmetrical: wall, light, wall | `asset-requests/v2/output/otc-plate-v2.png` | Graded with `--crush 14`, cropped to the central 50% width at 2.25:1 so the side columns hold the lit slab edges, resized to 1536 px (soft gradients only), sliced in CSS into three columns |

## Section figures (reused from v1)

| File | Subject | Raw source | Processing |
| --- | --- | --- | --- |
| `figures/block.webp` | Chamfered block on its glass slab, cropped (Liquidity, settlement and price) | `asset-requests/output/otc-hero.png` (v1) | crop (507, 471, 1067, 891) px, then crush 13 and gamma 1.6 to match the v2 key, graphite grade; native size, not upscaled |

These v1 images were re-cropped into the v2 language (cropped, low-key, edges only) and used as single section figures, not as a vignette row.

The raw output is 1536 × 1024, so the largest export is 1536 px (not upscaled). Other v1 images (`asset-requests/output/`) remain unused.
