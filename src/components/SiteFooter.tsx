import type { ProgramConfig, ResponsiveImage } from '../program/types';
import './SiteFooter.css';

export function SiteFooter({ program, programs = [] }: { program: ProgramConfig; programs?: ProgramConfig[] }) {
  const credits = [program.hero.image]
    .filter((i): i is ResponsiveImage => Boolean(i.credit))
    .map((i) => i.credit!);

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <span className="site-footer__wordmark" translate="no">{program.brand.wordmark}</span>
          <span className="site-footer__program">{program.meta.title}</span>
        </div>
        <p className="site-footer__legal">{program.footer.legal}</p>
        {credits.length > 0 && (
          <p className="site-footer__credits">
            Photography:{' '}
            {credits.map((c, i) => (
              <span key={c.url}>
                {i > 0 && ', '}
                <a href={c.url} target="_blank" rel="noopener noreferrer">
                  {c.author}
                </a>
              </span>
            ))}{' '}
            · {credits[0].license}
          </p>
        )}
        {programs.length > 1 && (
          <nav className="site-footer__programmes" aria-label="Programmes">
            <a href="./">All programmes</a>
            {programs
              .filter((p) => p.id !== program.id)
              .map((p) => (
                <a key={p.id} href={`?program=${p.id}`}>
                  {p.meta.title}
                </a>
              ))}
          </nav>
        )}
        <a className="site-footer__top" href="#top">
          Back to top
        </a>
      </div>
    </footer>
  );
}
