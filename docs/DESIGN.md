---
name: Jeremy Walton — Personal Site
description: A quiet, considered personal hub — bio, projects, and a reading list — with editorial character, a confident navy-blue palette, and an off-the-clock developer feel.
colors:
  bg-light: "oklch(0.95 0.014 250)"
  ink-light: "oklch(0.16 0.01 250)"
  surface-light: "oklch(0.90 0.016 250)"
  muted-light: "oklch(0.42 0.02 250)"
  border-light: "oklch(0.74 0.02 250)"
  primary-light: "oklch(0.38 0.10 252)"
  bg-dark: "oklch(0.15 0.02 250)"
  ink-dark: "oklch(0.95 0.01 250)"
  surface-dark: "oklch(0.21 0.018 250)"
  muted-dark: "oklch(0.68 0.02 250)"
  primary-dark: "oklch(0.72 0.06 252)"
typography:
  display:
    fontFamily: "Libre Baskerville Variable, Libre Baskerville Fallback, Georgia, serif"
    fontSize: "clamp(3rem, 2rem + 3.5vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Karla Variable, Karla Fallback, sans-serif"
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

**Creative North Star: "The Considered Study, Warmed Up"**

Same calm, personal space as before, but with the page actually laid out like it means it. This revision is informed by [una.im](https://una.im/) — not copied, but taken for its essence: a personal-developer site that reads as confident rather than a flat, single-column resume. Two things carry that shift: the page structure moved from one narrow centered column stacked top to bottom into distinct full-width bands, a two-column hero with a real profile photo, and a two-column content layout — real layout moves, not just a recolor; and the neutral ground moved from a pure-gray "no opinion" scale to a deliberately ink-blue-tinted one. The primary accent went through several iterations before landing: steel blue → a warm terracotta (rejected, too orange) → a deep navy at `#1a2a3c` (rejected in light mode only — it sat too close to the near-black ink color, so "Jeremy" and "Walton" read as the same dark gray) → the current richer, more saturated navy (`oklch(0.38 0.10 252)`), which is close in hue to the tinted neutrals but distinctly lighter and more colorful than ink — the palette is now a confident, near-monochrome blue system rather than a neutral-plus-accent one. The background also moved off near-white to a visibly tinted pale blue, so the whole page has less of a stark, clinical white ground. A monospace typeface was added at this stage for small labels and numerals, as a nod to this being a developer's site, and was later removed again — see Section 4.

What still did **not** change: no stone/marble texture, no curved section dividers, no emoji, no hand-drawn signature. Those stay declined. Two earlier decisions *were* walked back once shipped and shown to fall short: "no new layout structure" (color-only wasn't enough — see Section 2) and "no photograph" (a graphic monogram standing in for a photo read as an odd "tombstone" shape — a real photo doesn't have that problem, see Components).

**Key Characteristics:**
- Serif + sans: Libre Baskerville carries the name only; Karla carries everything else, including the small labels — sources and index numerals — that a third, monospace face used to hold. Two voices, one narrow job and one broad one.
- Neutrals carry an ink-blue tint (hue ~250) and the background is visibly tinted rather than near-white; the primary accent is a richer navy (`oklch(0.38 0.10 252)` light, hue ~252) — same hue family as the neutrals, but lifted well clear of near-black ink in lightness and chroma so the two read as distinct colors, not two shades of dark gray.
- The page reads as distinct rooms (alternating `--background`/`--card` bands), not one continuous flat scroll. Depth still comes from spacing, color, and type — never shadow.
- Motion is responsive (real feedback on interaction) plus one deliberate page-load stagger on the intro; never choreographed scroll reveals (see Do's and Don'ts).
- Every motion on the page shares one curve, `--ease-out-expo` (`cubic-bezier(0.16, 1, 0.3, 1)`). Durations vary by what is moving; the curve does not.
- The theme flip crossfades rather than cutting. It is the only action on the page that changes everything at once and does not navigate away, so it is the one state change that earns a transition of its own.

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
- **Border** (`oklch(0.74 0.02 250)` light / `oklch(0.95 0.008 250 / 18%)` dark): hairline row dividers only. Both were originally a tone fainter (`0.83` / `10%`) and measured ~1.25:1 against `--card` — the dividers were structurally present but visually absent. Darkened until each theme lands near 1.7:1, matched to each other, which reads as a hairline rather than disappearing.

## 4. Typography

**Display Font:** Libre Baskerville Variable (with Georgia, serif fallback) — the personal name only.
**Body Font:** Karla Variable (with sans-serif fallback) — everything else: bio, section headings, project/reading rows.
There is no third face. A monospace (Fragment Mono) once carried sources and index numerals and was removed: the four-part signature of *display serif + italic emphasis + small mono metadata + ruled separators* is a saturated aesthetic family, and mono is the weakest leg of it to defend here. This is a personal site with a "quiet craftsman" voice, not a technical product — mono as shorthand for "developer" reads as costume rather than meaning. Karla now carries those labels, separated from body copy by weight and figure style instead of by family.

Both the roman and the true italic faces are imported (`@fontsource-variable/libre-baskerville` plus its `/wght-italic.css`). The italic is not optional: the surname is the one italic word on the page and it is set at display size, where a browser-synthesised oblique of the roman is plainly visible as a sheared, mismatched letterform.

Each stack carries a metric-matched fallback face before its generic — `Karla Fallback` and `Libre Baskerville Fallback`, declared in `src/index.css`. These are not new typefaces: each is a locally-installed stand-in (Arial/Helvetica, Georgia) re-proportioned with `size-adjust` and ascent/descent overrides so it occupies exactly the space its web font will. Fonts load `font-display: swap`, so without this the first paint uses a differently-proportioned fallback and every line of text shifts when the real font arrives. The percentages are derived from the two fonts' own `unitsPerEm`, ascent, descent, and average character width — computed, never estimated — so they must be recalculated if a family is ever swapped.

### Named Rules
**The Metric-Matched Fallback Rule.** A web font never sits directly in front of a bare generic. Every family in `theme.css` goes web font → matched fallback face → generic. Adding a family means adding its fallback face too.

**Character:** Two families — a classic book-serif for the one display moment, and a warm humanist grotesque for everything else, scanned labels included. The things meant to be scanned separate from the things meant to be read by weight, size, and tabular figures rather than by a change of family. One fewer voice, and the remaining two are further apart.

### Hierarchy
- **Display** (700 weight serif, `clamp(3rem, 2rem + 3.5vw, 4.5rem)`, line-height 1.05, `-0.02em`): the name only — "Jeremy" roman, "Walton" italic and colored primary. The ceiling stayed at 4.5rem; the floor and slope rose so the type actually *reaches* it. The previous curve needed a ~1467px window to hit its own maximum, so on every real screen the name rendered well under the size it was specified at.
- **Headline** (700 weight sans, `1.5rem`–`1.875rem`): "What I'm working on" / "What I'm reading" section headings.
- **Body** (400 weight sans, `1.125rem`–`1.25rem`, line-height 1.6, full `--foreground`): bio paragraph. Capped at 65ch. Previously mixed to 85% ink — a half-measure that cost contrast and bought nothing.
- **Row title** (600 weight sans, `1.125rem`): project/reading item titles.
- **Secondary** (`0.875rem`): row descriptions at 400 and sources at 500. One tier, one size, separated by weight.
- **Label** (700 weight, `0.875rem`, `tabular-nums`): index numerals. Same size as Secondary, lifted by weight and colour rather than shrunk — tabular figures keep `01` and `02` the same width so the descriptions below stay aligned.

### Named Rules
**The Real-Step Rule.** Every adjacent step in the scale is at least 1.25× apart, measured between elements that actually sit together on the page. The scale once ran 14 / 15 / 16 / 18 / 20 / 20 / 24 — seven values inside a 1.7× span, every step under 1.25, which read as one undifferentiated field of text rather than a hierarchy. Descriptions and sources were merged into a single Secondary tier and the row title lifted away from them. Two sizes one pixel apart are not a hierarchy; they are noise. A new size earns its place only by clearing 1.25× from its neighbour.
**The One Serif Word Rule.** The display serif appears in exactly one place: the personal name. Everything else on the page is Karla — headings, prose, labels, numerals. Two typefaces, and the serif is a single deliberate accent that never competes with Karla for the reader's attention on actual prose.

**The No Third Voice Rule.** A new typeface is not how this page makes a distinction. Weight, size, colour, and figure style come first; reach for another family only when those four genuinely cannot carry it. A monospace was added here once for "developer" flavour and later removed — it was decoration wearing the costume of meaning.

## 5. Elevation

Flat by default — depth comes from spacing, band background color, and the accent color, not shadow. Section-label chips (Components, below) are the one place a filled background appears, and it's flat there too.

### Named Rules
**The Flat-By-Default Rule.** Surfaces sit flat at rest. Any elevation cue appears only as a direct response to interaction (hover, focus), never as passive decoration. Band color changes are not elevation — they're ground-plane changes, still flat, no shadow at the seam.

## 6. CSS Modules

Every component's styling is a `<component>.module.css` beside an `index.tsx` in its own folder; a component with no styling of its own stays a single flat file. Design tokens live in `src/theme.css`, base rules in `src/index.css`, and the reset in `src/reset.css`. There is no global utility layer — every element that needs layout carries a module class that declares it. Four rules:

**One module per component, all of it.** A `className` is module classes or utility classes, never both on one element. An element with a module class gets every property from that class — layout included. Where two modules need the same handful of declarations, repeat them; three plain lines beat an indirection, and they need no comment justifying themselves.

**BEM names.** `.block`, `.block__element`, `.block__element--modifier`. In JSX, reach them with bracket access — `styles["flip-photo__card"]` — since the dashes rule out dot access. A boolean prop picks a modifier (`ListSection`'s `underlined`), never a string union of class names.

**Nest everything under the block.** One top-level rule per block. Elements nest inside the block, modifiers nest inside their element as `&.block__element--modifier`, and states and media queries nest inside whatever they modify. Native CSS nesting cannot join `&` to a suffix, so write the element's full class name (`.flip-photo__card`, not `&__card`) — that is a Sass feature and it will not compile here.

**Theme with `light-dark()`, never a selector.** A value that differs between themes is one declaration, not two rules: `filter: light-dark(grayscale(1), none)`. Modules never reference `:root`, a theme class, or `prefers-color-scheme` — see Section 7.

```css
.flip-photo {
  perspective: 1000px;

  .flip-photo__face {
    backface-visibility: hidden;

    &.flip-photo__face--front {
      filter: grayscale(var(--photo-grayscale));
    }
  }

  &:hover .flip-photo__card {
    transform: rotateY(180deg);
  }
}
```

## 7. Theming

`src/theme.css` declares every token on `:root` as a `light-dark()` pair under `color-scheme: light dark`, so the system preference is the default with no JavaScript involved. An explicit choice is a `data-theme-mode` attribute on `<html>`, and the only thing those blocks change is `color-scheme`:

```css
:root[data-theme-mode="light"] { color-scheme: only light; }
:root[data-theme-mode="dark"]  { color-scheme: only dark; }
```

Because every themed *color* is already a pair, flipping `color-scheme` *is* the override — no color is redeclared. A blocking script in `index.html` applies a stored override before first paint; with nothing stored it sets no attribute and the system preference wins.

`light-dark()` is a color function and is valid **only** where CSS expects a `<color>`. A browser drops `filter: light-dark(grayscale(1), none)` as invalid, and a build step that rewrites it into custom properties will hide that from you. So anything that is not a color gets a plain token, flipped in three places — the `:root` default, the forced-dark block, and a `prefers-color-scheme: dark` block guarded by `:not([data-theme-mode="light"])` so a forced-light choice still wins:

```css
:root { --photo-grayscale: 1; }
:root[data-theme-mode="dark"] { --photo-grayscale: 0; }
@media (prefers-color-scheme: dark) {
  :root:not([data-theme-mode="light"]) { --photo-grayscale: 0; }
}
```

## 8. Components

### Name / Display Headline
- **Shape:** no container, plain text.
- **Style:** Libre Baskerville bold; first name in ink color, surname italic in primary accent (navy).

### Contact Icons
- **Shape:** 36×36px hit target, `rounded-lg` corners — the shared button radius, not a circle. Rendered as a native `<a>`: passing `href` to `Button` switches its element from `<button>` to `<a>`, so the link keeps anchor semantics.
- **Style:** icon inherits page `--foreground` at rest — no fill, no labels, no pill chrome. On hover the background fills `--muted` and text stays `--foreground`; focus-visible draws a `--ring` ring. The accent does *not* appear here — unlike the row arrow, these icons don't turn primary on hover.
- **Button component:** there is exactly one button on this site — a 36×36px ghost icon button — so `Button` takes no `variant`, no `size`, and no `className` at all; every caller renders the same thing. `className` is deliberately omitted from its props type, so an attempt to restyle it from a call site is a compile error rather than a silent override — anything visual goes in the module. One hit-target size everywhere: the theme toggle and the contact icons are both 36px. Its styling lives in `button.module.css`, and it reads the same design tokens (`--radius`, `--muted`, `--foreground`, `--ring`) from `theme.css`, and its one theme-dependent value — the hover fill — is a `light-dark()` pair rather than a second rule. `--muted` is its own token, not a duplicate of `--card`: the two once carried byte-identical values, which put the hover fill at 1.16:1 light / 1.05:1 dark against the hero band — computed, present, and invisible, the same failure the border token once shipped with. It is now tuned per theme to 1.51:1 / 1.49:1, matched across themes the way the border tokens are. The transparent border is load-bearing (it reserves the space the focus ring fills, so focusing doesn't shift layout) and `background-clip: padding-box` keeps the hover fill inside it. The press state sets `transition-duration: 0s` so the 1px depression lands on the same frame as the click — under ~80ms reads as instant, and a 150ms eased press reads as lag. The release still eases, because `:active` no longer matches by then and the base duration applies.
- **Icon glyph size:** icons are set to 16px by their own `size` prop, which is the only source of truth — no CSS rule overrides it.
- **Icon source:** [phosphor-animated.com](https://phosphor-animated.com/) (hover-animated, MIT, vendored as source into `src/components/icons/`) for the envelope; the theme toggle's sun/moon also come from there. GitHub, LinkedIn, and X are static Phosphor light-weight logo paths vendored into `src/components/icons/logos.tsx` — phosphor-animated has no brand logos, and three inline paths cost less than the `@phosphor-icons/react` package they replaced.
- **Theme toggle animation:** the sun/moon icon's own hover choreography didn't fire from inside the `Button` + `AnimatePresence` wrapper (root cause not fully isolated). Fixed the same way as the row arrow (see List Row): `trigger="none"` on the icon, driven imperatively via a ref's `play()`/`stop()` from the Button's own `onMouseEnter`/`onMouseLeave`, instead of relying on the icon's built-in hover listener.

### Profile Photo
- **Shape:** square, `var(--radius-3xl)` corners, `object-cover`, sitting opposite the name/bio in the hero grid, capped at `max-w-72`. No border, no shadow — flat, per the Flat-By-Default Rule.
- **Face order is load-bearing:** the back face is rendered *first* and the front face second, so the front paints over the back. In a working 3D context the order is irrelevant — `backface-visibility` culls one face outright and only ever one is painted. It matters when that 3D context is lost: `rotateY(180deg)` degrades to a plain horizontal mirror and `backface-visibility` stops culling anything, so whichever face paints last wins. A view-transition snapshot flattens the context exactly this way, which made the photo mirror itself for a frame on every theme toggle. Painting the front last means the worst case is a hidden mirror behind an opaque photo instead of a visible one in front of it. Do not reorder these two `<img>` tags.
- **Style:** one source image (`profile-min.png`), rendered twice as a 3D flip card (`perspective` on the wrapper, `preserve-3d` + `backface-visibility: hidden` on front/back faces, `rotateY(180deg)` on the back face and on hover). Styling lives in `flip-photo.module.css`. Each face reads the `--photo-grayscale` token, the back as `calc(1 - ...)`, so the two stay opposites in either theme. At rest: color in dark mode, black-and-white in light mode (CSS `grayscale`, not a second exported file). On hover: a 1000ms `rotateY` flip reveals the back face, which is always the *opposite* rendering of the front — grayscale flips to color, color flips to grayscale — regardless of theme. `prefers-reduced-motion` drops the transition duration so the swap is instant rather than animated; the flip itself (a hover-only, non-essential embellishment) still happens since it's the whole point of the interaction, just without the spin. The flip is gated behind `@media (hover: hover)`, so it does not exist at all on touch devices — a phone has no real hover, and a tap would fire the emulated one and strand the photo face-down until the next tap elsewhere.

### Section Heading
- **Copy:** "What I'm working on" (Projects) and "What I'm reading" (Reading List) — first-person and conversational rather than the generic list-noun labels, matching the "reads like a person" brand personality.
- **Shape:** plain text, no chip/box/border. A solid or outlined chip was tried here and dropped as too heavy ("chunky boxes") for a page that's otherwise flat and quiet.
- **Style:** two variants, one per section, so the pair sitting side by side in the Work band still reads as two different things: **What I'm working on** is set directly in `--primary` (navy) text; **What I'm reading** stays `--foreground` (ink) text with a `--primary`-colored underline (`decoration-2`, generous `underline-offset`). Colored text vs. ink text with a colored underline — same accent, two quieter treatments, no fill.

### List Row (shared by Projects and Reading List)
- **Shape:** full-width hairline rows, no card container, no side-stripe, no badge/tag. The hairlines come from `divide-y divide-border` on the list container, so the last row has no trailing rule and no separator element is rendered between rows. `ListRow` renders the row and `ListSection` renders the heading + divided list, so both lists share both pieces and can't drift apart.
- **Anatomy, all but title optional:** one line holds an optional index (Projects only: `01`, `02`…, Karla 700 with tabular figures, in primary at full opacity), the title, and an inline source at Karla 500 prefixed with "— " — all on the same line, wrapping together if the combination is long; an arrow icon (phosphor-animated's `arrow-square-out` — the closest match to the old plain arrow-up-right, since phosphor-animated doesn't have that exact glyph) sits right-aligned on that line. On row hover the arrow turns primary and scales to 125% over 400ms (`group-hover:scale-125`), while its own built-in slip-out animation plays — driven from the row, not the icon, via `useIconHover` (the icon is set `trigger="none"` so the whole row is the hover target, not just the glyph). 400ms is deliberately half the icon's 800ms choreography, so the growth finishes as the arrow reaches the top of its slip-out and doesn't keep growing on the way back. The icon's own motion is small on purpose — the scale is what makes the hover read, so the two shouldn't both be loud. A muted description/note paragraph follows below when present. Reading List rows have no index, so their content sits flush left instead of indented under one.
- **Why no tags:** reading-list category badges (UI/AI/CSS/Rails, one hardcoded color per category) were tried and dropped — they didn't help a reader decide anything, and they were the one place the two lists' row shapes diverged. Source + title + optional description does the job.

### Theme Flip

Switching themes used to repaint every colour on the page in a single frame — a hard cut, which is the loudest possible way to make a quiet change. `toggleTheme` now wraps the switch in the native View Transitions API, so the browser crossfades a snapshot of the whole page over 300ms on `--ease-out-expo`.

Three things about the implementation are load-bearing:

- **The `data-theme-mode` attribute is set inside the transition callback, not left to the effect that normally syncs it.** `startViewTransition` snapshots the DOM as soon as the callback returns; a React state update alone would land too late to be captured, and the page would cut anyway.
- **It is skipped entirely when `prefers-reduced-motion` is set,** and the `::view-transition-old/new(root)` animations are also disabled in CSS. Guarding in one place would be enough; guarding in both means neither a JS path nor a CSS path can reintroduce it.
- **No polyfill, no fallback path.** Browsers without `startViewTransition` fall through to the plain instant switch, which is exactly the behaviour that shipped before. The feature is additive by construction.

The toggle's own icon swap is deliberately *not* inside the transition — it keeps its own 220ms rotate-and-scale choreography, which reads as the button responding while the page behind it dissolves.

### Named Rules
**The Reduced-Motion Means Less Motion Rule.** `prefers-reduced-motion` must remove movement, not merely remove its duration. `transition: none` on a rule that also changes `transform` converts a smooth 125% scale into an instant snap, which is worse for the reader it is meant to protect. The row arrow now drops the `transform` outright under that query and keeps only the colour change, which was always the real affordance. Check every reduced-motion block for this: if the property being suppressed is a movement, suppress the property, not the transition.

## 9. Do's and Don'ts

### Do:
- **Do** surface the intro and contact/social links early — orient the visitor immediately, the way una.im does.
- **Do** keep the display serif to the name only; everything else is Karla, labels and numerals included.
- **Do** let the primary accent (navy) show up deliberately — the surname, link hover/focus, project index numerals, one Section Heading per pair — never as a background wash or a filled chip.
- **Do** build the page as full-width bands with an inner `max-w-5xl` container, not one centered narrow column top to bottom.
- **Do** support `prefers-color-scheme` by default with a persisted user override (per PRD theming requirement).
- **Do** support `prefers-reduced-motion` with an instant/no-op alternative for the intro stagger.

### Don't:
- **Don't** build a corporate resume/portfolio look — no credibility-signaling layout, no "download resume" energy.
- **Don't** default to a generic SaaS-template look: no gradient-clipped text, no tracked-caps eyebrows above every section, no cream/sand default background chosen "because it's warm."
- **Don't** use side-stripe borders, glassmorphism, or numbered *section* markers (`01 About / 02 Projects`) as scaffolding — the numerals on Projects are a genuine ordered list, not section eyebrows, and that distinction matters.
- **Don't** use `animation-timeline: view()` scroll-driven reveals on list rows — verified in-browser to strand content at partial opacity when the timeline doesn't settle on load. The one page-load intro stagger is the only motion on this page.
- **Don't** bring back category badges/tags on reading-list rows — tried, dropped, didn't earn their space.
- **Don't** add stone/marble texture, a curved SVG section divider, emoji, a hand-drawn signature graphic, a graphic "hero mark" in place of the real photo, or a filled/outlined chip around a section heading — all tried or considered and dropped. The Profile Photo and Section Heading color/underline variation are the layout personality this system uses; don't add a decorative device on top of them without cutting one first.
- **Don't** add a second exported image file (e.g. a black-and-white PNG variant) when a CSS filter can derive it from the one source image — see Profile Photo. The flip card renders two `<img>` tags, but both point at the same one file; the color/grayscale difference between them is still filter-only.
