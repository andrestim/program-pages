---
name: Programme Landing Pages
description: Graphite & Engineered Calm — a reusable dark, precision-crafted system for institutional exchange programme pages.
colors:
  graphite-night: "#0b0c0e"
  graphite-raised: "#101114"
  platinum: "#eceef1"
  plate-white: "#ffffff"
  satin-silver: "#a2a7ae"
  pewter: "#80858c"
  hairline: "rgba(232, 236, 241, 0.08)"
  hairline-strong: "rgba(232, 236, 241, 0.14)"
  hairline-edge: "rgba(232, 236, 241, 0.24)"
  identifier-wash: "rgba(255, 255, 255, 0.06)"
  code-inset: "rgba(0, 0, 0, 0.32)"
  hero-light: "rgba(206, 220, 234, 0.075)"
  blue-titanium: "#9eb1c4"
  blue-titanium-wash: "rgba(158, 177, 196, 0.14)"
  review-amber: "#d8b26e"
typography:
  figure:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.9rem + 1.6vw, 3.5rem)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.035em"
  display:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.5rem + 3vw, 3.75rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.032em"
  statement:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.4rem + 1.9vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.032em"
  headline:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 1.45rem + 1.25vw, 2.5rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.024em"
  title:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.012em"
  lede:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 0.98rem + 0.3vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "'cv11', 'ss01', 'ss03'"
  body-small:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.65
  ui:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
  caption:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
  numeral:
    fontFamily: "JetBrains Mono Variable, ui-monospace, Menlo, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    fontFeature: "'tnum'"
rounded:
  xs: "4px"
  s: "6px"
  m: "12px"
  l: "18px"
  pill: "999px"
spacing:
  grid-gap: "24px"
  gutter: "clamp(20px, 4vw, 40px)"
  section-y: "clamp(88px, 3.5rem + 7vw, 160px)"
  header-h: "64px"
  content-max: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.platinum}"
    textColor: "{colors.graphite-night}"
    rounded: "{rounded.pill}"
    height: "52px"
    padding: "0 26px"
  button-primary-hover:
    backgroundColor: "{colors.plate-white}"
  button-primary-active:
    backgroundColor: "#dcdfe3"
  button-primary-small:
    backgroundColor: "{colors.platinum}"
    textColor: "{colors.graphite-night}"
    typography: "{typography.ui}"
    rounded: "{rounded.pill}"
    height: "40px"
    padding: "0 16px"
  link-text:
    textColor: "{colors.satin-silver}"
    height: "44px"
  link-text-hover:
    textColor: "{colors.platinum}"
  technical-panel:
    backgroundColor: "{colors.graphite-raised}"
    rounded: "{rounded.l}"
  code-block:
    backgroundColor: "{colors.code-inset}"
    rounded: "{rounded.m}"
    padding: "18px 0"
  method-tag:
    textColor: "{colors.platinum}"
    rounded: "{rounded.s}"
    padding: "3px 8px"
  inline-identifier:
    backgroundColor: "{colors.identifier-wash}"
    textColor: "{colors.platinum}"
    rounded: "{rounded.xs}"
    padding: "1px 4px"
---

# Design System: Programme Landing Pages

## Overview

**Creative North Star: "Graphite & Engineered Calm"**

Deep graphite holds the whole page, and light is the only drama. Each programme page has exactly one expressive moment: the Hero, a single precision-engineered object lit from one side, set in generous negative space with the copy in its dark half. Everything after it is markedly calmer: flat graphite, hairline structure, measured typography and wide, unhurried spacing. The calm is engineered, not empty. Every edge sits on a 12-column grid and every block shares the same content column, and the asymmetric balance of the Hero carries a quiet wabi-sabi restraint.

Technology is felt through materials, lighting and precision, never through effects or labelling. The material vocabulary is clean metal, smoked glass and controlled reflection: a 1px light edge on the primary plate, a faint top-down sheen on the one lifted panel, a single moment when the Hero's lit edge catches the light and then rests, and a sheen that crosses the primary plate on hover. As the page scrolls, the Hero photograph trails slightly behind the copy (up to 110px; 40px on mobile), so the object reads as set back in space. On wider screens the copy holds full opacity for the first 30% of the scroll, then eases to 40%. It should read like Apple and Porsche, not science fiction. Headings speak for themselves. There are no kickers, no decorative numbering and no monospace "engineering" costume. Surfaces are always clean and smooth. Distress, grain, rust, neon, glow and Web3 iconography are rejected outright.

