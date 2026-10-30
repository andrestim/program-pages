/**
 * Programme landing page schema.
 *
 * Every programme (API Broker, Affiliate, Market Maker, OTC, …) is one
 * `ProgramConfig`. Layout, components, tokens and motion are shared; only
 * the values below change between pages.
 *
 * `review` fields mark copy or links that still need business/legal sign-off.
 * They render as plain content normally and as highlighted notes with `?review`.
 */

export type ReviewNote = string;

export interface LinkConfig {
  label: string;
  /** Keep destinations configurable until confirmed. `null` renders a disabled control. */
  href: string | null;
  external?: boolean;
  review?: ReviewNote;
}

export interface ResponsiveImage {
  /** Landscape source set used on tablet and desktop. */
  landscape: { src: string; srcSet: string };
  /** Portrait/square crop used on mobile, where the visual sits below the copy. */
  portrait?: { src: string; srcSet: string };
  alt: string;
  credit?: { author: string; url: string; license: string };
}

/** Sections carry no kicker or eyebrow: the heading speaks for itself. */
export interface SectionIntro {
  /** Anchor id, also used by the header navigation. */
  id: string;
  title: string;
  intro?: string;
  /**
   * How the heading opens the section. `split` (default): title left, lede right.
   * `stacked`: title with the lede under it, in one narrow column, for a quieter opening.
   */
  head?: 'split' | 'stacked';
  /**
   * Optional editorial figure beside the heading: one cropped, low-key material study from the
   * page's image family. Decorative only. Use on at most two sections per page, never in a row.
   */
  figure?: { src: string; width: number; height: number };
}

export interface HeroConfig {
  /** Two short sentences; each is set on its own line on desktop. Name the programme in the lede. */
  headline: string[];
  lede: string;
  primaryCta: LinkConfig;
  secondaryCta?: LinkConfig;
  /** Short audience list shown under the actions. */
  audienceLabel?: string;
  audience?: string[];
  image: ResponsiveImage;
  /**
   * Composition. `standard` (default): copy in the negative space left of the image.
   * `horizon`: the image spans the full width and the copy sits in its upper half, above a
   * line that crosses the frame. `tall`: a full-viewport, slower hero with the copy low.
   */
  layout?: 'standard' | 'horizon' | 'tall';
}

/** One headline number. Keep any qualifier ("Up to") in `prefix`; never drop it. */
export interface KeyFigure {
  value: string;
  prefix?: string;
  label: string;
  review?: ReviewNote;
}

/** Two to four verified headline numbers, set large straight after the hero. */
export interface FiguresConfig {
  id: string;
  /** Accessible name for the band, e.g. "Programme at a glance". */
  label: string;
  items: KeyFigure[];
}

export interface BenefitItem {
  title: string;
  body: string;
  /**
   * Optional material vignette above the title. Use for every item or none, as one
   * coordinated series (same light, grade and crop); see PROGRAMME-SYSTEM.md.
   */
  image?: { src: string; srcSet: string; width: number; height: number };
  /** Optional text link under the body, e.g. a channel's own destination. */
  link?: LinkConfig;
  review?: ReviewNote;
}

export interface BenefitsConfig extends SectionIntro {
  items: BenefitItem[];
  /**
   * `columns` (default): editorial columns. `plate`: tall columns that share one image, sliced
   * so the columns read as parts of a single structure; give `plate` and no per-item images.
   */
  layout?: 'columns' | 'plate';
  plate?: { src: string; srcSet: string };
}

/* ---- Feature panels: the technical illustration beside each step ---- */

export interface FlowPanel {
  kind: 'flow';
  caption: string;
  /**
   * `action` names the control the user presses at that stage (shown as quoted text).
   * `emphasis` fills the stage's ring to mark the current step of a process, the way a
   * filled dot reads as "you are here". Use it on at most one node per flow.
   */
  nodes: { label: string; detail: string; action?: string; emphasis?: boolean }[];
}

