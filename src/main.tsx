import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/inter/opsz.css';
import '@fontsource-variable/jetbrains-mono';
import './system/tokens.css';
import './system/base.css';
import { ProgramPage } from './program/ProgramPage';
import { programList, programs } from './programs';
import { isReviewMode } from './components/primitives';
import { Gate } from './site/Gate';
import { Hub } from './site/Hub';

// `?program=<id>` opens a programme; anything else shows the hub
const program = programs[new URLSearchParams(window.location.search).get('program') ?? ''];

if (isReviewMode) document.documentElement.classList.add('review-mode');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Gate wordmark="EXCHANGE">
      {program ? <ProgramPage program={program} programs={programList} /> : <Hub programs={programList} wordmark="EXCHANGE" />}
    </Gate>
  </StrictMode>,
);
