import { useId, useState } from 'react';
import type { FaqConfig } from '../program/types';
import { Cta, ReviewFlag, RichText, useReveal } from './primitives';
import './Faq.css';

export function Faq({ config }: { config: FaqConfig }) {
  const ref = useReveal<HTMLElement>();
  const uid = useId();
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]));

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <section className="section faq" id={config.id} aria-labelledby={`${config.id}-title`} ref={ref}>
      <div className="container faq__layout">
        <header className="faq__head reveal">
          <h2 className="title" id={`${config.id}-title`}>
            {config.title}
          </h2>
          {config.intro && <p className="lede">{config.intro}</p>}
        </header>

        <ul className="faq__list">
          {config.items.map((item, i) => {
            const isOpen = open.has(i);
            return (
              <li className={`qa${isOpen ? ' is-open' : ''}`} key={item.question} data-review={item.review ? '' : undefined}>
                <h3>
                  <button
                    className="qa__q"
                    aria-expanded={isOpen}
                    aria-controls={`${uid}-a-${i}`}
                    id={`${uid}-q-${i}`}
                    onClick={() => toggle(i)}
                  >
                    <span>{item.question}</span>
                    <span className="qa__icon" aria-hidden="true" />
                  </button>
                </h3>
                <div className="qa__a" id={`${uid}-a-${i}`} role="region" aria-labelledby={`${uid}-q-${i}`}>
                  <div>
                    <p>
                      <RichText text={item.answer} />
                    </p>
                    <ReviewFlag note={item.review} />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {config.contact && (
          <p className="faq__contact">
            {config.contact.lead} <Cta link={config.contact.link} variant="text" />
          </p>
        )}
      </div>
    </section>
  );
}
