import { ref } from 'vue';

export type SiteMode = 'professional' | 'play';

const STORAGE_KEY = 'siteMode';

export const siteMode = ref<SiteMode>('professional');

// Internal guard so init is idempotent
let initialized = false;

function normalizeStoredMode(value: string | null): SiteMode | null {
  if (value === 'professional' || value === 'play') return value;
  return null;
}

function inferModeFromHostname(hostname: string): SiteMode {
  // www.josephbaranoski.com -> professional
  // josephbaranoski.com     -> play
  // Anything else (preview domains, localhost) -> professional (safe)
  if (hostname.startsWith('www.')) return 'professional';
  if (hostname === 'josephbaranoski.com') return 'play';
  return 'professional';
}

function applyModeToDom(mode: SiteMode) {
  document.documentElement.dataset.mode = mode;
}

/**
 * Initialize site mode deterministically:
 * 1) localStorage override (if valid)
 * 2) hostname inference
 * Then persist + apply <html data-mode="...">
 */
export function initSiteMode() {
  if (initialized) return;
  initialized = true;

  const stored = normalizeStoredMode(window.localStorage.getItem(STORAGE_KEY));
  const inferred = inferModeFromHostname(window.location.hostname);

  const mode = stored ?? inferred;

  siteMode.value = mode;
  window.localStorage.setItem(STORAGE_KEY, mode);
  applyModeToDom(mode);
}

/**
 * Explicitly switch modes (e.g., future toggle, debug, hidden link).
 */
export function setSiteMode(mode: SiteMode) {
  siteMode.value = mode;
  window.localStorage.setItem(STORAGE_KEY, mode);
  applyModeToDom(mode);
}

/**
 * Convenience helper for toggles.
 */
export function toggleSiteMode() {
  setSiteMode(siteMode.value === 'professional' ? 'play' : 'professional');
}

/**
 * Optional: clears any override so hostname decides on next init.
 */
export function clearSiteModeOverride() {
  window.localStorage.removeItem(STORAGE_KEY);
}
