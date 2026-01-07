#!/usr/bin/env node
/**
 * Script to update cryptid files with a newly generated cryptid
 * Reads from .cryptid-temp.json and updates:
 * - src/data/cryptidFiles.ts
 * - src/data/cryptidOfTheMonth.ts
 * - src/data/cryptidFilesTranslations.ts (adds placeholder translations)
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

interface CryptidData {
  slug: string;
  title: string;
  name: string;
  imageAlt: string;
  description: string;
  caseNumber: string;
  alias?: string;
  address?: string;
  knownAssociates?: string;
  codename: string;
  region: string;
  type: string;
  dangerLevel: 'Low' | 'Medium' | 'High' | 'Unknown';
  firstSighting: string;
  imageFilename?: string;
}

function readTempCryptid(): CryptidData | null {
  const tempFile = join(rootDir, '.cryptid-temp.json');
  if (!existsSync(tempFile)) {
    console.error('❌ No temporary cryptid file found. Run generate-cryptid.ts first.');
    return null;
  }

  try {
    const content = readFileSync(tempFile, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.error('❌ Error reading temp file:', error);
    return null;
  }
}

function updateCryptidFiles(cryptid: CryptidData) {
  const cryptidFilesPath = join(rootDir, 'src/data/cryptidFiles.ts');
  let content = readFileSync(cryptidFilesPath, 'utf-8');

  // Check if cryptid already exists
  if (content.includes(`slug: "${cryptid.slug}"`)) {
    console.warn(`⚠️  Cryptid with slug "${cryptid.slug}" already exists. Skipping addition.`);
    return false;
  }

  // Find the import section and add image import
  // Use generated image if available, otherwise use Alert.png as placeholder
  const imageVarName = cryptid.slug.replace(/-/g, '');
  const imageFile = cryptid.imageFilename || 'Alert.png';
  const imageImport = `import ${imageVarName} from "../assets/${imageFile}";`;
  
  // Check if imports section exists and add our import
  if (!content.includes(`import ${imageVarName} from`)) {
    // Find the last import before the interface
    const importLines = content.match(/^import .+ from .+;$/gm);
    if (importLines && importLines.length > 0) {
      const lastImport = importLines[importLines.length - 1];
      const lastImportIndex = content.lastIndexOf(lastImport);
      const insertIndex = lastImportIndex + lastImport.length;
      content = content.slice(0, insertIndex) + '\n' + imageImport + content.slice(insertIndex);
    }
  }

  // Find the cryptidFiles array and add the new cryptid
  // Look for the closing bracket of the array
  const arrayStartIndex = content.indexOf('export const cryptidFiles: CryptidFile[] = [');
  if (arrayStartIndex === -1) {
    console.error('❌ Could not find cryptidFiles array');
    return false;
  }

  // Find the last entry in the array (before the closing bracket)
  const arrayContentStart = arrayStartIndex + 'export const cryptidFiles: CryptidFile[] = ['.length;
  const arrayEndIndex = content.indexOf('];', arrayContentStart);
  if (arrayEndIndex === -1) {
    console.error('❌ Could not find end of cryptidFiles array');
    return false;
  }

  // Generate the cryptid object string
  const cryptidObject = `  {
    slug: "${cryptid.slug}",
    title: "${cryptid.title}",
    name: "${cryptid.name}",
    image: ${imageVarName},
    imageAlt: "${cryptid.imageAlt}",
    description: "${cryptid.description.replace(/"/g, '\\"')}",
    caseNumber: "${cryptid.caseNumber}",
    ${cryptid.alias ? `alias: "${cryptid.alias.replace(/"/g, '\\"')}",` : ''}
    ${cryptid.address ? `address: "${cryptid.address.replace(/"/g, '\\"')}",` : ''}
    ${cryptid.knownAssociates ? `knownAssociates: "${cryptid.knownAssociates.replace(/"/g, '\\"')}",` : ''}
    codename: "${cryptid.codename}",
    region: "${cryptid.region.replace(/"/g, '\\"')}",
    type: "${cryptid.type.replace(/"/g, '\\"')}",
    dangerLevel: "${cryptid.dangerLevel}",
    firstSighting: "${cryptid.firstSighting.replace(/"/g, '\\"')}",
  },`;

  // Insert before the closing bracket
  content = content.slice(0, arrayEndIndex) + '\n' + cryptidObject + '\n' + content.slice(arrayEndIndex);

  writeFileSync(cryptidFilesPath, content, 'utf-8');
  console.log('✅ Updated src/data/cryptidFiles.ts');
  return true;
}

function updateCryptidOfTheMonth(cryptid: CryptidData) {
  const configPath = join(rootDir, 'src/data/cryptidOfTheMonth.ts');
  const content = `/**
 * Configuration file for tracking the current Cryptid of the Month
 * This file is updated by the automation script when a new cryptid is generated
 */

