import type { CSSProperties } from 'react';
import type { PartnersConfig } from '../program/types';
import { ReviewFlag } from './primitives';
import './PartnerLogoStrip.css';

/** Aspect ratio at which a logo renders at exactly the base height. */
const REFERENCE_ASPECT = 4;

/**
 * Logos have very different proportions (a 14:1 wordmark next to a 3.7:1 lockup).
 * Sizing each by the square root of its aspect ratio gives every mark a similar visual
 * area, so no partner reads louder than another. Width is set; height follows the file's
 * own ratio, so proportions never change and the logo can shrink on narrow screens.
 */
function opticalWidth(width: number, height: number) {
  const aspect = width / height;
  return Math.sqrt(REFERENCE_ASPECT / aspect) * aspect;
}

export function PartnerLogoStrip({ config }: { config: PartnersConfig }) {
  return (
    <section className="section partners" id={config.id} aria-labelledby={`${config.id}-title`}>
      <div className="container partners__inner">
        <h2 className="partners__title" id={`${config.id}-title`}>
          {config.title}
        </h2>
        <ul className="partners__list">
          {config.logos.map((logo) => (
            <li className="partners__item" key={logo.name}>
              <img
                className="partners__logo"
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                loading="lazy"
                decoding="async"
                style={
                  {
                    '--logo-width': opticalWidth(logo.width, logo.height).toFixed(3),
                  } as CSSProperties
                }
              />
            </li>
          ))}
        </ul>
        <ReviewFlag note={config.review} />
      </div>
    </section>
  );
}
