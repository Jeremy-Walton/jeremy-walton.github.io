# Technical Design

Companion to @PRD.md — this covers the tech stack and implementation details needed to scaffold and build the site.

## Stack

- **Framework**: React (SPA, no routing — single page)
- **Language**: TypeScript
- **Build tool**: Vite, static export deployed to GitHub Pages
- **Styling**: plain CSS, no utility framework. Every component owns a CSS Module (`*.module.css`, native nesting, BEM names) — see DESIGN.md § CSS Modules. Three global files back them: `src/theme.css` (design tokens on `:root`), `src/reset.css` (reset), `src/index.css` (imports plus a short base layer).
- **Theming**: `color-scheme` plus `light-dark()` tokens, with a `data-theme-mode` attribute on `<html>` for an explicit override — see DESIGN.md § Theming.
- **UI components**: [Base UI](https://base-ui.com/) primitives, each vendored into `src/components/ui/` and paired with a CSS Module. Only `Button` exists today, carrying a single fixed appearance (see DESIGN.md § Contact Icons).
- **Linting/formatting**: oxlint
- **Package manager**: npm
- **Node version**: 24, pinned in CI

## Design Tooling

[Impeccable](https://impeccable.style/) is used during development as a Claude Code design skill — it provides design vocabulary/commands and anti-pattern ("anti-slop") checks to guide implementation of the (currently undecided) visual design. It's a dev-time tool, not a runtime dependency of the built site.

## Content / Data

Projects and reading list entries live in JSON data files (e.g. `projects.json`, `reading.json`), imported at build time. No Markdown parsing, no CMS. TypeScript types define each entry's shape.

## Theming

- Defaults to the user's system preference (`prefers-color-scheme`).
- Toggle lets the user override; the override is persisted to `localStorage` so it sticks across visits.

## Deployment

GitHub Actions builds the Vite project and publishes to GitHub Pages automatically on push to `master`. No manual deploy step.

## Domain

Custom domain via the existing `CNAME` file (www.launchtabs.com) — preserved through the Pages deploy.
