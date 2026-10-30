import { useEffect, useRef, useState, type ReactNode } from 'react';
import type { LinkConfig } from '../program/types';
import './primitives.css';

/** `?review` in the URL highlights copy and links that still need sign-off. */
export const isReviewMode = new URLSearchParams(window.location.search).has('review');

export function ArrowIcon({ direction = 'right' }: { direction?: 'right' | 'up-right' }) {
  return (
    <svg className={`arrow arrow--${direction}`} width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      {direction === 'right' ? (
        <path d="M1 7h11M8 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M3.5 10.5l7-7M5 3.5h5.5V9" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

export function ReviewFlag({ note }: { note?: string }) {
  if (!note) return null;
  return (
    <span className="review-flag" role="note">
      {note}
    </span>
  );
}

interface CtaProps {
  link: LinkConfig;
  variant?: 'primary' | 'text';
  size?: 'm' | 's';
  className?: string;
}

/** Every call to action on a programme page goes through this component. */
export function Cta({ link, variant = 'primary', size = 'm', className = '' }: CtaProps) {
  const cls = `cta cta--${variant} cta--${size} ${className}`.trim();
  const icon = variant === 'text' && link.external ? 'up-right' : 'right';
  const content = (
    <>
      <span className="cta__label">{link.label}</span>
      <ArrowIcon direction={icon} />
    </>
  );

  if (!link.href) {
    return (
      <span className={cls} aria-disabled="true" data-review={link.review ? '' : undefined}>
        {content}
      </span>
    );
  }

  return (
    <a
      className={cls}
      href={link.href}
      data-review={link.review ? '' : undefined}
      title={isReviewMode && link.review ? link.review : undefined}
      {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {content}
      {link.external && <span className="visually-hidden"> (opens in a new tab)</span>}
    </a>
  );
}

/** Tracks a media query; reads it synchronously on first render so layouts never flash. */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);
  return matches;
}

/** True once the element has entered the viewport (never resets). */
export function useInView<T extends HTMLElement>(rootMargin = '0px 0px -20% 0px') {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(() => !('IntersectionObserver' in window));
  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [inView, rootMargin]);
  return [ref, inView] as const;
}

/** Adds `.is-visible` once the element enters the viewport. Content is visible without JS. */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const targets = root.matches('.reveal') ? [root] : Array.from(root.querySelectorAll<HTMLElement>('.reveal'));
    if (!('IntersectionObserver' in window)) {
      targets.forEach((t) => t.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.01 },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);
  return ref;
}

/** The heading carries the section on its own: no kicker, one entrance for the whole block. */
export function SectionHead({
  title,
  intro,
  titleId,
  layout = 'split',
  figure,
}: {
  title: string;
  intro?: ReactNode;
  titleId: string;
  layout?: 'split' | 'stacked';
  figure?: { src: string; width: number; height: number };
}) {
  const cls = `section-head reveal${layout === 'stacked' ? ' section-head--stacked' : ''}${figure ? ' section-head--figure' : ''}`;
  return (
    <header className={cls}>
      <h2 className="title" id={titleId}>
        {title}
      </h2>
      {intro && <p className="lede">{intro}</p>}
      {figure && (
        <img
          className="section-head__figure"
          src={figure.src}
          width={figure.width}
          height={figure.height}
          alt=""
          loading="lazy"
          decoding="async"
        />
      )}
    </header>
  );
}

/** Renders `broker_id`-style tokens in running copy as inline code. */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\b[a-z]+(?:_[a-z]+)+\b|private\/create-order)/g);
  return (
    <>
      {parts.map((p, i) =>
        i % 2 === 1 ? (
          <code key={i} translate="no">
            {p}
          </code>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  );
}
