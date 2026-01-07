#!/usr/bin/env node
/**
 * Script to generate a new cryptid file
 * Can be run manually or via GitHub Actions
 * 
 * Usage:
 *   pnpm generate-cryptid [--name "Cryptid Name"] [--use-ai]
 * 
 * If --use-ai is provided, will use Perplexity Pro API to generate cryptid details and image
 * Otherwise, uses a template with random values
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// Set up paths first
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Function to get existing cryptid names from the data file
function getExistingCryptidNames(): string[] {
  try {
    const cryptidFilesPath = join(rootDir, 'src/data/cryptidFiles.ts');
    if (!existsSync(cryptidFilesPath)) {
      return [];
    }
    
    const content = readFileSync(cryptidFilesPath, 'utf-8');
    const names: string[] = [];
    
    // Extract names from the cryptidFiles array
    // Look for pattern: name: "CryptidName",
    const nameMatches = content.matchAll(/name:\s*"([^"]+)"/g);
    for (const match of nameMatches) {
      if (match[1]) {
        names.push(match[1]);
      }
    }
    
    return names;
  } catch (error) {
    console.warn('⚠️  Could not read existing cryptid names:', error);
    return [];
  }
}

// Load environment variables from .env file
const envPath = join(rootDir, '.env');

if (existsSync(envPath)) {
  try {
    const dotenv = require('dotenv');
    const result = dotenv.config({ path: envPath });
    if (result.error) {
      console.warn('⚠️  Error loading .env:', result.error);
    } else {
      const loadedKeys = Object.keys(result.parsed || {});
      console.log(`✅ Loaded .env file with ${loadedKeys.length} variables: ${loadedKeys.join(', ')}`);
    }
  } catch (error) {
    // dotenv not installed - try manual parsing as fallback
    try {
      const envContent = readFileSync(envPath, 'utf-8');
      let loadedCount = 0;
      for (const line of envContent.split('\n')) {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#')) {
          const equalIndex = trimmed.indexOf('=');
          if (equalIndex > 0) {
            const key = trimmed.substring(0, equalIndex).trim();
            let value = trimmed.substring(equalIndex + 1).trim();
            // Remove quotes if present
            if ((value.startsWith('"') && value.endsWith('"')) || 
                (value.startsWith("'") && value.endsWith("'"))) {
              value = value.slice(1, -1);
            }
            if (key && value) {
              process.env[key] = value;
              loadedCount++;
            }
          }
        }
      }
      if (loadedCount > 0) {
        console.log(`✅ Loaded ${loadedCount} environment variables from .env file (manual parsing)`);
      }
    } catch (parseError) {
      console.warn('⚠️  Could not load .env file:', parseError);
    }
  }
} else {
  console.log(`ℹ️  No .env file found at ${envPath}`);
}

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
  imageFilename?: string; // Generated image filename (if AI generated)
}

// Popular cryptids that haven't been added yet
const CRYPTID_POOL = [
  {
    name: "Jersey Devil",
    region: "New Jersey, USA",
    type: "Winged Creature",
    dangerLevel: "Medium" as const,
    firstSighting: "1735",
    description: "A legendary creature said to inhabit the Pine Barrens of New Jersey. Described as having the head of a horse, wings of a bat, hooves, and a forked tail. Known for its blood-curdling scream and association with the Leeds family.",
    alias: "Leeds Devil, Pine Barrens Devil",
    knownAssociates: "The Leeds Family, Pine Barrens Locals"
  },
  {
    name: "Wendigo",
    region: "Great Lakes, Canada",
    type: "Cannibalistic Spirit",
    dangerLevel: "High" as const,
    firstSighting: "Pre-colonial times",
    description: "A malevolent cannibalistic spirit from Algonquian folklore. Once human, transformed by consuming human flesh. Described as emaciated, with glowing eyes, antlers, and an insatiable hunger for human flesh. Associated with winter, starvation, and greed.",
    alias: "Windigo, Witiko",
    knownAssociates: "Algonquian Tribes, Northern Forests"
  },
  {
    name: "Skinwalker",
    region: "Southwestern United States",
    type: "Shapeshifter",
    dangerLevel: "High" as const,
    firstSighting: "Ancient times",
    description: "A malevolent witch-like being from Navajo folklore capable of transforming into animals. Known for wearing the skin of animals to gain their abilities. Extremely dangerous and associated with dark magic and curses.",
    alias: "Yee Naaldlooshii",
    knownAssociates: "Navajo Medicine Men, Tribal Elders",
    address: "Navajo Nation, Southwestern USA"
  },
  {
    name: "Kraken",
    region: "North Atlantic Ocean",
    type: "Aquatic",
    dangerLevel: "High" as const,
    firstSighting: "1180",
    description: "A legendary sea monster of enormous size, said to dwell off the coasts of Norway and Greenland. Described as a giant octopus or squid capable of dragging entire ships beneath the waves. The terror of sailors for centuries.",
    alias: "Sea Monster, Giant Squid",
    knownAssociates: "Sailors, Whalers, Norse Mythology"
  },
  {
    name: "Thunderbird",
    region: "North America",
    type: "Winged Creature",
    dangerLevel: "Medium" as const,
    firstSighting: "Pre-colonial times",
    description: "A legendary creature in Native American mythology, said to create thunder by flapping its massive wings. Described as an enormous bird with a wingspan that can block out the sun. Associated with storms and great power.",
    alias: "Thunder Being, Storm Bird",
    knownAssociates: "Native American Tribes, Storm Spirits"
  },
  {
    name: "Dover Demon",
    region: "Dover, Massachusetts, USA",
    type: "Humanoid",
    dangerLevel: "Low" as const,
    firstSighting: "April 21, 1977",
    description: "A mysterious humanoid creature sighted in Dover, Massachusetts over three nights in 1977. Described as having a large head, glowing orange eyes, long thin limbs, and peach-colored skin. Only a few documented sightings exist.",
    alias: "Dover Monster",
    knownAssociates: "Local Witnesses, Cryptozoologists"
  },
  {
    name: "Flatwoods Monster",
    region: "West Virginia, USA",
    type: "Alien Humanoid",
    dangerLevel: "Medium" as const,
    firstSighting: "September 12, 1952",
    description: "An alleged extraterrestrial or cryptid sighted in Flatwoods, West Virginia. Described as a tall humanoid figure with a spade-shaped head, glowing eyes, and a dark body. Associated with a UFO sighting and strange odors.",
    alias: "Braxton County Monster, Phantom of Flatwoods",
    knownAssociates: "UFO Witnesses, Local Residents"
  },
  {
    name: "Hopkinsville Goblins",
    region: "Kentucky, USA",
    type: "Alien Humanoid",
    dangerLevel: "Medium" as const,
    firstSighting: "August 21, 1955",
    description: "Small, silvery, humanoid creatures with large ears, glowing eyes, and clawed hands, reported in Hopkinsville, Kentucky. Multiple witnesses claimed these creatures surrounded their farmhouse and attempted to enter.",
    alias: "Kelly-Hopkinsville Encounter, Little Green Men",
    knownAssociates: "Sutton Family, Local Police"
  }
];

function generateCaseNumber(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') + '-file';
}

function generateCodename(name: string, caseNumber: string): string {
  const namePart = name.toUpperCase().replace(/[^A-Z]/g, '').substring(0, 8);
  return `${namePart}-${caseNumber}`;
}

async function generateImageWithAI(cryptidName: string, description: string): Promise<string | null> {
  // Try Stability AI first (free tier available)
  const stabilityKey = process.env.STABILITY_API_KEY;
  if (stabilityKey) {
    try {
      console.log('🎨 Generating image with Stability AI...');
      const prompt = `A detailed, realistic mugshot-style photograph of ${cryptidName}, ${description}. Dark, mysterious atmosphere, professional police file photo style, high quality, detailed`;
      
      // Use FormData (available in Node.js 18+)
      const formData = new FormData();
      formData.append('prompt', prompt);
      formData.append('output_format', 'png');
      formData.append('aspect_ratio', '1:1');
      
      const response = await fetch('https://api.stability.ai/v2beta/stable-image/generate/core', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${stabilityKey}`,
          'Accept': 'image/*',
          // Don't set Content-Type - fetch will set it with boundary for multipart/form-data
        },
        body: formData,
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.warn(`⚠️  Stability AI API error: ${response.status} - ${errorText}`);
      }

      if (response.ok) {
        const imageBuffer = await response.arrayBuffer();
        const slug = slugify(cryptidName);
        const assetsDir = join(rootDir, 'src/assets');
        
        // Ensure assets directory exists
        if (!existsSync(assetsDir)) {
          mkdirSync(assetsDir, { recursive: true });
          console.log(`📁 Created assets directory: ${assetsDir}`);
        }
        
        const imagePath = join(assetsDir, `${slug}.png`);
        writeFileSync(imagePath, Buffer.from(imageBuffer));
        console.log(`✅ Image saved to ${imagePath}`);
        console.log(`   Filename: ${slug}.png`);
        return `${slug}.png`;
      } else {
        const errorText = await response.text();
        console.warn(`⚠️  Stability AI returned error: ${response.status} - ${errorText}`);
      }
    } catch (error) {
      console.warn('⚠️  Stability AI image generation failed:', error);
    }
  }

  // Fallback: Try DALL-E if available
  const openaiKey = process.env.OPENAI_API_KEY;
  if (openaiKey) {
    try {
      console.log('🎨 Generating image with DALL-E...');
      const prompt = `A detailed, realistic mugshot-style photograph of ${cryptidName}, ${description}. Dark, mysterious atmosphere, professional police file photo style`;
      
      const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openaiKey}`,
        },
        body: JSON.stringify({
          model: 'dall-e-3',
          prompt,
          size: '1024x1024',
          quality: 'standard',
          n: 1,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const imageUrl = data.data[0]?.url;
        if (imageUrl) {
          const imageResponse = await fetch(imageUrl);
          const imageBuffer = await imageResponse.arrayBuffer();
          const slug = slugify(cryptidName);
          const assetsDir = join(rootDir, 'src/assets');
          
          // Ensure assets directory exists
          if (!existsSync(assetsDir)) {
            mkdirSync(assetsDir, { recursive: true });
            console.log(`📁 Created assets directory: ${assetsDir}`);
          }
          
          const imagePath = join(assetsDir, `${slug}.png`);
          writeFileSync(imagePath, Buffer.from(imageBuffer));
          console.log(`✅ Image saved to ${imagePath}`);
          console.log(`   Filename: ${slug}.png`);
          return `${slug}.png`;
        }
      }
    } catch (error) {
      console.warn('⚠️  DALL-E image generation failed:', error);
    }
  }

  console.warn('⚠️  No image generation API keys found. Image will need to be added manually.');
  return null;
}

async function generateCryptidWithAI(name?: string): Promise<CryptidData | null> {
  const apiKey = process.env.PERPLEXITY_API_KEY;
  if (!apiKey) {
    console.warn('⚠️  PERPLEXITY_API_KEY not set. Falling back to template generation.');
    return null;
  }

  try {
    console.log('🤖 Generating cryptid data with Perplexity...');
    
    // Get existing cryptid names to exclude from generation
    const existingNames = getExistingCryptidNames();
    const excludeList = existingNames.length > 0 
      ? ` (not ${existingNames.join(', ')})`
      : '';
    
    const userPrompt = name 
      ? `Generate a cryptid file for "${name}". Return ONLY a JSON object with these exact fields:`
      : `Generate a cryptid file for a random, interesting cryptid${excludeList}. Return ONLY a JSON object with these exact fields:`;
    
    const response = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'sonar', // Perplexity Pro model - use 'sonar' if you have free tier
        messages: [
          {
            role: 'system',
            content: `You are a cryptozoologist creating a classified file for a cryptid. Generate realistic, detailed information in the style of existing cryptid files. Be creative but maintain consistency with the format. The audience is 10+ years old.`
          },
          {
            role: 'user',
            content: userPrompt + `
{
  "name": "string",
  "description": "string (2-3 sentences)",
  "region": "string",
  "type": "string",
  "dangerLevel": "Low" | "Medium" | "High" | "Unknown",
  "firstSighting": "string",
  "alias": "string (optional, comma-separated)",
  "address": "string (optional)",
  "knownAssociates": "string (optional)"
}`
          }
        ],
        temperature: 0.8,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Perplexity API error: ${response.statusText} - ${errorText}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;
    if (!content) {
      throw new Error('No content in Perplexity response');
    }

    // Extract JSON from response (handle markdown code blocks)
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('No JSON found in Perplexity response');
    }

    const aiData = JSON.parse(jsonMatch[0]);
    const caseNumber = generateCaseNumber();
    const slug = slugify(aiData.name);

    // Generate image automatically
    console.log('🎨 Generating image for cryptid...');
    const imageFilename = await generateImageWithAI(aiData.name, aiData.description);
    
    if (imageFilename) {
      console.log(`✅ Image generated successfully: ${imageFilename}`);
      // Ensure the image filename matches the cryptid slug
      const expectedFilename = `${slug}.png`;
      if (imageFilename !== expectedFilename) {
        console.warn(`⚠️  Image filename mismatch: got ${imageFilename}, expected ${expectedFilename}`);
        // Use the slug-based filename to ensure consistency
        const correctedFilename = `${slug}.png`;
        console.log(`   Using corrected filename: ${correctedFilename}`);
      }
    } else {
      console.warn('⚠️  No image was generated. You may need to add an image manually.');
    }

    return {
      slug,
      title: `The ${aiData.name} File`,
      name: aiData.name,
      imageAlt: `${aiData.name} mugshot`,
      description: aiData.description,
      caseNumber,
      alias: aiData.alias,
      address: aiData.address || aiData.region,
      knownAssociates: aiData.knownAssociates,
      codename: generateCodename(aiData.name, caseNumber),
      region: aiData.region,
      type: aiData.type,
      dangerLevel: aiData.dangerLevel,
      firstSighting: aiData.firstSighting,
      imageFilename: imageFilename ? `${slug}.png` : undefined,
    };
  } catch (error) {
    console.error('❌ Error generating with AI:', error);
    return null;
  }
}

function generateCryptidFromTemplate(name?: string): CryptidData | null {
  // Check if pool is empty
  if (CRYPTID_POOL.length === 0) {
    console.error('❌ CRYPTID_POOL is empty!');
    console.error('   Please either:');
    console.error('   1. Add more cryptids to CRYPTID_POOL in generate-cryptid.ts');
    console.error('   2. Use AI generation: pnpm create-cryptid --name "Cryptid Name" --use-ai');
    return null;
  }

  // Pick a random cryptid from the pool if name not provided
  const template = name 
    ? CRYPTID_POOL.find(c => c.name.toLowerCase() === name.toLowerCase()) || CRYPTID_POOL[0]
    : CRYPTID_POOL[Math.floor(Math.random() * CRYPTID_POOL.length)];

  if (!template) {
    console.error('❌ Could not find template in CRYPTID_POOL');
    return null;
  }

  const caseNumber = generateCaseNumber();
  const slug = slugify(template.name);

  return {
    slug,
    title: `The ${template.name} File`,
    name: template.name,
    imageAlt: `${template.name} mugshot`,
    description: template.description,
    caseNumber,
    alias: template.alias,
    address: template.address || template.region,
    knownAssociates: template.knownAssociates,
    codename: generateCodename(template.name, caseNumber),
    region: template.region,
    type: template.type,
    dangerLevel: template.dangerLevel,
    firstSighting: template.firstSighting,
  };
}

async function main() {
  const args = process.argv.slice(2);
  const useAI = args.includes('--use-ai');
  const nameIndex = args.indexOf('--name');
  const name = nameIndex >= 0 && args[nameIndex + 1] ? args[nameIndex + 1] : undefined;

  console.log('🔮 Generating new cryptid file...\n');

  let cryptid: CryptidData;

  if (useAI) {
    if (name) {
      console.log(`🤖 Using Perplexity Pro to generate cryptid: ${name}`);
    } else {
      console.log('🤖 Using Perplexity Pro to generate a random cryptid...');
    }
    const aiCryptid = await generateCryptidWithAI(name);
    if (aiCryptid) {
      cryptid = aiCryptid;
    } else {
      console.log('📝 Falling back to template generation...');
      const templateCryptid = generateCryptidFromTemplate(name);
      if (!templateCryptid) {
        console.error('\n❌ Failed to generate cryptid. Pool is empty and AI generation failed.');
        process.exit(1);
      }
      cryptid = templateCryptid;
    }
  } else {
    console.log('📝 Using template generation...');
    const templateCryptid = generateCryptidFromTemplate(name);
    if (!templateCryptid) {
      console.error('\n❌ Failed to generate cryptid from template.');
      console.error('   Consider using AI generation: pnpm create-cryptid --name "Cryptid Name" --use-ai');
      process.exit(1);
    }
    cryptid = templateCryptid;
  }

  console.log('\n✅ Generated cryptid:');
  console.log(JSON.stringify(cryptid, null, 2));

  // Write to a temporary file that the update script will use
  const tempFile = join(rootDir, '.cryptid-temp.json');
  writeFileSync(tempFile, JSON.stringify(cryptid, null, 2), 'utf-8');
  
  console.log(`\n💾 Cryptid data saved to ${tempFile}`);
  console.log('📋 Next step: Run the update script to add it to the codebase');
}

main().catch(console.error);

