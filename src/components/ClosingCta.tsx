import type { ClosingConfig } from '../program/types';
import { Cta, useReveal } from './primitives';
import './ClosingCta.css';

/**
 * A calm resolution: flat graphite, one statement, the Platinum plate as the only light.
 * With `paths`, each audience gets its own column and plate under the statement.
 */
export function ClosingCta({ config }: { config: ClosingConfig }) {
  const ref = useReveal<HTMLElement>();
  return (
    <section
      className={`section closing${config.layout && config.layout !== 'standard' ? ` closing--${config.layout}` : ''}`}
      aria-labelledby="closing-title"
      ref={ref}
    >
      <div className="container closing__inner reveal">
        <h2 className="closing__title" id="closing-title">
          {config.title}
        </h2>
        <p className="lede closing__body">{config.body}</p>
        {config.paths ? (
          <ul className="closing__paths" data-primary-cta style={{ ['--paths' as string]: config.paths.length }}>
            {config.paths.map((path) => (
              <li className="closing__path" key={path.title}>
                <h3 className="closing__path-title">{path.title}</h3>
                <p className="closing__path-body">{path.body}</p>
                <Cta link={path.cta} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="closing__action" data-primary-cta>
            <Cta link={config.cta} />
          </div>
        )}
        {config.note && <p className="closing__note">{config.note}</p>}
      </div>
    </section>
  );
}
