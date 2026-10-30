import type { ResponsiveImage } from '../program/types';

/** Prefix for review notes where sources conflict or a claim needs sign-off. */
export const CONFIRM = 'NEEDS BUSINESS CONFIRMATION:';

/** Builds a responsive source set from graded files named `<name>-<width>.webp`. */
export const gradedImage = (dir: string, name: string, widths: number[]) => ({
  src: `/assets/${dir}/${name}-${widths[Math.floor(widths.length / 2)]}.webp`,
  srcSet: widths.map((w) => `/assets/${dir}/${name}-${w}.webp ${w}w`).join(', '),
});

/**
 * A programme's own generated hero (see `asset-requests/` and `public/assets/<dir>/CREDITS.md`).
 * Decorative: a material or architectural metaphor that makes no product claim. Generated
 * images carry no photographer credit, so the footer shows none.
 */
export const generatedHero = (dir: string): ResponsiveImage => ({
  landscape: gradedImage(dir, 'hero', [1000, 1536]),
  portrait: gradedImage(dir, 'hero-portrait', [800, 980]),
  alt: '',
});

export const draftLegal =
  'Concept draft for internal review. Programme terms, product availability and links are subject to confirmation. Products and services are not available in all jurisdictions.';
