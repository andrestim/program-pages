import { useId, useLayoutEffect, useRef, useState } from 'react';
import type { EstimatorConfig } from '../program/types';
import { ReviewFlag, SectionHead, useInView, useReveal } from './primitives';
import './Estimator.css';

/**
 * A published earnings estimate: pick a step on the rail, read its figure. The rail reuses the
 * flow's ring language (the filled ring is the step you are on).
 *
 * `panel`: the lifted panel, input left and figure right.
 * `arc`: the page's signature. No panel; the published points drawn as one large curve across
 * the full measure, the figure set large in the space the curve leaves empty.
 */
export function Estimator({ config }: { config: EstimatorConfig }) {
  const ref = useReveal<HTMLElement>();
  const [index, setIndex] = useState(config.initial);
  const name = useId();
  const current = config.steps[index];
  const arc = config.layout === 'arc';

  return (
    <section
      className={`section estimator${arc ? ' estimator--arc' : ''}`}
      id={config.id}
      aria-labelledby={`${config.id}-title`}
      ref={ref}
    >
      <div className="container">
        <SectionHead title={config.title} intro={config.intro} titleId={`${config.id}-title`} layout={config.head} figure={config.figure} />
        <div className="estimator__panel reveal" data-review={config.review ? '' : undefined}>
          <fieldset className="estimator__input">
            <legend className="estimator__label">{config.inputLabel}</legend>
            {(config.curve || arc) && <Curve config={config} index={index} />}
            <div className="estimator__rail" style={{ ['--count' as string]: config.steps.length, ['--at' as string]: index }}>
              {config.steps.map((step, i) => (
                <label className={`estimator__stop${i === index ? ' is-active' : ''}${i < index ? ' is-passed' : ''}`} key={step.label}>
                  <input
                    className="visually-hidden"
                    type="radio"
                    name={name}
                    checked={i === index}
                    onChange={() => setIndex(i)}
                  />
                  <span className="estimator__ring" aria-hidden="true" />
                  <span className="estimator__stop-label">{step.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <div className="estimator__output">
            <p className="estimator__label">{config.outputLabel}</p>
            <p className="estimator__value" aria-live="polite">
              <span key={current.value}>{current.value}</span>
            </p>
            <p className="estimator__note">{config.note}</p>
          </div>
          <ReviewFlag note={config.review} />
        </div>
      </div>
    </section>
  );
}

/**
 * The published outputs over the rail's equal stops (a categorical axis, not a value axis).
 * Geometry is measured in pixels so the line keeps its true length; the travelled part is one
 * dash whose offset transitions, so a new choice redraws from wherever the line currently is.
 */
function Curve({ config, index }: { config: EstimatorConfig; index: number }) {
  const [viewRef, inView] = useInView<HTMLDivElement>('0px 0px -25% 0px');
  const box = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useLayoutEffect(() => {
    const el = box.current;
    if (!el) return;
    const measure = () => setSize({ w: el.clientWidth, h: el.clientHeight });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const values = config.steps.map((s) => Number(s.value.replace(/[^\d.]/g, '')));
  const max = Math.max(...values);
  const pts = values.map((v, i) => ({
    x: ((i + 0.5) / values.length) * size.w,
    y: size.h * (0.94 - (v / max) * 0.86),
  }));
  const segments = pts.slice(1).map((p, i) => Math.hypot(p.x - pts[i].x, p.y - pts[i].y));
  const total = segments.reduce((a, b) => a + b, 0);
  const travelled = segments.slice(0, index).reduce((a, b) => a + b, 0);
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ');
  // Until the curve is seen, the travelled dash is withheld; it draws once on arrival
  const offset = inView ? total - travelled : total;

  return (
    <div className="estimator__curve" aria-hidden="true" ref={viewRef}>
      <div className="estimator__curve-box" ref={box}>
        {size.w > 0 && (
          <svg viewBox={`0 0 ${size.w} ${size.h}`} width={size.w} height={size.h}>
            <path className="estimator__curve-all" d={d} />
            <path
              className="estimator__curve-on"
              d={d}
              style={{ strokeDasharray: `${total} ${total}`, strokeDashoffset: offset }}
            />
          </svg>
        )}
        {size.w > 0 &&
          pts.map((p, i) => (
            <span
              className={`estimator__dot${i === index ? ' is-active' : ''}${i < index ? ' is-passed' : ''}`}
              key={i}
              style={{ left: p.x, top: p.y }}
            />
          ))}
      </div>
    </div>
  );
}
