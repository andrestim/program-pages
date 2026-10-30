import { useEffect, useRef, useState } from 'react';
import type { HeroConfig } from '../program/types';
import { media } from '../system/breakpoints';
import { Cta, ReviewFlag } from './primitives';
import './Hero.css';

export function Hero({ hero, ctaId }: { hero: HeroConfig; ctaId: string }) {
  // Copy enters via CSS on first paint; only the photograph waits until it has decoded.
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const plateRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const audienceRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const { image } = hero;
  const layout = hero.layout ?? 'standard';

  // A cached image can finish before React attaches onLoad
  useEffect(() => {
    if (imageRef.current?.complete) setLoaded(true);
  }, []);

  // Depth on scroll: the photograph trails the page slightly so the object feels set back
  // behind the copy, and on wider screens the copy recedes once the reader is well past it.
  // Values are written straight to the moving elements, once per frame, only while visible.
  useEffect(() => {
    const el = ref.current;
    const plate = plateRef.current;
    if (!el || !plate || window.matchMedia(media.reducedMotion).matches) return;
    const narrow = window.matchMedia(media.mobile);
    const faded = [copyRef.current, audienceRef.current];
    let frame = 0;
    const update = () => {
      frame = 0;
      const progress = Math.min(Math.max(window.scrollY / el.offsetHeight, 0), 1);
      // A tall hero moves less: mass reads as slowness
      const range = narrow.matches ? 40 : layout === 'tall' ? 64 : 110;
      plate.style.transform = `translate3d(0, ${(progress * range).toFixed(2)}px, 0) scale(1.04)`;
      // Copy stays fully legible for the first 30% of the scroll, then eases to 40%
      const fade = narrow.matches ? 1 : 1 - Math.min(Math.max((progress - 0.3) / 0.7, 0), 1) * 0.6;
      faded.forEach((node) => node && (node.style.opacity = fade === 1 ? '' : fade.toFixed(3)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        plate.style.willChange = 'transform';
        window.addEventListener('scroll', onScroll, { passive: true });
        update();
      } else {
        plate.style.willChange = '';
        window.removeEventListener('scroll', onScroll);
      }
    });
    io.observe(el);
    narrow.addEventListener('change', update);
    return () => {
      io.disconnect();
      narrow.removeEventListener('change', update);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [layout]);

  return (
    <section className={`hero hero--${layout}${loaded ? ' is-loaded' : ''}`} id="top" aria-labelledby="hero-title" ref={ref}>
      <div className="hero__visual" aria-hidden="true">
        <div className="hero__plate" ref={plateRef}>
          <picture>
            {image.portrait && (
              <source media="(max-width: 767px)" srcSet={image.portrait.srcSet} sizes="100vw" type="image/webp" />
            )}
            <img
              className="hero__image"
              src={image.landscape.src}
              srcSet={image.landscape.srcSet}
              sizes="(max-width: 1023px) 100vw, 82vw"
              width={2400}
              height={1600}
              alt={image.alt}
              {...{ fetchpriority: 'high' }}
              decoding="async"
              onLoad={() => setLoaded(true)}
              ref={imageRef}
            />
          </picture>
          <div className="hero__light" />
        </div>
        <div className="hero__scrim" />
      </div>

      <div className="container hero__inner">
        <div className="hero__copy" ref={copyRef}>
          <h1 className="hero__title hero__in" id="hero-title" style={{ ['--i' as string]: 0 }}>
            {hero.headline.map((line) => (
              <span key={line}>{line} </span>
            ))}
          </h1>
          <p className="lede hero__lede hero__in" style={{ ['--i' as string]: 1 }}>
            {hero.lede}
          </p>
          <div className="hero__actions hero__in" style={{ ['--i' as string]: 2 }}>
            <span id={ctaId} data-primary-cta>
              <Cta link={hero.primaryCta} />
            </span>
            {hero.secondaryCta && <Cta link={hero.secondaryCta} variant="text" />}
          </div>
          <ReviewFlag note={hero.primaryCta.review} />
        </div>

        {hero.audience && (
          <div className="hero__audience hero__in" style={{ ['--i' as string]: 4 }} ref={audienceRef}>
            <p className="hero__audience-label">{hero.audienceLabel}</p>
            <ul>
              {hero.audience.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
