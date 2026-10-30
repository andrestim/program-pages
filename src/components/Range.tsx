import type { RangeConfig } from '../program/types';
import { ReviewFlag, SectionHead, useReveal } from './primitives';
import './Range.css';

/** A published range on one scale: the solid span, then a dashed run for what lies beyond. */
export function Range({ config }: { config: RangeConfig }) {
  const ref = useReveal<HTMLElement>();
  const marks = [
    { ...config.min, cls: 'is-min' },
    { ...config.max, cls: 'is-max' },
    ...(config.beyond ? [{ ...config.beyond, cls: 'is-beyond' }] : []),
  ];
  return (
    <section className={`section range${config.layout === 'threshold' ? ' range--threshold' : ''}`} id={config.id} aria-labelledby={`${config.id}-title`} ref={ref}>
      <div className="container">
        <SectionHead title={config.title} intro={config.intro} titleId={`${config.id}-title`} layout={config.head} figure={config.figure} />
        <figure className={`range__panel reveal${config.beyond ? ' has-beyond' : ''}`} data-review={config.review ? '' : undefined}>
          <figcaption className="range__caption">{config.caption}</figcaption>
          <div className="range__scale" aria-hidden="true">
            <span className="range__span" />
            {config.beyond && <span className="range__run" />}
          </div>
          <dl className="range__marks">
            {marks.map((m) => (
              <div className={`range__mark ${m.cls}`} key={m.cls}>
                <dt className="range__value">{m.value}</dt>
                <dd className="range__label">{m.label}</dd>
              </div>
            ))}
          </dl>
          <ReviewFlag note={config.review} />
        </figure>
      </div>
    </section>
  );
}
