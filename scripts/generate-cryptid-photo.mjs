#!/usr/bin/env node
/**
 * Generate a cryptid's evidence photo with Cloudflare Workers AI (FLUX.2 [klein] 9B).
 *
 * Usage:
 *   pnpm photo <slug> [<slug>...]
 *   pnpm photo --all
 *
 * Reads the scene from `photoPrompt` in src/content/cryptids/<slug>/index.json, renders it as an
 * aged sepia photo using the reference images in scripts/photo-style/, and writes
 * src/content/cryptids/<slug>/photo.jpg (pointing `image` in index.json at it).
 *
 * Set `"photoSubject": "place"` for files with no creature in frame (like the Ottawa School
 * haunting). They get blank-paper references, because the creature references make the model
 * invent a creature.
 *
 * Token: CLOUDFLARE_AI_TOKEN, or the macOS Keychain item "dragon-eye-cloudflare-ai".
 * Account: CLOUDFLARE_ACCOUNT_ID (defaults to the Dragon Eye account).
 */
import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const contentDir = join(root, 'src/content/cryptids');
const styleDir = join(root, 'scripts/photo-style');

const MODEL = '@cf/black-forest-labs/flux-2-klein-9b';
const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID ?? '819993a0ae318e207166e83deb5aca0e';

// Aged sepia photo on paper, subject in its scene: the style picked in the September 2026 tests.
const PAPER = 'Vintage sepia photograph printed on aged, stained paper';
const TONE = 'warm sepia and muted earth tones, soft film grain, subtle paper stains, faintly darkened worn edges.';
const FULL_BLEED = 'The picture fills the entire frame edge to edge: no white or cream margin, no rounded corners, no fold lines, no creases, no cracks across the picture.';
const KID_SAFE = 'Mysterious but never gory, suitable for a kids cryptid investigation club (ages 8-13).';
const NO_TEXT = 'No text, no captions, no watermark.';

const STYLES = {
  creature: {
    references: ['ref-pukwudgie.jpg', 'ref-skinwalker.jpg'],
    prompt: [
      `${PAPER}, like image 0 and image 1: ${TONE}`,
      FULL_BLEED,
      "Use the reference images ONLY for the photographic and paper treatment; do not reuse their creatures' faces, anatomy, fur, clothing or accessories.",
      `Subject centered and clearly visible. ${KID_SAFE}`,
      NO_TEXT,
    ].join(' '),
  },
  place: {
    references: ['paper-1.jpg', 'paper-2.jpg'],
    prompt: [
      `${PAPER}: ${TONE}`,
      FULL_BLEED,
      'Match the paper texture, stains and sepia tone of image 0 and image 1.',
      KID_SAFE,
      NO_TEXT,
    ].join(' '),
  },
};

// Workers AI's safety filter rejects some harmless images (error 3030); softer wording usually passes.
const FLAGGED = 3030;
const RETRY_SUFFIXES = ['', ' Calm, documentary tone.', ' Gentle, curious mood, like a museum archive photo.'];

function getToken() {
  if (process.env.CLOUDFLARE_AI_TOKEN) return process.env.CLOUDFLARE_AI_TOKEN;
  try {
    return execFileSync('security', ['find-generic-password', '-s', 'dragon-eye-cloudflare-ai', '-w']).toString().trim();
  } catch {
    throw new Error('No Workers AI token: set CLOUDFLARE_AI_TOKEN or add the "dragon-eye-cloudflare-ai" Keychain item.');
  }
}

async function render(prompt, token, references) {
  const form = new FormData();
  form.append('prompt', prompt);
  form.append('width', '1024');
  form.append('height', '1024');
  references.forEach((image, i) => {
    form.append(`input_image_${i}`, new Blob([image], { type: 'image/jpeg' }), `ref${i}.jpg`);
  });

  const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/ai/run/${MODEL}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: form,
  });
  const json = await response.json().catch(() => null);
  if (json?.success) return { image: Buffer.from(json.result.image, 'base64') };

  const errors = json?.errors ?? [{ message: `HTTP ${response.status}` }];
  return { flagged: errors.some((error) => error.code === FLAGGED), errors };
}

async function generate(slug, token) {
  const dataFile = join(contentDir, slug, 'index.json');
  if (!existsSync(dataFile)) throw new Error(`${slug}: ${dataFile} not found`);
  const data = JSON.parse(readFileSync(dataFile, 'utf8'));
  if (!data.photoPrompt) throw new Error(`${slug}: add a photoPrompt to index.json first`);

  const style = STYLES[data.photoSubject ?? 'creature'];
  if (!style) throw new Error(`${slug}: unknown photoSubject "${data.photoSubject}"`);
  const references = style.references.map((file) => readFileSync(join(styleDir, file)));

  for (const suffix of RETRY_SUFFIXES) {
    const result = await render(`${style.prompt} Subject: ${data.photoPrompt}${suffix}`, token, references);

    if (result.image) {
      // The API returns large JPEGs; Astro resizes for the site anyway.
      const photo = await sharp(result.image).jpeg({ quality: 85, mozjpeg: true }).toBuffer();
      writeFileSync(join(contentDir, slug, 'photo.jpg'), photo);

      if (data.image !== './photo.jpg') {
        const previous = join(contentDir, slug, data.image);
        if (existsSync(previous)) rmSync(previous);
        data.image = './photo.jpg';
        writeFileSync(dataFile, `${JSON.stringify(data, null, 2)}\n`);
      }
      return `${slug}: ok (${Math.round(photo.length / 1024)} kB)${suffix ? ', after a retry' : ''}`;
    }

    if (!result.flagged) throw new Error(`${slug}: ${JSON.stringify(result.errors)}`);
  }
  throw new Error(`${slug}: flagged by the safety filter on every attempt; reword its photoPrompt`);
}

const args = process.argv.slice(2);
const slugs = args.includes('--all')
  ? readdirSync(contentDir).filter((dir) => existsSync(join(contentDir, dir, 'index.json')))
  : args;

if (slugs.length === 0) {
  console.error('Usage: pnpm photo <slug> [<slug>...] | --all');
  process.exit(1);
}

const token = getToken();

let failed = 0;
for (const slug of slugs) {
  try {
    console.log(await generate(slug, token));
  } catch (error) {
    failed++;
    console.error(error.message);
  }
}
process.exit(failed ? 1 : 0);
