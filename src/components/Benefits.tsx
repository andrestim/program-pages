import type { BenefitsConfig } from '../program/types';
import { Cta, ReviewFlag, SectionHead, useReveal } from './primitives';
import './Benefits.css';

export function Benefits({ config }: { config: BenefitsConfig }) {
  const ref = useReveal<HTMLElement>();
  return (
    <section className={`section benefits${config.layout === 'plate' ? ' benefits--plate' : ''}`} id={config.id} aria-labelledby={`${config.id}-title`} ref={ref}>
      <div className="container">
        <SectionHead title={config.title} intro={config.intro} titleId={`${config.id}-title`} layout={config.head} figure={config.figure} />
        <ul
          className="benefits__grid"
          style={{
            ['--cols' as string]: Math.min(Math.max(config.items.length, 2), 4),
            ...(config.plate ? { ['--plate' as string]: plateImage(config.plate.srcSet) } : {}),
          }}
        >
          {config.items.map((item, i) => (
            <li
              className="benefit reveal"
              key={item.title}
              style={{ ['--reveal-delay' as string]: `${120 + i * 90}ms` }}
              data-review={item.review ? '' : undefined}
            >
              {config.layout === 'plate' && config.plate && (
                <span className="benefit__slice" aria-hidden="true" style={{ ['--slice' as string]: i }} />
              )}
              {item.image && (
                <img
                  className="benefit__visual"
                  src={item.image.src}
                  srcSet={item.image.srcSet}
                  sizes="(max-width: 767px) 100vw, (max-width: 1199px) 30vw, 360px"
                  width={item.image.width}
                  height={item.image.height}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              )}
              <h3 className="benefit__title">{item.title}</h3>
              <p className="benefit__body">{item.body}</p>
              {item.link && (
                <p className="benefit__link">
                  <Cta link={item.link} variant="text" />
                </p>
              )}
              <ReviewFlag note={item.review} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/**
 * One image shared by every column, as a CSS image-set so each screen fetches one width.
 * URLs are made absolute: inside a custom property a relative url() would resolve against
 * the stylesheet's folder, not the page.
 */
function plateImage(srcSet: string) {
  const options = srcSet.split(',').map((entry) => {
    const [url, w] = entry.trim().split(' ');
    return `url("${new URL(url, document.baseURI).href}") ${parseInt(w, 10) >= 1600 ? '2x' : '1x'}`;
  });
  return `image-set(${options.join(', ')})`;
}
