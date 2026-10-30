import type { ProgramConfig } from '../program/types';
import { CONFIRM, draftLegal, generatedHero } from './shared';

/**
 * OTC Trading — DRAFT content, structured after the live page:
 * Art direction "The private room" (ART-DIRECTION.md §5): tall hero → three ways in, cut from one
 * architectural plate (signature) → execution → ticket size as a threshold → FAQ → two doors.
 *
 * Every factual claim carries a source tag. Hierarchy (see PRODUCT.md):
 *   [P1] PRIMARY   Existing OTC Trading page, English (UK)
 *                  https://crypto.com/exchange/otc (read 2026-10-30)
 *
 * Untagged lines are positioning copy. Audit: CONTENT-AUDIT-DRAFTS.md (not rendered).
 */

// [P1] link targets
const applyInstitution = { label: 'Apply as an institution', href: 'https://institutions.crypto.com/sign_up', external: true };
const applyVip = { label: 'Apply as a VIP', href: 'https://crypto.com/exchange/vip-portal', external: true };
const desk = { label: 'Contact the desk', href: 'mailto:otc@crypto.com' };

export const otc: ProgramConfig = {
  id: 'otc',
  meta: {
    title: 'OTC Trading',
    description: 'Bespoke OTC services for protocols, institutions and private wealth clients.', // [P1]
  },
  brand: { wordmark: 'EXCHANGE', programLabel: 'OTC' },
  nav: [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Execution', href: '#execution' },
    { label: 'Ticket size', href: '#ticket-size' },
    { label: 'FAQ', href: '#faq' },
  ],

  hero: {
    headline: ['Move size, not the market.', 'Zero trading fees, every clip.'], // [P1] FAQ (market impact) · [P1] "no trading fees no matter how many clips"
    lede: 'Bespoke OTC services for protocols, institutions and private wealth clients.', // [P1] hero
    primaryCta: applyInstitution,
    secondaryCta: applyVip,
    image: generatedHero('otc'), // monumental slabs and a slit of light: the private room
    layout: 'tall',
  },

  sections: [
    {
      kind: 'benefits',
      id: 'solutions',
      layout: 'plate', // one structure, three ways in: wall | light | wall (CREDITS.md)
      plate: { src: '/assets/otc/plate/plate-1536.webp', srcSet: '/assets/otc/plate/plate-1536.webp 1536w' },
      title: 'Solutions for every playbook.', // [P1]
      intro: 'Trade on screen, through a dedicated desk, or from your own systems.',
      items: [
        {
          title: 'OTC Portal',
          body: 'A platform for advanced trading, as intuitive as it is powerful. Get instant zero-fee quotes from fully customisable dashboards.', // [P1]
        },
        {
          title: 'Private OTC Desk',
          body: 'Your 24/7 RFQ line to an expert, dedicated trading team, with white-glove service from discreet price discovery through settlement.', // [P1]
          link: desk, // [P1] "Contact us"
        },
        {
          title: 'OTC API',
          body: 'Plug the liquidity into your own trading system or custom front-end, with robust REST, WebSocket and FIX support.', // [P1]
          link: {
            label: 'Read the API docs',
            href: 'https://exchange-docs.crypto.com/exchange/v1/rest-ws/index_OTC2.html#introduction', // [P1] "Read more"
            external: true,
          },
        },
      ],
    },
    {
      kind: 'specs',
      id: 'execution',
      figure: { src: '/assets/otc/figures/block.webp', width: 560, height: 420 }, // a heavy block on glass: size, handled off the book
      title: 'Liquidity, settlement and price.',
      intro: 'Institutional-grade execution, without the order book’s market impact.', // [P1] FAQ
      rows: [
        {
          term: 'Deep liquidity',
          value: '500+',
          detail: 'Pairs with instant quotes on major tokens, stablecoins and fiat. Firm Quote removes last look; atomic settlement completes every trade.', // [P1]
          review: 'Review: [P1] links separate pair lists for global and US institutional clients. Confirm the 500+ figure per region.',
        },
        {
          term: 'Settlement',
          value: 'End of day',
          detail: 'Settle right away, or lock in prices without prefunding through delayed net settlement, available to select clients.', // [P1] · FAQ
        },
        { term: 'Trading fees', value: '0', detail: 'Razor-thin spreads and no trading fees, however many clips you execute.' }, // [P1]
      ],
    },
    {
      kind: 'range',
      id: 'ticket-size',
      layout: 'threshold',
      title: 'Sized for blocks.',
      intro: 'For any order large enough to move the public book.', // [P1] FAQ
      caption: 'Ticket size, per trade',
      min: { value: 'US$100', label: 'Smallest ticket the desk accepts' }, // [P1] FAQ
      max: { value: 'US$5M', label: 'Largest standard ticket, or the equivalent' }, // [P1] FAQ
      beyond: { value: 'Larger', label: 'A bespoke quote from the desk' }, // [P1] FAQ "email otc@… for a bespoke quote"
    },
    {
      kind: 'faq',
      id: 'faq',
      title: 'Frequently asked questions.',
      items: [
        {
          question: 'When should I choose OTC instead of the order book?',
          answer:
            'For block sizes, or any order large enough to move the public book. Dealing directly with the desk avoids visible market impact and slippage, with fully customised pricing, settlement and execution.', // [P1] FAQ
        },
        {
          question: 'What are the trade-size limits?',
          answer: 'Tickets from US$100 up to US$5 million, or the equivalent in another currency. For a larger clip, contact the desk for a bespoke quote.', // [P1] FAQ
        },
        {
          question: 'Which instruments can I trade OTC?',
          answer: 'Major tokens, stablecoins and fiat across 500+ pairs. US institutional clients have a jurisdiction-specific list.', // [P1] FAQ
          review: `${CONFIRM} link the two published pair lists that [P1] uses.`,
        },
        {
          question: 'What settlement options are available?',
          answer:
            'Immediate settlement, and delayed net settlement for select clients, which aggregates multiple trades into a single end-of-day payment. Contact the desk to check whether you are eligible.', // [P1] FAQ
        },
        {
          question: 'Who is eligible for OTC trading?',
          answer: 'Institutional and Exchange VIP clients, subject to the regulations of their jurisdiction.', // [P1] FAQ
        },
        {
          question: 'How do I get started once I’m eligible?',
          answer: 'Once your account is approved, log in to the OTC Portal, accept the OTC Terms & Conditions, and you can request quotes and execute trades.', // [P1] FAQ
        },
      ],
      contact: { lead: 'Still need help?', link: { label: 'Email the OTC desk', href: 'mailto:otc@crypto.com' } }, // [P1]
    },
  ],

  closing: {
    title: 'Ready to start?', // [P1]
    body: 'OTC access is reserved for Institutional and Exchange VIP clients.', // [P1] FAQ
    cta: applyInstitution,
    layout: 'doors',
    // [P1] "Ready to start?" cards
    paths: [
      { title: 'I’m an institution', body: 'Unlock OTC solutions built for protocols, fintechs and public treasury companies.', cta: { ...applyInstitution, label: 'Apply now' } },
      { title: 'I’m a VIP', body: 'Enjoy high-touch OTC services as a private wealth client.', cta: { ...applyVip, label: 'Apply now' } },
    ],
  },

  footer: { legal: draftLegal },
};
