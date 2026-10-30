# API Broker Programme — content audit

Internal document. It is not rendered on the landing page. The page's source tags (`[P1]`, `[H1]`, …) live in
`src/programs/api-broker.ts`. Open `?review` on the page to see every flagged item in place.

Audited 2026-10-30, after the content-integrity pass.

## Sources and hierarchy

| Tag | Level | Source | Notes |
| --- | --- | --- | --- |
| P1 | Primary | Existing Broker Programme page, https://crypto.com/exchange/broker-programme | Read in English (US) via the site's language switcher. The commercial terms here take precedence. |
| P2 | Primary | The "Become a Broker" registration form on P1 | Field labels read only; nothing was entered or submitted. |
| H1 | Secondary | Help Centre: What is the API Broker Programme, https://help.crypto.com/en/articles/8607633 | Source of the mechanics: broker_id, formula, coverage, dashboard path, order example. |
| H2 | Secondary | Help Centre: Broker Programme Fast API, https://help.crypto.com/en/articles/8607655 | Source of the user authorisation steps and setup requirements. |
| H3 | Secondary | Help Centre: Sub-brokers, https://help.crypto.com/en/articles/8607650 | Source of sub-broker rules and code format. |
| D1 | Secondary | Broker Program API docs, https://exchange-docs.crypto.com/exchange/index-broker-program-4e65dc98-410f-4bb7-b20b-8fc038426ab1.html | The target of P1's "View API Documents" button. Source of the Fast API token flow and `create-fast-api-key`. |

Secondary sources explain how things work. None of them was used to override a commercial term in P1.

## 1. Confirmed claims

### Hero
| Claim | Source |
| --- | --- |
| The Exchange's liquidity and trading infrastructure for your users | P1 hero tagline |
| Earn up to 50% commission on the trades you refer | P1 ("Why join", FAQ) |
| Audience: trading bots, trading strategy platforms, social trading communities, asset management platforms | P1 ("Best for") |
| "API Documentation" link points to the broker docs | P1's "View API Documents" button target (D1) |

### Benefits
| Claim | Source |
| --- | --- |
| **Market access:** spot and derivatives trading across all applicable pairs | H1 (supported products) |
| **Support:** world-class marketing support | P1 ("Why join") |
| **Support:** the Exchange brand behind your business | P1 ("leverage on the Crypto.com brand"), shown brand-neutrally |
| **Support:** exclusive sponsorship perks | P1 FAQ |
| **Support:** round-the-clock support | P1 ("Why join", FAQ) |
| **Commission:** up to 50% commission on referred trades | P1 ("Why join", FAQ) |
| Rate set by broker level | H1 (level ratio in the settlement formula) |

### Partners
| Claim | Source |
| --- | --- |
| Heading "Our partners" | P1 ("Our Partners") |
| Partners are Cryptohopper, 3Commas, Hummingbot and Alertatron: exactly these four, in P1's order | P1 |
| Logo files are the authentic assets from P1's own asset host; only transparent margins were trimmed | P1. Provenance in `public/assets/partners/SOURCES.md` |

### Integration
| Claim | Source |
| --- | --- |
| broker_id is the main identifier used to calculate commission | H1 |
| broker_id goes on `private/create-order`; the code is case-sensitive | H1 |
| **Connect flow, node 1:** user chooses to connect, with the label "Connect to Exchange". It is the only filled ring (current step). | H2 (step 1 names "Connect Account" or "Connect to Exchange") |
| **Connect flow, node 2:** hosted login, skipped if already signed in | H2 (step 4) |
| **Connect flow, node 3:** user approves on the authorisation screen ("Authorise") | H2 (step 5), D1 (step 2) |
| **Connect flow, node 4:** callback receives an access token, which is used to create the user's API key | D1 (token via registered callback, then `private/broker/create-fast-api-key`), H2 (step 6, redirect back) |
| **Code panel:** request structure and every value (`id`, `nonce`, `method`, `BTCUSD-PERP`, `SELL`, `LIMIT`, `50000.5`, `1`, `"broker_id": "ABCD"`) | H1 worked example. The optional `client_oid` and `exec_inst` are omitted, and the panel note says so. |
| Sub-broker orders use the sub-broker code, e.g. ABCD_XYZ | H3 |
| Code annotation "Your broker code" on the `broker_id` line | H1 (`broker_id` identifies the broker on the order), P1 (onboarded brokers receive a broker code to add to API orders) |
| Commission calculated on net fees of attributed orders and credited to your Exchange account | H1 (formula and settlement account), P1 ("credited directly to your account") |
| Path "Dashboard › Brokers" for commission and transactions | H1 |
| **Track formula:** Net fee (from your attributed orders) × Broker level ratio (set by your broker level) = Commission (credited to your Exchange account). Note: tracked in Dashboard › Brokers; the Account Manager shares the rate card. | H1 (settlement formula, settlement account, dashboard path), P1 (Account Manager shares the schedule and rate card) |
| **Track formula example:** 100 × 50% = 50, labelled "Example" and called illustrative in the note. The net fee 100 is invented and has no currency; 50% is the published ceiling. **NEEDS BUSINESS CONFIRMATION** that an illustrative figure may appear. | P1 ("up to 50%"); the arithmetic follows H1 |

