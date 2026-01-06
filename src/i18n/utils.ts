import { translations, type Locale, type Translations } from './translations';
import { getLocaleFromPathname, getLocaleFromAstro } from './routing';

// Re-export getLocaleFromAstro for convenience
export { getLocaleFromAstro };

/**
 * Get translations for the current locale
 */
export function getTranslations(locale?: Locale): Translations {
  const currentLocale = locale || getLocaleFromPathname();
  return translations[currentLocale] || translations.en;
}

/**
 * Get a nested translation value by path
 * Example: getTranslation('nav.files') => 'Files' or 'Dossiers'
 */
export function getTranslation(path: string, locale?: Locale): string {
  const t = getTranslations(locale);
  const keys = path.split('.');
  let value: any = t;
  
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      return path; // Return path if translation not found
    }
  }
  
  return typeof value === 'string' ? value : path;
}

/**
 * Shortcut function for getTranslation
 */
export function t(path: string, locale?: Locale): string {
  return getTranslation(path, locale);
}

