import type { Locale } from './translations';

/**
 * Get the locale from the current pathname
 */
export function getLocaleFromPathname(pathname?: string): Locale {
  if (typeof window !== 'undefined') {
    pathname = pathname || window.location.pathname;
  }
  
  if (!pathname) {
    return 'en';
  }
  
  // Normalize pathname - handle both /fr and /fr/
  // Check if pathname starts with /fr/ or is exactly /fr (with or without trailing slash)
  if (pathname.startsWith('/fr/') || pathname === '/fr' || pathname === '/fr/') {
    return 'fr';
  }
  
  return 'en';
}

/**
 * Get the locale from Astro
 * This function should be called from within an Astro component
 */
export function getLocaleFromAstro(): Locale {
  // In Astro, we can use Astro.url or params
  try {
    // @ts-ignore - Astro is available in component context
    if (typeof Astro !== 'undefined') {
      // Try to get pathname from Astro.url
      if (Astro.url && Astro.url.pathname) {
        const pathname = Astro.url.pathname;
        const locale = getLocaleFromPathname(pathname);
        return locale;
      }
      // Fallback: check if we're in a /fr/ directory by checking the file path
      // @ts-ignore
      if (Astro.request && Astro.request.url) {
        const url = new URL(Astro.request.url);
        const locale = getLocaleFromPathname(url.pathname);
        return locale;
      }
    }
  } catch (e) {
    // Not in Astro context or error occurred
    // Silently fail and return default
  }
  
  return 'en';
}

/**
 * Get the path without the locale prefix
 */
export function getPathWithoutLocale(pathname: string): string {
  // Normalize pathname (remove trailing slash except for root)
  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
  
  if (normalizedPath.startsWith('/fr/')) {
    const withoutPrefix = normalizedPath.slice(3);
    return withoutPrefix || '/';
  }
  if (normalizedPath === '/fr') {
    return '/';
  }
  return normalizedPath;
}

/**
 * Add locale prefix to a path
 */
export function addLocaleToPath(path: string, locale: Locale): string {
  if (locale === 'en') {
    // For English, remove any existing locale prefix
    return getPathWithoutLocale(path);
  }
  
  // If path already has a locale prefix, remove it first
  const pathWithoutLocale = getPathWithoutLocale(path);
  
  // Handle root path
  if (pathWithoutLocale === '/') {
    return `/${locale}`;
  }
  
  // Remove leading slash if present, add locale, then add path
  const cleanPath = pathWithoutLocale.startsWith('/') ? pathWithoutLocale.slice(1) : pathWithoutLocale;
  return `/${locale}/${cleanPath}`;
}

/**
 * Get alternate language paths for a given path
 */
export function getAlternatePaths(pathname: string): { en: string; fr: string } {
  const pathWithoutLocale = getPathWithoutLocale(pathname);
  return {
    en: pathWithoutLocale === '/' ? '/' : pathWithoutLocale,
    fr: addLocaleToPath(pathWithoutLocale, 'fr'),
  };
}

