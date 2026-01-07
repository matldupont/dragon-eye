# GitHub Actions Setup Guide

This guide explains how to set up and manually trigger the cryptid generation workflow.

## Setting Up GitHub Secrets

You need to add your API keys as secrets in your GitHub repository:

### Step 1: Navigate to Repository Settings

1. Go to your GitHub repository
2. Click on **Settings** (top menu)
3. In the left sidebar, click **Secrets and variables** → **Actions**

### Step 2: Add Secrets

Click **New repository secret** and add each of these:

#### Required for AI Generation:
- **Name**: `PERPLEXITY_API_KEY`
- **Value**: Your Perplexity Pro API key (get it from https://www.perplexity.ai/settings/api)

#### Optional for Image Generation:
- **Name**: `STABILITY_API_KEY`
- **Value**: Your Stability AI API key (get it from https://platform.stability.ai/)
  - *Recommended - has a free tier*

- **Name**: `OPENAI_API_KEY`  
- **Value**: Your OpenAI API key (get it from https://platform.openai.com/)
  - *Alternative to Stability AI*

### Step 3: Verify Secrets

After adding secrets, you should see them listed (values are hidden for security). You can update or delete them anytime.

## Manually Triggering the Workflow

### Method 1: Via GitHub Web Interface

1. Go to your repository on GitHub
2. Click on the **Actions** tab (top menu)
3. In the left sidebar, find **"Generate New Cryptid"** workflow
4. Click on it
5. Click the **"Run workflow"** button (top right)
6. Fill in the options:
   - **Cryptid name** (optional): Enter a specific cryptid name, or leave blank for random
   - **Use AI**: Check this box to enable AI generation
7. Click **"Run workflow"** button

The workflow will start running and you can watch its progress in real-time.

### Method 2: Via GitHub CLI

If you have GitHub CLI installed:

```bash
gh workflow run "Generate New Cryptid" \
  --field cryptid_name="Wendigo" \
  --field use_ai=true
```

Or for a random cryptid:

```bash
gh workflow run "Generate New Cryptid" \
  --field use_ai=true
```

## What Happens When You Trigger

1. **Workflow starts** - You'll see it appear in the Actions tab
2. **Dependencies installed** - pnpm installs all packages
3. **Cryptid generated** - Script runs and creates new cryptid
4. **PR created** - A pull request is automatically created with the changes
5. **Review & merge** - You review the PR and merge when ready

## Workflow Options

When manually triggering, you can specify:

- **Cryptid name** (optional): 
  - Leave blank → AI generates a random cryptid
  - Enter name → AI generates that specific cryptid
  
- **Use AI** (checkbox):
  - ✅ Checked → Uses Perplexity Pro for generation + image generation
  - ❌ Unchecked → Uses template pool (if available)

## Scheduled Runs

The workflow also runs automatically:
- **Schedule**: 1st of every month at 00:00 UTC
- Uses template generation (no AI) unless you modify the workflow

## Troubleshooting

### Workflow Fails with "Secret not found"
- Make sure you've added the secrets in Settings → Secrets and variables → Actions
- Check that secret names match exactly (case-sensitive)

### Workflow Fails with "API error"
- Verify your API keys are correct
- Check your API key permissions/limits
- Review the workflow logs for specific error messages

### PR Not Created
- Check that the workflow has `contents: write` and `pull-requests: write` permissions
- Verify the workflow completed successfully (green checkmark)

### Image Not Generated
- Make sure `STABILITY_API_KEY` or `OPENAI_API_KEY` is set
- Check the workflow logs for image generation errors

## Viewing Workflow Logs

1. Go to **Actions** tab
2. Click on the workflow run you want to inspect
3. Click on the **"generate-cryptid"** job
4. Expand any step to see detailed logs

## Testing Locally First

Before triggering the GitHub Action, you can test locally:

```bash
# Set your API keys in .env file
export PERPLEXITY_API_KEY="your-key"
export STABILITY_API_KEY="your-key"

# Test the generation
pnpm create-cryptid --use-ai
```

This helps catch issues before running in GitHub Actions.

