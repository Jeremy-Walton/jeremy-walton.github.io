# Technical Design

Companion to @PRD.md — this covers the tech stack and implementation details needed to scaffold and build the site.

## Stack

- **Framework**: React (SPA, no routing — single page)
- **Language**: TypeScript
- **Build tool**: Vite, static export deployed to GitHub Pages
- **Styling**: Tailwind CSS, using its `dark:` variant for theming. Utilities are the default; a CSS Module (`*.module.css`, plain CSS with native nesting) is used where a component has one fixed appearance and no variants for utilities to express — currently just `Button`. Modules still read the same design tokens from `index.css`, and reach dark mode via `:global(.dark) &` rather than the `dark:` variant.
- **UI components**: [shadcn/ui](https://ui.shadcn.com/), built on Base UI primitives (shadcn's current default), with a custom theme configured at install time. Supplemented by the [Fluid Functionalism](https://www.fluidfunctionalism.com) registry, which distributes its own components on top of shadcn. Vendored shadcn components are trimmed to what this site actually uses rather than kept upstream-identical — `Button` carries one style and two sizes instead of the full variant matrix (see DESIGN.md § Contact Icons). The trade-off is accepted deliberately: re-running `shadcn add button` would overwrite the trimmed version, so re-diff it by hand if that ever happens.
- **Testing**: Vitest for basic unit/component tests (e.g. theme toggle logic, data-file shape)
- **Linting/formatting**: ESLint + Prettier
- **Package manager**: npm
- **Node version**: Latest LTS (22.x), pinned in CI and local dev

## Design Tooling

[Impeccable](https://impeccable.style/) is used during development as a Claude Code design skill — it provides design vocabulary/commands and anti-pattern ("anti-slop") checks to guide implementation of the (currently undecided) visual design. It's a dev-time tool, not a runtime dependency of the built site, and works alongside Tailwind/shadcn rather than replacing them.

## Content / Data

Projects and reading list entries live in JSON data files (e.g. `projects.json`, `reading.json`), imported at build time. No Markdown parsing, no CMS. TypeScript types define each entry's shape.

## Theming

- Defaults to the user's system preference (`prefers-color-scheme`).
- Toggle lets the user override; the override is persisted to `localStorage` so it sticks across visits.

## Deployment

GitHub Actions builds the Vite project and publishes to GitHub Pages automatically on push to `main`. No manual deploy step.

## Domain

Custom domain via the existing `CNAME` file (www.launchtabs.com) — preserved through the Pages deploy.