export const cryptidOfTheMonthSlug = "${cryptid.slug}";
`;

  writeFileSync(configPath, content, 'utf-8');
  console.log('✅ Updated src/data/cryptidOfTheMonth.ts');
}

function updateTranslations(cryptid: CryptidData) {
  const translationsPath = join(rootDir, 'src/data/cryptidFilesTranslations.ts');
  let content = readFileSync(translationsPath, 'utf-8');

  // Check if translation already exists
  if (content.includes(`"${cryptid.slug}":`)) {
    console.warn(`⚠️  Translation for "${cryptid.slug}" already exists. Skipping.`);
    return;
  }

  // Find the last entry in the fr translations object
  // Look for the last cryptid entry before the closing brace
  const lastEntryMatch = content.match(/(    "[^"]+": \{[\s\S]*?\},\s*)(\n  \},)/);
  if (!lastEntryMatch) {
    // Fallback: find the closing brace of fr: {}
    const frCloseIndex = content.lastIndexOf('  },');
    if (frCloseIndex === -1) {
      console.error('❌ Could not find French translations section');
      return;
    }
    
    // Generate placeholder French translation
    const translationEntry = `    "${cryptid.slug}": {
      title: "Le Dossier ${cryptid.name}",
      name: "${cryptid.name}",
      imageAlt: "Photo signalétique de ${cryptid.name}",
      description: "${cryptid.description.replace(/"/g, '\\"')} [TRANSLATION NEEDED]",
      ${cryptid.alias ? `alias: "${cryptid.alias.replace(/"/g, '\\"')} [TRANSLATION NEEDED]",` : ''}
      ${cryptid.address ? `address: "${cryptid.address.replace(/"/g, '\\"')} [TRANSLATION NEEDED]",` : ''}
      ${cryptid.knownAssociates ? `knownAssociates: "${cryptid.knownAssociates.replace(/"/g, '\\"')} [TRANSLATION NEEDED]",` : ''}
      region: "${cryptid.region.replace(/"/g, '\\"')} [TRANSLATION NEEDED]",
      type: "${cryptid.type.replace(/"/g, '\\"')} [TRANSLATION NEEDED]",
      firstSighting: "${cryptid.firstSighting.replace(/"/g, '\\"')} [TRANSLATION NEEDED]",
    },`;

    // Insert before the closing brace
    content = content.slice(0, frCloseIndex) + '\n' + translationEntry + content.slice(frCloseIndex);
  } else {
    // Insert after the last entry
    const insertIndex = lastEntryMatch.index! + lastEntryMatch[1].length;
    
    // Generate placeholder French translation
    const translationEntry = `    "${cryptid.slug}": {
      title: "Le Dossier ${cryptid.name}",
      name: "${cryptid.name}",
      imageAlt: "Photo signalétique de ${cryptid.name}",
      description: "${cryptid.description.replace(/"/g, '\\"')} [TRANSLATION NEEDED]",
      ${cryptid.alias ? `alias: "${cryptid.alias.replace(/"/g, '\\"')} [TRANSLATION NEEDED]",` : ''}
      ${cryptid.address ? `address: "${cryptid.address.replace(/"/g, '\\"')} [TRANSLATION NEEDED]",` : ''}
      ${cryptid.knownAssociates ? `knownAssociates: "${cryptid.knownAssociates.replace(/"/g, '\\"')} [TRANSLATION NEEDED]",` : ''}
      region: "${cryptid.region.replace(/"/g, '\\"')} [TRANSLATION NEEDED]",
      type: "${cryptid.type.replace(/"/g, '\\"')} [TRANSLATION NEEDED]",
      firstSighting: "${cryptid.firstSighting.replace(/"/g, '\\"')} [TRANSLATION NEEDED]",
    },`;

    content = content.slice(0, insertIndex) + translationEntry + '\n' + content.slice(insertIndex);
  }

  writeFileSync(translationsPath, content, 'utf-8');
  console.log('✅ Updated src/data/cryptidFilesTranslations.ts (with placeholder translations)');
}

async function main() {
  console.log('📝 Updating cryptid files...\n');

  const cryptid = readTempCryptid();
  if (!cryptid) {
    process.exit(1);
  }

  const added = updateCryptidFiles(cryptid);
  if (!added) {
    console.log('⚠️  Cryptid not added to files. Exiting.');
    process.exit(1);
  }

  updateCryptidOfTheMonth(cryptid);
  updateTranslations(cryptid);

  console.log('\n✅ All files updated successfully!');
  console.log('\n⚠️  IMPORTANT:');
  if (cryptid.imageFilename) {
    console.log(`   ✅ Image generated and saved: src/assets/${cryptid.imageFilename}`);
  } else {
    console.log('   1. Add an image for this cryptid to src/assets/');
    console.log('   2. Update the import in src/data/cryptidFiles.ts to use the correct image');
  }
  console.log('   3. Review and update French translations in src/data/cryptidFilesTranslations.ts');
  console.log(`   4. The cryptid "${cryptid.name}" is now set as Cryptid of the Month`);
}

main().catch(console.error);

