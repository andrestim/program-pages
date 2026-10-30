import type { ProgramConfig } from '../program/types';

/**
 * API Broker Programme — content.
 *
 * Every factual claim carries a source tag. Hierarchy (see PRODUCT.md):
 *   [P1] PRIMARY   Existing Broker Programme page, English (US)
 *                  https://crypto.com/exchange/broker-programme (read 2026-10-30)
 *   [P2] PRIMARY   Its "Become a Broker" registration form (fields only, not submitted)
 *   [H1] SECONDARY Help Centre: What is the API Broker Programme
 *                  https://help.crypto.com/en/articles/8607633
 *   [H2] SECONDARY Help Centre: Broker Programme Fast API
 *                  https://help.crypto.com/en/articles/8607655
 *   [H3] SECONDARY Help Centre: Sub-brokers
 *                  https://help.crypto.com/en/articles/8607650
 *   [D1] SECONDARY Broker Program API docs (linked from [P1] "View API Documents")
 *
 * Secondary sources explain mechanics; they never override [P1]'s commercial terms.
 * Where sources disagree the item is flagged NEEDS BUSINESS CONFIRMATION, not resolved.
 * Untagged lines are positioning copy, not factual claims.
 * The full claim-by-claim audit lives in CONTENT-AUDIT.md (not rendered).
 */

const CONFIRM = 'NEEDS BUSINESS CONFIRMATION:';

const img = (name: string, widths: number[]) => ({
  src: `/assets/api-broker/${name}-${widths[Math.floor(widths.length / 2)]}.webp`,
  srcSet: widths.map((w) => `/assets/api-broker/${name}-${w}.webp ${w}w`).join(', '),
});

// Benefit vignettes: one AI-generated series, graded with scripts/grade_images.py (see CREDITS.md)
const vignette = (name: string) => ({
  src: `/assets/api-broker/benefits/${name}-720.webp`,
  srcSet: `/assets/api-broker/benefits/${name}-720.webp 720w, /assets/api-broker/benefits/${name}-1080.webp 1080w`,
  width: 720,
  height: 540,
});

const apply = {
  label: 'Become a Broker',
  // [P1] The live page opens its registration form [P2] in a modal on this URL.
  href: 'https://crypto.com/exchange/broker-programme',
  external: true,
  review: 'Review: points at the live programme page, which hosts the registration form. Replace with a direct form URL if one exists.',
};

