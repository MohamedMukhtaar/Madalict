"""Extract Madal logo lockups from the brand PDF as transparent, tightly cropped SVGs."""

import os
import re

import fitz
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PDF = os.path.join(ROOT, "Madal logo011.pdf")
OUT = os.path.join(ROOT, "public", "brand")
SCALE = 4  # render at 4x for bbox detection

# page index -> output name
TARGETS = {
    1: "logo-on-cyan",    # navy mark + white wordmark  (brand book section 2)
    0: "logo-on-navy",    # cyan/white mark + white wordmark
    2: "logo-on-light",   # navy/cyan mark + navy wordmark
    3: "mark-on-navy",    # icon only, for dark surfaces
    5: "mark-on-light",   # icon only, for light surfaces
}

os.makedirs(OUT, exist_ok=True)
doc = fitz.open(PDF)

for page_index, name in TARGETS.items():
    page = doc[page_index]

    # --- find tight bbox of the artwork by ignoring the flat background colour ---
    pix = page.get_pixmap(matrix=fitz.Matrix(SCALE, SCALE))
    im = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)
    bg = im.getpixel((2, 2))

    # mask = pixels that differ meaningfully from the background
    mask = Image.eval(
        Image.merge("L", [im.split()[0]]).point(lambda _: 0), lambda _: 0
    )
    diff = im.convert("RGB")
    px = diff.load()
    minx, miny, maxx, maxy = im.width, im.height, 0, 0
    step = 2
    for y in range(0, im.height, step):
        for x in range(0, im.width, step):
            r, g, b = px[x, y]
            if abs(r - bg[0]) + abs(g - bg[1]) + abs(b - bg[2]) > 28:
                if x < minx:
                    minx = x
                if x > maxx:
                    maxx = x
                if y < miny:
                    miny = y
                if y > maxy:
                    maxy = y

    pad = 6 * SCALE
    minx, miny = max(0, minx - pad), max(0, miny - pad)
    maxx, maxy = min(im.width, maxx + pad), min(im.height, maxy + pad)

    vx, vy = minx / SCALE, miny / SCALE
    vw, vh = (maxx - minx) / SCALE, (maxy - miny) / SCALE

    # --- export vector and strip the full-page background rect ---
    svg = page.get_svg_image(text_as_path=True)
    svg, n = re.subn(
        r'<path transform="matrix\(1,0,0,-1,0,600\)" d="M0 0H600V600H0Z" fill="#[0-9a-fA-F]{6}"/>\s*',
        "",
        svg,
        count=1,
    )

    svg = re.sub(
        r'^<svg([^>]*?)width="[\d.]+" height="[\d.]+" viewBox="[^"]*"',
        f'<svg\\1width="{vw:.2f}" height="{vh:.2f}" '
        f'viewBox="{vx:.2f} {vy:.2f} {vw:.2f} {vh:.2f}"',
        svg,
        count=1,
    )

    # Strip Inkscape editor metadata. Without this the artwork cannot be nested
    # inside another <svg> (used to build the favicon and the share image),
    # because the inner element would reference an undeclared namespace prefix.
    svg = svg.replace(' xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"', "")
    svg = re.sub(r'\s+inkscape:(groupmode|label)="[^"]*"', "", svg)

    path = os.path.join(OUT, name + ".svg")
    with open(path, "w", encoding="utf-8") as fh:
        fh.write(svg)

    print(
        f"{name:16s} page {page_index + 1:2d}  bg={('#%02X%02X%02X' % bg)}  "
        f"bg-rect-removed={n}  viewBox={vx:.0f} {vy:.0f} {vw:.0f} {vh:.0f}  "
        f"{os.path.getsize(path) // 1024}KB"
    )

doc.close()
print("done ->", OUT)
