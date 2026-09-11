import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n/translations';

export type CryptidEntry = CollectionEntry<'cryptids'>;

/** A cryptid with its text resolved for one locale. */
export type LocalizedCryptid = Omit<CryptidEntry['data'], 'en' | 'fr'> &
  CryptidEntry['data']['en'] & { id: string };

export function localizeCryptid(entry: CryptidEntry, locale: Locale): LocalizedCryptid {
  const { en, fr, ...shared } = entry.data;
  return { id: entry.id, ...shared, ...(locale === 'fr' ? fr : en) };
}

/** All cryptids, newest first. */
export async function getCryptids(locale: Locale): Promise<LocalizedCryptid[]> {
  const entries = await getCollection('cryptids');
  return entries
    .sort(
      (a, b) =>
        b.data.addedOn.getTime() - a.data.addedOn.getTime() || a.id.localeCompare(b.id),
    )
    .map((entry) => localizeCryptid(entry, locale));
}
