# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are business prospects deciding whether to partner with a cryptocurrency exchange through one of its institutional programmes. Each programme page serves its own audience:

- **API Broker:** trading bot platforms, trading and technical strategy providers, social trading communities and asset management platforms whose users trade on the exchange through the partner's product.
- **Affiliate:** key opinion leaders, content creators, finance and crypto publishers, affiliate networks, media outlets and community leaders who refer their audience to the exchange (draft, from the live page).
- **Market Maker:** institutional liquidity providers of all sizes (draft, from the live page).
- **OTC / Institutional:** protocols, institutions and private wealth clients trading block sizes; Institutional and Exchange VIP clients only (draft, from the live page).

Their job is to judge fit, effort and economics fast: what the programme offers, how integration or onboarding works, how they are paid, and how to apply. They are technical or commercial decision-makers, not retail traders.

Secondary audience: the internal design, brand and engineering teams who will converge this system with the real brand and ship it.

## Product Purpose

A reusable, configuration-driven system for programme landing pages. One shared template (layout, components, tokens, motion, responsive rules) serves every programme. Only programme-specific copy, links, imagery and feature data change between pages. The target is 80–90% reuse.

It is a pitch-to-production design exploration. The concept is built brand-neutral first, then converged with the Crypto.com Exchange brand and handed to engineering to ship as the real programme pages.

Success means:

- each page converts qualified partners through one clear primary action (for API Broker: "Become a Broker");
- a new programme can be added mainly by writing a config;
- the pages stay credible enough for institutional readers.

## Positioning

These are institutional fintech product pages, not Web3 promotion. Credibility comes from verified, specific programme mechanics stated plainly. For API Broker these are: attribution through a case-sensitive `broker_id` on API orders, Fast API hosted authorisation, sub-broker commission sharing, and commission paid on net fees by broker level. Inflated claims are not part of the positioning.

## Operating Context

- Prospects arrive from partnership outreach, search or the exchange site. They compare against competitor programmes (OKX, Bitget, Bybit) and often read the API documentation before applying.
- Applying leads to contact from an Account Manager. Commission schedules are shared during onboarding, not published.
- Internal workflow: concept in this repo → `?review` pass by business and legal → brand convergence → engineering build.
- Competitor pages inform which questions prospects ask, never wording or layout.

## Capabilities and Constraints

- **Stack:** Vite + React + TypeScript. Each programme is a `ProgramConfig` in `src/programs/`, and the shared template is `src/program/ProgramPage.tsx`.
- **Compliance sign-off:** every commission figure, product claim, region statement and CTA destination needs business or legal approval before publishing. Unconfirmed items carry a `review` note and are highlighted with `?review`.
- **Source hierarchy (binding):**
  1. **Primary:** the existing Exchange programme page for that programme (and its own forms). Preserve all of its established rules, commercial terms and benefits.
  2. **Secondary:** official Exchange documentation and Help Centre. Use these to explain mechanics, never to silently override a primary commercial term.
  3. **General industry standards:** only well-established, verifiable conventions, always distinguished from what the Exchange actually supports.
- **Content integrity (binding, applies to copy, tables, diagrams, UI mockups, imagery and FAQ):**
  - Never fabricate statistics, tiers, metrics, volumes, latency, API capabilities, requirements, eligibility or comparison values.
  - Technical diagrams must match the documented process.
  - Mockups may use illustrative data only if clearly labelled, and never imply real results or returns.
  - Logos and trust indicators require verified relationships.
  - Decorative imagery must not misrepresent capability.
  - When a fact is unavailable, simplify or remove the element. When sources conflict, flag it NEEDS BUSINESS CONFIRMATION and do not resolve it.
  - Every factual claim carries a source tag in the programme config, plus a separate, unrendered `CONTENT-AUDIT.md`.
- **CTA and documentation URLs stay configurable** until confirmed. A destination must never be faked.
- **Localization:** pages must work in multiple languages and regions, for example Traditional Chinese. Copy length, line breaking and region-specific availability must be accommodated. The concept is currently English-only.
- **Jurisdiction:** product availability varies by region and must not be stated as universal.
- **Open API Broker facts:** tracked in `CONTENT-AUDIT.md`, section 3. Main items:
  - Payout cadence: the programme page says both daily and monthly, and the Help Centre says daily.
  - The monthly report.
  - Product scope per region.
  - Sponsorship naming.
  - broker_id coverage in the broker API docs.

## Brand Commitments

- Brand-neutral for now: use the placeholder wordmark `EXCHANGE`. No real Exchange logos, brand marks or brand assets until convergence. Partner logos are a separate matter: they are allowed only as authentic files for partners verified on the primary page.
- The eventual brand is Crypto.com Exchange. The user explicitly decided that the concept is **not** constrained by its current visual identity, design system or website conventions; convergence happens later.
- Copy is concise, credible, professional English, with no generic marketing buzzwords and no copied competitor language.

## Evidence on Hand

- **Verified API Broker facts** (checked 2026-10-30) are source-tagged in `src/programs/api-broker.ts`. They are audited claim by claim in `CONTENT-AUDIT.md`.
- **Published commercial terms (primary source):**
  - up to 50% commission on referred trades;
  - marketing support and sponsorship perks;
  - round-the-clock support;
  - no minimum sales requirement;
  - a dashboard and monthly report.
- **Licensed photography:** one Unsplash License hero image, recorded in `public/assets/api-broker/CREDITS.md`.
- **Partner logos (API Broker):** Cryptohopper, 3Commas, Hummingbot and Alertatron. Only these four appear, because they are exactly the partners listed on the primary page. The files are authentic and taken from that page. Provenance is in `public/assets/partners/SOURCES.md`.
- **Not available, so never fabricate:**
  - testimonials, case studies, volume or performance metrics, tier tables, rate cards and support SLAs;
  - any partner beyond those listed on the programme's primary page;
  - any recreated or AI-generated partner logo.
- **Other programmes:** Affiliate, Market Maker and OTC are drafts built from their live pages (read 2026-10-30), audited in `CONTENT-AUDIT-DRAFTS.md`. Each has its own generated hero and vignette series (`public/assets/<page>/CREDITS.md`).

## Product Principles

1. **Truth over persuasion:** state verified mechanics plainly, and flag what is unconfirmed rather than smoothing it over.
2. **One action per page:** every section serves the single primary application path.
3. **System before page:** solve a need in the shared template and config schema, not with one-off structures for a single programme.
4. **Built for review and translation:** content must survive compliance edits and localization without breaking the layout.

## Accessibility & Inclusion

- WCAG 2.2 AA is required.
- Respect `prefers-reduced-motion`.
- Keyboard-operable tabs and accordions.
- Visible focus.
- Touch targets of at least 44px on coarse pointers.
