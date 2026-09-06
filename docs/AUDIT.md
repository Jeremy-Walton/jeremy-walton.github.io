# Audit Record

Last run: 2026-09-06 (third run same day, after the second `polish` pass and the `animate` pass). Re-run `/impeccable audit` to refresh this file.

## Score: 19/20 — Excellent

| # | Dimension | Score | Key finding |
|---|-----------|-------|-------------|
| 1 | Accessibility | 4 | No WCAG AA gaps. Worst text pair 6.18:1. Reduced motion now covers all six motion sources. |
| 2 | Performance | 3 | **Accepted at 3.** Both levers declined — see Declined below. Not a gap. |
| 3 | Responsive | 4 | No overflow at any width. Flip gated to `hover: hover`. |
| 4 | Theming | 4 | Full `light-dark()` system; the theme *switch* now crossfades and degrades cleanly. |
| 5 | Anti-patterns | 4 | No tells. One easing token across every motion. |

History: 16 → 18 → 19 → 19 → 19 → **19**.

**19/20 is the accepted resting state, not an open gap.** Every P2 and P3 that could be fixed by editing code has been fixed. The only remaining levers are the two Performance ones, and both are now explicitly declined (see Declined). Future runs should score Performance 3, note it as a settled trade-off, and not re-raise it.

## What changed since the last run

All verified fixed:

