import { getRelativeLocaleUrl } from 'astro:i18n';
import { translations, type Locale, type Translations } from './translations';

export const locales: Locale[] = ['en', 'fr'];

/** Narrow `Astro.currentLocale` (a plain string) to a supported locale. */
export function toLocale(value: string | undefined): Locale {
  return value === 'fr' ? 'fr' : 'en';
}

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}

export { format } from './format';

/** Dossier-style date stamp: 2026-02-17. */
export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

/** Drop the locale prefix: "/fr/files/bigfoot/" → "/files/bigfoot/". */
export function stripLocale(pathname: string): string {
  return pathname.replace(/^\/fr(?=\/|$)/, '') || '/';
}

/** The same page in another locale: localizePath("/files/", "fr") → "/fr/files/". */
export function localizePath(pathname: string, locale: Locale): string {
  return getRelativeLocaleUrl(locale, stripLocale(pathname).replace(/^\//, ''));
}
