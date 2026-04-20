# Dragon Eye Design System

## Product Context

**Dragon Eye** is a kid-friendly cryptid investigation agency (ages 8–13) that maintains classified case files on legendary creatures. The product is an Astro-based website featuring:

- **Homepage** — hero with "Cryptid of the Month", classified marquee, file grid
- **Files archive** — searchable/filterable database of cryptid case files
- **File detail** — full dossier view with photographic evidence, metadata, investigator notes
- **Merch / Evidence Locker** — gear and collectibles (coming soon)
- **Bilingual** — English and French

**Source repo:** `github.com/matldupont/dragon-eye` (Astro + React + Tailwind v4 + styled-components)

---

## Three Visual Themes

The design system supports **three interchangeable themes**, toggled via `data-theme` on `<body>`:

| Theme | Codename | Vibe |
|-------|----------|------|
| **Top Secret** | `secret` | Manila dossier, rubber stamps, typewriter, paper texture |
| **X-Files** | `xfiles` | CRT green-on-black, scan lines, surveillance HUD, terminal |
| **Field Journal** | `journal` | Handwritten notebook, polaroids, washi tape, scrapbook |

All three share structural components but vary in color tokens, typography, and decorative treatments.

---

## Content Fundamentals

**Tone:** Playful but with ominous edges. Kid-friendly but takes the "investigation" premise seriously. Copy is written as if by real investigators filing real reports.

**Voice by theme:**
- **Secret:** Bureaucratic, terse, all-caps labels. "CLEARANCE // LVL 5", "DO NOT DISTRIBUTE"
- **X-Files:** Terminal/hacker syntax. `> LOAD MOTHMAN-112233`, `GREP ARCHIVES`, command-line metaphors
- **Journal:** First-person, conversational, handwritten feel. "I've been chasing this one across the river country..."

**Casing:** Labels and UI chrome are UPPERCASE with wide letter-spacing. Body copy is sentence case. The journal theme uses more casual casing.

**Emoji:** Not used. Decorative elements come from stamps, tape, HUD overlays, and unicode symbols (◆ ◇ ◈ ★).

---

## Visual Foundations

### Colors
Each theme defines a full token palette via CSS custom properties. See `colors_and_type.css` for the complete set. Key relationships:

- `--de-paper` / `--de-ink` — primary background/foreground pair
- `--de-accent` / `--de-accent-2` — brand highlight colors (red/green for secret, red/amber for xfiles, terra-cotta/field-green for journal)
- `--de-danger` — used in danger level badges
- `--de-manila` — warm accent for folders, highlights, shadows

### Typography
Each theme uses a distinct font stack mapped to four roles:
- `--de-display` — headlines and large type
- `--de-body` — paragraph text
- `--de-mono` — labels, metadata, case numbers
- `--de-label` — UI chrome (nav, buttons, eyebrows)

| Role | Secret | X-Files | Journal |
|------|--------|---------|---------|
| Display | Special Elite | Major Mono Display | Gloock |
| Body | Special Elite | VT323 | Caveat |
| Mono | Courier Prime | VT323 | Courier Prime |
| Label | Oswald | Major Mono Display | Gloock |

All fonts sourced from Google Fonts.

### Backgrounds
- **Secret:** Warm paper texture with fractal noise SVG overlay, radial gradients simulating aged paper
- **X-Files:** Near-black with faint green scan lines (repeating-linear-gradient), radial vignette, animated scan bar
- **Journal:** Cream/warm paper with faint grid lines (notebook paper effect), warm radial highlights

### Borders & Radii
Minimal border-radius throughout — the aesthetic is angular/documentary. Cards in journal theme use slight rotation (`--rot`) for a scattered-on-desk feel. Borders are solid or dashed, 1–2px.

### Shadows
- **Secret:** Warm, deep shadows (`rgba(30, 22, 10, 0.45)`) simulating paper on a desk
- **X-Files:** Green glow (`rgba(120, 240, 160, 0.15–0.5)`) for a screen-bleed effect
- **Journal:** Cool shadows (`rgba(20, 30, 45, 0.3–0.4)`) with offset box-shadows on interactive elements

### Animation
- `de-flicker` — CRT screen flicker (xfiles display type)
- `de-scan` — vertical scan line moving down the viewport (xfiles)
- `de-blink` — cursor / REC indicator blink
- `de-pulse-danger` — subtle scale pulse on danger dots
- `de-fade-up` — card entrance (opacity + translateY)
- `de-marquee` — infinite horizontal scroll for classified bar
- `de-tape-sway` — subtle washi tape rotation (journal)

### Hover States
- Cards: `translateY(-4px)` lift, image `scale(1.04)`, border glow (xfiles)
- Journal cards: rotation resets to 0° on hover
- Buttons: fill inversion (bg ↔ text), xfiles adds green glow, journal shifts with box-shadow offset

### Imagery
- Cryptid photos use filter treatments per theme: `sepia(0.25)` (secret), `grayscale + hue-rotate(60deg) + saturate` (xfiles green tint), none (journal)
- Journal uses polaroid frames with washi tape
- Secret uses manila folder with paperclip
- X-Files uses monitor bezel with HUD overlays and crosshair

---

## Iconography

No icon font or SVG sprite system. Decorative marks include:
- **Dragon Eye mark** — custom SVG (ellipse + circle + slit pupil), used in nav
- **Unicode symbols** for theme picker: ◆ ◇ ◈
- **Stamps** rendered via CSS (border + rotation + noise overlay)
- **Search icon** via unicode ⌕

The repo uses `@lucide/astro` for Astro-side icons (not replicated in this design system).

---

## File Index

| File | Description |
|------|-------------|
| `README.md` | This file |
| `SKILL.md` | Agent skill definition |
| `colors_and_type.css` | All CSS custom properties and font imports |
| `styles/base.css` | Shared layout, animations, atoms |
| `styles/themes.css` | Component styles per theme |
| `styles/hero.css` | Hero section variants |
| `styles/files.css` | File grid, modals, about, footer |
| `assets/` | Logos, cryptid images |
| `preview/` | Design system preview cards |
| `ui_kits/homepage/` | Full homepage prototype |
