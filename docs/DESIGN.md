---
name: Jeremy Walton — Personal Site
description: A quiet, considered personal hub — bio, projects, and a reading list — with editorial character, a confident navy-blue palette, and an off-the-clock developer feel.
colors:
  bg-light: "oklch(0.95 0.014 250)"
  ink-light: "oklch(0.16 0.01 250)"
  surface-light: "oklch(0.90 0.016 250)"
  muted-light: "oklch(0.42 0.02 250)"
  border-light: "oklch(0.83 0.02 250)"
  primary-light: "oklch(0.38 0.10 252)"
  bg-dark: "oklch(0.15 0.02 250)"
  ink-dark: "oklch(0.95 0.01 250)"
  surface-dark: "oklch(0.21 0.018 250)"
  muted-dark: "oklch(0.68 0.02 250)"
  primary-dark: "oklch(0.72 0.06 252)"
typography:
  display:
    fontFamily: "Libre Baskerville Variable, Georgia, serif"
    fontSize: "clamp(2.5rem, 1.75rem + 3vw, 4.5rem)"
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

Same calm, personal space as before, but with the page actually laid out like it means it. This revision is informed by [una.im](https://una.im/) — not copied, but taken for its essence: a personal-developer site that reads as confident rather than a flat, single-column resume. Two things carry that shift: the page structure moved from one narrow centered column stacked top to bottom into distinct full-width bands, a two-column hero with a real profile photo, and a two-column content layout — real layout moves, not just a recolor; and the neutral ground moved from a pure-gray "no opinion" scale to a deliberately ink-blue-tinted one. The primary accent went through several iterations before landing: steel blue → a warm terracotta (rejected, too orange) → a deep navy at `#1a2a3c` (rejected in light mode only — it sat too close to the near-black ink color, so "Jeremy" and "Walton" read as the same dark gray) → the current richer, more saturated navy (`oklch(0.38 0.10 252)`), which is close in hue to the tinted neutrals but distinctly lighter and more colorful than ink — the palette is now a confident, near-monochrome blue system rather than a neutral-plus-accent one. The background also moved off near-white to a visibly tinted pale blue, so the whole page has less of a stark, clinical white ground. A monospace typeface joins the system for small labels and numerals, a quiet, sparing nod to the fact that this is a developer's site.

What still did **not** change: no stone/marble texture, no curved section dividers, no emoji, no hand-drawn signature. Those stay declined. Two earlier decisions *were* walked back once shipped and shown to fall short: "no new layout structure" (color-only wasn't enough — see Section 2) and "no photograph" (a graphic monogram standing in for a photo read as an odd "tombstone" shape — a real photo doesn't have that problem, see Components).

**Key Characteristics:**
- Serif + sans + mono: Libre Baskerville still carries the name only, Karla still carries all body/heading text, and a new monospace face carries only small labels — sources and index numerals — three voices, each with one narrow job.
- Neutrals carry an ink-blue tint (hue ~250) and the background is visibly tinted rather than near-white; the primary accent is a richer navy (`oklch(0.38 0.10 252)` light, hue ~252) — same hue family as the neutrals, but lifted well clear of near-black ink in lightness and chroma so the two read as distinct colors, not two shades of dark gray.
- The page reads as distinct rooms (alternating `--background`/`--card` bands), not one continuous flat scroll. Depth still comes from spacing, color, and type — never shadow.
- Motion is responsive (real feedback on interaction) plus one deliberate page-load stagger on the intro; never choreographed scroll reveals (see Do's and Don'ts).

## 2. Layout

The single centered `max-w-2xl` column is gone. The page is now built as full-width bands, each with its own background tone, and an inner `max-w-5xl` container that varies its grid per band.

- **Hero band** (`--background`): an asymmetric two-column grid at desktop width (`1.3fr` text / `1fr` photo), stacked single-column (text first) on mobile. Text (name, bio, contact icons) leads; a real profile photo sits opposite it. A graphic monogram was tried here first as a photo stand-in and dropped for looking like a "tombstone" — the real photo doesn't have that problem.
- **Work band** (`--card`, one tone up from the hero): Projects and Reading List sit side by side in an asymmetric two-column grid (`1fr` / `1.3fr`) at desktop width, each stacked to one column below `lg`. This is the una.im-style "multiple modules side by side" move, adapted to this site's two real content lists instead of a blog+podcast pairing.
- **Footer band** (`--background`, back to the hero's tone — not a third tone, see Named Rules): a plain `<footer>`, not sticky, holding just a copyright line (left) and one link (right) in `text-sm text-muted-foreground`. No nav, no extra columns — this page has nothing else that needs a footer.
- Each band's own vertical padding replaces the old per-section `mt-[...]` spacing — sections no longer manage their own top margin, the band does.

### Named Rules
**The Band, Not Scroll Rule.** The visual break between sections is a background-color change on a full-width band, never a decorative divider (no curved SVG edge, no rule line). Two adjacent tones (`--background`, `--card`) are the entire vocabulary — introducing a third tone or a literal shape-divider is scope creep on this rule.

## 3. Colors

Mostly-neutral, ink-blue-tinted ground with one deep navy primary accent used deliberately (name, links, focus states, project indices, section labels).

### Primary
- **Ink Navy** (`oklch(0.38 0.10 252)` light, `oklch(0.72 0.06 252)` dark): the name's italic surname, link hover/focus states, project index numerals (full opacity — a lower-opacity numeral previously dropped below 4.5:1 against the background and was corrected; keep numerals at full opacity). Never used as a large background fill. The light-mode value started life as the literal brand hex `#1a2a3c`, but that sat only ~2:1 apart from the ink color in lightness — "Jeremy" and "Walton" read as the same dark gray. Lightened and pushed more chromatic (same ~252° hue) to sit clearly apart from ink while still reading as "navy" rather than "bright blue." Dark mode keeps its separately-tuned lighter tint of the same hue, unaffected — the dark-mode pairing was never the problem.

### Neutral
- **Background** (`oklch(0.95 0.014 250)` light / `oklch(0.15 0.02 250)` dark): page ground, ink-blue tinted (hue ~250) rather than pure neutral — same hue family as the primary, one tone lighter/darker. Light mode was pulled off near-white (was `0.985`) to `0.95`: enough tint to read as a color, not "default white with a hint of something."
- **Ink** (`oklch(0.16 0.01 250)` light / `oklch(0.95 0.01 250)` dark): body text, near-black in light mode (darkened from `0.19` specifically to clear more room between it and the primary), ≥16:1 contrast against background.
- **Muted** (`oklch(0.42 0.02 250)` light / `oklch(0.68 0.02 250)` dark): secondary text (descriptions, sources), ≥7:1 contrast.
- **Border** (`oklch(0.83 0.02 250)` light / `oklch(0.95 0.008 250 / 10%)` dark): hairline row dividers only.

## 4. Typography

**Display Font:** Libre Baskerville Variable (with Georgia, serif fallback) — the personal name only.
**Body Font:** Karla Variable (with sans-serif fallback) — everything else: bio, section headings, project/reading rows.
**Mono Font:** Fragment Mono (with ui-monospace, monospace fallback) — small labels only: sources and index numerals.

**Character:** Three families, three narrow jobs — a classic book-serif for the one display moment, a warm humanist grotesque for everything meant to be read, and a quiet monospace for everything meant to be scanned (labels, numbers, metadata). Fragment Mono was picked over the more common IBM Plex Mono / Space Mono default so the "developer" nod doesn't read as a training-data reflex.

### Hierarchy
- **Display** (700 weight serif, `clamp(2.5rem, 1.75rem + 3vw, 4.5rem)`, line-height 1.05): the name only — "Jeremy" roman, "Walton" italic and colored primary. Sized up from the original color-only pass to actually carry the wider hero band; still well under the ≤6rem brand ceiling.
- **Headline** (600 weight sans, `1.5rem`–`1.75rem`): "What I'm working on" / "What I'm reading" section headings.
- **Body** (400 weight sans, `1.125rem`–`1.25rem`, line-height 1.6): bio paragraph. Capped at 65ch.
- **Row title** (500 weight sans, `1rem`): project/reading item titles.
- **Label** (400 weight mono, `0.8125rem`): sources and index numerals — the one place the mono face appears.

### Named Rules
**The One Serif Word Rule.** The display serif appears in exactly one place: the personal name. Every heading and body of text is Karla; mono is reserved for labels only. Three typefaces, not two, but each is still a deliberate, narrow accent — none competes with Karla for the reader's attention on actual prose.

## 5. Elevation

Flat by default — depth comes from spacing, band background color, and the accent color, not shadow. Section-label chips (Components, below) are the one place a filled background appears, and it's flat there too.

### Named Rules
**The Flat-By-Default Rule.** Surfaces sit flat at rest. Any elevation cue appears only as a direct response to interaction (hover, focus), never as passive decoration. Band color changes are not elevation — they're ground-plane changes, still flat, no shadow at the seam.

## 6. Components

### Name / Display Headline
- **Shape:** no container, plain text.
- **Style:** Libre Baskerville bold; first name in ink color, surname italic in primary accent (navy).

### Contact Icons
- **Shape:** 36×36px hit target, `rounded-lg` corners — the shared button radius, not a circle. Rendered as an `<a>` via the Button's `render` prop with `nativeButton={false}`, so the link keeps anchor semantics.
- **Style:** icon inherits page `--foreground` at rest — no fill, no labels, no pill chrome. On hover the background fills `--muted` (`--muted/50` in dark) and text stays `--foreground`; focus-visible draws a `--ring` ring. The accent does *not* appear here — unlike the row arrow, these icons don't turn primary on hover.
- **Button component:** there is exactly one button on this site — a 36×36px ghost icon button — so `Button` takes no `variant`, no `size`, and no `className` at all; every caller renders the same thing. `className` is deliberately omitted from its props type, so an attempt to restyle it from a call site is a compile error rather than a silent override — anything visual goes in the module. This deliberately departs from the shadcn primitive, whose six variants and nine sizes were dragging the entire `--secondary` / `--destructive` / `--input` / `*-foreground` token set along with them. Consequence: the theme toggle grew from 28px to 36px and now matches the contact icons, which is the intent — one hit-target size everywhere. Its styling lives in `button.module.css` as plain CSS with native nesting rather than utility classes — with one fixed appearance there was no variant matrix left for utilities to express, and the two non-obvious rules below are easier to explain in a file that has room for a comment. It still reads the same design tokens (`--radius`, `--muted`, `--foreground`, `--ring`) from `index.css`, and dark mode hooks the global `.dark` class via `:global(.dark) &`. The transparent border is load-bearing (it reserves the space the focus ring fills, so focusing doesn't shift layout) and `background-clip: padding-box` keeps the hover fill inside it.
- **Icon glyph size:** icons are set to 16px by their own `size` prop. The shadcn base class used to force this via CSS (`[&_svg:not([class*='size-'])]:size-4`), which silently overrode the prop — contact icons asked for 20px and rendered at 16px. The CSS override is gone; the prop is now the only source of truth, so changing it actually works.
- **Icon source:** [phosphor-animated.com](https://phosphor-animated.com/) (hover-animated, MIT, installed as source via the shadcn CLI) for the envelope; the theme toggle's sun/moon also come from there. GitHub, LinkedIn, and X stay on plain `@phosphor-icons/react` — phosphor-animated has no brand logos, only generic icons.
- **Theme toggle animation:** the sun/moon icon's own hover choreography didn't fire from inside the `Button` + `AnimatePresence` wrapper (root cause not fully isolated). Fixed the same way as the row arrow (see List Row): `trigger="none"` on the icon, driven imperatively via a ref's `play()`/`stop()` from the Button's own `onMouseEnter`/`onMouseLeave`, instead of relying on the icon's built-in hover listener.

### Profile Photo
- **Shape:** square, `rounded-3xl`, `object-cover`, sitting opposite the name/bio in the hero grid, capped at `max-w-72`. No border, no shadow — flat, per the Flat-By-Default Rule.
- **Style:** one source image (`profile-min.png`), rendered twice as a 3D flip card (`perspective` on the wrapper, `preserve-3d` + `backface-visibility: hidden` on front/back faces, `rotateY(180deg)` on the back face and on hover). At rest: color in dark mode, black-and-white in light mode (CSS `grayscale`/`dark:grayscale-0`, not a second exported file). On hover: a 1000ms `rotateY` flip reveals the back face, which is always the *opposite* rendering of the front — grayscale flips to color, color flips to grayscale — regardless of theme. `prefers-reduced-motion` drops the transition duration so the swap is instant rather than animated; the flip itself (a hover-only, non-essential embellishment) still happens since it's the whole point of the interaction, just without the spin.

### Section Heading
- **Copy:** "What I'm working on" (Projects) and "What I'm reading" (Reading List) — first-person and conversational rather than the generic list-noun labels, matching the "reads like a person" brand personality.
- **Shape:** plain text, no chip/box/border. A solid or outlined chip was tried here and dropped as too heavy ("chunky boxes") for a page that's otherwise flat and quiet.
- **Style:** two variants, one per section, so the pair sitting side by side in the Work band still reads as two different things: **What I'm working on** is set directly in `--primary` (navy) text; **What I'm reading** stays `--foreground` (ink) text with a `--primary`-colored underline (`decoration-2`, generous `underline-offset`). Colored text vs. ink text with a colored underline — same accent, two quieter treatments, no fill.

### List Row (shared by Projects and Reading List)
- **Shape:** full-width hairline rows, no card container, no side-stripe, no badge/tag. The hairlines come from `divide-y divide-border` on the list container, so the last row has no trailing rule and no separator element is rendered between rows. `ListRow` renders the row and `ListSection` renders the heading + divided list, so both lists share both pieces and can't drift apart.
- **Anatomy, all but title optional:** one line holds an optional mono index (Projects only: `01`, `02`…, in primary at full opacity), the title, and an inline mono source prefixed with "— " — all on the same line, wrapping together if the combination is long; an arrow icon (phosphor-animated's `arrow-square-out` — the closest match to the old plain arrow-up-right, since phosphor-animated doesn't have that exact glyph) sits right-aligned on that line. On row hover the arrow turns primary and scales to 125% over 400ms (`group-hover:scale-125`), while its own built-in slip-out animation plays — driven from the row, not the icon, via `useIconHover` (the icon is set `trigger="none"` so the whole row is the hover target, not just the glyph). 400ms is deliberately half the icon's 800ms choreography, so the growth finishes as the arrow reaches the top of its slip-out and doesn't keep growing on the way back. The icon's own motion is small on purpose — the scale is what makes the hover read, so the two shouldn't both be loud. A muted description/note paragraph follows below when present. Reading List rows have no index, so their content sits flush left instead of indented under one.
- **Why no tags:** reading-list category badges (UI/AI/CSS/Rails, one hardcoded color per category) were tried and dropped — they didn't help a reader decide anything, and they were the one place the two lists' row shapes diverged. Source + title + optional description does the job.

## 7. Do's and Don'ts

### Do:
- **Do** surface the intro and contact/social links early — orient the visitor immediately, the way una.im does.
- **Do** keep the display serif to the name only; keep mono to labels/numerals only; everything else is Karla.
- **Do** let the primary accent (navy) show up deliberately — the surname, link hover/focus, project index numerals, one Section Heading per pair — never as a background wash or a filled chip.
- **Do** build the page as full-width bands with an inner `max-w-5xl` container, not one centered narrow column top to bottom.
- **Do** support `prefers-color-scheme` by default with a persisted user override (per PRD theming requirement).
- **Do** support `prefers-reduced-motion` with an instant/no-op alternative for the intro stagger.

### Don't:
- **Don't** build a corporate resume/portfolio look — no credibility-signaling layout, no "download resume" energy.
- **Don't** default to a generic SaaS-template look: no gradient-clipped text, no tracked-caps eyebrows above every section, no cream/sand default background chosen "because it's warm."
- **Don't** use side-stripe borders, glassmorphism, or numbered *section* markers (`01 About / 02 Projects`) as scaffolding — the mono numerals on Projects are a genuine ordered list, not section eyebrows, and that distinction matters.
- **Don't** use `animation-timeline: view()` scroll-driven reveals on list rows — verified in-browser to strand content at partial opacity when the timeline doesn't settle on load. The one page-load intro stagger is the only motion on this page.
- **Don't** bring back category badges/tags on reading-list rows — tried, dropped, didn't earn their space.
- **Don't** add stone/marble texture, a curved SVG section divider, emoji, a hand-drawn signature graphic, a graphic "hero mark" in place of the real photo, or a filled/outlined chip around a section heading — all tried or considered and dropped. The Profile Photo and Section Heading color/underline variation are the layout personality this system uses; don't add a decorative device on top of them without cutting one first.
- **Don't** add a second exported image file (e.g. a black-and-white PNG variant) when a CSS filter can derive it from the one source image — see Profile Photo. The flip card renders two `<img>` tags, but both point at the same one file; the color/grayscale difference between them is still filter-only.
