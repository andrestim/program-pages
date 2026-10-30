import type { CSSProperties } from 'react';
import type { FiguresConfig } from '../program/types';
import { ReviewFlag, useReveal } from './primitives';
import './KeyFigures.css';

/**
 * The page's headline numbers, set large straight after the hero. The first figure is the
 * programme's lead claim and is the only one in Platinum; the rest stay in Satin Silver.
 */
export function KeyFigures({ config }: { config: FiguresConfig }) {
  const ref = useReveal<HTMLElement>();
  return (
    <section className="figures" id={config.id} aria-label={config.label} ref={ref}>
      <div className="container">
        <ul className="figures__list" style={{ '--cols': config.items.length } as CSSProperties}>
          {config.items.map((item, i) => (
            <li
              className="figure reveal"
              key={item.label}
              style={{ '--reveal-delay': `${i * 90}ms` } as CSSProperties}
              data-review={item.review ? '' : undefined}
            >
              <p className="figure__value">
                {item.prefix && <span className="figure__prefix">{item.prefix}</span>}{item.prefix && ' '}
                <span className="figure__number">{item.value}</span>
              </p>
              <p className="figure__label">{item.label}</p>
              <ReviewFlag note={item.review} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
