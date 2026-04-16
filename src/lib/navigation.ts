/**
 * Kiosk navigation order.
 * All helpers are pure functions — safe to import from Server Components.
 */
import featuresData from "@/data/features.json";

export const PAGE_ORDER = ["/", "/b01", "/b02", "/b03", "/b04"] as const;
export type KioskPath = string;

export function getIndex(pathname: string): number {
  return PAGE_ORDER.indexOf(pathname as any);
}

export function getNext(pathname: string): KioskPath | null {
  if (PAGE_ORDER.includes(pathname as any)) {
    const i = getIndex(pathname);
    return i >= 0 && i < PAGE_ORDER.length - 1 ? PAGE_ORDER[i + 1] : null;
  }
  
  if (pathname === "/d01") {
    return null; // Next from d01 is handled via the prompt selection cards
  }

  // Dynamic routes
  const slug = pathname.slice(1).toLowerCase();
  if (featuresData[slug as keyof typeof featuresData]) {
    const prefix = slug[0];
    const num = parseInt(slug.slice(1), 10);
    const nextSlug = `${prefix}${String(num + 1).padStart(2, '0')}`;
    
    if (featuresData[nextSlug as keyof typeof featuresData]) {
      return `/${nextSlug}`;
    }
  }

  return null;
}

export function getPrev(pathname: string): KioskPath | null {
  if (PAGE_ORDER.includes(pathname as any)) {
    const i = getIndex(pathname);
    return i > 0 ? PAGE_ORDER[i - 1] : null;
  }

  if (pathname === "/d01") {
    // Swipe back from d01 goes to the home page as requested
    return "/";
  }

  // Dynamic routes
  const slug = pathname.slice(1).toLowerCase();
  if (featuresData[slug as keyof typeof featuresData]) {
    const prefix = slug[0];
    const num = parseInt(slug.slice(1), 10);
    
    if (num === 1) {
      // First feature page goes back to d01
      return "/d01";
    }
    
    const prevSlug = `${prefix}${String(num - 1).padStart(2, '0')}`;
    if (featuresData[prevSlug as keyof typeof featuresData]) {
      return `/${prevSlug}`;
    }
  }

  return null;
}
