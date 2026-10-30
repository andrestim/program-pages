import type { ProgramConfig } from '../program/types';
import { draftLegal, generatedHero } from './shared';

/**
 * Market Maker Programme — DRAFT content, structured after the live page:
 * Art direction "The termsheet" (ART-DIRECTION.md §4): horizon hero → why trade with us as the
 * termsheet (signature) → Schedule A, benefits and perks → FAQ → signature-block closing.
 *
 * Every factual claim carries a source tag. Hierarchy (see PRODUCT.md):
 *   [P1] PRIMARY   Existing Market Maker Programme page, English (UK)
 *                  https://crypto.com/exchange/mm-programme (read 2026-10-30)
 *
 * No secondary source has been read yet; [P1] defers the full terms to its termsheet.
 * Untagged lines are positioning copy. Audit: CONTENT-AUDIT-DRAFTS.md (not rendered).
 */

const apply = {
  label: 'Apply now', // [P1] "Apply Now"
  // [P1] The live page opens its application form in a modal on this URL.
  href: 'https://crypto.com/exchange/mm-programme',
  external: true,
  review: 'Review: points at the live programme page, which opens the application form. Replace with a direct form URL if one exists.',
};

// [P1] "Get in touch" target
const contact = {
  label: 'Get in touch',
  href: 'https://institutions.crypto.com/sign_up/?form=contact_us',
  external: true,
};

export const marketMaker: ProgramConfig = {
  id: 'market-maker',
  meta: {
    title: 'Market Maker Programme',
    description: 'Bespoke services and privileges for institutional liquidity providers on the Exchange.', // [P1]
  },
  brand: { wordmark: 'EXCHANGE', programLabel: 'Market Maker' },
  nav: [
    { label: 'Terms', href: '#terms' },
    { label: 'Schedule A', href: '#perks' },
    { label: 'FAQ', href: '#faq' },
  ],

  hero: {
    headline: ['Add liquidity. Get rewarded.', 'Built for market makers.'], // [P1] FAQ
    lede: 'Bespoke services and privileges for institutional liquidity providers, including exclusive trading fee rebates and increased API rate limits.', // [P1] hero
    primaryCta: apply,
    secondaryCta: contact,
    image: generatedHero('market-maker'), // two faces a hairline apart: the spread as a horizon
    layout: 'horizon',
  },

  sections: [
    {
      kind: 'specs',
      id: 'terms',
      layout: 'termsheet',
      columns: ['Term', 'Value', 'Condition'],
      title: 'Why trade with us.', // [P1] "Why trade with us?"
      intro: 'A tailor-made programme for liquidity providers of all sizes.', // [P1]
      rows: [
        { term: 'Trading fees', prefix: 'As low as', value: '0.02%', detail: 'Taker fees, plus maker fee rebates.' }, // [P1]
        { term: 'Qualification', prefix: 'From', value: '0.1%', detail: 'Of the Exchange’s total trading volume.' }, // [P1] "as low as 0.1%"
        { term: 'Connectivity', value: 'FIX · REST · WS', detail: 'Increased rate limits for a fast, stable connection at any hour.', mark: '1' }, // [P1]
        { term: 'Account management', value: '24/7', detail: 'A dedicated global team, around the clock.' }, // [P1] perks
      ],
      notes: [
        { mark: '1', text: 'A virtual private link, cloud-based co-location for increased stability and reduced latency, is among the programme perks.' }, // [P1] perks
      ],
    },
    {
      kind: 'grid',
      id: 'perks',
      layout: 'schedule',
      figure: { src: '/assets/market-maker/figures/capital.webp', width: 480, height: 360 }, // flush-fitted inserts: a schedule with nothing wasted
      title: 'Schedule A: benefits and perks.', // [P1] "Programme Benefits & Perks"
      intro: 'Some of the services liquidity providers receive. Get in touch for the full set.', // [P1] FAQ
      items: [
        { title: 'Capital efficiency programme', mark: '*', body: 'Optimise capital utilisation and get the best results from your funds allocation.' }, // [P1]
        { title: 'Increased rate limits', body: 'Execute swiftly and precisely, even in the most volatile market conditions.' }, // [P1]
        { title: 'Virtual private link', body: 'Cloud-based co-location for increased stability and reduced latency.' }, // [P1]
        { title: 'Round-the-clock support', body: 'A dedicated global account management team, available 24/7.' }, // [P1]
        { title: 'Personalised reports', body: 'Fully transparent records and KPIs that lay out your path to success.' }, // [P1]
        { title: 'Market insights', body: 'Crucial updates from the Exchange’s research and insights team.' }, // [P1]
      ],
      note: '* Subject to jurisdictional limitations.', // [P1]
    },
    {
      kind: 'faq',
      id: 'faq',
      title: 'Before you apply.',
      items: [
        {
          question: 'What is the Market Maker Programme?',
          answer:
            'It rewards traders who tighten bid/ask spreads and add liquidity to the Exchange. Market makers need different things from retail traders, so the programme offers exclusive features that address capital efficiency, risk, technology and rewards.', // [P1] FAQ
        },
        {
          question: 'I can’t meet the requirements yet. Can I still apply?',
          answer: 'Yes. Get in touch and the team will speak with you right away; every liquidity provider’s position is unique.', // [P1] FAQ
        },
        {
          question: 'Are there more benefits beyond those listed?',
          answer: 'Yes. The perks on this page are only some of what liquidity providers receive. Get in touch for the full suite.', // [P1] FAQ
        },
        {
          question: 'Is there a programme for high-volume retail traders?',
          answer: 'Yes, the Exchange VIP Programme.', // [P1] FAQ
        },
      ],
      contact: { lead: 'Not ready to apply?', link: contact }, // [P1] "Get in touch"
    },
  ],

  closing: {
    title: 'Ready to be a market maker?', // [P1]
    body: 'Complete a short form to access the Market Maker Programme termsheet.', // [P1]
    cta: apply,
    note: 'The Exchange reserves the right to assess each applicant’s eligibility for the programme.', // [P1]
    layout: 'signature',
  },

  footer: { legal: draftLegal },
};
