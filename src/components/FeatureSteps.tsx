import { useId, useRef, useState, type KeyboardEvent } from 'react';
import type {
  CodePanel,
  FeatureConfig,
  FeaturePanel,
  FeatureStep,
  FlowPanel,
  FormulaPanel,
  LedgerPanel,
} from '../program/types';
import { media } from '../system/breakpoints';
import { ReviewFlag, RichText, SectionHead, useInView, useMediaQuery, useReveal } from './primitives';
import './FeatureSteps.css';

/**
 * Feature walkthrough. Wide screens: vertical tabs on the left, one technical panel on the
 * right whose states share a grid cell so the frame never changes height. Below 1024px the
 * same steps become a single-open disclosure list, each panel opening directly under the
 * step that controls it.
 */
export function FeatureSteps({ config }: { config: FeatureConfig }) {
  const ref = useReveal<HTMLElement>();
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<'forward' | 'back'>('forward');
  // Steps already shown once replay quietly (no line-by-line settle)
  const [replay, setReplay] = useState(false);
  const seen = useRef(new Set([0]));
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const uid = useId();
  const count = config.steps.length;
  const compact = useMediaQuery(media.compact);
  // The code illustration plays once the reader reaches it, then on every step change
  const [stageRef, inView] = useInView<HTMLDivElement>();

  // Direction tells the panels which way to travel: later steps arrive from below
  const select = (i: number) => {
    if (i === active) return;
    setDirection(i > active ? 'forward' : 'back');
    setReplay(seen.current.has(i));
    seen.current.add(i);
    setActive(i);
  };

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const map: Record<string, number> = {
      ArrowDown: i + 1,
      ArrowRight: i + 1,
      ArrowUp: i - 1,
      ArrowLeft: i - 1,
      Home: 0,
      End: count - 1,
    };
    if (!(e.key in map)) return;
    e.preventDefault();
    const next = (map[e.key] + count) % count;
    select(next);
    tabs.current[next]?.focus();
  };

  return (
    <section className="section feature" id={config.id} aria-labelledby={`${config.id}-title`} ref={ref}>
      <div className="container">
        <SectionHead title={config.title} intro={config.intro} titleId={`${config.id}-title`} layout={config.head} figure={config.figure} />

        {compact ? (
          <div className="feature__steps" ref={stageRef} data-inview={inView}>
            {config.steps.map((step, i) => {
              const open = i === active;
              return (
                <div
                  className={`step${open ? ' is-active' : ''}${open && replay ? ' is-replay' : ''}`}
                  key={step.id}
                  data-review={step.review ? '' : undefined}
                >
                  <h3 className="step__heading">
                    <button
                      className="step__tab"
                      id={`${uid}-tab-${i}`}
                      aria-expanded={open}
                      aria-controls={`${uid}-region-${i}`}
                      onClick={() => select(i)}
                    >
                      <StepLabel step={step} index={i} />
                    </button>
                  </h3>
                  <div
                    className="step__body"
                    id={`${uid}-region-${i}`}
                    role="region"
                    aria-labelledby={`${uid}-tab-${i}`}
                    aria-hidden={!open}
                  >
                    <div>
                      <p>
                        <RichText text={step.body} />
                      </p>
                      <ReviewFlag note={step.review} />
                      <div className="feature__frame is-inline">
                        <PanelContent step={step} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="feature__layout" ref={stageRef} data-inview={inView}>
            <div className="feature__steps" role="tablist" aria-orientation="vertical" aria-label={config.title}>
              {config.steps.map((step, i) => {
                const selected = i === active;
                return (
                  <div className={`step${selected ? ' is-active' : ''}`} key={step.id} data-review={step.review ? '' : undefined}>
                    <button
                      ref={(el) => {
                        tabs.current[i] = el;
                      }}
                      className="step__tab"
                      role="tab"
                      id={`${uid}-tab-${i}`}
                      aria-selected={selected}
                      aria-controls={`${uid}-panel-${i}`}
                      aria-describedby={`${uid}-desc-${i}`}
                      tabIndex={selected ? 0 : -1}
                      onClick={() => select(i)}
                      onKeyDown={(e) => onKey(e, i)}
                    >
                      <StepLabel step={step} index={i} />
                    </button>
                    <div className="step__body" id={`${uid}-desc-${i}`}>
                      <div>
                        <p>
                          <RichText text={step.body} />
                        </p>
                        <ReviewFlag note={step.review} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="feature__frame" data-direction={direction}>
              {config.steps.map((step, i) => (
                <div
                  key={step.id}
                  className={`panel${i === active ? ' is-active' : ''}${i === active && replay ? ' is-replay' : ''}`}
                  role="tabpanel"
                  id={`${uid}-panel-${i}`}
                  aria-labelledby={`${uid}-tab-${i}`}
                  aria-hidden={i !== active}
                  tabIndex={i === active ? 0 : -1}
                >
                  <PanelContent step={step} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function StepLabel({ step, index }: { step: FeatureStep; index: number }) {
  return (
    <>
      <span className="step__label">
        <span className="step__index">{String(index + 1).padStart(2, '0')}</span>
        {step.label}
      </span>
      <span className="step__title">{step.title}</span>
    </>
  );
}

function PanelContent({ step }: { step: FeatureStep }) {
  return (
    <>
      <p className="panel__bar">{step.panel.caption}</p>
      <div className="panel__body">
        <PanelView panel={step.panel} />
      </div>
    </>
  );
}

function PanelView({ panel }: { panel: FeaturePanel }) {
  switch (panel.kind) {
    case 'flow':
      return <Flow panel={panel} />;
    case 'code':
      return <Code panel={panel} />;
    case 'ledger':
      return <Ledger panel={panel} />;
    case 'formula':
      return <Formula panel={panel} />;
  }
}

/** Set like a written calculation: one term per row, the result under a heavier rule. */
function Formula({ panel }: { panel: FormulaPanel }) {
  const rows = [
    ...panel.factors.map((f, i) => ({ ...f, op: i === 0 ? '' : panel.operator, result: false })),
    { ...panel.result, op: '=', result: true },
  ];
  const hasExample = rows.some((row) => row.example);
  return (
    <div className="formula">
      {hasExample && (
        <p className="formula__head" aria-hidden="true">
          Example
        </p>
      )}
      <ol className="formula__rows">
        {rows.map((row) => (
          <li className={`formula__row${row.result ? ' is-result' : ''}`} key={row.label}>
            <span className="formula__op" aria-hidden="true">
              {row.op}
            </span>
            <span className="formula__term">
              <span className="formula__label">{row.label}</span>
              <span className="formula__detail">{row.detail}</span>
            </span>
            {row.example && (
              <span className="formula__example">
                <span className="visually-hidden">Example: </span>
                {row.example}
              </span>
            )}
          </li>
        ))}
      </ol>
      {panel.note && <p className="panel__note">{panel.note}</p>}
    </div>
  );
}

function Flow({ panel }: { panel: FlowPanel }) {
  return (
    <ol className="flow">
      {panel.nodes.map((n) => (
        <li className={`flow__node${n.emphasis ? ' is-emphasis' : ''}`} key={n.label}>
          <span className="flow__dot" aria-hidden="true" />
          <span className="flow__text">
            <span className="flow__label">{n.label}</span>
            <span className="flow__detail">{n.detail}</span>
          </span>
          {n.action && <span className="flow__action">“{n.action}”</span>}
        </li>
      ))}
    </ol>
  );
}

function Code({ panel }: { panel: CodePanel }) {
  return (
    <div className="code">
      <div className="code__request" translate="no">
        <span className="code__method">{panel.method}</span>
        <span>{panel.endpoint}</span>
      </div>
      <pre className="code__block" aria-label="Example JSON request" translate="no">
        {panel.lines.map((line, i) => {
          const hl = line.match(/^(\s*)⟦(.*)⟧(.*)$/);
          return (
            <span className={`code__line${hl ? ' is-highlight' : ''}`} key={i} style={{ ['--n' as string]: i }}>
              <span className="code__ln" aria-hidden="true">
                {i + 1}
              </span>
              {hl ? (
                <span>
                  {hl[1]}
                  <mark>{hl[2]}</mark>
                  {hl[3]}
                </span>
              ) : (
                <span>{line}</span>
              )}
              {hl && panel.annotation && (
                <span className="code__annotation" translate="yes">
                  {panel.annotation}
                </span>
              )}
            </span>
          );
        })}
      </pre>
      {panel.note && <p className="panel__note">{panel.note}</p>}
    </div>
  );
}

function Ledger({ panel }: { panel: LedgerPanel }) {
  return (
    <div className="ledger">
      <p className="ledger__path">
        {panel.path.map((p, i) => (
          <span key={p}>
            {i > 0 && <span aria-hidden="true"> › </span>}
            {p}
          </span>
        ))}
      </p>
      <table className="ledger__table">
        <thead>
          <tr>
            {panel.columns.map((c) => (
              <th key={c} scope="col">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {panel.rows.map((row, r) => (
            <tr key={r}>
              {row.map((cell, c) => (c === 0 ? <th key={c} scope="row">{cell}</th> : <td key={c}>{cell}</td>))}
            </tr>
          ))}
        </tbody>
      </table>
      {panel.note && <p className="panel__note">{panel.note}</p>}
    </div>
  );
}
