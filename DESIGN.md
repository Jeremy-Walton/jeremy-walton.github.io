---
name: Jeremy Walton — Personal Site
description: A quiet, considered personal hub — bio, projects, and a reading list — with editorial character borrowed from interfaces.dev.
colors:
  bg-light: "oklch(1 0 0)"
  ink-light: "oklch(0.19 0.015 230)"
  surface-light: "oklch(0.97 0.006 230)"
  muted-light: "oklch(0.46 0.02 230)"
  border-light: "oklch(0.90 0.010 230)"
  primary-light: "#436c94"
  bg-dark: "oklch(0.14 0 0)"
  ink-dark: "oklch(0.94 0.006 230)"
  surface-dark: "oklch(0.20 0.014 230)"
  muted-dark: "oklch(0.66 0.02 230)"
  primary-dark: "oklch(0.70 0.06 248.08)"
  tag-article: "oklch(0.93 0.045 248)"
  tag-guide: "oklch(0.92 0.05 70)"
  tag-repo: "oklch(0.93 0.045 340)"
typography:
  display:
    fontFamily: "Libre Baskerville Variable, Georgia, serif"
    fontSize: "clamp(2rem, 1.5rem + 2vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Karla Variable, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  full: "9999px"
  sm: "3px"
spacing:
  row: "1.5rem"
  section: "6rem"
---

# Design System: Jeremy Walton — Personal Site

## 1. Overview

**Creative North Star: "The Considered Study, with a Byline"**

