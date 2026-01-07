# Cryptid Generation Scripts

This directory contains scripts for automatically generating new cryptid files and updating the codebase.

## Overview

The system consists of three main scripts:

1. **`generate-cryptid.ts`** - Generates cryptid data (either from templates or using AI)
2. **`update-cryptid-files.ts`** - Updates the codebase with the generated cryptid
3. **`create-new-cryptid.ts`** - Main script that runs both generation and update

## Usage

### Manual Usage

```bash
# Generate a new cryptid (uses template pool)
pnpm create-cryptid

# Generate a specific cryptid by name
pnpm create-cryptid --name "Jersey Devil"

# Use AI to generate cryptid details and image (requires PERPLEXITY_API_KEY)
pnpm create-cryptid --name "Custom Cryptid" --use-ai
```

### Individual Scripts

```bash
# Step 1: Generate cryptid data
pnpm generate-cryptid [--name "Cryptid Name"] [--use-ai]

# Step 2: Update files (reads from .cryptid-temp.json)
pnpm update-cryptid
```

## Automated Workflow

The system includes a GitHub Actions workflow (`.github/workflows/generate-cryptid.yml`) that:

- Runs automatically on the 1st of every month
- Can be manually triggered via GitHub Actions UI
- Generates a new cryptid
- Creates a Pull Request for review

### Setting up GitHub Actions

1. **Add Perplexity Pro API Key** (required for AI text generation):
   - Get your API key from https://www.perplexity.ai/settings/api
   - Go to your repository Settings → Secrets and variables → Actions
   - Add a secret named `PERPLEXITY_API_KEY` with your API key

2. **Add Image Generation API Key** (optional, for auto-generating images):
   - **Stability AI** (recommended): Add secret `STABILITY_API_KEY`
   - **OpenAI DALL-E**: Add secret `OPENAI_API_KEY`

2. **Manual Trigger:**
   - Go to Actions tab in GitHub
   - Select "Generate New Cryptid" workflow
   - Click "Run workflow"
   - Optionally specify a cryptid name and enable AI generation

## What Gets Updated

When a new cryptid is generated, the following files are updated:

1. **`src/data/cryptidFiles.ts`**
   - Adds the new cryptid to the array
   - Adds image import (uses Alert.png as placeholder)

2. **`src/data/cryptidOfTheMonth.ts`**
   - Updates to set the new cryptid as "Cryptid of the Month"

3. **`src/data/cryptidFilesTranslations.ts`**
   - Adds placeholder French translations (marked with `[TRANSLATION NEEDED]`)

## After Generation

After a cryptid is generated, you need to:

1. **Add an image:**
   - Place the cryptid image in `src/assets/`
   - Update the import in `src/data/cryptidFiles.ts` to use the correct image file

2. **Update translations:**
   - Review and update French translations in `src/data/cryptidFilesTranslations.ts`
   - Remove `[TRANSLATION NEEDED]` markers

3. **Review the data:**
   - Check that all cryptid information is accurate
   - Verify the slug, codename, and other fields

## Cryptid Pool

The template-based generation uses a pool of popular cryptids that haven't been added yet:

- Jersey Devil
- Wendigo
- Skinwalker
- Kraken
- Thunderbird
- Dover Demon
- Flatwoods Monster
- Hopkinsville Goblins

You can add more to the `CRYPTID_POOL` array in `generate-cryptid.ts`.

### What Happens When the Pool is Empty?

If `CRYPTID_POOL` becomes empty (all cryptids have been used), the script will:

1. **Show an error message** with instructions
2. **Suggest using AI generation** instead: `pnpm create-cryptid --name "Cryptid Name" --use-ai`
3. **Exit with an error code** to prevent invalid generation

**Note**: The script doesn't automatically track which cryptids have already been added to your codebase. If you want to prevent duplicates, either:
- Remove used cryptids from the pool manually
- Use AI generation (which can create any cryptid name you specify)
- Add more cryptids to the pool as needed

## AI Generation

If you have a Perplexity Pro API key set, you can use AI to generate cryptid descriptions and images:

- **Text Generation**: Uses Perplexity Pro (llama-3.1-sonar-large-128k-online) to generate:
  - Realistic cryptid details
  - Appropriate descriptions
  - Content matching the style of existing cryptid files

- **Image Generation**: Automatically generates images using:
  - Stability AI (if `STABILITY_API_KEY` is set) - recommended, free tier available
  - OpenAI DALL-E (if `OPENAI_API_KEY` is set) - fallback option

Set the `PERPLEXITY_API_KEY` environment variable or GitHub secret to enable text generation. Add `STABILITY_API_KEY` or `OPENAI_API_KEY` for automatic image generation.