### Programme details
| Claim | Source |
| --- | --- |
| Apply: sign up through the registration form | P1 FAQ ("Simply sign up here"), P2 |
| Account Manager reaches out with the full schedule and rate card | P1 FAQ |
| Broker code assigned once fully onboarded, added to API orders | H1 |
| Track sales and commission in the broker dashboard | P1 FAQ, H1 |
| **Terms row, Commission:** up to 50% on referred trades | P1 |
| **Terms row, Commission:** net fee × the ratio for your broker level | H1 |
| **Terms row, Attributed orders:** API orders with broker_id; web and app volume without API excluded | H1 |
| **Terms row, Referred users:** referral-code users, up to six months after sign-up | H1 |
| **Terms row, Reporting:** a dashboard and a monthly report | P1 FAQ, H1 (dashboard path) |

### FAQ
| Claim | Source |
| --- | --- |
| Definition of an API broker (automated strategies, custom terminals, real-time market updates) | P1 FAQ |
| The two connection methods | P1, H2 |
| Fast API token flow | D1 |
| Fast API setup needs UAT and production callback URLs and a 300 × 300 px logo | H2 |
| Products and jurisdictional limitation | H1, P1 footer disclaimer |
| Sub-broker rules: own code, share of your commission, their volume counts toward your level, needs an Exchange account, cannot already be a broker or affiliate | H3 |
| No minimum sales requirement to remain in the programme (standalone question) | P1 FAQ |
| How to apply | P1 FAQ, P2 |

## 2. Illustrative or placeholder content

| Item | Status |
| --- | --- |
| Track panel | A **conceptual, data-free** diagram of the documented formula (H1). It shows no figures, fields or dashboard UI. The previous illustrative dashboard mock-up was removed. |
| "ABCD" and "ABCD_XYZ" | Documented example codes (H1, H3), not real brokers. |
| Code panel values | Documented example values (H1), not a recommended order. |
| `EXCHANGE` wordmark | Brand-neutral placeholder. |
| Hero photograph | Decorative abstract sculpture (Unsplash License). It makes no product claim. |
| "Become a Broker" link | Points at the live programme page, which hosts the registration form (P2). Replace it if a direct form URL exists. |
| Headline, section titles, benefits intro | Positioning copy with no factual claim, e.g. "Trade where your users are." |

## 3. Unresolved: NEEDS BUSINESS CONFIRMATION

| # | Item | Conflict | What the page does now |
| --- | --- | --- | --- |
| 1 | **Payout cadence** | P1 says "credited directly to your account daily" in "Why join", but its own FAQ says commissions are "paid out on a monthly basis". H1 says the settlement cycle is daily at 00:00 UTC (T-1). | States only "credited directly to your Exchange account", with no cadence. Flagged in the Track step and the Payout row. |
| 2 | **Monthly report** | P1's FAQ promises "a monthly report and dashboard". The monthly report may belong to the same outdated monthly-payout model as item 1. | Shown in the Reporting row, flagged. Confirm together with item 1. |
| 3 | **Product scope by region** | H1 lists spot and derivatives across all applicable pairs. P1's footer says availability is subject to jurisdictional limitations. | States both. Flagged for per-region confirmation. |
| 4 | **"Up to 50%" wording** | No conflict in fact. The Commission row joins P1's "up to 50% on referred trades" with H1's net-fee × level-ratio formula as two sentences. | Flagged as Review on the Commission row. Confirm legal is comfortable with the pairing. |
| 5 | **broker_id in the API docs** | H1 documents `broker_id` on `private/create-order`. D1 (the broker docs) documents `broker_id` only on `create-fast-api-key`. This is not a contradiction, but it is a documentation gap. | Uses H1. Engineering should confirm D1 will be updated. |
| 6 | **Sponsorship perks** | P1 names Formula 1, the NBA, the UFC and Serie A. | Page says only "exclusive sponsorship perks". No partner names or logos are shown until the relationships are confirmed for this brand context. |
| 7 | **Partner list and logo usage** | No conflict. The four partners are taken from P1 as it stood on 2026-10-30. | Flagged as Review on the strip. Confirm the relationships are current and logo usage is approved for the new page. |

