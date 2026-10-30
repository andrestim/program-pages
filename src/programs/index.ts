import type { ProgramConfig } from '../program/types';
import { apiBroker } from './api-broker';
import { affiliate } from './affiliate';
import { marketMaker } from './market-maker';
import { otc } from './otc';

/**
 * Configs write asset paths from the site root (`/assets/…`). The site may be served from a
 * sub-path (GitHub Pages serves it under `/<repo>/`), so every such path is rebased once here.
 */
function withBase<T>(value: T): T {
  const base = import.meta.env.BASE_URL;
  if (typeof value === 'string') return value.replaceAll('/assets/', `${base}assets/`) as T;
  if (Array.isArray(value)) return value.map(withBase) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, withBase(v)])) as T;
  }
  return value;
}

/** Every programme page, in the order the site lists them. API Broker is the approved reference. */
export const programList: ProgramConfig[] = [apiBroker, affiliate, marketMaker, otc].map(withBase);

/** Registry of programme pages, selected with `?program=<id>`; no parameter shows the hub. */
export const programs: Record<string, ProgramConfig> = Object.fromEntries(programList.map((p) => [p.id, p]));