The system is shared by every programme page (API Broker, Affiliate, Market Maker, OTC). The visual language is constant; each page's section sequence follows its own content, drawn from one component library, and each page has its own hero object from the same photographic series. Every rule here applies to all of them.

**Key Characteristics:**
- Graphite Night field with Platinum as the single brightest element on any screen.
- One cinematic Hero, then flat tonal sections divided by hairlines. The closing has no image.
- Headings carry each section alone, with no eyebrow or kicker above them.
- Editorial columns and spec-sheet tables in place of boxed cards.
- Monospace only for code, identifiers and numerals whose order matters.
- Quiet-but-tactile interaction: presses answer on pointer-down, small hovers reward attention, and illustrations explain themselves once the reader arrives.
- Photography graded to neutral graphite, with its black point matched to the page so it dissolves into the page instead of sitting in a frame.

## Colors

A near-monochrome graphite palette with a cool cast. Platinum provides emphasis, and Blue Titanium appears only rarely.

### Primary
- **Platinum** (`platinum`): The brightest value in the system. Used for primary text, headings, term labels and the fill of the primary CTA plate. The plate brightens to **Plate White** (`plate-white`) on hover. On any screen, the primary CTA is the brightest object.

### Secondary
- **Blue Titanium** (`blue-titanium`): A desaturated, anodised-steel accent. It marks only the critical point in a technical illustration (the stage where the user acts, the attributed line of code) and is the colour of the focus ring. Its wash variant (`blue-titanium-wash`) tints the highlighted code line.

### Neutral
- **Graphite Night** (`graphite-night`): The page field and the black point of every graded photograph. Also used as the text colour on the Platinum plate.
- **Graphite Raised** (`graphite-raised`): The one lifted surface (the technical panel).
- **Satin Silver** (`satin-silver`): Secondary text: ledes, column and answer copy, term values, nav links at rest, and the second line of the Hero headline.
- **Pewter** (`pewter`): Tertiary text: numerals, captions, notes, table headers and footer copy. It clears WCAG AA on both Graphite surfaces.
- **Hairline** (`hairline`), **Hairline Strong** (`hairline-strong`), **Hairline Edge** (`hairline-edge`): Dividers at three strengths. Hairline separates rows and sections; Hairline Strong is the top rule of a content block and the panel border; Hairline Edge draws rails and stage rings.
- **Identifier Wash** (`identifier-wash`): A barely visible plate behind inline identifiers such as `broker_id`.
- **Code Inset** (`code-inset`): The darkened well behind a code block inside the panel.
- **Hero Light** (`hero-light`): The highlight that sweeps once onto the Hero sculpture's lit edge as the photograph settles, then rests. It is used nowhere else.

### Tooling only
- **Review Amber** (`review-amber`): Appears only in `?review` mode, on flags that mark unapproved claims. It is never part of a published page.

### Named Rules
**The One Light Rule.** Each viewport has one bright object, and it is the primary CTA plate. Nothing else may be filled with Platinum or approach its luminance.

**The Rare Metal Rule.** Blue Titanium appears at most twice in any panel and never as a fill larger than a dot or a text-line wash. It marks the point that matters, not decoration.

**The Dissolve Rule.** Every photograph's black point is Graphite Night, produced with `scripts/grade_images.py`. An image that shows a visible edge against the page is graded wrong.

## Typography

**Display Font:** Inter Variable (optical sizing on), with ui-sans-serif and system-ui fallbacks
**Body Font:** Inter Variable, with the same fallbacks
**Numeral/Code Font:** JetBrains Mono Variable, with ui-monospace, Menlo and Consolas fallbacks

**Character:** A neutral, exceptionally readable grotesque set at medium weight, with tight negative tracking at large sizes. A quiet monospace appears only where the content is code, an identifier or an ordered numeral. Inter stylistic sets `cv11`, `ss01` and `ss03` are on throughout.

