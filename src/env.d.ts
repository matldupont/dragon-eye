/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />

declare module 'sanity:client' {
  import type { SanityClient } from '@sanity/client';
  const client: SanityClient;
  export default client;
}

interface ImportMetaEnv {
  readonly PUBLIC_SANITY_PROJECT_ID: string;
  readonly PUBLIC_SANITY_DATASET: string;
  // Add other environment variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}