export const apiBroker: ProgramConfig = {
  id: 'api-broker',
  meta: {
    title: 'API Broker Programme',
    description: 'A simple way for trading platforms to earn commission on the transaction flow they bring to the Exchange.', // [P1]
  },
  brand: { wordmark: 'EXCHANGE', programLabel: 'API Broker' },
  nav: [
    { label: 'Benefits', href: '#benefits' },
    { label: 'Integration', href: '#integration' },
    { label: 'Programme', href: '#programme' },
    { label: 'FAQ', href: '#faq' },
  ],

  hero: {
    headline: ['Trade where your users are.', 'Earn up to 50% commission.'], // line 2: [P1] up to 50% on all referred trades
    lede: 'Give your users the Exchange’s liquidity and trading infrastructure, and earn on every trade you refer.', // [P1] tagline · [P1] commission on referred trades
    primaryCta: apply,
    secondaryCta: {
      label: 'API Documentation',
      href: 'https://exchange-docs.crypto.com/exchange/index-broker-program-4e65dc98-410f-4bb7-b20b-8fc038426ab1.html#introduction', // [P1] "View API Documents" target
      external: true,
    },
    audienceLabel: 'Built for',
    audience: ['Trading bots', 'Trading strategy platforms', 'Social trading communities', 'Asset management platforms'], // [P1] "Best for"
    image: {
      landscape: img('hero', [1000, 1600, 2400]),
      portrait: img('hero-portrait', [800, 1200]),
      alt: '', // decorative; makes no product claim
      credit: {
        author: 'Pawel Czerwinski',
        url: 'https://unsplash.com/photos/a-black-and-white-photo-of-a-curved-object-0wFwSZn6I-I',
        license: 'Unsplash License',
      },
    },
  },

  sections: [
    {
      kind: 'figures',
      id: 'at-a-glance',
      label: 'Programme at a glance',
      items: [
        { prefix: 'Up to', value: '50%', label: 'Commission on all referred trades' }, // [P1] Why join · FAQ
        { value: '24/7', label: 'Support, wherever you operate' }, // [P1] Why join · FAQ
        { value: '0', label: 'Minimum sales requirement to stay in the programme' }, // [P1] FAQ
      ],
    },
  
    {
      kind: 'benefits',
      id: 'benefits',
      title: 'Built for the platforms traders already use.',
      intro: 'A broker partnership comes down to three things: the market behind it, the support around it, and how it pays.',
      items: [
        {
          title: 'Market access for your users',
          image: vignette('market'),
          body: 'Offer spot and derivatives trading across all applicable pairs from your own interface, on fast, stable connectivity.', // [H1] pairs · [P1] Why join (technology, connectivity)
          review: 'Review: availability is subject to jurisdictional limitations [P1 footer]. Confirm product scope per target region.',
        },
        {
          title: 'Support behind your growth',
          image: vignette('support'),
          body: 'World-class marketing support, the Exchange brand, and tickets and VIP experiences at top-tier sporting events to promote your business, with round-the-clock support.', // [P1] Why join · FAQ
          review: 'Review: [P1] names Formula 1, the NBA, UFC and Serie A. Kept generic for the brand-neutral concept; name them once the brand is applied.',
        },
        {
          title: 'Commission that follows your flow',
          image: vignette('commission'),
          body: 'A share of the net fees on every referred trade, at a rate set by your broker level and credited to your Exchange account.', // [H1] net fee × level ratio, settlement account · [P1] referred trades
        },
      ],
    },
  
    {
      kind: 'partners',
      id: 'partners',
      title: 'Our partners', // [P1] "Our Partners"
      // [P1] exactly these four, in this order; files from P1's own asset host (public/assets/partners/SOURCES.md)
      logos: [
        { name: 'Cryptohopper', src: '/assets/partners/cryptohopper.png', width: 514, height: 37, source: '[P1] Our Partners' },
        { name: '3Commas', src: '/assets/partners/3commas.png', width: 480, height: 131, source: '[P1] Our Partners' },
        { name: 'Hummingbot', src: '/assets/partners/hummingbot.png', width: 414, height: 102, source: '[P1] Our Partners' },
        { name: 'Alertatron', src: '/assets/partners/alertatron.png', width: 482, height: 74, source: '[P1] Our Partners' },
      ],
      review: 'Review: listed on [P1]. Confirm the partner list is current and logo usage is approved before launch.',
    },
  
    {
      kind: 'feature',
      id: 'integration',
      title: 'One broker code. Clear attribution.',
      intro: 'Orders your users place through your integration carry your broker code, the main identifier used to calculate your commission.', // [H1]
      steps: [
        {
          id: 'connect',
          label: 'Connect',
          title: 'Users link their account',
          body: 'Users provide their Exchange API keys to your platform, or authorise through Fast API with OAuth 2.0: they sign in on the Exchange, approve your platform and are returned to you.', // [P1] · [P1 news] OAuth 2.0 · [H2]
          panel: {
            kind: 'flow',
            caption: 'Fast API authorisation',
            nodes: [
              { label: 'Your platform', detail: 'User chooses to connect their Exchange account', action: 'Connect to Exchange', emphasis: true }, // [H2] step 1
              { label: 'Exchange sign-in', detail: 'Hosted login, skipped if already signed in' }, // [H2] step 4
              { label: 'Authorise', detail: 'User approves your platform on the authorisation screen', action: 'Authorise' }, // [H2] step 5 · [D1]
              { label: 'Back to your platform', detail: 'Your callback receives an access token, used to create the user’s API key' }, // [H2] step 6 · [D1] create-fast-api-key
            ],
          },
        },
        {
          id: 'trade',
          label: 'Trade',
          title: 'Orders carry your broker code',
          body: 'Add your broker code to the broker_id field of each private/create-order request. The code is case-sensitive.', // [H1]
          panel: {
            kind: 'code',
            caption: 'Order request',
            method: 'POST',
            endpoint: 'private/create-order',
            // [H1] Help Centre example, optional client_oid and exec_inst omitted
            lines: [
              '{',
              '  "id": 1,',
              '  "nonce": 1610905028000,',
              '  "method": "private/create-order",',
              '  "params": {',
              '    "instrument_name": "BTCUSD-PERP",',
              '    "side": "SELL",',
              '    "type": "LIMIT",',
              '    "price": "50000.5",',
              '    "quantity": "1",',
              '    ⟦"broker_id": "ABCD"⟧',
              '  }',
              '}',
            ],
            annotation: 'Your broker code', // [H1]
            note: 'From the Help Centre example, optional fields omitted. Sub-broker orders use the sub-broker code, e.g. ABCD_XYZ.', // [H1] · [H3]
          },
        },
        {
          id: 'track',
          label: 'Track',
          title: 'Commission credited to your account',
          body: 'Commission is calculated on the net fees of your attributed orders and credited to your Exchange account. Track commission and transactions in Dashboard › Brokers.', // [H1] · [P1]
          review: `${CONFIRM} payout cadence. [P1] says "credited directly to your account daily" and, in its FAQ, "paid out on a monthly basis"; [H1] says daily at 00:00 UTC. Also confirm the illustrative figures (100 × 50% = 50) may appear: the net fee is invented, 50% is the [P1] "up to 50%" ceiling.`,
          // [H1] settlement formula and settlement account; [P1] rates via Account Manager and "up to 50%".
          // Figures are illustrative only: a round net fee at the published ceiling, no currency.
          panel: {
            kind: 'formula',
            caption: 'How commission is calculated',
            factors: [
              { label: 'Net fee', detail: 'From your attributed orders', example: '100' }, // [H1] · figure illustrative
              { label: 'Broker level ratio', detail: 'Set by your broker level', example: '50%' }, // [H1] · [P1] "up to 50%"
            ],
            operator: '×',
            result: { label: 'Commission', detail: 'Credited to your Exchange account', example: '50' }, // [H1] · [P1]
            note: 'Figures are illustrative, at the top rate of 50%. Your ratio depends on your broker level; your Account Manager shares the rate card. Track it in Dashboard › Brokers.', // [P1] · [H1]
          },
        },
      ],
    },
  
    {
      kind: 'details',
      id: 'programme',
      title: 'How the partnership works.',
      intro: 'Apply, and an Account Manager will reach out. Once you are fully onboarded, you are assigned the broker code your commission is calculated from.', // [P1] · [H1]
      process: {
        heading: 'From application to live trading',
        steps: [
          { title: 'Apply', body: 'Sign up through the registration form.' }, // [P1] · [P2]
          { title: 'Onboard', body: 'An Account Manager reaches out with the full schedule and rate card.' }, // [P1]
          { title: 'Integrate', body: 'Once fully onboarded, you receive a broker code to add to your API orders.' }, // [H1]
          { title: 'Go live', body: 'Track your sales and commission in your broker dashboard.' }, // [P1] · [H1]
        ],
      },
      terms: {
        heading: 'Programme terms',
        rows: [
          {
            term: 'Commission',
            detail: 'Up to 50% on referred trades. Calculated as the net fee of your attributed orders multiplied by the ratio for your broker level.', // [P1] · [H1]
            review: 'Review: pairs [P1] "up to 50%" with the [H1] formula. Confirm legal approves the combined wording.',
          },
          { term: 'Attributed orders', detail: 'Orders your users place via API with your broker_id. Web and app volume without API is excluded.' }, // [H1]
          {
            term: 'Referred users',
            detail: 'API orders with your broker_id from users who signed up with your referral code, for up to six months after sign-up.', // [H1]
          },
          {
            term: 'Payout',
            detail: 'Credited directly to your Exchange account.', // [P1] · [H1]
            review: `${CONFIRM} cadence. [P1] states both daily and monthly payout; [H1] states daily at 00:00 UTC.`,
          },
          {
            term: 'Reporting',
            detail: 'A broker dashboard and a monthly report to track sales and commission.', // [P1] FAQ · [H1]
            review: `${CONFIRM} monthly report. [P1] FAQ promises one; it may belong to the monthly-payout model above.`,
          },
        ],
      },
    },
  
    {
      kind: 'faq',
      id: 'faq',
      title: 'Before you apply.',
      items: [
        {
          question: 'What is an API broker?',
          answer:
            'A platform that lets its users build automated trading strategies and custom trading terminals with real-time market updates. The programme is built for trading bots, trading strategy platforms, social trading communities and asset management platforms.', // [P1]
        },
        {
          question: 'How do users connect their accounts?',
          answer:
            'Either by providing their Exchange API keys to your platform, or through Fast API, which is OAuth 2.0 compatible: users sign in on the Exchange and authorise your platform, and your callback receives an access token to create their API key. Fast API setup needs UAT and production callback URLs and a 300 × 300 px logo.', // [P1] · [H2] · [D1]
        },
        {
          question: 'Which products are supported?',
          answer: 'Spot and derivatives trading across all applicable pairs on the Exchange. Availability is subject to jurisdictional limitations.', // [H1] · [P1 footer]
          review: 'Review: confirm product scope per target region.',
        },
        {
          question: 'Can I work with sub-brokers?',
          answer:
            'Yes. Add sub-brokers from your broker dashboard and assign them part of your commission; each receives its own code, such as ABCD_XYZ, and their volume counts toward your broker level. A sub-broker needs an Exchange account and cannot already be a broker or affiliate.', // [H3]
        },
        {
          question: 'Is there a minimum sales requirement?',
          answer: 'No. There is no minimum sales requirement to remain in the programme.', // [P1] FAQ
        },
        {
          question: 'How do I apply?',
          answer:
            'Sign up through the registration form and an Account Manager will reach out to you.', // [P1] · [P2]
        },
      ],
      // [P1] "Still have questions? Contact us" opens a contact form on the live page
      contact: {
        lead: 'Still have questions?',
        link: {
          label: 'Contact us',
          href: 'https://crypto.com/exchange/broker-programme',
          external: true,
          review: 'Review: the live page opens its contact form in a modal, with no direct URL. Replace with a contact form URL if one exists.',
        },
      },
    },
  ],

  closing: {
    title: 'Bring your platform to the Exchange.',
    body: 'Sign up, and an Account Manager will reach out to you.', // [P1]
    cta: apply,
  },

  footer: {
    legal:
      'Concept design for internal review. Programme terms, product availability and links are subject to confirmation. Products and services are not available in all jurisdictions.',
  },
};