export interface CodePanel {
  kind: 'code';
  caption: string;
  method: string;
  endpoint: string;
  /** Lines of JSON. Wrap a token in ⟦ ⟧ to highlight it. */
  lines: string[];
  /** Short label set beside the highlighted line on wide panels, e.g. "Your broker code". */
  annotation?: string;
  note?: string;
}

/**
 * A documented calculation shown as an equation of named terms. `example` adds one worked
 * figure per term; give it to every term or none, and say in `note` that it is illustrative.
 */
export interface FormulaPanel {
  kind: 'formula';
  caption: string;
  factors: { label: string; detail: string; example?: string }[];
  operator: string;
  result: { label: string; detail: string; example?: string };
  note?: string;
}

export interface LedgerPanel {
  kind: 'ledger';
  caption: string;
  path: string[];
  columns: string[];
  rows: string[][];
  note?: string;
}

export type FeaturePanel = FlowPanel | CodePanel | LedgerPanel | FormulaPanel;

export interface FeatureStep {
  id: string;
  label: string;
  title: string;
  body: string;
  panel: FeaturePanel;
  review?: ReviewNote;
}

export interface FeatureConfig extends SectionIntro {
  steps: FeatureStep[];
}

/** Either block may be omitted; a programme with no application flow can show terms only. */
export interface DetailsConfig extends SectionIntro {
  process?: { heading: string; steps: { title: string; body: string; review?: ReviewNote }[] };
  terms?: { heading: string; rows: { term: string; detail: string; review?: ReviewNote }[] };
}

export interface FaqConfig extends SectionIntro {
  items: { question: string; answer: string; review?: ReviewNote }[];
  /** Optional line under the list for readers not ready to apply, e.g. "Still have questions?" + a contact link. */
  contact?: { lead: string; link: LinkConfig };
}

/** One way in on a closing with more than one audience, e.g. "I'm a VIP" / "I'm an institution". */
export interface ClosingPath {
  title: string;
  body: string;
  cta: LinkConfig;
}

/**
 * The closing is deliberately image-free: the hero is the page's only photograph.
 * It carries one action (`cta`), or two to three audience `paths` when the live page
 * splits its application by audience. `note` is fine print set under the action.
 */
export interface ClosingConfig {
  title: string;
  body: string;
  cta: LinkConfig;
  paths?: ClosingPath[];
  note?: string;
  /**
   * `signature`: the action sits on a ruled line like a document's signature block.
   * `doors`: audience paths as tall, equal columns divided by a rule.
   */
  layout?: 'standard' | 'signature' | 'doors';
}

/* ---- Programme-specific sections: shared language, used only where the content calls for it ---- */

/**
 * An earnings estimate read straight from the programme's published calculator: each step is a
 * published input and its published output. Nothing is computed here; never invent steps.
 */
export interface EstimatorConfig extends SectionIntro {
  inputLabel: string;
  outputLabel: string;
  steps: { label: string; value: string }[];
  /** Index of the step selected on load (the live calculator's default). */
  initial: number;
  /** The live calculator's own qualifier, e.g. "Based on referrals' monthly volume. T&Cs apply." */
  note: string;
  /** Draws the published outputs as a curve over the rail (the live calculator shows one). */
  curve?: boolean;
  /** `panel` (default): the lifted panel. `arc`: full-measure signature, the curve drawn large. */
  layout?: 'panel' | 'arc';
  review?: ReviewNote;
}

/** Who the programme is for, set as a large typographic list. */
export interface AudienceConfig extends SectionIntro {
  items: string[];
  /** `list` (default): ruled two-column index. `roll`: a roll call at statement size, no rules. */
  layout?: 'list' | 'roll';
  review?: ReviewNote;
}

/**
 * A ruled grid of short items (perks, channels, features): title, body and an optional link.
 * Denser than Benefits; use it when the live page lists four to six peers, or links each one.
 */
