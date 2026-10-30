# Affiliate, Market Maker and OTC drafts — content audit

Internal document. It is not rendered. Source tags (`[P1]`) live in each config:
`src/programs/affiliate.ts`, `market-maker.ts` and `otc.ts`. Open `?program=<id>&review` to see flagged items in place.

Drafted 2026-10-30, then restructured the same day. Each page now follows its own live page's content and order, uses the shared visual language, and draws its sections from the shared library. Each page uses only its own live page as the primary source (P1). No Help Centre article has been read for these drafts.

| Page | URL | P1 source (English, UK) | Section order |
| --- | --- | --- | --- |
| Affiliate | `?program=affiliate` | https://crypto.com/exchange/affiliate | hero → earnings arc → affiliate circle (roll call) → why partner (ledger, all six P1 benefits) → how to → FAQ → closing |
| Market Maker | `?program=market-maker` | https://crypto.com/exchange/mm-programme | horizon hero → why trade with us (termsheet, with a footnote for the virtual private link) → Schedule A (all six perks, the jurisdiction footnote as `*`) → FAQ → signature closing |
| OTC | `?program=otc` | https://crypto.com/exchange/otc | tall hero → solutions (plate columns with links) → execution (spec sheet) → ticket size (threshold) → FAQ → two doors |

**Shared across all three pages**
- Wordmark: the brand-neutral `EXCHANGE`.
- Imagery: each page has its own v2 hero; only OTC adds one architectural plate (`asset-requests/v2`, `public/assets/<page>/CREDITS.md`). Four v1 images return as cropped section figures (decorative, no claim); the other v1 images stay unused. Images are material or architectural metaphors only and make no claim.
- Code-drawn visuals use only published values: the Affiliate earnings arc (the P1 calculator points) and the OTC ticket-size threshold (P1 FAQ). The Market Maker connectivity pathway was retired; connectivity is now one termsheet row with a footnote naming the virtual private link as a perk, with no implied topology.
- Event partners: named on P1, but kept generic with a review note.

## Affiliate

| Claim | Source |
| --- | --- |
| "Turn your reach into income"; up to 50% for life | P1 hero ("Turn Your Reach Into Real Income", "Lifetime Commissions of up to 50%") |
| A share of referred users' trading fees, paid daily in USDC | P1 hero, Why partner, FAQ |
| **Estimator:** $100K → 250 USDC, $500K → 1,250, $1M → 2,500 (the default), $5M → 12,500, $10M → 25,000 | P1 hero calculator. Every step was selected and read on 2026-10-30. The values are copied, not computed. The footnote is P1's own: "Based on referral's monthly volume. T&Cs apply." |
| Affiliate circle: the six profiles | P1 "Be Part of an Exclusive Affiliate Circle" |
| Eligibility: a sizable, engaged audience, plus content guidelines | P1 FAQ |
| Why partner, regrouped into three columns: (1) daily USDC payouts and dashboard; (2) Campaign Builder, sub-affiliates, sharing up to 20%; (3) 24/7 support, partner events, milestone bonuses | P1 "Why Partner With Us?" and FAQ. All six benefits are kept. |
| Estimator curve: the same five published points, plotted over equal stops | P1 calculator (its own chart shows them as a curve) |
| Apply → Promote → Earn | P1 "How to Become an Affiliate" |
| FAQ (3 questions) | P1 FAQ, unchanged in substance |

**Omitted**
- "Supported in N+ countries": the counter showed "0+" when read, so the figure is unverified.

**Needs business confirmation**
- **Estimator:** whether its values may be republished as they are, and whether they are current.
- **"Lifetime":** confirm the commission has no time limit. For comparison, API Broker referral attribution lasts six months.
- **Apply link:** points at P1, which opens the form in a modal.

## Market Maker

| Claim | Source |
| --- | --- |
| Rewards traders who add liquidity and tighten spreads | P1 FAQ |
| Bespoke services, including exclusive fee rebates and increased API rate limits | P1 hero |
| **Spec sheet:** taker fees as low as 0.02% plus maker rebates; qualification from 0.1% of total volume; FIX, REST and WebSocket with increased rate limits; 24/7 account management | P1 "Why trade with us?" and perks |
| Six benefits and perks: three featured with vignettes (virtual private link, rate limits, capital efficiency, with the jurisdiction footnote in its body), three in a grid (support, reports, insights) | P1 "Programme Benefits & Perks" |
| FAQ (4 questions) and the "Get in touch" link | P1 FAQ; P1 link target `institutions.crypto.com/sign_up/?form=contact_us` |
| Closing: "Ready to be a market maker?", the short form gives access to the termsheet, and the eligibility disclaimer | P1 |

**Needs business confirmation**
- **Apply link:** points at P1, which opens the form in a modal.

## OTC

| Claim | Source |
| --- | --- |
| Bespoke services for protocols, institutions and private wealth clients | P1 hero |
| Avoids market impact; zero trading fees however many clips | P1 FAQ; P1 |
| **Solutions:** OTC Portal, Private OTC Desk (24/7 RFQ line; contact by email), OTC API (REST, WebSocket, FIX; link to the docs) | P1 "Solutions for every playbook", including its link targets |
| **Spec sheet:** 500+ pairs (Firm Quote, atomic settlement); end-of-day net settlement for select clients; 0 trading fees | P1 features and FAQ |
| **Ticket-size range:** US$100 → US$5M, larger by bespoke quote | P1 FAQ |
| FAQ (6 questions) | P1 FAQ. "How do I open an account" is folded into the closing paths. |
| **Closing paths:** institution (protocols, fintechs, public treasury companies) and VIP (private wealth), with their apply links | P1 "Ready to start?" |

**Needs business confirmation**
- **500+ pairs per region:** P1 links separate pair lists for global and for US institutional clients.
- **FAQ pair lists:** whether to link the two Help Centre lists.
- **Contact email:** `otc@crypto.com` is the live desk address. Swap it for a neutral placeholder if the concept must stay fully unbranded.