### Hierarchy
- **Figure** (300, 40→56px, 1, −0.035em, tabular): Key figures only. It always stays below Display, so the Hero headline remains the largest type on the page; the light weight makes it read as measurement, not shouting.
- **Display** (500, 40→60px, 1.04, −0.032em): The Hero headline only. It is two sentences on two lines, and the second line drops to Satin Silver.
- **Statement** (500, 32→48px, 1.08): The closing line only. It sits a clear step below the Hero.
- **Headline** (500, 30→40px, 1.12, −0.024em): One per section, balanced wrapping, spanning columns 1–6. It is deliberately 1.5× smaller than Display, so sections read quieter than the Hero.
- **Title** (500, 20px, 1.3): Column, step and block headings.
- **Lede** (400, 17→20px, 1.55): Section introductions in Satin Silver, at most 42–44ch.
- **Body** (400, 17px) / **Body small** (400, 15px, 1.65): Running copy, FAQ questions (at 500), column, step, term and answer copy.
- **UI** (500, 14px) and **Caption** (400, 13px): Navigation, small buttons, panel captions, notes, table headers and footer copy.
- **Numeral** (mono, 12px, tabular): Step order (01–03) and code line numbers.
- **Timeline numeral** (sans, 300, 20px, tabular, Pewter): Process order (01–04). Light weight keeps the larger figure quiet.

### Named Rules
**The Medium Ceiling Rule.** No text heavier than 500, except the 600-weight letter-spaced wordmark. Hierarchy comes from size, tracking and colour, never from bold.

**The No Kicker Rule.** Nothing sits above a heading: no eyebrow, no category label, no tick. If a heading needs a label to make sense, rewrite the heading.

**The Honest Mono Rule.** Monospace is reserved for code, identifiers and numerals whose order the reader needs. It never labels, decorates or sets prose. Never number items that have no sequence.

## Layout

The layout is a 12-column grid inside a 1200px content measure, centred, with 24px gutters between columns and fluid page gutters (20px at 375px up to 40px on desktop). Full-bleed backgrounds and the Hero photograph may break the measure; text never does. Sections are separated by a 1px hairline and a fluid vertical rhythm of 88px (mobile) to 160px (desktop).

**Recurring patterns:**
- **Section head:** headline across columns 1–6, lede bottom-aligned across columns 8–12. The closing section mirrors this: the statement on the left, and the lede plus CTA on the right.
- **Shared content column:** every block that pairs a heading with content (process, terms, FAQ) starts its content at column 5. Edges therefore line up from section to section.
- **Editorial columns:** three equal columns separated by 80px gaps, with the dividers drawn in the gap so every column has the same measure.
- **Integration feature:** steps across columns 1–5, panel across 7–12.

**Responsive behaviour:**
- Below 1200px, the Programme blocks (process timeline and terms) put their heading above full-width content, so the four process steps keep a readable measure.
- Below 1024px, all other split layouts stack to full width.
- Below 768px, layouts are recomposed rather than scaled:
  - The Hero shows the copy first, then a full-width CTA, then the audience line, with the photograph last as a cropped portrait plate.
  - Columns become stacked rows with top hairlines.
  - Timelines turn vertical.
  - Table rows become term-over-detail.
- Header navigation hides below 860px.
- There is no horizontal overflow at any width.

**The Measure Rule.** Text never spans the full 1200px. Every paragraph has an explicit character measure.

## Elevation & Depth

Flat with one lifted panel. Depth comes from tonal steps (Graphite Night to Graphite Raised) and from hairlines at three strengths.

- **Technical panel:** the only surface that lifts. It has a soft, long ambient shadow below it, a 1px light edge across its top, and a faint top-down sheen like smoked glass.
- **Primary CTA:** a machined 1px top highlight at rest, and a soft Platinum bloom on hover.
- **Header:** becomes frosted graphite glass once the page scrolls.

