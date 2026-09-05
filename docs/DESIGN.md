---
name: Jeremy Walton — Personal Site
description: A quiet, considered personal hub — bio, projects, and a reading list — with editorial character and a warm, off-the-clock developer feel.
colors:
  bg-light: "oklch(0.985 0.006 250)"
  ink-light: "oklch(0.19 0.02 250)"
  surface-light: "oklch(0.965 0.008 250)"
  muted-light: "oklch(0.47 0.02 250)"
  border-light: "oklch(0.90 0.012 250)"
  primary-light: "oklch(0.52 0.15 42)"
  bg-dark: "oklch(0.15 0.02 250)"
  ink-dark: "oklch(0.95 0.01 250)"
  surface-dark: "oklch(0.21 0.018 250)"
  muted-dark: "oklch(0.68 0.02 250)"
  primary-dark: "oklch(0.72 0.13 42)"
  tag-article: "oklch(0.90 0.03 250)"
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
  mono:
    fontFamily: "Fragment Mono, ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
rounded:
  full: "9999px"
  sm: "3px"
spacing:
  row: "1.5rem"
  section: "6rem"
---

# Design System: Jeremy Walton — Personal Site

## 1. Overview

**Creative North Star: "The Considered Study, Warmed Up"**

Same calm, personal space as before, but with the temperature turned up. This revision is informed by [una.im](https://una.im/) — not copied, but taken for its essence: a personal-developer site that reads as warm and a little playful rather than clinical. Two things carry that shift here: the neutral ground moves from a pure-gray "no opinion" scale to a deliberately ink-blue-tinted one (a nod forward from the old steel-blue accent, now living in the background/neutrals instead), and the accent color moves from steel blue to a warm terracotta — the one place the page allows itself a genuinely warm color. A monospace typeface joins the system for small labels and numerals, a quiet, sparing nod to the fact that this is a developer's site.

What did **not** change: no photo, no stone/marble texture, no curved section dividers, no bordered/boxed panels, no emoji, no hand-drawn signature. Those were deliberately considered and declined — the "more fun" feeling comes entirely from color and type here, not from new decorative elements or a new page structure. The flat, hairline-row layout from before stays exactly as it was.

**Key Characteristics:**
- Serif + sans + mono: Libre Baskerville still carries the name only, Karla still carries all body/heading text, and a new monospace face carries only small labels, tags, and index numerals — three voices, each with one narrow job.
- Neutrals carry an ink-blue tint (hue ~250, where the old steel blue lived); the accent itself moved to a warm terracotta (hue ~42) — the blue is now ambient, the warmth is now the pop of color.
- Flat by default; depth comes from spacing and type, not shadow, texture, or containers.
- Motion is responsive (real feedback on interaction) plus one deliberate page-load stagger on the intro; never choreographed scroll reveals (see Do's and Don'ts).

## 2. Colors

Mostly-neutral, ink-blue-tinted ground with one warm primary accent used deliberately (name, links, focus states, project indices), plus a small semantic palette reserved for reading-list category tags.

### Primary
- **Baked Terracotta** (`oklch(0.52 0.15 42)` light, `oklch(0.72 0.13 42)` dark): the name's italic surname, link hover/focus states, project index numerals (full opacity — a lower-opacity numeral previously dropped below 4.5:1 against the background and was corrected; keep numerals at full opacity). Never used as a large background fill. This replaces the old steel blue as the page's one warm accent.

### Secondary (category tags only)
- **Tag Article** (`oklch(0.90 0.03 250)` bg / dark-ink text): the "Article" reading-list tag — carries the old steel-blue hue (~250°) as a deliberate callback, now scoped to this one tag instead of being the page's primary accent.
- **Tag Amber** (`oklch(0.92 0.05 70)` bg / dark-amber text): the "Guide" reading-list tag.
- **Tag Plum** (`oklch(0.93 0.045 340)` bg / dark-plum text): the "Repo" reading-list tag.

### Neutral
- **Background** (`oklch(0.985 0.006 250)` light / `oklch(0.15 0.02 250)` dark): page ground, ink-blue tinted (hue ~250) rather than pure neutral — this is where the old steel-blue identity now lives.
- **Ink** (`oklch(0.19 0.02 250)` light / `oklch(0.95 0.01 250)` dark): body text, ≥16:1 contrast against background.
- **Muted** (`oklch(0.47 0.02 250)` light / `oklch(0.68 0.02 250)` dark): secondary text (descriptions, sources), ≥7:1 contrast.
- **Border** (`oklch(0.90 0.012 250)` light / `oklch(0.95 0.008 250 / 10%)` dark): hairline row dividers only.

### Named Rules
**The Tag-Only Palette Rule.** Amber and plum exist nowhere on the page except inside a reading-list category pill. They never bleed into buttons, links, or backgrounds — their entire job is semantic categorization. Tag Article is the one tag that shares its hue with something else on the page (the neutral ramp) — that's intentional, it's the identity callback; the other two tags stay exclusive to their pill.

## 3. Typography

**Display Font:** Libre Baskerville Variable (with Georgia, serif fallback) — the personal name only.
**Body Font:** Karla Variable (with sans-serif fallback) — everything else: bio, section headings, project/reading rows.
**Mono Font:** Fragment Mono (with ui-monospace, monospace fallback) — small labels only: sources, category tags, and index numerals.

**Character:** Three families, three narrow jobs — a classic book-serif for the one display moment, a warm humanist grotesque for everything meant to be read, and a quiet monospace for everything meant to be scanned (labels, numbers, metadata). Fragment Mono was picked over the more common IBM Plex Mono / Space Mono default so the "developer" nod doesn't read as a training-data reflex.

### Hierarchy
- **Display** (700 weight serif, `clamp(2rem, 1.5rem + 2vw, 3.25rem)`, line-height 1.05): the name only — "Jeremy" roman, "Walton" italic and colored primary.
- **Headline** (600 weight sans, `1.5rem`–`1.75rem`): "Projects" / "Reading List" section headings.
- **Body** (400 weight sans, `1.125rem`–`1.25rem`, line-height 1.6): bio paragraph. Capped at 65ch.
- **Row title** (500 weight sans, `1rem`): project/reading item titles.
- **Label** (400 weight mono, `0.8125rem`): sources, tags, index numerals — the one place the mono face appears.

### Named Rules
**The One Serif Word Rule.** The display serif appears in exactly one place: the personal name. Every heading and body of text is Karla; mono is reserved for labels only. Three typefaces, not two, but each is still a deliberate, narrow accent — none competes with Karla for the reader's attention on actual prose.

## 4. Elevation

Flat by default — depth comes from spacing, hairline dividers, and the accent/tag colors, not shadow. Category tags are the one place a filled background appears, and it's a flat solid-color pill, not a shadowed chip.

### Named Rules
**The Flat-By-Default Rule.** Surfaces sit flat at rest. Any elevation cue appears only as a direct response to interaction (hover, focus), never as passive decoration.

## 5. Components

### Name / Display Headline
- **Shape:** no container, plain text.
- **Style:** Libre Baskerville bold; first name in ink color, surname italic in primary accent (terracotta).

### Contact Icons
- **Shape:** 44×44px circular hit target (`rounded-full`).
- **Style:** plain muted-foreground icon at rest; background fills `--hover`/`--active` and icon turns primary (terracotta) on hover/focus. No labels, no pill chrome.

### Project / Reading Rows
- **Shape:** full-width hairline row (`border-b border-border`), no card container, no side-stripe.
- **Style:** project rows lead with a small mono-numeral index (`01`, `02`…) in primary (terracotta) at full opacity; reading rows lead with a category tag pill instead. Both end with an arrow-up-right icon that nudges on hover.

### Category Tag (reading list only)
- **Shape:** small rounded-full pill (`rounded-full`, `px-2 py-0.5`), mono label text.
- **Style:** flat tint background + matching darker text, one of three hues (Article — the old steel-blue hue, Guide — amber, Repo — plum) chosen by source, never decorative.

## 6. Do's and Don'ts

### Do:
- **Do** surface the intro and contact/social links early — orient the visitor immediately, the way una.im does.
- **Do** keep the display serif to the name only; keep mono to labels/numerals only; everything else is Karla.
- **Do** let the primary accent (terracotta) show up deliberately — the surname, link hover/focus, project index numerals — never as a background wash.
- **Do** keep the amber/plum tag hues scoped to reading-list category pills only.
- **Do** support `prefers-color-scheme` by default with a persisted user override (per PRD theming requirement).
- **Do** support `prefers-reduced-motion` with an instant/no-op alternative for the intro stagger.

### Don't:
- **Don't** build a corporate resume/portfolio look — no credibility-signaling layout, no "download resume" energy.
- **Don't** default to a generic SaaS-template look: no gradient-clipped text, no tracked-caps eyebrows above every section, no cream/sand default background chosen "because it's warm."
- **Don't** use side-stripe borders, glassmorphism, or numbered *section* markers (`01 About / 02 Projects`) as scaffolding — the mono numerals on Projects are a genuine ordered list, not section eyebrows, and that distinction matters.
- **Don't** use `animation-timeline: view()` scroll-driven reveals on list rows — verified in-browser to strand content at partial opacity when the timeline doesn't settle on load. The one page-load intro stagger is the only motion on this page.
- **Don't** let amber or plum leak outside the reading-list tags into any other UI element.
- **Don't** add a hero photo, stone/marble texture panels, curved section dividers, bordered/framed content boxes, emoji, or a hand-drawn signature graphic. These were considered during the ink-blue/terracotta redesign and explicitly declined — the warmer feel comes from color and type, not new decorative elements or layout structure.