- **`--muted` is now a real token**, not a byte-copy of `--card`. The button hover fill went from 1.16:1 light / 1.05:1 dark — computed, present, invisible — to **1.51:1 / 1.49:1**, matched across themes the way the border tokens are.
- **One easing curve.** `--ease-out-expo` replaced four different curves (including Material's ease-in-out on the button, which is not an ease-out at all).
- **The theme flip crossfades** via the native View Transitions API instead of repainting every colour in one frame. Zero library cost; guarded in both JS and CSS for `prefers-reduced-motion`; falls through to the previous instant switch on browsers without it.
- **Reduced motion now removes movement, not duration.** The row arrow's `transition: none` was converting a smooth 125% grow into an instant snap — worse for the reader it was meant to protect. It now drops the `transform` outright and keeps the colour change.
- **Button press lands on the same frame** (`transition-duration: 0s` on `:active`), release still eases.

## Measured contrast — current tokens

| Pair | Light | Dark |
|---|---|---|
| Bio + "Jeremy" | 16.73:1 | 17.00:1 |
| Row titles | 14.37:1 | 15.32:1 |
| Row descriptions + sources | 6.27:1 | **6.18:1** ← worst |
| Footer text | 7.30:1 | 6.86:1 |
| "Walton" (display) | 8.71:1 | 7.99:1 |
| Section headings + numerals | 7.48:1 | 7.20:1 |
| Icon glyph on hover fill | 11.11:1 | 11.37:1 |
| Focus ring vs bg (needs 3:1) | 8.71:1 | 7.99:1 |
| Hairline vs card (non-text) | 1.71:1 | 1.68:1 |
| Button hover fill (non-text) | 1.51:1 | 1.49:1 |

No WCAG AA failures.

## Open findings

### P3 — No Open Graph or Twitter card tags

`index.html` has none. The site exists so friends click a shared link, so previews matter more here than on most sites. Blocked on choosing a preview image.

### P3 — Unverified: the toggle button dissolves inside its own transition

The view transition crossfades the whole page, the fixed theme-toggle button included, while that button's icon simultaneously runs its own 220ms rotate-and-scale swap. Two overlapping motions on the same 36px element. It may read as one gesture or as a doubled blur. **Not observed** — no browser was used. Worth one look; if it reads badly, giving the toggle its own `view-transition-name` isolates it.

### P3 — Carried over, unchanged

- Screen readers are not told a link opens a new tab (every `target="_blank"`). WCAG 3.2.5 is AAA, so advisory.
- `aria-label="X"` on the X/Twitter icon reads as a bare letter.
- 36×36px hit targets sit below the common 44px guideline. They pass WCAG 2.5.8 AA (24×24) and the size is a documented design decision. Left alone.
- `padding-left: 1.875rem` in `list-row.module.css` is a deliberate optical offset, not a scale step. Leave it.

## Positive findings

- **Reduced-motion coverage is now complete.** Six independent motion sources — the intro stagger, the view transition (guarded twice, in JS and CSS), the row arrow, the photo flip, the toggle's icon swap, and the vendored icon runtime — and every one of them has an alternative. The arrow fix in particular corrected a case where the reduced-motion branch was *more* jarring than the default.
- **The theme transition was solved with a platform feature, not a library.** Net cost ~50 bytes gzip.
- **Contrast is computed, matched, and documented.** Both non-text pairs (hairline, hover fill) are deliberately tuned to sit close across themes rather than left to fall where they land.
- **Semantics are clean.** h1 → h2 → h3 in order, `<main>`/`<footer>` landmarks, both list sections named via `aria-labelledby`, decorative back-face image correctly `alt=""` + `aria-hidden`.
- **Detector clean** (`[]`), lint at its 13-warning baseline, `tsc` passing.

## A regression this session, and why it matters to the next auditor

The View Transitions change introduced a visible bug: the profile photo mirrored itself horizontally for a frame on every theme toggle. Jeremy caught it in the browser.

**Cause:** `backface-visibility: hidden` only culls inside a 3D rendering context. A view-transition snapshot flattens that context, at which point `rotateY(180deg)` degrades into a plain horizontal mirror and nothing culls it. The back face was last in the DOM, so it painted on top.

**Fix:** the back face is now rendered *first* and the front face second (`src/components/flip-photo/index.tsx`). In a working 3D context the order is irrelevant — only one face is ever painted. It matters only when the context is lost, and then the front simply covers the mirror.

Two lessons worth carrying forward:

- Any `transform-style: preserve-3d` component is fragile under snapshot-based effects. If another view transition or `filter`/`contain` is ever added to an ancestor, re-check the flip card first.
- **This bug was not catchable by any check in this file.** Build, lint, detector, and computed contrast were all green while it was live.

## Verification method

Done **without a browser**: reading code, computing WCAG contrast from the OKLCH tokens in a script, running the bundled detector, and `npm run build` + `npm run lint`.

⚠️ **A contrast script bug was found and fixed during the previous run.** The first version double-applied the sRGB transfer function and composited alpha in linear space. If you write another: relative luminance is computed from *linear* sRGB, but CSS alpha compositing happens in *gamma-encoded* sRGB. Get either backwards and you produce plausible-looking numbers that are wrong. Validate any new script against a known value in this file before trusting it.

**Never verified in this series:** real paint timing, actual CLS, screen-reader output, and how the typography renders. Headline fit at the italic was reasoned, not measured — no font parser is installed, so glyph advances were never read.

Standing checks, all currently passing:

```
npm run build                                          # tsc + vite
npm run lint                                           # oxlint: 13 pre-existing cosmetic warnings
node .claude/skills/impeccable/scripts/detect.mjs --json src index.html   # []
```

## Notes for whoever runs the next audit

- **13 lint warnings are the baseline**, not a regression. All are `only-export-components` fast-refresh notes plus two `react(refs)` false positives.
- **The detector flags any font not declared in `DESIGN.md`.** Working as intended. Document a new face rather than suppressing the rule.
- **Contrast must be computed, not eyeballed** — and the script itself validated before its output is trusted.
- **A green board is not proof the page is correct.** See the regression section above.
- **Declined and settled — do not re-propose:**
  - The workbench / small-press / colour-field visual directions. Built, compared, judged worse.
  - **Subsetting Libre Baskerville** (65 kB rendering the 13 characters of "Jeremy Walton"). Declined 2026-09-06: a build step is not worth 65 kB on a personal page that friends visit occasionally. The italic stays — without it the surname renders as a browser-faked oblique, which is visible at display size.
  - **Reducing the ~97 kB gzip JS bundle.** That means changing the stack, which is a `TECHNICAL_DESIGN.md` decision, not an audit finding.
