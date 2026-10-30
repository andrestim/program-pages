import type { CSSProperties } from 'react';
import type { SpecSheetConfig } from '../program/types';
import { ReviewFlag, SectionHead, useReveal } from './primitives';
import './SpecSheet.css';

/**
 * A termsheet read at a glance: term, headline value, one line of detail per row.
 * `termsheet` sets it as the document itself: column heads, a ruled grid that plots in row by
 * row, and footnotes keyed by each row's `mark`.
 */
export function SpecSheet({ config }: { config: SpecSheetConfig }) {
  const ref = useReveal<HTMLElement>();
  const sheet = config.layout === 'termsheet';
  return (
    <section
      className={`section specs${sheet ? ' specs--termsheet' : ''}`}
      id={config.id}
      aria-labelledby={`${config.id}-title`}
      ref={ref}
    >
      <div className="container">
        <SectionHead title={config.title} intro={config.intro} titleId={`${config.id}-title`} layout={config.head} figure={config.figure} />
        <div className="specs__sheet">
          {sheet && config.columns && (
            <div className="specs__head reveal" aria-hidden="true">
              {config.columns.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          )}
          <dl className="specs__list">
            {config.rows.map((row, i) => (
              <div
                className="specs__row reveal"
                key={row.term}
                style={{ '--reveal-delay': `${i * 80}ms` } as CSSProperties}
                data-review={row.review ? '' : undefined}
              >
                <dt className="specs__term">{row.term}</dt>
                <dd className="specs__value">
                  {row.prefix && <span className="specs__prefix">{row.prefix}</span>}
                  {row.prefix && ' '}
                  <span className="specs__number">{row.value}</span>
                </dd>
                <dd className="specs__detail">
                  {row.detail}
                  {row.mark && <sup className="specs__mark">{row.mark}</sup>}
                  <ReviewFlag note={row.review} />
                </dd>
              </div>
            ))}
          </dl>
          {config.notes && (
            <ol className="specs__notes reveal">
              {config.notes.map((n) => (
                <li key={n.mark}>
                  <sup>{n.mark}</sup> {n.text}
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </section>
  );
}