### Shadow Vocabulary
- **Panel lift** (`box-shadow: inset 0 1px 0 rgba(255,255,255,0.05), 0 40px 80px -40px rgba(0,0,0,0.7)`): The technical panel only.
- **Plate edge** (`box-shadow: inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 2px rgba(0,0,0,0.4)`): The primary CTA at rest.
- **Plate bloom** (`box-shadow: inset 0 1px 0 #ffffff, 0 6px 24px -8px rgba(220,230,240,0.35)`): The primary CTA on hover. It is the faintest permitted glow.
- **Header glass** (`background: rgba(11,12,14,0.72); backdrop-filter: saturate(140%) blur(18px)`): The sticky header after scrolling.

### Named Rules
**The Single Lift Rule.** At most one lifted surface per section: the technical panel, or on pages without one, the earnings estimator. Benefits, grids, spec sheets, terms, the FAQ, process steps and the closing stay flat on hairlines.

**The Light Edge Rule.** Metallic quality is expressed as a 1px top highlight and a faint top-down sheen, never as a glow, gradient border or reflection map.

**The One Hero Rule.** The Hero is the page's only full-bleed photograph. Below it, imagery is limited to one coordinated series of three small material vignettes in Benefits: the same light, grade and 4:3 crop, with the black point equal to the page. Only API Broker uses a vignette series. The other programmes may use at most two single section figures each (a cropped, low-key material study beside a heading, never in a row), and carry their identity through composition (ART-DIRECTION.md): Affiliate through a drawn curve and type, Market Maker through a ruled termsheet, and OTC through one architectural plate sliced into three columns. All imagery is one photographic family: cropped, low-key, edges bleeding off the frame, one key light. Every other section, including the closing, resolves on flat graphite; data is drawn in code, never photographed.

## Shapes

The form language is engineered and tight:
- **Pill (999px):** interactive plates, meaning the CTAs and the header button.
- **Gently rounded 18px:** the lifted panel.
- **12px:** code wells.
- **6px:** small tags such as the HTTP method.
- **4px:** inline identifiers and focus rings.

Content containers have no corners at all because they are not boxes: columns, rows and blocks are defined by hairlines alone. Flow stages are 15px hollow rings; timeline nodes are 9px rings. A filled Blue Titanium ring means "current step" and nothing else: a flow fills only the stage the reader is at (its first), and the process timeline leaves every node hollow. Photographs have no frame or radius; they fade into the page through gradient scrims.

## Components

### Buttons
Quiet but tactile, with engineered precision.
- **Shape:** Full pill (999px).
- **Primary:** A Platinum plate with Graphite Night text, 52px tall with 26px side padding, 15px medium text and a 14px arrow icon. It carries the Plate edge highlight at rest.
- **Press:** Feedback comes on pointer-down, not on release. The plate scales to 0.97 and dips to #dcdfe3 in 120ms, then settles back over 200ms. The text link dims to 0.7 opacity instead.
- **Hover (fine pointers only, so touch never sticks):** A metallic sheen crosses the plate once (1100ms, ease-in-out): a narrow band of white light with a cool steel trailing edge. If the pointer leaves mid-sweep, the band fades out over 180ms and only then returns off-plate, so it never cuts away. The Plate bloom appears over 260ms, and the arrow travels 3px right (2px up-right for an external link) over 200ms.
- **Focus:** A 2px Blue Titanium ring offset by 3px. The arrow travels on focus too.
- **Small:** The same plate at 40px tall (44px on coarse pointers), used only in the header. It is visible only while no in-page primary CTA is on screen.
- **Wrapping:** Labels stay on one line on wide screens. Below 768px, full-width plates allow wrapping, so longer translated labels never overflow.
- **Text link:** Satin Silver text with a 44px hit area. On hover it turns Platinum, a 1px underline draws in from the left, and the arrow travels.

### Navigation
- **Header:** Fixed, 64px tall and transparent over the Hero. After scrolling it becomes header glass with a Hairline bottom border. The wordmark (13px, 600, 0.28em tracking) and programme label are separated by a 14px Hairline Edge tick.
- **Links:** 14px Satin Silver links with a 44px hit area. On hover and for the active section they turn Platinum, and a 1px underline scales in from the left (it previews on hover and stays for the active section).
- **Mobile:** Links are hidden; the wordmark and CTA remain.

