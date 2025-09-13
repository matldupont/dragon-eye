// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sanity({
    projectId: 'eiuhd8my',
    dataset: 'production',
    useCdn: false, // See note on using the CDN
    apiVersion: "2025-08-27", // insert the current date to access the latest version of the API
    studioBasePath: '/studio'
  }), react()],
});