"""
Grade source photographs into the programme palette and export responsive WebP.

    python scripts/grade_images.py <source.jpg> <out_dir> <name> [--crush N] [--crop l,t,r,b]

- Converts to neutral graphite with the black point matched to the page
  background (#0b0c0e), so photographs dissolve into the page without edges.
- --crush lifts the black point (0-255) to remove a grey studio backdrop.
- --crop takes fractions of the source (e.g. 0.30,0,0.94,1 for a mobile crop).
- Adds sub-level dither before encoding so dark gradients do not band.
Requires Pillow.
"""
import argparse
from PIL import Image, ImageChops, ImageOps

BG, MID, HI = "#0b0c0e", "#80868e", "#eef1f4"


def grade(path, crush):
    g = ImageOps.grayscale(Image.open(path).convert("RGB"))
    if crush:
        g = g.point(lambda v: max(0, min(255, round((v - crush) * 255 / (255 - crush)))))
    return ImageOps.colorize(g, black=BG, mid=MID, white=HI, midpoint=118)


def export(im, out_dir, name, widths, quality=90):
    for w in widths:
        h = round(im.height * w / im.width)
        r = im.resize((w, h), Image.LANCZOS)
        noise = Image.effect_noise((w, h), 1.1).convert("RGB")
        ImageChops.add(r, noise, 1.0, -128).save(f"{out_dir}/{name}-{w}.webp", "WEBP", quality=quality, method=6)


if __name__ == "__main__":
    p = argparse.ArgumentParser()
    p.add_argument("source")
    p.add_argument("out_dir")
    p.add_argument("name")
    p.add_argument("--crush", type=int, default=0)
    p.add_argument("--crop", type=lambda s: [float(x) for x in s.split(",")])
    p.add_argument("--widths", type=lambda s: [int(x) for x in s.split(",")], default=[1000, 1600, 2400])
    a = p.parse_args()
    im = grade(a.source, a.crush)
    if a.crop:
        l, t, r, b = a.crop
        im = im.crop((int(im.width * l), int(im.height * t), int(im.width * r), int(im.height * b)))
    export(im, a.out_dir, a.name, a.widths)