### Key Figures
An optional band straight after the Hero: two to four verified headline numbers on hairlines, in equal columns. Below 768px each figure becomes one compact row, with values in a shared 10.5rem column and labels beside them. Each is a Figure numeral above a 15px Satin Silver label (at most 26ch). The first figure is the programme's lead claim and is the only one in Platinum; the rest are Satin Silver. A qualifier such as "Up to" sits before its number at lede size and is never dropped; the number never breaks, and a qualifier too long for its column wraps above it rather than overflowing. Each column's top rule draws in from the left as it arrives (960ms, soft curve, 90ms apart). No cards, icons, count-up animation or backgrounds. Every figure needs a primary source.

### Editorial Columns (benefits)
Three equal columns under one Hairline Strong top rule, separated by Hairline dividers that sit in the gap between columns. Each column holds only a title (20px) and Body small copy (15px, at most 36ch). There are no indices, spec lines, backgrounds or corners. An optional material vignette (4:3, or 16:9 on phones) sits above the title. It is graded to the page's black point, so it needs no frame. Use one for every column or for none. The columns settle in turn as the section arrives (90ms apart). On hover, a hairline draws slowly across the column's top rule from the left: 960ms on a soft curve (`cubic-bezier(0.25, 0.8, 0.25, 1)`), 60ms after the pointer arrives so a passing cursor does not flicker it. It withdraws to the right over 640ms.

### Technical Panel (signature)
The one lifted surface on each page. It uses the Graphite Raised fill, an 18px radius, a Hairline Strong border and the Panel lift shadow. A 13px Satin Silver caption bar sits above a Hairline. Content starts at the top of the panel, and all panel states share one grid cell, so the frame never changes height. Flow and formula panels stay still and arrive with their panel. The code illustration plays its full sequence the first time it is seen; later visits to the same step only cross-fade and relight the attributed line.

The panel's content takes one of four forms. Each draws only what a source documents:
- **flow:** a vertical rail of rings, each stage with a label and detail. Where the user acts, the stage names the control in quotation marks ("Connect to Exchange") instead of drawing a fake button. Only the current step's ring is filled. It has no motion of its own.
- **formula:** a written calculation for a documented rule. Each factor is a row (operator column 32px, label with its detail beneath) on a Hairline; the result row sits under a Hairline Strong rule, like the total line of a sum. An optional worked example adds one figure per row in a right-hand column headed "Example" (20px light tabular numerals; the result in Platinum). Example figures must be anchored to a published number (such as the "up to 50%" ceiling), carry no currency unless one is documented, and the note must say they are illustrative.
- **code:** a method tag, an endpoint and a numbered JSON block in a Code Inset well, with the attributed line washed in Blue Titanium and a 2px left edge. An optional `annotation` (13px Blue Titanium, after an 18px leader) names the attributed line, such as "Your broker code"; it is hidden when the panel is 460px or narrower, where the wash alone carries it.
- **ledger:** a caption path above a tabular-numeral table. Codes are set in mono; headers are 13px sans. Use it only with verified data; never fill it with invented figures.

### Step Tabs
At 1024px and wider these are accessible vertical tabs beside the Technical Panel. Each tab shows a numeral and stage word ("01  Connect") above a 20px title.

- **Stretch line:** the selected step's 1px Platinum hairline stretches out from the left along its top edge (560ms). The previous step's line retracts toward its right end (300ms).
- **Description:** expands by animating grid rows from 0fr to 1fr over 300ms.
- **Panels move with direction:** going to a later step, the old panel lifts out by 6px (200ms) and the new one rises in from 6px below (300ms, 60ms delay). Going back, the travel reverses.
- **Code panel:** on first view, lines settle in reading order (32ms apart), then the Blue Titanium wash on the attributed `broker_id` line lights up (at 720ms). On later visits only the wash replays (240ms, at 280ms), so rapid or keyboard switching stays crisp.
- **Keyboard:** arrow keys, Home and End move between tabs.

Below 1024px the same steps become a single-open disclosure list: a heading button with `aria-expanded`. The step's panel opens directly beneath its description, so the result always appears where the reader tapped and never off-screen below the list.

