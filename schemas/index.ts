import { cryptidFile } from './cryptidFile'

import type { SchemaTypeDefinition } from 'sanity';

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [cryptidFile],
  };