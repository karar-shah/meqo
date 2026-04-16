/**
 * Kiosk navigation order.
 * All helpers are pure functions — safe to import from Server Components.
 */
export const PAGE_ORDER = ["/", "/b01", "/b02", "/b03", "/b04"] as const;
export type KioskPath = (typeof PAGE_ORDER)[number];

export function getIndex(pathname: string): number {
  return PAGE_ORDER.indexOf(pathname as KioskPath);
}

export function getNext(pathname: string): KioskPath | null {
  const i = getIndex(pathname);
  return i >= 0 && i < PAGE_ORDER.length - 1 ? PAGE_ORDER[i + 1] : null;
}

export function getPrev(pathname: string): KioskPath | null {
  const i = getIndex(pathname);
  return i > 0 ? PAGE_ORDER[i - 1] : null;
}