A calm, personal space that isn't afraid to show a little craft. The system still takes its cue from una.im's clean, immediately-orienting intro (name, bio, and contact links surfaced together, no scroll-hunting) but now borrows real editorial character from [interfaces.dev](https://interfaces.dev/): a serif display name (Libre Baskerville, mixing roman and italic within the same headline for personality) paired against Karla's humanist sans for everything else, plus a splash of committed color carried by small, purposeful details — the italic surname, numbered project indices, and semantic category tags on the reading list. This is a page built for friends and future-self, not for recruiters — it still explicitly rejects the corporate resume/portfolio look and the generic SaaS-template aesthetic (gradient heroes, tracked-caps eyebrows, cream-default backgrounds).

**Key Characteristics:**
- Serif + sans pairing: Libre Baskerville carries the name only (display), Karla carries everything else (body, headings, labels) — genuine typographic contrast, not decoration.
- One primary accent (steel blue, `#436c94`, oklch hue ~249) plus two secondary hues (amber, plum) reserved specifically for reading-list category tags — a deliberate, semantic use of a Full-palette move, not a Restrained single-accent system anymore.
- Flat by default; depth comes from spacing and type, not shadow.
- Motion is responsive (real feedback on interaction) plus one deliberate page-load stagger on the intro; never choreographed scroll reveals (see Do's and Don'ts).

## 2. Colors

Mostly-neutral ground with one primary accent used deliberately (name, links, focus states, project indices), plus a small semantic palette reserved for reading-list category tags.

### Primary
- **Considered Steel Blue** (`#436c94` / `oklch(0.5186 0.0787 248.99)` light, `oklch(0.70 0.06 248.08)` dark): the name's italic surname, link hover/focus states, project index numerals (full opacity — a 70%-opacity numeral dropped below 4.5:1 against white at this lighter base and was corrected). Never used as a large background fill. `#436c94` is the fixed brand value; the dark-mode tone is a lightened tint of the same hue (~249°) for legibility against near-black, not a separate color.

### Secondary (category tags only)
- **Tag Amber** (`oklch(0.92 0.05 70)` bg / dark-amber text): the "Guide" reading-list tag.
- **Tag Plum** (`oklch(0.93 0.045 340)` bg / dark-plum text): the "Repo" reading-list tag.

### Neutral
- **Background** (`oklch(1 0 0)` light / `oklch(0.14 0 0)` dark): page ground, pure neutral, no warm tint.
- **Ink** (`oklch(0.19 0.015 230)` light / `oklch(0.94 0.006 230)` dark): body text, ≥16:1 contrast against background.
- **Muted** (`oklch(0.46 0.02 230)` light / `oklch(0.66 0.02 230)` dark): secondary text (descriptions, sources), ≥7:1 contrast.
- **Border** (`oklch(0.90 0.010 230)` light / `oklch(0.94 0.006 230 / 10%)` dark): hairline row dividers only.

### Named Rules
**The Tag-Only Palette Rule.** Amber and plum exist nowhere on the page except inside a reading-list category pill. They never bleed into buttons, links, or backgrounds — their entire job is semantic categorization.

## 3. Typography

**Display Font:** Libre Baskerville Variable (with Georgia, serif fallback) — the personal name only.
**Body Font:** Karla Variable (with sans-serif fallback) — everything else: bio, section headings, project/reading rows, labels.

**Character:** The pairing does the contrast work brand.md asks for — a classic book-serif (interfaces.dev's own display face) against a warm humanist grotesque, rather than one family trying to do both jobs.

### Hierarchy
- **Display** (700 weight serif, `clamp(2rem, 1.5rem + 2vw, 3.25rem)`, line-height 1.05): the name only — "Jeremy" roman, "Walton" italic and colored primary.
- **Headline** (600 weight sans, `1.5rem`–`1.75rem`): "Projects" / "Reading List" section headings.
- **Body** (400 weight sans, `1.125rem`–`1.25rem`, line-height 1.6): bio paragraph. Capped at 65ch.
- **Row title** (500 weight sans, `1rem`): project/reading item titles.
- **Label** (400–500 weight sans, `0.8125rem`–`0.875rem`): sources, tags, index numerals (mono for numerals specifically).

### Named Rules
**The One Serif Word Rule.** The display serif appears in exactly one place: the personal name. Every other heading, label, and body of text is Karla. A second typeface is a deliberate accent, not a second voice competing for attention.

## 4. Elevation

Flat by default — depth comes from spacing, hairline dividers, and the accent/tag colors, not shadow. Category tags are the one place a filled background appears, and it's a flat solid-color pill, not a shadowed chip.

### Named Rules
**The Flat-By-Default Rule.** Surfaces sit flat at rest. Any elevation cue appears only as a direct response to interaction (hover, focus), never as passive decoration.

## 5. Components

### Name / Display Headline
- **Shape:** no container, plain text.
- **Style:** Libre Baskerville bold; first name in ink color, surname italic in primary accent.

### Contact Icons
- **Shape:** 44×44px circular hit target (`rounded-full`).
- **Style:** plain muted-foreground icon at rest; background fills `--hover`/`--active` and icon turns primary on hover/focus. No labels, no pill chrome.

### Project / Reading Rows
- **Shape:** full-width hairline row (`border-b border-border`), no card container, no side-stripe.
- **Style:** project rows lead with a small mono-numeral index (`01`, `02`…) in primary at 70% opacity; reading rows lead with a category tag pill instead. Both end with an arrow-up-right icon that nudges on hover.

### Category Tag (reading list only)
- **Shape:** small rounded-full pill (`rounded-full`, `px-2 py-0.5`).
- **Style:** flat tint background + matching darker text, one of three hues (navy/Article — same hue as the primary accent, amber/Guide, plum/Repo) chosen by source, never decorative.

## 6. Do's and Don'ts

### Do:
- **Do** surface the intro and contact/social links early — orient the visitor immediately, the way una.im does.
- **Do** keep the display serif to the name only; every other text element is Karla.
- **Do** let the primary accent show up deliberately — the surname, link hover/focus, project index numerals — never as a background wash.
- **Do** keep the amber/plum tag hues scoped to reading-list category pills only.
- **Do** support `prefers-color-scheme` by default with a persisted user override (per PRD theming requirement).
- **Do** support `prefers-reduced-motion` with an instant/no-op alternative for the intro stagger.

### Don't:
- **Don't** build a corporate resume/portfolio look — no credibility-signaling layout, no "download resume" energy.
- **Don't** default to a generic SaaS-template look: no gradient-clipped text, no tracked-caps eyebrows above every section, no cream/sand default background chosen "because it's warm."
- **Don't** use side-stripe borders, glassmorphism, or numbered *section* markers (`01 About / 02 Projects`) as scaffolding — the mono numerals on Projects are a genuine ordered list, not section eyebrows, and that distinction matters.
- **Don't** use `animation-timeline: view()` scroll-driven reveals on list rows — verified in-browser to strand content at partial opacity when the timeline doesn't settle on load. The one page-load intro stagger is the only motion on this page.
- **Don't** let amber or plum leak outside the reading-list tags into any other UI element.