### Partner Logo Strip
An optional quiet band between Benefits and the Integration feature, driven by `partners` in a programme's config. Only partners verified on the programme's primary page may be listed, using authentic logo files.

- **Layout:** the title (15px, 500, Satin Silver) sits in the heading column (1–3). The logos span the shared content column (5–12), spaced evenly and vertically centred. Below 1024px the title stacks above the logos. Below 768px the logos form a two-column grid.
- **Treatment:** every logo is rendered greyscale at 0.62 opacity, rising to 0.9 and lifting 2px on hover over 260ms. The muting is CSS only; the asset files stay authentic.
- **Sizing:** each logo's width is 30px (26px on mobile) × √(4 ÷ aspect) × aspect. Every mark gets a similar optical area, and its height follows the file's own ratio, so proportions never change.
- **No chrome:** there are no cards, borders, backgrounds, links or entrance motion. The section uses reduced padding, 48–80px.

### Spec Table (terms)
Rows are separated by Hairlines in a 3/8 split. The term label is Platinum at 500 weight and the value is Satin Silver. On hover the row's rule brightens and the value comes forward to Platinum. Inline identifiers sit on the Identifier Wash at a 4px radius.

### Spec Sheet (termsheet rows)
For headline terms. Each row sits on the 12-column grid: a Pewter UI-size term (columns 1–3), the value in light Figure numerals (4–8; Platinum on the first row, Satin Silver after; a qualifier such as "As low as" sits before it at lede size, and the number never breaks), and one Satin Silver line of detail (9–12). Each row's rule draws in from the left as it arrives (960ms, soft curve, 80ms apart). Below 768px term, value and detail stack.

### Ruled Grid
For four to six peers, or peers that each need a link. Three columns on 1px Hairline Edge top rules, with column dividers in the gap so the measures stay equal; two columns below 1024px, one below 768px. Each cell: a 20px title at 500, Body small copy in Satin Silver (at most 36ch), and an optional text link pinned to the cell's foot so links share a baseline. A footnote may follow in Caption Pewter.

### Audience List
Two columns of names on Hairline Edge rules, set at section-title size in light (300) Satin Silver, coming forward to Platinum with a drawn top rule on hover (the Benefits hover). One column below 768px. No icons, no descriptions.

### Earnings Estimator
The lifted panel on a page without technical steps. A ring rail on the left: equal stops on one hairline, the travelled length in Satin Silver, the selected stop a filled Blue Titanium ring (the same "you are here" ring as the flow). Native radios, labelled by a legend; focus rings on the dot. On the right, the published estimate in Figure numerals, which settles in (300ms rise) on change, with no count-up, and the calculator's own qualifier in Caption Pewter. Values are copied from the live calculator, never computed.

### Pathway (conceptual diagram)
A lifted panel holding one horizontal Hairline Edge rail through a hollow 11px ring per stage, with a 20px title and a Body small detail under each ring. The destination ring is solid Platinum; no stage is marked "current". The rail draws in once (960ms, soft curve) and the stages arrive in sequence (160ms apart). Below 768px it turns vertical. The note under it says the diagram is conceptual.

### Range Scale
A lifted panel holding one published span: a Satin Silver rule between two end ticks, then a dashed Hairline Edge run for what lies beyond it (for example "Larger, on request"). The values sit under their ticks in Figure numerals (the beyond value in Pewter), each with a short label. The span draws in once. Below 1024px the values stack against a vertical rule.

### Estimator Curve
An option on the Earnings Estimator: the published outputs plotted as a 1px Hairline Edge line over the same equal stops as the rail (a categorical axis, never a value axis). The travelled part is Satin Silver, and the selected point is the filled Blue Titanium dot.

### Hero layouts
- `standard` (API Broker, Affiliate): the image sits to the right, and the copy sits in its negative space.
- `horizon` (Market Maker): the image spans the full width, so one lit line can cross the whole frame at about 68% height. The copy rises into the dark upper half, and the light catch lies along the line.
- `tall` (OTC): a full-viewport room. Below 1200px the image is shifted so the slit stays right of the headline. The image spans the width, the copy sits low in the dark left wall, the parallax travel drops to 64px, and the light rises once in the slit instead of sweeping across.

