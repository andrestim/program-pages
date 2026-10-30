import type { DetailsConfig } from '../program/types';
import { ReviewFlag, RichText, SectionHead, useReveal } from './primitives';
import './ProgramDetails.css';

export function ProgramDetails({ config }: { config: DetailsConfig }) {
  const ref = useReveal<HTMLElement>();
  const { process, terms } = config;
  return (
    <section className="section details" id={config.id} aria-labelledby={`${config.id}-title`} ref={ref}>
      <div className="container">
        <SectionHead title={config.title} intro={config.intro} titleId={`${config.id}-title`} layout={config.head} figure={config.figure} />

        {process && (
          <div className="details__block">
            <h3 className="details__heading">{process.heading}</h3>
            <ol className="process" style={{ ['--steps' as string]: process.steps.length }}>
              {process.steps.map((s, i) => (
                <li
                  className="process__step reveal"
                  key={s.title}
                  style={{ ['--reveal-delay' as string]: `${i * 80}ms` }}
                  data-review={s.review ? '' : undefined}
                >
                  <span className="process__node" aria-hidden="true" />
                  <span className="process__num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h4 className="process__title">{s.title}</h4>
                  <p className="process__body">{s.body}</p>
                  <ReviewFlag note={s.review} />
                </li>
              ))}
            </ol>
          </div>
        )}

        {terms && (
          <div className="details__block">
            <h3 className="details__heading">{terms.heading}</h3>
            <dl className="terms">
              {terms.rows.map((row) => (
                <div className="terms__row" key={row.term} data-review={row.review ? '' : undefined}>
                  <dt>{row.term}</dt>
                  <dd>
                    <RichText text={row.detail} />
                    <ReviewFlag note={row.review} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </div>
    </section>
  );
}
