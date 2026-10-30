import type { ProgramConfig } from '../program/types';
import { CONFIRM, draftLegal, generatedHero } from './shared';

/**
 * Affiliate Programme — DRAFT content, structured after the live page:
 * Art direction "Reach, measured" (ART-DIRECTION.md §3): hero → earnings arc (signature) →
 * affiliate circle as a roll call → why partner as a ledger → how to → FAQ.
 *
 * Every factual claim carries a source tag. Hierarchy (see PRODUCT.md):
 *   [P1] PRIMARY   Existing Affiliate Programme page, English (UK)
 *                  https://crypto.com/exchange/affiliate (read 2026-10-30)
 *
 * No secondary source has been read yet. Untagged lines are positioning copy.
 * Claim-by-claim audit: CONTENT-AUDIT-DRAFTS.md (not rendered).
 */

const apply = {
  label: 'Become an Affiliate', // [P1] "Become an Affiliate Today"
  // [P1] The live page opens its application form in a modal on this URL.
  href: 'https://crypto.com/exchange/affiliate',
  external: true,
  review: 'Review: points at the live programme page, which opens the application form. Replace with a direct form URL if one exists.',
};

export const affiliate: ProgramConfig = {
  id: 'affiliate',
  meta: {
    title: 'Affiliate Programme',
    description: 'Invite your audience to the Exchange and earn a share of their trading fees.', // [P1]
  },
  brand: { wordmark: 'EXCHANGE', programLabel: 'Affiliate' },
  nav: [
    { label: 'Earnings', href: '#earnings' },
    { label: 'Who it’s for', href: '#circle' },
    { label: 'Benefits', href: '#why-partner' },
    { label: 'How to join', href: '#how-to' },
    { label: 'FAQ', href: '#faq' },
  ],

  hero: {
    headline: ['Turn your reach into income.', 'Earn up to 50% for life.'], // [P1] tagline · [P1] "Lifetime Commissions of up to 50%"
    lede: 'Invite your audience to the Exchange and earn a share of their trading fees, paid daily in USDC.', // [P1] hero · Why partner
    primaryCta: apply,
    image: generatedHero('affiliate'), // concentric rings: reach
  },

  sections: [
    {
      kind: 'estimator',
      id: 'earnings',
      title: 'See what your audience could earn you.',
      intro: 'Lifetime commission of up to 50% on your referrals’ trading fees.', // [P1] hero
      inputLabel: 'Your referrals’ monthly trading volume',
      outputLabel: 'Estimated monthly earnings',
      // [P1] hero calculator: every published step and its output; the live default is $1M
      steps: [
        { label: '$100K', value: '250 USDC' },
        { label: '$500K', value: '1,250 USDC' },
        { label: '$1M', value: '2,500 USDC' },
        { label: '$5M', value: '12,500 USDC' },
        { label: '$10M', value: '25,000 USDC' },
      ],
      initial: 2,
      layout: 'arc', // signature: [P1] the live calculator draws the same five points as a curve
      head: 'stacked',
      note: 'Based on referrals’ monthly volume. T&Cs apply.', // [P1] calculator footnote
      review: `${CONFIRM} the estimate may be republished. Values are copied from the [P1] calculator, which notes "T&Cs apply"; confirm they are current and that "lifetime" has no time limit.`,
    },
    {
      kind: 'audience',
      id: 'circle',
      title: 'Be part of an exclusive affiliate circle.', // [P1]
      intro: 'For anyone with a sizable, engaged audience on social media, a website or an online community, whose content meets the programme guidelines.', // [P1] FAQ
      // [P1] "Be Part of an Exclusive Affiliate Circle"
      layout: 'roll',
      items: [
        'Key opinion leaders',
        'Content creators and influencers',
        'Finance and crypto publishers',
        'Affiliate networks and platforms',
        'Media outlets',
        'Crypto community leaders',
      ],
    },
    {
      kind: 'grid',
      id: 'why-partner',
      layout: 'ledger',
      figure: { src: '/assets/affiliate/figures/payouts.webp', width: 512, height: 384 }, // bezel with index marks: paid daily
      title: 'Why partner with us.', // [P1] "Why Partner With Us?"
      intro: 'Paid daily, supported around the clock, and free to grow a team of your own.', // [P1] Why partner
      items: [
        { title: 'Daily payouts in USDC', body: 'Manage your earnings with ease from the Affiliate Dashboard.' }, // [P1]
        { title: 'Custom Campaign Builder', body: 'Launch personalised affiliate campaigns that fit your goals.' }, // [P1]
        { title: 'Sub-affiliates', body: 'Boost your revenue by inviting a motivated team of sub-affiliates.' }, // [P1]
        { title: 'Share with your audience', body: 'Pass up to 20% of your commission back to the users you refer.' }, // [P1] FAQ
        { title: 'Dedicated 24/7 support', body: 'Chat with the business and technical teams at any time.' }, // [P1]
        {
          title: 'Exclusive event access',
          body: 'Attend world-class events with the Exchange’s partners, and earn bonuses for reaching milestones.', // [P1] Why partner · FAQ
          review: 'Review: [P1] names Formula 1® and UFC. Kept generic for the brand-neutral concept; name them once the brand is applied.',
        },
      ],
    },
    {
      kind: 'details',
      id: 'how-to',
      figure: { src: '/assets/affiliate/figures/team.webp', width: 540, height: 405 }, // glass discs stepping down: apply, promote, earn
      title: 'How to become an affiliate.', // [P1]
      intro: 'Not sure you meet the criteria? Apply anyway, and the team will get back to you.', // [P1] FAQ
      process: {
        heading: 'Three steps',
        steps: [
          { title: 'Apply', body: 'Complete the short application form.' }, // [P1]
          { title: 'Promote', body: 'Share your referral link or code with your audience.' }, // [P1]
          { title: 'Earn', body: 'Collect up to 50% of your referrals’ trading fees.' }, // [P1]
        ],
      },
    },
    {
      kind: 'faq',
      id: 'faq',
      title: 'Before you apply.',
      items: [
        {
          question: 'What is the Affiliate Programme?',
          answer:
            'A programme that lets key opinion leaders, content creators, publishers and community owners earn commission while growing their brands alongside the Exchange.', // [P1] FAQ
        },
        {
          question: 'Who can apply?',
          answer:
            'Anyone with a sizable, engaged audience on social media, a website or an online community whose content meets the programme guidelines: crypto, investing and money creators (large non-finance channels may also apply), finance and crypto publishers, affiliate networks, media outlets, and leaders of Telegram, Discord or similar communities. If you are unsure, apply and the team will get back to you.', // [P1] FAQ
        },
        {
          question: 'What do affiliates earn?',
          answer:
            'Up to 50% commission on referred users’ trading fees, paid daily in USDC, of which you can share up to 20% with the users you refer. Affiliates also receive performance-based bonuses for reaching milestones, invitations to partner events, and further perks as the programme expands.', // [P1] FAQ
          review: 'Review: [P1] names Formula 1®, UFC and Crypto.com Arena as the partner events.',
        },
      ],
    },
  ],

  closing: {
    title: 'Turn your reach into income.',
    body: 'Complete the short application form, and the team will get back to you.', // [P1]
    cta: apply,
  },

  footer: { legal: draftLegal },
};
