import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Reject leftovers from the old generator (Perplexity citation markers, translation placeholders).
const text = z
  .string()
  .min(1)
  .refine((value) => !/\[(\d+|TRANSLATION NEEDED)\]/.test(value), {
    message: 'Remove citation markers like [1] and [TRANSLATION NEEDED] placeholders',
  });

const cryptidText = z.object({
  name: text,
  description: text,
  alias: text.optional(),
  location: text.optional(),
  knownAssociates: text.optional(),
  region: text,
  type: text,
  firstSighting: text,
});

// One folder per cryptid: src/content/cryptids/<slug>/index.json + its photo.
const cryptids = defineCollection({
  loader: glob({
    pattern: '*/index.json',
    base: './src/content/cryptids',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: ({ image }) =>
    z.object({
      caseNumber: z.string().regex(/^\d{6}$/),
      codename: z.string(),
      dangerLevel: z.enum(['Low', 'Medium', 'High', 'Unknown']),
      status: z.enum(['Under Investigation', 'Sighted', 'Confirmed', 'Myth']),
      // The most recently added cryptid is the Cryptid of the Month.
      addedOn: z.coerce.date(),
      image: image(),
      // Scene description (English) used by scripts/generate-cryptid-photo.mjs
      photoPrompt: text.optional(),
      // "place" for files with no creature in frame: the photo uses paper-only style references
      photoSubject: z.enum(['creature', 'place']).optional(),
      en: cryptidText,
      fr: cryptidText,
    }),
});

export const collections = { cryptids };
