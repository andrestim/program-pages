import { useEffect, useState } from 'react';
import type { LinkConfig, ProgramConfig } from '../program/types';
import { Cta } from './primitives';
import './SiteHeader.css';

interface Props {
  brand: ProgramConfig['brand'];
  nav: ProgramConfig['nav'];
  cta: LinkConfig;
  /** id of the hero CTA; the header CTA stays hidden until the reader scrolls past it. */
  heroCtaId: string;
}

export function SiteHeader({ brand, nav, cta, heroCtaId }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [showCta, setShowCta] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // The header CTA appears only while no in-page primary CTA is on screen.
  useEffect(() => {
    const anchors = Array.from(document.querySelectorAll<HTMLElement>('[data-primary-cta]'));
    if (!anchors.length) return;
    const visible = new Set<Element>();
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) visible.add(e.target);
        else visible.delete(e.target);
      }
      const hero = document.getElementById(heroCtaId);
      const pastHero = hero ? hero.getBoundingClientRect().bottom < 0 : true;
      setShowCta(visible.size === 0 && pastHero);
    });
    anchors.forEach((a) => io.observe(a));
    return () => io.disconnect();
  }, [heroCtaId]);

  useEffect(() => {
    const sections = nav
      .map((n) => document.querySelector<HTMLElement>(n.href))
      .filter((el): el is HTMLElement => Boolean(el));
    const inBand = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) inBand.add(`#${e.target.id}`);
          else inBand.delete(`#${e.target.id}`);
        }
        // Follow document order, so the underline never points at a section that has left view
        setActive(nav.map((n) => n.href).find((href) => inBand.has(href)) ?? null);
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [nav]);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container site-header__inner">
        <a className="site-header__brand" href="./" aria-label={`${brand.wordmark}: all programmes`}>
          <span className="site-header__wordmark" translate="no">{brand.wordmark}</span>
          <span className="site-header__divider" aria-hidden="true" />
          <span className="site-header__program">{brand.programLabel}</span>
        </a>

        <nav className="site-header__nav" aria-label="Sections">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} aria-current={active === item.href ? 'true' : undefined}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={`site-header__cta${showCta ? ' is-shown' : ''}`}>
          <Cta link={cta} variant="primary" size="s" className={showCta ? '' : 'is-inert'} />
        </div>
      </div>
    </header>
  );
}
