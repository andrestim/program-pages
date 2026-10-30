---
target: API Broker landing page
total_score: 26
max_score: 36
na_heuristics: 7
p0_count: 0
p1_count: 4
target_identity: "file:C:\\Users\\Test\\Documents\\Visual Exploration\\program-pages\\src\\program\\ProgramPage.tsx"
target_fingerprint: "sha256:a23109f6903c20d183f7456ef361d8a13188c495f01c89f7028a2513bc3c540e"
target_path: "C:\\Users\\Test\\Documents\\Visual Exploration\\program-pages\\src\\program\\ProgramPage.tsx"
timestamp: 2026-10-29T17-45-25Z
slug: src-program-programpage-tsx
closed: true
---
Method: dual-agent (A: design review · B: detector + browser evidence)

## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Hero copy waits on a JS rAF before becoming visible |
| 2 | Match System / Real World | 3 | "Fast API", "UAT" used before explained |
| 3 | User Control and Freedom | 3 | n/a-level issues only |
| 4 | Consistency and Standards | 2 | Four different index+hairline idioms; 10 font sizes; fake button pills |
| 5 | Error Prevention | 3 | Illustrative pills invite taps |
| 6 | Recognition Rather Than Recall | 3 | Mobile: panel renders far below its tab |
| 7 | Flexibility and Efficiency | n/a | Landing page |
| 8 | Aesthetic and Minimalist Design | 3 | Redundant devices: 13 indices, 5 eyebrows, 33 reveals, second photo |
| 9 | Error Recovery | 3 | No inputs |
| 10 | Help and Documentation | 3 | FAQ + docs link; eligibility never stated |
| **Total** | | **26/36** | **Good (72%)** |

## Design Specificity Verdict
Content is authored (broker_id code line, Fast API flow, sub-broker ledger, terms table). The visual shell is ~40% category template: mono eyebrow + tick on every section, 01/02/03 in three sections, brighter rule segments, "Questions, answered.", second abstract metal photo at the close.
Detector: exit 0; 24 advisory token-drift findings (13/14px sizes off-ramp, 4px radius, a few literal colors — mostly false positives documented in DESIGN.md). Overlay: hero eyebrow/kicker-above-heading; Pewter #6f747b fails AA at 4.16:1 (footer legal, credits, "Built for"); footer straggler.

## Priority Issues
- [P1] Templated precision devices repeated in every section (eyebrows, indices, panel counter, rule segments, mono-as-costume). Fix: delete eyebrows and non-sequence indices; mono only for code/identifiers/sequence numerals. /impeccable distill
- [P1] Pewter tertiary text fails WCAG AA (4.16:1) on 40+ nodes incl. legal and disclaimer. Fix: --text-3 #80858c. /impeccable audit
- [P1] Programme section heaviest on page (1359px, 7 hierarchy levels, Platinum detail text). Fix: remove kickers, quiet terms, tighten block gap. /impeccable quieter
- [P1] Closing photo competes with hero, shows edge grain, overlaps title on mobile. Fix: remove image; Platinum plate is the only light. /impeccable distill
- [P2] 33 identical scroll reveals; hero copy gated on JS; image scale-in. Fix: one reveal per section head; CSS-driven hero intro; opacity-only image. /impeccable animate
- [P2] Awkward wraps and uneven benefit measures; Integration panel dead space; illustrative pills look clickable. /impeccable layout

## Persona Red Flags
Jordan: "API broker" only defined in FAQ; Fast API/UAT unexplained. Riley: settlement cadence missing; commission explained 4x. Casey: 7535px page; audience strip stranded below photo; panel off-screen from its tab; closing arcs behind title.

## Minor Observations
Tablet: lit edge behind headline at 834px. Footer straggler. Inline code padding gap. Unused .cta--quiet. Closing padding 173 vs 157px. Header nav aligns to no column.

## Questions to Consider
Why is the ownable broker_id line third while an anonymous sculpture carries the hero? Would a photo-free closing be more confident? Which devices will still mean anything on the OTC page?
