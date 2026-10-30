/**
 * Shared breakpoints for script. CSS cannot read custom properties inside media queries,
 * so stylesheets repeat these literal values; keep both in step (see PROGRAMME-SYSTEM.md).
 *
 *   ≤420px   compact header (programme label hidden)
 *   ≤767px   mobile: recomposed layouts, hero copy-first
 *   ≤860px   header nav hidden
 *   ≤1023px  tablet: split layouts stack; feature steps become a disclosure list
 *   ≤1199px  programme blocks stack their heading above content
 */
export const media = {
  mobile: '(max-width: 767px)',
  compact: '(max-width: 1023px)',
  reducedMotion: '(prefers-reduced-motion: reduce)',
} as const;
