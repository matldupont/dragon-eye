import { rename, rm } from 'node:fs/promises';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Astro only writes the root 404 as 404.html. Move the French one next to it so
// Cloudflare's "404-page" asset handling serves it for missing /fr/ paths.
const frenchNotFoundPage = {
  name: 'dragon-eye:french-404',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      await rename(new URL('fr/404/index.html', dir), new URL('fr/404.html', dir));
      await rm(new URL('fr/404/', dir), { recursive: true });
    },
  },
};

// https://astro.build/config
export default defineConfig({
  site: 'https://dragon-eye.app',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [frenchNotFoundPage],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