### Section-head figure
An optional `figure` on any section: one cropped, low-key material study (4:3) in columns 8–12, spanning the title and lede, with no frame, because its black point is the page. The title and lede stay together at the top left. In a `ledger` the figure travels with the sticky heading, under its lede. Below 1024px it drops under the heading at up to 560px. Use it on at most two sections per page, never on neighbouring sections, and only where the section is otherwise text alone.

### Section-head variants
`split` (the default) sets the title on the left and the lede on the right. `stacked` puts both in one narrow column, for quieter openings. A `ledger` grid always uses `stacked`, held sticky in its left column. Varying the opening is what keeps the scroll from becoming a metronome.

### Earnings Arc (Affiliate signature)
The Estimator's `arc` layout drops the panel. The published points are drawn as one line across the full measure (240–420px tall): Hairline Edge for the full line, Platinum (1.5px) for the travelled part. The figure sits in the empty upper left at Figure size.
- Choosing a stop redraws the travelled dash from wherever it is: one interruptible `stroke-dashoffset` transition, 640ms ease-out.
- The line draws once when it first comes into view.
- The curve's dots are the only stop markers. The rail below carries just the labels (the focus ring sits on the label), with the axis caption centred under them.
- On phones the figure comes first and the curve follows at 200px.

### Roll Call (Affiliate audience)
The Audience `roll` layout sets one name per line at Statement size in light (300) Satin Silver. Every second name steps in to column 5 (column 2 on phones, at H2 size). There are no rules: the names are the image.

### Ledger (Affiliate benefits)
A Grid `ledger` holds the stacked heading in a sticky left column (columns 1–4). The items run as ruled rows on the right (columns 6–12), each with a title and a body side by side.

### Termsheet (Market Maker signature)
The SpecSheet `termsheet` layout sets the section as the document itself:
- a Hairline Edge rule opens the sheet;
- sentence-case column heads in Caption Pewter (Term, Value, Condition);
- two column rules that drop once through the rows (1200ms, soft curve);
- each row's rule plots in left to right;
- footnotes keyed by superscript marks under a ruled line.

Below 1024px the heads and column rules drop away.

### Schedule (Market Maker perks)
A Grid `schedule` is a numbered two-column list (light H3 numerals in Pewter). Use it only for content that is genuinely an ordered schedule. A footnote mark (`*`) carries a qualifier, such as a jurisdiction limit.

### Plate Columns (OTC signature)
The Benefits `plate` layout: three tall 3:4 columns cut from one shared architectural image, so wall, light and wall read as a single structure, with the column gaps as joints. The plate is cropped close to the slit so the side columns hold the lit slab edges. The slices rest at 92% opacity, and the column under the pointer comes up to 100% (opacity only). Each column keeps its own text link.

### Threshold (OTC ticket size)
The Range `threshold` layout drops the panel. A Platinum span runs between the published ticks, then a dashed Pewter run carries on past the container to the page edge, masked into the dark. The section clips it, so the page never scrolls sideways.

### Closing variants
- `signature` (Market Maker): the action stands on a ruled line, like a document's signature block, with the eligibility fine print beneath.
- `doors` (OTC): the audience paths become tall, equal columns divided by one rule, with light H2 titles.

### Closing Paths
When the live page splits its application by audience, the closing statement is followed by two or three equal columns on a top rule, each with a 20px title, one line of Body small copy and its own primary plate. Fine print (an eligibility disclaimer) may sit under the action in Caption Pewter.

### Accordion (FAQ)
Each question row is at least 72px tall, set in 17px text at 500 weight, Satin Silver at rest and Platinum when open. A 28px hairline ring holds a plus sign whose vertical bar rotates flat into a minus. The answer opens by animating grid rows over 260ms. Opening and closing are asymmetric. Opening takes 300ms, with the answer text arriving 60ms later. Closing is quicker: the text fades in 120ms, then the row folds away in 200ms. On press the ring gives slightly (scale 0.92, 120ms). On hover the question leans in 2px. Several answers can be open at once, and the first is open by default. An optional contact line under the list ("Still have questions?" in Pewter plus a text link) catches readers who are not ready to apply.

