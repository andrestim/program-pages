import type { ProgramConfig } from '../program/types';

/**
 * Starting point for a new programme page (Affiliate, Market Maker, OTC, …).
 * Read PROGRAMME-SYSTEM.md first; it lists every component and its content rules.
 *
 * 1. Copy this file to `src/programs/<id>.ts` and replace every TODO with sourced content.
 * 2. Delete any optional section the programme does not need. Nav items for deleted
 *    sections disappear automatically.
 * 3. Grade one hero image into `public/assets/<id>/` with `scripts/grade_images.py`.
 * 4. Register the config in `src/programs/index.ts`; preview with `?program=<id>&review`.
 *
 * Source-tag every factual claim per PRODUCT.md (the programme's existing page first),
 * flag conflicts with `review: 'NEEDS BUSINESS CONFIRMATION: …'`, and keep the claim
 * audit in a separate, unrendered CONTENT-AUDIT file. Never fill a slot with invented
 * content to make a section look complete; omit the section instead.
 *
 * This file is intentionally not registered.
 */
export const template: ProgramConfig = {
  id: 'TODO-id',
  meta: { title: 'TODO Programme', description: 'TODO one sentence.' },
  brand: { wordmark: 'EXCHANGE', programLabel: 'TODO' },
  nav: [
    { label: 'Benefits', href: '#benefits' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Programme', href: '#programme' },
    { label: 'FAQ', href: '#faq' },
  ],

  // Required
  hero: {
    headline: ['TODO first sentence.', 'TODO second sentence.'],
    lede: 'TODO — one or two sentences that name the programme.',
    primaryCta: { label: 'TODO action', href: null, review: 'Review: destination not confirmed.' },
    // secondaryCta: { label: 'TODO', href: 'TODO', external: true },
    // audienceLabel: 'Built for', audience: ['TODO'],
    image: {
      landscape: { src: '/assets/TODO/hero-1600.webp', srcSet: '/assets/TODO/hero-1600.webp 1600w' },
      // portrait: { src: '…', srcSet: '…' },  // mobile crop; recommended
      alt: '',
    },
  },

  // Content sections, in the order this programme's own page needs. Reuse any kind, any
  // number of times; leave out what the content does not support. Kinds:
  //   figures    2–4 headline numbers          benefits  2–4 editorial columns (optional vignettes)
  //   partners   verified logos only           feature   2–4 steps, each with a panel
  //   details    process timeline and/or terms faq       4–6 questions, optional contact line
  //   estimator  a published calculator, step by step (values copied, never computed)
  //   audience   who it is for, as a large list  grid    3–6 ruled peers, optional link each
  //   specs      termsheet rows: term, headline value, detail
  //   pathway    a conceptual 3–5 stage diagram   range   one published span, optional "beyond"
  sections: [
    { kind: 'benefits', id: 'benefits', title: 'TODO', items: [] },
    { kind: 'faq', id: 'faq', title: 'TODO', items: [] },
  ],

  // Required
  closing: {
    title: 'TODO closing statement.',
    body: 'TODO',
    cta: { label: 'TODO action', href: null },
  },
  footer: { legal: 'TODO' },
};
