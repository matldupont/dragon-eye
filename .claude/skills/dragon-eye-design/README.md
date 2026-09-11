# Dragon Eye Design System

## Product Context

**Dragon Eye** is a kid-friendly cryptid investigation agency (ages 8–13) that maintains classified case files on legendary creatures. The product is an Astro-based website featuring:

- **Homepage** — hero with "Cryptid of the Month", classified marquee, file grid
- **Files archive** — searchable/filterable database of cryptid case files
- **File detail** — full dossier view with photographic evidence, metadata, investigator notes
- **Merch / Evidence Locker** — gear and collectibles (coming soon)
- **Bilingual** — English and French

**Source repo:** `github.com/matldupont/dragon-eye` (Astro + Tailwind v4). The React components in this skill only drive the standalone prototype; on the site the same patterns are Astro components styled by `src/styles/dragon-eye.css`.

---

## Visual Theme — Dossier ("Top Secret")

The design system has a single theme, **Dossier**: a classified case file tossed on a desk. Manila folders with tabs and paperclips, rubber stamps, typewriter type, aged and grainy paper. The tokens sit directly on `:root`, and there is no theme switcher.

---

## Content Fundamentals

**Tone:** Playful but with ominous edges. Kid-friendly, but it takes the investigation premise seriously: copy reads as if real agents filed real reports.

**Voice:** Bureaucratic and terse. Short declarative sentences, clearance and classification language, uppercase labels.

| Where | Example |
|-------|---------|
| Meta lines | `DOSSIER № 112233` · `FILED 2026-04-18` · `CLEARANCE // LVL 5` |
| Card labels | `CASE FILE` · `№ 112233` · `LOC · West Virginia, USA` |
| Stamps | `TOP SECRET` · `EYES ONLY` · the case status (`UNDER INVESTIGATION`, `SIGHTED`, `CONFIRMED`, `MYTH`) |
| Marquee | `// CLASSIFIED — DRAGON EYE AGENCY — LEVEL 5 CLEARANCE REQUIRED — INTERNAL USE ONLY — DO NOT DISTRIBUTE —` |
| Body copy | "Thirteen active investigations. One creature selected for deep file review." |
| Empty state | `NO RECORDS MATCH QUERY` |

**Casing:** Labels and UI chrome (nav, buttons, eyebrows, stamps, meta lines, filters, placeholders) are UPPERCASE with wide letter-spacing. The hero headline is set in capitals (`CRYPTID OF THE MONTH.`); section titles, cryptid names and body copy use normal casing.

**Marks:** `№` before case numbers, `·` between fields, `//` as a classification separator, `▸` before a primary action.

**Emoji:** Not used. Decoration comes from stamps, folder tabs, the paperclip, dashed rules and the marks above.

**French:** Every string ships in English and French. Keep the same clipped, bureaucratic register in both.

---

## Visual Foundations

### Colors

Tokens are CSS custom properties on `:root`. See `colors_and_type.css` for the full set.

| Token | Value | Role |
|-------|-------|------|
| `--de-paper` | `#e8dfc4` | Page background, modal sheet |
| `--de-paper-2` | `#d9cda9` | Raised paper: file cards, about card |
| `--de-paper-3` | `#c9bb8e` | Deepest paper tone |
| `--de-ink` | `#2a2620` | Text, rules, classified bar, primary button, case-number tags |
| `--de-ink-soft` | `#5a4d35` | Muted text: mono labels, metadata, input borders, dashed rules |
| `--de-accent` | `#a82c1e` | Stamp red: stamps, eyebrows, `CASE FILE` labels, hover and focus |
| `--de-accent-2` | `#1a3c2e` | Confidential green: secondary stamps (`EYES ONLY`), Low danger |
| `--de-danger` | `#8a1a0f` | High danger |
| `--de-caution` | `#7a4e0e` | Medium danger |
| `--de-manila` | `#c9a25a` | Folder and folder-tab surfaces (never text) |
| `--de-shadow` | `0 10px 40px -12px rgba(30, 22, 10, 0.45)` | Warm, deep paper-on-desk shadow |

Danger pills take their color from the level: Low → `--de-accent-2`, Medium → `--de-caution`, High → `--de-danger`, Unknown → `--de-ink-soft`.

### Accessibility Adjustments

The site changes two of the prototype's colors and adds one token so text meets WCAG AA (4.5:1 for normal-size text):

