"""
Grade a generated hero and give it more negative space on its left, so the object sits clear of
the headline the way the API Broker sculpture does.

    python scripts/pad_hero.py <source.png> <out_dir> [--crush N] [--scale 1.45] [--shift 0.85]

The graded background equals --bg (#0b0c0e), so the added canvas is invisible. The original sits
vertically centred on a canvas `scale` times larger (keeping 3:2), `shift` of the way
to the right edge (1 = flush right; less keeps the object clear of the cover crop). Exports
hero-1000/1600/2200.webp. The mobile portrait crop is taken from the unpadded source with
grade_images.py as usual.
"""
import argparse
import os
import sys

from PIL import Image

sys.path.insert(0, os.path.dirname(__file__))
from grade_images import BG, export, grade  # noqa: E402

if __name__ == "__main__":
    p = argparse.ArgumentParser()
    p.add_argument("source")
    p.add_argument("out_dir")
    p.add_argument("--crush", type=int, default=0)
    p.add_argument("--scale", type=float, default=1.45)
    p.add_argument("--shift", type=float, default=0.85)
    a = p.parse_args()
    im = grade(a.source, a.crush)
    w, h = round(im.width * a.scale), round(im.height * a.scale)
    canvas = Image.new("RGB", (w, h), BG)
    canvas.paste(im, (round((w - im.width) * a.shift), (h - im.height) // 2))
    export(canvas, a.out_dir, "hero", [1000, 1600, 2200])
