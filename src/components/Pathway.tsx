import type { CSSProperties } from 'react';
import type { PathwayConfig } from '../program/types';
import { ReviewFlag, SectionHead, useReveal } from './primitives';
import './Pathway.css';

/**
 * A conceptual path left to right, set in the lifted panel: one hairline through a ring per
 * stage. The rail draws once as the panel arrives; the last stage is the destination.
 */
export function Pathway({ config }: { config: PathwayConfig }) {
  const ref = useReveal<HTMLElement>();
  return (
    <section className="section pathway" id={config.id} aria-labelledby={`${config.id}-title`} ref={ref}>
      <div className="container">
        <SectionHead title={config.title} intro={config.intro} titleId={`${config.id}-title`} layout={config.head} figure={config.figure} />
        <figure className="pathway__panel reveal" data-review={config.review ? '' : undefined}>
          <figcaption className="pathway__caption">{config.caption}</figcaption>
          <ol className="pathway__nodes" style={{ '--count': config.nodes.length } as CSSProperties}>
            {config.nodes.map((node, i) => (
              <li className="pathway__node" key={node.label} style={{ '--i': i } as CSSProperties}>
                <span className="pathway__ring" aria-hidden="true" />
                <span className="pathway__label">{node.label}</span>
                <span className="pathway__detail">{node.detail}</span>
              </li>
            ))}
          </ol>
          {config.note && <p className="panel__note pathway__note">{config.note}</p>}
          <ReviewFlag note={config.review} />
        </figure>
      </div>
    </section>
  );
}
