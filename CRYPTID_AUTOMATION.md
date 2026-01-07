# Cryptid Auto-Generation System

This document explains the automated cryptid generation system that has been set up for your Dragon Eye project.

## Overview

The system automatically generates new cryptid files, sets them as "Cryptid of the Month", adds them to the files list, and creates a Pull Request for your review.

## What Was Set Up

### 1. Configuration File
- **`src/data/cryptidOfTheMonth.ts`** - Tracks which cryptid is currently featured
- Updated automatically when a new cryptid is generated

### 2. Generation Scripts
Located in `scripts/` directory:

- **`generate-cryptid.ts`** - Generates cryptid data (template-based or AI-powered)
- **`update-cryptid-files.ts`** - Updates codebase files with new cryptid
- **`create-new-cryptid.ts`** - Main script that runs both steps

### 3. GitHub Actions Workflow
- **`.github/workflows/generate-cryptid.yml`** - Automated workflow that:
  - Runs on the 1st of every month (scheduled)
  - Can be manually triggered
  - Generates a new cryptid
  - Creates a Pull Request for review

### 4. Updated Pages
- **`src/pages/index.astro`** - Now uses config file for featured cryptid
- **`src/pages/fr/index.astro`** - Now uses config file for featured cryptid

## How It Works

### Manual Usage

```bash
# Generate a random cryptid from the pool
pnpm create-cryptid

# Generate a specific cryptid
pnpm create-cryptid --name "Jersey Devil"

# Use AI to generate (requires PERPLEXITY_API_KEY, optionally STABILITY_API_KEY or OPENAI_API_KEY for images)
pnpm create-cryptid --name "Custom Cryptid" --use-ai
```

### Automated Workflow

1. **Scheduled**: Runs automatically on the 1st of every month
2. **Manual**: Go to Actions → "Generate New Cryptid" → "Run workflow"

The workflow will:
1. Generate a new cryptid
2. Update all necessary files
3. Create a Pull Request with the changes
4. You review and merge when ready

## Setup Instructions

### 1. Install Dependencies

```bash
pnpm install
```

This will install `tsx` which is needed to run the TypeScript scripts.

### 2. (Optional) Set Up Perplexity Pro API Key

If you want to use AI generation:

1. **Perplexity Pro API Key** (required for text generation):
   - Get your API key from https://www.perplexity.ai/settings/api
   - For local use: Set `PERPLEXITY_API_KEY` environment variable
   - For GitHub Actions: Add it as a secret named `PERPLEXITY_API_KEY`

2. **Image Generation API Key** (optional, for auto-generating images):
   - **Option A - Stability AI** (recommended, free tier available):
     - Get API key from https://platform.stability.ai/
     - Set `STABILITY_API_KEY` environment variable or GitHub secret
   - **Option B - OpenAI DALL-E**:
     - Get API key from https://platform.openai.com/
     - Set `OPENAI_API_KEY` environment variable or GitHub secret

### 3. Test Locally

```bash
# Test the generation
pnpm create-cryptid --name "Jersey Devil"
```

This will:
- Generate cryptid data
- Update `src/data/cryptidFiles.ts`
- Update `src/data/cryptidOfTheMonth.ts`
- Update `src/data/cryptidFilesTranslations.ts`

### 4. After Generation

After a cryptid is generated (manually or via PR), you need to:

1. **Add an image:**
   - Place image in `src/assets/`
   - Update the import in `src/data/cryptidFiles.ts` (currently uses `Alert.png` as placeholder)

2. **Update translations:**
   - Review `src/data/cryptidFilesTranslations.ts`
   - Update French translations (remove `[TRANSLATION NEEDED]` markers)

3. **Review data:**
   - Verify all information is accurate
   - Check slug, codename, and other fields

## Cryptid Pool

The template system includes these cryptids (that haven't been added yet):

- Jersey Devil
- Wendigo
- Skinwalker
- Kraken
- Thunderbird
- Dover Demon
- Flatwoods Monster
- Hopkinsville Goblins

You can add more to the `CRYPTID_POOL` array in `scripts/generate-cryptid.ts`.

## Files Modified by Automation

When a new cryptid is generated, these files are updated:

1. **`src/data/cryptidFiles.ts`**
   - Adds new cryptid to the array
   - Adds image import (placeholder: `Alert.png`)

2. **`src/data/cryptidOfTheMonth.ts`**
   - Updates to new cryptid's slug

3. **`src/data/cryptidFilesTranslations.ts`**
   - Adds placeholder French translations

## GitHub Actions Workflow

The workflow (`generate-cryptid.yml`) is configured to:

- **Schedule**: Run on the 1st of every month at 00:00 UTC
- **Manual trigger**: Available in GitHub Actions UI
- **Inputs** (manual only):
  - `cryptid_name`: Optional name for the cryptid
  - `use_ai`: Whether to use AI generation (requires API key)

The PR will be created with:
- Title: "🔮 New Cryptid of the Month - YYYY-MM-DD"
- Labels: `automated`, `cryptid`
- Detailed description of what changed

## Troubleshooting

### Script fails to run
- Make sure `tsx` is installed: `pnpm install`
- Check that you're using Node.js 20+

### GitHub Actions fails
- Check that `tsx` is in `devDependencies` (it should be)
- Verify workflow file syntax
- Check Actions logs for specific errors

### Translations not updating correctly
- The script uses string matching - if the file structure changes significantly, it may need updates
- Check `scripts/update-cryptid-files.ts` for the translation insertion logic

## Customization

### Change Schedule
Edit `.github/workflows/generate-cryptid.yml`:
```yaml
schedule:
  - cron: '0 0 1 * *'  # Change this cron expression
```

### Add More Cryptids to Pool
Edit `scripts/generate-cryptid.ts` and add to the `CRYPTID_POOL` array.

### Improve AI Prompts
Edit the system/user prompts in `scripts/generate-cryptid.ts` in the `generateCryptidWithAI` function.

## Next Steps

1. Test the system locally with `pnpm create-cryptid`
2. Review the generated files
3. Set up OpenAI API key if you want AI generation
4. The next scheduled run will be on the 1st of the month
5. You can manually trigger it anytime via GitHub Actions

---

For more details, see `scripts/README.md`.