## 4. Deliberately excluded

- **FIX, WebSocket and latency claims.** The Exchange API page offers FIX and WebSocket, but neither H1 nor D1 documents broker attribution over them. No latency figures exist in any source.
- **P1's "Latest News".** These are time-bound announcements, not evergreen content. (P1's "Our Partners" was added at the user's request on 2026-10-30, using only P1's four partners and their authentic files.)
- **"Technical Strategy Provider".** This appears in H1's eligibility list but not in P1's "Best for". The page follows P1.
- **Statistics, volumes, tier tables and rate cards.** None is published in any source. P1 says the rate card is shared by an Account Manager.

## 5. Corrections made in the integrity pass

| Before | After | Why |
| --- | --- | --- |
| Code panel showed `BTC_USD` spot with invented values | The H1 documented example (`BTCUSD-PERP`, …) | The previous values were not from a documented example. |
| API docs link pointed to the generic v1 docs URL (it redirects) | The broker docs URL that P1's button uses | Accuracy of the link. |
| Fast API flow ended "Redirected to your callback URL" | The access token reaches your callback and creates the user's API key | Matches the D1 flow. |
| "nothing else to reconcile"; "Every order attributed" | Removed / "Clear attribution" | Overclaims: only API orders with broker_id count. |
| Apply step: "Tell us about your platform, your users and how they trade" | The real registration form fields (P2) | The previous wording invented the application content. |
| Onboard step: "review fit" | "shares the full commission schedule and rate card" (P1) | "Review fit" was invented. |
| Commission rate hidden as "tiered" | "Up to 50%" (P1) | Preserves P1's established commercial term. |
| Missing: no minimum, round-the-clock support, marketing support, monthly report | Added to the terms table and FAQ (P1) | Preserves P1's established benefits. |
| Dashboard note said "Illustrative data" | "Illustrative layout and figures, not the actual dashboard or real results" | Makes clear the panel is not real data. |

## 6. Content refinement pass (2026-10-30)

| Change | Source / reason |
| --- | --- |
| The hero lede now states the Exchange's liquidity, trading infrastructure and up to 50% commission | P1 tagline and "Why join" |
| "Integration on your terms" benefit replaced by "Support behind your growth" (marketing support, brand, sponsorship perks, round-the-clock support) | P1. Integration is still explained in the Integration section. |
| Dashboard mock-up with invented codes, roles and figures removed; replaced by a data-free diagram of the H1 settlement formula | Integrity: there was no verified dashboard UI or data. |
| Application steps no longer name form fields; wording follows P1 ("sign up", "Account Manager will reach out", "full schedule and rate card") | P1, P2 |
| Terms reduced from 8 rows to 5: Sub-brokers moved to the FAQ, Support moved to Benefits, Minimum volume made a standalone FAQ | Reduces repetition; every fact is kept. |
| The FAQ "How is commission attributed?" was removed because it repeated the Trade step and the Attributed orders row | Every rule still appears once on the page. |
| Payout cadence still states no cadence and stays flagged NEEDS BUSINESS CONFIRMATION | The discrepancy is deliberately not resolved. |

## Content pass vs P1 (2026-10-30)

Compared section by section with P1 (read in its zh-TW rendering). Four P1 points were missing and are now on the page:

| Claim | Source |
| --- | --- |
| Hero line 2 "Earn up to 50% commission." | P1 Why join · FAQ ("up to 50% commission on all referred trades") |
| Key figure: Up to 50%, commission on all referred trades | P1 Why join · FAQ |
| Key figure: 24/7, support wherever you operate | P1 Why join ("24/7 support, across regions") · FAQ |
| Key figure: 0, minimum sales requirement to stay in the programme | P1 FAQ |
| Benefit: fast, stable connectivity | P1 Why join (cutting-edge technology, fast and stable connectivity) |
| Benefit: tickets and VIP experiences at top-tier sporting events | P1 FAQ (names Formula 1, NBA, UFC, Serie A; kept generic for the brand-neutral concept, flagged for review) |
| Fast API is OAuth 2.0 compatible | P1 news: "Introducing FastAPI and OAuth 2.0 Compatibility" (Jan 4, 2024) |
| FAQ contact line "Still have questions? Contact us" | P1 FAQ footer. On P1 it opens a contact form in a modal with no direct URL, so the link points at P1 and is flagged for review. |
| Benefit "Commission that follows your flow": a share of the net fees on every referred trade, at a rate set by your broker level and credited to your Exchange account (replaces a third "up to 50%") | H1 (formula, settlement account), P1 (referred trades) |