export interface GridConfig extends SectionIntro {
  items: { title: string; body: string; link?: LinkConfig; mark?: string; review?: ReviewNote }[];
  /** Fine print under the grid, e.g. a jurisdiction footnote. Pair it with an item's `mark`. */
  note?: string;
  /**
   * `cells` (default): three ruled columns. `ledger`: the heading holds the left column and the
   * items run as ruled rows on the right. `schedule`: a numbered two-column list, for content that
   * is genuinely an ordered schedule (e.g. "Schedule A" of a termsheet).
   */
  layout?: 'cells' | 'ledger' | 'schedule';
}

/**
 * A termsheet-style table: each row a term, its headline value and one line of detail.
 * Values come from the primary page only; keep qualifiers ("As low as") in `prefix`.
 */
export interface SpecSheetConfig extends SectionIntro {
  rows: { term: string; prefix?: string; value: string; detail: string; mark?: string; review?: ReviewNote }[];
  /**
   * `rows` (default): ruled rows. `termsheet`: the document itself, with `columns` as sentence-case
   * column heads, a visible grid, and `notes` as footnotes keyed by each row's `mark`.
   */
  layout?: 'rows' | 'termsheet';
  columns?: [string, string, string];
  notes?: { mark: string; text: string }[];
}

export interface PartnerLogo {
  /** Partner name; also the image's alt text. */
  name: string;
  /** Authentic asset, transparent margins trimmed. Never a recreated or generated logo. */
  src: string;
  /** Intrinsic pixel size of `src`, used to keep proportions and balance optical size. */
  width: number;
  height: number;
  /** Where the logo and relationship were verified, e.g. "[P1] Our Partners". */
  source: string;
}

/**
 * Optional partner strip. Only list partners the programme's existing page shows (or that
 * business has otherwise verified). Omit the block entirely when there are none.
 */
export interface PartnersConfig {
  id: string;
  title: string;
  logos: PartnerLogo[];
  review?: ReviewNote;
}

/**
 * A conceptual path drawn left to right: three to five stages on one hairline, each a label
 * and a short detail. Only stages the primary page names; say in `note` that it is conceptual.
 */
export interface PathwayConfig extends SectionIntro {
  caption: string;
  nodes: { label: string; detail: string }[];
  note?: string;
  review?: ReviewNote;
}

/**
 * A published range on one scale: a solid span from `min` to `max`, and an optional dashed
 * continuation for what lies beyond it (e.g. "larger on request").
 */
export interface RangeConfig extends SectionIntro {
  caption: string;
  min: { value: string; label: string };
  max: { value: string; label: string };
  beyond?: { value: string; label: string };
  review?: ReviewNote;
  /** `panel` (default): the lifted panel. `threshold`: no panel; one floor line that runs on, past the published maximum, into the dark edge of the page. */
  layout?: 'panel' | 'threshold';
}

/** Every content section between the hero and the closing, tagged by kind. */
export type ProgramSection =
  | ({ kind: 'figures' } & FiguresConfig)
  | ({ kind: 'benefits' } & BenefitsConfig)
  | ({ kind: 'partners' } & PartnersConfig)
  | ({ kind: 'feature' } & FeatureConfig)
  | ({ kind: 'details' } & DetailsConfig)
  | ({ kind: 'faq' } & FaqConfig)
  | ({ kind: 'estimator' } & EstimatorConfig)
  | ({ kind: 'audience' } & AudienceConfig)
  | ({ kind: 'grid' } & GridConfig)
  | ({ kind: 'specs' } & SpecSheetConfig)
  | ({ kind: 'pathway' } & PathwayConfig)
  | ({ kind: 'range' } & RangeConfig);

/**
 * One programme page. Hero and closing are required (every page needs its action); the
 * sections between them render in the order given, so each page follows its own content
 * rather than one fixed template. Nav items whose target section is absent are dropped.
 */
export interface ProgramConfig {
  id: string;
  meta: { title: string; description: string };
  /** Optional token overrides, e.g. { '--accent': '#a7b4c2' }. Use sparingly. */
  theme?: Record<`--${string}`, string>;
  brand: { wordmark: string; programLabel: string };
  nav: { label: string; href: string }[];
  hero: HeroConfig;
  sections: ProgramSection[];
  closing: ClosingConfig;
  footer: { legal: string };
}
