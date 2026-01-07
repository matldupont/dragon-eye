#!/usr/bin/env node
/**
 * Main script that generates a new cryptid and updates all files
 * This is the script that should be run (either manually or via GitHub Actions)
 * 
 * Usage:
 *   pnpm create-new-cryptid [--name "Cryptid Name"] [--use-ai]
 */

import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load environment variables from .env file (if dotenv is installed)
try {
  // @ts-ignore - dotenv may not be installed
  const dotenv = require('dotenv');
  dotenv.config();
} catch (error) {
  // dotenv not installed, environment variables must be set manually
  // This is fine - the script will still work with env vars from the system
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

async function main() {
  const args = process.argv.slice(2);
  const useAI = args.includes('--use-ai');
  const nameIndex = args.indexOf('--name');
  const name = nameIndex >= 0 && args[nameIndex + 1] ? args[nameIndex + 1] : undefined;

  console.log('🔮 Creating new cryptid...\n');

  try {
    // Step 1: Generate cryptid data
    console.log('📝 Step 1: Generating cryptid data...');
    const generateArgs = useAI ? ['--use-ai'] : [];
    if (name) {
      generateArgs.push('--name', name);
    }
    
    // Use tsx to run the TypeScript file directly
    // Properly quote arguments to handle spaces in names
    const quotedArgs = generateArgs.map(arg => {
      // If argument contains spaces, wrap in quotes
      if (arg.includes(' ')) {
        return `"${arg}"`;
      }
      return arg;
    });
    
    execSync(
      `pnpm tsx scripts/generate-cryptid.ts ${quotedArgs.join(' ')}`,
      { cwd: rootDir, stdio: 'inherit', shell: true }
    );

    // Step 2: Update files
    console.log('\n📝 Step 2: Updating cryptid files...');
    execSync(
      'pnpm tsx scripts/update-cryptid-files.ts',
      { cwd: rootDir, stdio: 'inherit' }
    );

    console.log('\n✅ New cryptid created successfully!');
    console.log('\n⚠️  REMINDER:');
    console.log('   1. Add an image for this cryptid to src/assets/');
    console.log('   2. Update the import in src/data/cryptidFiles.ts to use the correct image');
    console.log('   3. Review and update French translations in src/data/cryptidFilesTranslations.ts');
  } catch (error) {
    console.error('❌ Error creating cryptid:', error);
    process.exit(1);
  }
}

main().catch(console.error);

