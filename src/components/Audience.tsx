import type { CSSProperties } from 'react';
import type { AudienceConfig } from '../program/types';
import { ReviewFlag, SectionHead, useReveal } from './primitives';
import './Audience.css';

/** Who the programme is for, as a ruled typographic list: no icons, no cards. */
export function Audience({ config }: { config: AudienceConfig }) {
  const ref = useReveal<HTMLElement>();
  return (
    <section className={`section audience${config.layout === 'roll' ? ' audience--roll' : ''}`} id={config.id} aria-labelledby={`${config.id}-title`} ref={ref}>
      <div className="container">
        <SectionHead title={config.title} intro={config.intro} titleId={`${config.id}-title`} layout={config.head} figure={config.figure} />
        <ul className="audience__list" data-review={config.review ? '' : undefined}>
          {config.items.map((item, i) => (
            <li className="audience__item reveal" key={item} style={{ '--reveal-delay': `${i * 60}ms` } as CSSProperties}>
              {item}
            </li>
          ))}
        </ul>
        <ReviewFlag note={config.review} />
      </div>
    </section>
  );
}
