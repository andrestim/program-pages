# Visual plan — Affiliate, Market Maker, OTC

Reviewed 2026-10-30 against:
- the finished API Broker page;
- each programme's live page;
- comparable pages at Binance and OKX (affiliate), Kraken (OTC) and OKX (institutional).

Competitor pages informed only how visuals are used, never their wording or layout.

## What the comparison shows

| Pattern | Where seen | What we take from it |
| --- | --- | --- |
| An earnings growth curve as the hero visual, with a large estimate figure | OKX affiliate | Affiliate's estimator gains the published curve. It is drawn in code from the five published points. |
| One illustration per benefit, alternating with text | Binance affiliate (line art), OKX affiliate (monochrome 3D objects) | One vignette series per page, in our photographic material language (OKX's monochrome objects are the closest in spirit). |
| A product screenshot or data chart under the hero | Kraken OTC, OKX institutional | No fabricated UI. Instead, verified facts drawn as diagrams in code (ticket-size scale, connectivity). |
| Coins, people, neon, brand colour | Binance | Rejected by our art direction. |

**Why the three drafts felt flat**
- All three borrowed the same hero.
- Below the hero, every section was text on hairlines.

The API Broker page reads richer because it has:
- its own hero;
- a vignette series;
- partner logos;
- an interactive panel.

## The plan per page

Each page gets:
- one hero of its own;
- one series of three vignettes on its most important section;
- at least one visual drawn from verified data.

Images are generated (see `README.md` and `manifest.json`); diagrams are built in code, and need no image.

| Page | Hero (generated) | Vignettes (generated, 3) | Built in code |
| --- | --- | --- | --- |
| **API Broker** (reference, done) | Curved sculpture (Unsplash) | Market, support, commission | Flow, code and formula panels; logos |
| **Affiliate** | Concentric rings (reach) | "Why partner", regrouped into three columns: daily USDC payouts · grow with your team · support and events (all six P1 benefits kept) | The estimator gains a line through the five published calculator points; the selected point is ringed |
| **Market Maker** | Two blocks a hairline apart (tight spread) | The three most tangible perks as featured columns: virtual private link · rate limits · capital efficiency. The other three perks stay as a compact grid. | Connectivity diagram: your system → FIX / REST / WebSocket → virtual private link (cloud co-location) → Exchange |
| **OTC** | A heavy block on glass (size, off the book) | The three solutions: Portal · Desk · API, each keeping its link | Ticket-size scale: US$100 → US$5M, with larger clips on request |

**Rules this keeps**
- The One Hero Rule: the hero is the only full-bleed photograph, and vignettes are one coordinated series on one section.
- The Single Lift Rule: one lifted panel per section.
- No fabricated UI, data or logos.

The One Hero Rule in `DESIGN.md` will be widened from "Benefits" to "the page's one vignette series".

**Total:** 12 generated images (3 heroes and 9 vignettes), plus 3 code-drawn diagrams.

## After the images come back

1. Grade the images:
   ```
   python scripts/grade_images.py asset-requests/output/<id>-hero.png public/assets/<page> hero --crush <bg>
   python scripts/grade_images.py asset-requests/output/<id>-hero.png public/assets/<page> hero-portrait --crush <bg> --crop 0.30,0,0.94,1 --widths 800,1200
   python scripts/grade_images.py asset-requests/output/<id>.png public/assets/<page>/benefits <name> --crush <bg> --crop 0.391,0.161,0.990,0.835 --widths 720,1080
   ```
2. Record each image in `public/assets/<page>/CREDITS.md`, and give each page its own hero preload.
3. Restructure the sections as above, and build the three diagrams.