| Token | Prototype | Site | Why |
|-------|-----------|------|-----|
| `--de-ink-soft` | `#6b5d42` | `#5a4d35` | Too little contrast for small text on `--de-paper-2`: 4.05:1 → 5.20:1 |
| `--de-accent` | `#b83222` | `#a82c1e` | WCAG AA text contrast: 4.49:1 → 5.19:1 on `--de-paper` |
| `--de-caution` | — (Medium used `--de-manila`) | `#7a4e0e` (new) | Manila was unreadable as text (1.51:1 on `--de-paper-2`); caution gives 4.53:1 |

Contrast of the text tokens against each surface (flat colors, ignoring the paper grain):

| Text | on `--de-paper` | on `--de-paper-2` | on `--de-manila` |
|------|-----------------|-------------------|------------------|
| `--de-ink` | 11.30 | 9.49 | 6.30 |
| `--de-ink-soft` | 6.20 | 5.20 | 3.45 |
| `--de-accent` | 5.19 | 4.35 | 2.89 |
| `--de-accent-2` | 9.12 | 7.66 | 5.09 |
| `--de-danger` | 7.06 | 5.93 | 3.94 |
| `--de-caution` | 5.40 | 4.53 | 3.01 |

Anything below 4.5:1 is only good enough for large text (3:1). On `--de-paper-2`, keep `--de-accent` to large text and incidental marks such as the `CASE FILE` label. On the manila folder, set small text in `--de-ink` (the prototype's folder caption labels and danger pill still sit below 4.5:1 there). `--de-paper` text on `--de-ink` (classified bar, case-number tags, primary button) is 11.30:1.

### Typography

Three Google Fonts fill four roles:

| Role | Token | Font | Used for |
|------|-------|------|----------|
| Display | `--de-display` | Special Elite | Hero headline, section titles, cryptid names |
| Body | `--de-body` | Special Elite | Paragraphs, investigator notes |
| Mono | `--de-mono` | Courier Prime | Labels, metadata, case numbers, inputs, marquee, footer |
| Label | `--de-label` | Oswald | Nav, logo, buttons, eyebrows, stamps, danger pills |

- Fallbacks: Special Elite → Courier Prime → monospace; Courier Prime → ui-monospace; Oswald → Impact → sans-serif.
- Special Elite has a single weight, so display type and section titles stay at `font-weight: 400`. Courier Prime loads 400/700 plus italic; Oswald loads 400/500/700 (the logo and stamps use 700).
- Uppercase labels carry wide tracking: eyebrows 0.25em, nav and buttons 0.22em, danger pills 0.2em, stamps 0.18em, mono labels 0.15em.
- The hero headline (`.de-title-xl`) runs `clamp(3rem, 8vw, 6.5rem)` with 0.95 line-height and -0.01em tracking. Scale tokens (`--de-text-*`, `--de-tracking-*`, `--de-leading-*`) are in `colors_and_type.css`.

### Backgrounds

- **Page:** aged paper. `--de-paper` under two warm radial stains (ochre top-left, brown bottom-right) and a tiled 200×200 fractal-noise SVG, inlined as a data URI, for grain. Set on `body` in `styles/base.css`.
- **Manila folder:** `--de-manila` with its own lighter noise tile and a faint darkening toward the bottom, rotated -1.5deg, lifted by `--de-shadow` plus a 2px inset highlight.
- **Classified bar:** a solid `--de-ink` strip with `--de-paper` mono text scrolling as a marquee.
- **Nav:** sticky; paper at 85% opacity with `backdrop-filter: blur(6px)` and a 1px dashed `--de-ink-soft` bottom rule.
- **Cards and about card:** `--de-paper-2`. **Modal:** a `--de-paper` sheet with a 1px ink border over a 70% black, blurred backdrop.

### Stamps

`.de-stamp` is a rubber stamp drawn in CSS: Oswald 700, uppercase, 0.18em tracking, a 3px `--de-accent` border and text, rotated -4deg at 85% opacity. A noise-SVG `::before` with `mix-blend-mode: lighten` knocks out specks, like uneven ink.

- Re-angle each stamp with an inline `transform`; the hero pair uses -6deg and 4deg.
- Recolor by overriding `color` and `border-color`: `EYES ONLY` uses `--de-accent-2`.
- Placement: `TOP SECRET` and `EYES ONLY` hang off the right edge of the hero folder; the modal header stamps the case status (`UNDER INVESTIGATION`, `CONFIRMED`, …).
- Related marks: the case-number tag on card photos (`.card-secret-stamp`, an ink block with `№ 112233` in paper-colored mono) and the `CASE FILE` corner label (`.de-card::before`).

### Cards

`.de-card` is a case file on paper stock: `--de-paper-2`, a 1px `--de-ink-soft` border, `--de-shadow`, 14px padding, square corners.

- Photo: 3:4, `object-fit: cover`, case-number tag top-left, `CASE FILE` label in the top padding on the right.
- Info: the name in `--de-display` at 1.4rem; a meta row with the type (mono, 0.72rem) and the danger pill; a `LOC · region` line in mono, 0.7rem, `--de-ink-soft`.
- Grid: `repeat(auto-fill, minmax(260px, 1fr))`. Cards enter with `de-fade-up`, staggered 40ms apart.

### Borders & Radii

Square corners throughout; only the folder tab (6px top corners) and the drawn paperclip are rounded. Structure uses solid rules: 1px ink or ink-soft, 2px under the modal header and around buttons, 3px on stamps. Separators are 1px dashed: nav bottom, hero meta line, folder caption.

### Shadows

Warm and deep, like paper on a desk: `--de-shadow` under cards and the folder, `0 4px 12px rgba(0,0,0,0.3)` under the hero photo, `0 40px 80px rgba(0,0,0,0.5)` under the modal. The modal photo gets a hard `8px 8px 0 var(--de-ink)` offset.

### Animation

- `de-fade-up` — entrance for cards, the modal and its backdrop (opacity + 12px rise)
- `de-marquee` — classified bar, 50s linear infinite scroll
- `de-pulse-danger` — 1.4s pulse on danger-pill dots

### Hover States

- Cards lift `translateY(-4px)` and the photo zooms to `scale(1.04)`.
- `.de-btn` is transparent with a 2px `currentColor` border and fills with ink (paper text) on hover. `.de-btn-primary` starts ink-filled and turns stamp red (`--de-accent`).
- Nav links and the modal close button turn `--de-accent`; inputs take an `--de-accent` border on focus.

### Imagery

Cryptid photos are aged sepia evidence photographs, so no extra sepia CSS filter is applied. (The prototype filtered them with `sepia(0.25) contrast(0.95)` on cards and `sepia(0.3) contrast(0.95)` in the hero and modal.)

- **Hero:** clipped into the manila folder at 4:3 with a 1px ink border, below the folder tab `CASE 112233`.
- **Cards:** 3:4 with the case-number tag.
- **Modal:** `PHOTOGRAPHIC EVIDENCE · EXHIBIT A`, 3:4, 2px ink border and hard offset shadow.
- Alt text is the cryptid's name.

---

## Iconography

No icon font or sprite sheet.

- **Dragon Eye mark:** the prototype's nav draws a custom SVG eye (ellipse, iris, slit pupil). The live site's nav uses the Lucide `Eye` icon from `@lucide/astro`; keep it.
- **Unicode marks:** `▸` primary action, `№` case number, `·` field separator, `//` classification separator, `⌕` search, `✕` close.
- **Stamps, folder tab, paperclip:** drawn in CSS, not images.

---

## File Index

| File | Description |
|------|-------------|
| `README.md` | This file |
| `SKILL.md` | Agent skill definition |
| `colors_and_type.css` | Dossier tokens on `:root`, type scale, Google Fonts import (load it before `styles/`) |
| `styles/base.css` | Reset, aged-paper `body`, layout helpers, keyframes, type atoms, danger pills |
| `styles/themes.css` | Nav, classified bar, buttons, stamps, cards, search, modal shell |
| `styles/hero.css` | Hero: manila folder, tab, stamps, paperclip |
| `styles/files.css` | Search field, card case-number tag, dossier modal, about, footer |
| `prototype.html` | Standalone Dossier homepage; open it straight from disk (React 18 + Babel from unpkg, fonts from Google) |
| `src/shared.jsx` | ClassifiedBar, Nav, DangerPill, DragonEyeMark |
| `src/hero.jsx` | Hero (Cryptid of the Month) |
| `src/files.jsx` | FilesSection, FileCard, FileModal |
| `src/data.js` | Sample cryptid data (`window.CRYPTIDS`, `window.FEATURED_SLUG`) |
| `images/` | Cryptid photos used by the prototype |

`prototype.html` inlines the same components as `src/*.jsx`, because Babel can't fetch external `.jsx` files over `file://`. Change both together.