### Process Timeline
One continuous Hairline Edge rail runs the full width and fades out after the last step. Each step hangs a 9px hollow ring on the rail, then a 20px light (300) Pewter numeral, a 20px title and Body small copy (at most 28ch). The rail draws in once from the left (960ms, soft curve) when the first step arrives. Below 768px the rail turns vertical at the left edge, with the rings on it and the copy indented 32px.

## Do's and Don'ts

### Do:
- **Do** keep the Hero as the only cinematic moment and the only photograph, then step down to flat graphite immediately after it.
- **Do** let every section open with its headline alone, then the lede.
- **Do** grade the Hero photograph to neutral graphite with its black point at Graphite Night, adding sub-level dither so dark gradients don't band.
- **Do** keep Platinum fills for the primary CTA plate alone, under the One Light Rule.
- **Do** show partner logos only as authentic files, under one muted greyscale treatment, with their original proportions.
- **Do** make benefit vignettes one series: the same material vocabulary (titanium, smoked glass, steel), a single upper-left key light, the graphite grade with the black point crushed to `--bg`, and a shared crop.
- **Do** start every paired content block at column 5, so edges align from section to section.
- **Do** lead with one authored Hero moment: the copy rises once via CSS (never waiting on script), the light catches once, and the photograph trails on scroll. Scroll-driven values are written directly to the moving element each frame (never through an inherited variable), and `will-change` is set only while the Hero is on screen.
- **Do** keep section entrances layered and brief. The headline arrives, then its lede 140ms later; groups with a real order settle in turn (benefit columns 90ms apart, process steps 80ms apart). The process rail draws in once over 960ms.
- **Do** honour `prefers-reduced-motion` by keeping the feedback but removing the travel. Every change becomes a 150ms opacity fade; scale, slide and rise are dropped; heights switch instantly; and the Hero light simply appears.
- **Do** keep every text colour at WCAG AA or above, every touch target at least 44px, and every focusable element with a visible Blue Titanium ring.
- **Do** express metallic quality through light: a 1px top highlight, a faint sheen, and the Hero's single light-catch. Never through texture.
- **Do** make presses answer on pointer-down (120ms) and keep exits faster than entrances. Gate every hover behind `(hover: hover) and (pointer: fine)`.

### Don't:
- **Don't** put an eyebrow, kicker or category label above any heading.
- **Don't** number items whose order carries no information, or add counters such as "02 / 03".
- **Don't** use monospace as a costume for labels, captions or spec lines.
- **Don't** draw illustrative controls as real-looking buttons inside a technical panel.
- **Don't** recreate, redraw, recolour in the file, or invent partner logos, and don't list a partner the programme's primary page does not show.
- **Don't** use a neon crypto aesthetic, floating coins, rockets, purple or pink gradients, generic glowing spheres, cartoon icons or bulky cards.
- **Don't** use scratches, rust, weathering, stone or concrete grain, visible noise, dirty surfaces or heavy industrial texture. Wabi-sabi here means atmosphere, balance and negative space, not distress.
- **Don't** carry cinematic black chrome, dramatic spotlights, X-ray effects, 3D objects or glows beyond the Hero, or add imagery outside the Hero and the Benefits vignettes.
- **Don't** drift into sci-fi futurism: no HUD chrome, scanlines, grid floors or holographic effects.
- **Don't** use bouncy springs, scroll hijacking, cursor-tracking glow, continuously moving or looping backgrounds, or an entrance on every row (terms and FAQ rows never animate in).
- **Don't** parallax anything but the Hero photograph. The scrims and copy stay pinned to the frame.
- **Don't** animate `backdrop-filter` or blur; switch it on and fade only colour. Don't use blend modes on layers that move.
- **Don't** animate diagrams for decoration. Flow and formula panels stay still.
- **Don't** set text heavier than 500, or use oversized decorative typography.
- **Don't** use saturated colour anywhere. Blue Titanium is the only hue, and it stays rare.
