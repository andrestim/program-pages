import type { CSSProperties } from 'react';
import type { GridConfig } from '../program/types';
import { Cta, ReviewFlag, SectionHead, useReveal } from './primitives';
import './Grid.css';

/**
 * Ruled peers in one of three arrangements:
 * `cells` three columns; `ledger` the heading on the left and the items as ruled rows on the
 * right; `schedule` a numbered two-column list for a genuinely ordered schedule.
 */
export function Grid({ config }: { config: GridConfig }) {
  const ref = useReveal<HTMLElement>();
  const layout = config.layout ?? 'cells';
  const List = layout === 'schedule' ? 'ol' : 'ul';
  return (
    <section
      className={`section grid-section grid-section--${layout}`}
      id={config.id}
      aria-labelledby={`${config.id}-title`}
      ref={ref}
    >
      <div className="container grid__frame">
        <SectionHead
          title={config.title}
          intro={config.intro}
          titleId={`${config.id}-title`}
          layout={layout === 'ledger' ? 'stacked' : config.head}
          figure={config.figure}
        />
        <List className="grid__list">
          {config.items.map((item, i) => (
            <li
              className="grid__cell reveal"
              key={item.title}
              style={{ '--reveal-delay': `${layout === 'cells' ? (i % 3) * 90 : i * 60}ms` } as CSSProperties}
              data-review={item.review ? '' : undefined}
            >
              {layout === 'schedule' && (
                <span className="grid__num" aria-hidden="true">
                  {i + 1}
                </span>
              )}
              <h3 className="grid__title">
                {item.title}
                {item.mark && <sup className="grid__mark">{item.mark}</sup>}
              </h3>
              <p className="grid__body">{item.body}</p>
              {item.link && (
                <p className="grid__link">
                  <Cta link={item.link} variant="text" />
                </p>
              )}
              <ReviewFlag note={item.review} />
            </li>
          ))}
        </List>
        {config.note && <p className="grid__note">{config.note}</p>}
      </div>
    </section>
  );
}
