import { useEffect, type CSSProperties } from 'react';
import type { ProgramConfig } from '../program/types';
import { ArrowIcon, useReveal } from '../components/primitives';
import './Hub.css';

/**
 * The site's front door: every programme as one ruled row, its name large, its own sentence,
 * and a crop of its own hero. No hero of its own; the programmes are the pictures.
 */
export function Hub({ programs, wordmark }: { programs: ProgramConfig[]; wordmark: string }) {
  const ref = useReveal<HTMLElement>();

  useEffect(() => {
    document.title = 'Partner Programmes';
  }, []);

  return (
    <>
      <header className="hub-header">
        <div className="container">
          <span className="hub-header__wordmark" translate="no">
            {wordmark}
          </span>
        </div>
      </header>
      <main id="main" className="hub" ref={ref}>
        <div className="container">
          <header className="hub__intro reveal">
            <h1 className="hub__title">Partner programmes.</h1>
            <p className="lede hub__lede">Four ways to build with the Exchange. Concept drafts for internal review.</p>
          </header>
          <ol className="hub__list">
            {programs.map((p, i) => (
              <li className="hub__item reveal" key={p.id} style={{ '--reveal-delay': `${i * 80}ms` } as CSSProperties}>
                <a className="hub__link" href={`?program=${p.id}`}>
                  <span className="hub__name">{p.meta.title}</span>
                  <span className="hub__desc">{p.meta.description}</span>
                  <span className="hub__visual" aria-hidden="true">
                    <img src={p.hero.image.landscape.src} alt="" loading={i < 2 ? 'eager' : 'lazy'} decoding="async" />
                  </span>
                  <span className="hub__arrow" aria-hidden="true">
                    <ArrowIcon />
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </main>
      <footer className="hub-footer">
        <div className="container">
          Concept drafts for internal review. Programme terms, product availability and links are subject to confirmation.
        </div>
      </footer>
    </>
  );
}
