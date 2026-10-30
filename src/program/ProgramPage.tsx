import { useEffect } from 'react';
import type { ProgramConfig, ProgramSection } from './types';
import { SiteHeader } from '../components/SiteHeader';
import { Hero } from '../components/Hero';
import { KeyFigures } from '../components/KeyFigures';
import { Benefits } from '../components/Benefits';
import { PartnerLogoStrip } from '../components/PartnerLogoStrip';
import { FeatureSteps } from '../components/FeatureSteps';
import { ProgramDetails } from '../components/ProgramDetails';
import { Faq } from '../components/Faq';
import { Estimator } from '../components/Estimator';
import { Audience } from '../components/Audience';
import { Grid } from '../components/Grid';
import { SpecSheet } from '../components/SpecSheet';
import { Pathway } from '../components/Pathway';
import { Range } from '../components/Range';
import { ClosingCta } from '../components/ClosingCta';
import { SiteFooter } from '../components/SiteFooter';

const HERO_CTA_ID = 'hero-cta';

/** One content section, by kind. Every kind shares the same tokens, rhythm and motion. */
function Section({ section }: { section: ProgramSection }) {
  switch (section.kind) {
    case 'figures':
      return <KeyFigures config={section} />;
    case 'benefits':
      return <Benefits config={section} />;
    case 'partners':
      return <PartnerLogoStrip config={section} />;
    case 'feature':
      return <FeatureSteps config={section} />;
    case 'details':
      return <ProgramDetails config={section} />;
    case 'faq':
      return <Faq config={section} />;
    case 'estimator':
      return <Estimator config={section} />;
    case 'audience':
      return <Audience config={section} />;
    case 'grid':
      return <Grid config={section} />;
    case 'specs':
      return <SpecSheet config={section} />;
    case 'pathway':
      return <Pathway config={section} />;
    case 'range':
      return <Range config={section} />;
  }
}

/** The shared page frame: hero, the programme's own sections in its own order, closing. */
export function ProgramPage({ program, programs = [] }: { program: ProgramConfig; programs?: ProgramConfig[] }) {
  // Only link to sections this programme actually renders
  const present = new Set(program.sections.map((section) => `#${section.id}`));
  const nav = program.nav.filter((item) => present.has(item.href));

  useEffect(() => {
    document.title = program.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', program.meta.description);
    const root = document.documentElement;
    const entries = Object.entries(program.theme ?? {});
    entries.forEach(([k, v]) => root.style.setProperty(k, v));
    return () => entries.forEach(([k]) => root.style.removeProperty(k));
  }, [program]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader brand={program.brand} nav={nav} cta={program.hero.primaryCta} heroCtaId={HERO_CTA_ID} />
      <main id="main">
        <Hero hero={program.hero} ctaId={HERO_CTA_ID} />
        {program.sections.map((section) => (
          <Section section={section} key={section.id} />
        ))}
        <ClosingCta config={program.closing} />
      </main>
      <SiteFooter program={program} programs={programs} />
    </>
  );
}
