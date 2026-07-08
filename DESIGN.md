<!-- SEED: re-run /impeccable document once there's code to capture the actual tokens and components. -->

---
name: Jeremy Walton — Personal Site
description: A quiet, considered personal hub — bio, projects, and a reading list.
---

# Design System: Jeremy Walton — Personal Site

## 1. Overview

**Creative North Star: "The Considered Study"**

A calm, personal space — not a stage. The system takes its cue from una.im's clean, immediately-orienting intro (who this is, how to reach them, right away) but rejects emilkowal.ski's bareness in favor of a little more warmth and texture: a real accent color used sparingly, humanist type, and motion that responds to touch without ever performing. This is a page built for friends and future-self, not for recruiters — it explicitly rejects the corporate resume/portfolio look and the generic SaaS-template aesthetic (gradient heroes, tracked-caps eyebrows, cream-default backgrounds).

**Key Characteristics:**
- Restrained color: mostly tinted neutral, one cool accent used deliberately, never decoratively.
- Single humanist sans typeface carrying both display and body — warmth through letterforms, not through multiple families.
- Flat by default; depth comes from spacing and type, not shadow.
- Motion is responsive (real feedback on interaction), never choreographed or theatrical.

## 2. Colors

A quiet, mostly-neutral palette with one considered accent that appears with intention, not decoration.

### Primary
- **Accent [to be resolved during implementation]**: a cool, considered hue — deep teal, navy, or slate-blue family. Used for links, focus states, and the few moments that need a call to action (e.g. project links). Not used as a background wash.

### Neutral
- **Background / Surface / Ink [to be resolved during implementation]**: a true neutral or very lightly hue-tinted ramp (toward the accent's own hue, not warmed by default). Dark and light themes both required — see PRD theming requirement.

### Named Rules
**The Restrained Rule.** The accent color covers no more than ~10% of any given screen. Its rarity is what makes it register as intentional rather than decorative.

## 3. Typography

**Display Font:** [single humanist sans — font pairing to be chosen at implementation]
**Body Font:** same family as Display (one typeface, multiple weights)

**Character:** Warm and human rather than geometric or clinical — humanist sans letterforms carry the "quiet craftsman" personality without needing a second typeface to do it.

### Hierarchy
- **Display**: used once, for the name/intro line at the top of the page. Restrained size — this is a personal page, not a landing-page hero; avoid shouting (clamp max well under the 6rem ceiling).
- **Body**: the workhorse for bio, project descriptions, and reading-list notes. Capped at 65–75ch line length.
- **Label**: small, understated — used for metadata like reading-list source/date, not for tracked-caps section eyebrows.

### Named Rules
**The One Voice Rule.** One typeface family carries the whole page. Hierarchy comes from weight and size, not from pairing a second font.

## 4. Elevation

Flat by default, consistent with a Responsive (not Choreographed) motion energy — depth is conveyed through spacing, type contrast, and the accent color, not through shadows. If any shadow is used at all, it should be a soft, low-contrast ambient shadow reserved for interactive elements on hover/focus, never a resting decorative layer.

### Named Rules
**The Flat-By-Default Rule.** Surfaces sit flat at rest. Any elevation cue appears only as a direct response to interaction (hover, focus), never as passive decoration.

## 6. Do's and Don'ts

### Do:
- **Do** surface the intro and contact/social links early — orient the visitor immediately, the way una.im does.
- **Do** let the accent color (deep teal / navy / slate-blue family) show up deliberately — links, focus rings, the occasional call to action — not as a background wash.
- **Do** use one humanist sans typeface across the whole page; vary weight and size for hierarchy.
- **Do** support `prefers-color-scheme` by default with a persisted user override (per PRD theming requirement).
- **Do** support `prefers-reduced-motion` with a crossfade/instant alternative for any transition.

### Don't:
- **Don't** build a corporate resume/portfolio look — no credibility-signaling layout, no "download resume" energy.
- **Don't** default to a generic SaaS-template look: no gradient-clipped text, no tracked-caps eyebrows above every section, no cream/sand default background chosen "because it's warm."
- **Don't** go as bare as emilkowal.ski — the accent color and type warmth should keep the page from reading as empty.
- **Don't** use side-stripe borders, glassmorphism, or numbered section markers (01/02/03) as default scaffolding.
- **Don't** choreograph scroll-driven entrance animations — motion here is responsive to interaction, not a performance.
