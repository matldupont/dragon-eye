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

## Visual Theme — Field Journal

The design system uses a single theme: **Field Journal** — handwritten investigator notebook, polaroids, washi tape, scrapbook feel.

---

## Content Fundamentals

**Tone:** Playful but with ominous edges. Kid-friendly but takes the "investigation" premise seriously. Copy is written as if by real investigators filing real reports.

**Voice:** First-person, conversational, handwritten feel. "I've been chasing this one across the river country..."

**Casing:** Casual sentence case for body and headlines. UI chrome (nav links, button labels) uses light uppercase letter-spacing. Avoid all-caps blocks of body copy.

**Emoji:** Not used. Decorative elements come from washi tape, polaroid frames, scribbled annotations, and unicode symbols (◆ ◇ ◈ ★).

---

## Visual Foundations

### Colors
Tokens are exposed via CSS custom properties on `:root` / `body`. See `colors_and_type.css` for the full set. Key relationships:

- `--de-paper` / `--de-ink` — primary background/foreground pair (cream paper, deep navy ink)
- `--de-accent` — terra-cotta highlight (`#c94a2a`) used for headings, links, scribbles
- `--de-accent-2` — field green (`#2f5c3a`)
- `--de-danger` — used in danger level badges
- `--de-manila` — warm yellow accent for highlights, drop-shadows on buttons
- `--de-tape` — washi-tape yellow, used on polaroids and modal headers

### Typography
Four roles, all from Google Fonts:

| Role | Font |
|------|------|
| Display (`--de-display`) | Gloock |
| Body (`--de-body`) | Caveat |
| Mono (`--de-mono`) | Courier Prime |
| Label (`--de-label`) | Gloock |

### Backgrounds
Cream/warm paper (`--de-paper`) with faint blue grid lines (notebook paper effect, via `repeating-linear-gradient`) and warm radial highlights at corners.

### Borders & Radii
Minimal border-radius — the aesthetic is angular/documentary. Cards use slight rotation (`--rot`) for a scattered-on-desk feel. Borders are solid 1–2px (the about card uses 2px ink).

### Shadows
Cool shadows — `rgba(20, 30, 45, 0.3–0.4)` with offset box-shadows on interactive elements (buttons get a `4px 4px 0 var(--de-manila)` drop). On hover, shadows offset further and the element lifts.

### Animation
- `de-pulse-danger` — subtle scale pulse on danger dots
- `de-fade-up` — card entrance (opacity + translateY)
- `de-marquee` — infinite horizontal scroll for classified bar
- `de-tape-sway` — subtle washi tape rotation

### Hover States
- Cards: rotation resets to 0° and lifts (`translateY(-4px)`), image `scale(1.04)`
- Buttons: shift `translate(-2px, -2px)` while shadow grows to `6px 6px`

### Imagery
Cryptid photos are presented in polaroid frames with washi tape across the top. No filter treatments — imagery stays naturalistic. The journal uses a polaroid stack for the hero.

---

## Iconography

No icon font or SVG sprite system. Decorative marks include:
- **Dragon Eye mark** — custom SVG (ellipse + circle + slit pupil), used in nav
- **Search icon** via unicode ⌕
- **Unicode bullets** — ◆ ◇ ◈ ★

The repo uses `@lucide/astro` for Astro-side icons (not replicated in this design system).

---

## File Index

| File | Description |
|------|-------------|
| `README.md` | This file |
| `SKILL.md` | Agent skill definition |
| `colors_and_type.css` | All CSS custom properties and font imports |
| `styles/base.css` | Shared layout, animations, atoms |
| `styles/themes.css` | Component styles (nav, classbar, buttons, cards, search, modal) |
| `styles/hero.css` | Hero section (polaroid stack) |
| `styles/files.css` | File grid, modal, about, footer |
| `prototype.html` | Standalone Journal homepage prototype |
| `src/shared.jsx` | Nav, ClassifiedBar, DangerPill, DragonEyeMark |
| `src/hero.jsx` | Hero (Cryptid of the Month) component |
| `src/files.jsx` | FilesSection + FileModal components |
| `src/data.js` | Cryptid sample data |
| `images/` | Cryptid photos and hero image |
