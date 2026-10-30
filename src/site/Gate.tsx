import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { ArrowIcon } from '../components/primitives';
import './Gate.css';

/**
 * SHA-256 of the access code (default "8888"). To change it, hash the new code, e.g.
 *   python -c "import hashlib;print(hashlib.sha256(b'NEWCODE').hexdigest())"
 * and paste the result here. Changing it also re-locks every browser that unlocked the old one.
 *
 * This is a courtesy lock for a static site, not security: the pages ship to the browser
 * either way. It keeps casual visitors and search engines out, nothing more.
 */
const ACCESS_CODE_SHA256 = '2926a2731f4b312c08982cacf8061eb14bf65c1a87cc5d70e864e079c6220731';
const STORAGE_KEY = 'programme-pages-access';

async function sha256(text: string) {
  const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return Array.from(new Uint8Array(bytes), (b) => b.toString(16).padStart(2, '0')).join('');
}

function isUnlocked() {
  try {
    return localStorage.getItem(STORAGE_KEY) === ACCESS_CODE_SHA256;
  } catch {
    return false;
  }
}

export function Gate({ wordmark, children }: { wordmark: string; children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(isUnlocked);
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(false);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!unlocked) input.current?.focus();
  }, [unlocked]);

  if (unlocked) return <>{children}</>;

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const code = input.current?.value.trim() ?? '';
    if (!code) return;
    setChecking(true);
    const ok = (await sha256(code)) === ACCESS_CODE_SHA256;
    setChecking(false);
    if (ok) {
      try {
        localStorage.setItem(STORAGE_KEY, ACCESS_CODE_SHA256);
      } catch {
        /* Private mode: unlocked for this visit only */
      }
      setUnlocked(true);
      window.scrollTo(0, 0);
    } else {
      setError(true);
      input.current?.select();
    }
  };

  return (
    <main className="gate">
      <div className="container gate__inner">
        <span className="gate__wordmark" translate="no">
          {wordmark}
        </span>
        <form className="gate__form" onSubmit={submit} noValidate>
          <h1 className="gate__title">Enter the access code.</h1>
          <p className="lede gate__lede">These pages are concept drafts for internal review.</p>
          <label className="visually-hidden" htmlFor="access-code">
            Access code
          </label>
          <div className="gate__row">
            <input
              ref={input}
              id="access-code"
              className={`gate__input${error ? ' is-error' : ''}`}
              type="password"
              inputMode="numeric"
              autoComplete="off"
              placeholder="Access code"
              aria-invalid={error || undefined}
              aria-describedby={error ? 'access-error' : undefined}
              onChange={() => error && setError(false)}
            />
            <button className="cta cta--primary cta--m gate__submit" type="submit" disabled={checking}>
              <span className="cta__label">Continue</span>
              <ArrowIcon />
            </button>
          </div>
          <p className="gate__error" id="access-error" role="alert">
            {error ? 'That code isn’t right. Check it and try again.' : ''}
          </p>
        </form>
      </div>
    </main>
  );
}
