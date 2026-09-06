# jeremy-walton.github.io

Personal site for Jeremy Walton — a short bio, what he's working on, and a
reading list. One scrolling page, no routing, no CMS. Live at
[www.launchtabs.com](https://www.launchtabs.com).

## Commands

```sh
npm install
npm run dev      # dev server on :5173
npm run build    # tsc -b && vite build -> dist/
npm run lint     # oxlint
npm run preview  # serve the built dist/
```

## Stack

React 19 + TypeScript on Vite, with the React Compiler enabled (so `useMemo`
and `useCallback` are not written by hand). Styling is plain CSS — CSS Modules
per component, no utility framework. `@` resolves to `src/`.

## Layout

```
index.html          blocking script that applies a stored theme before paint
src/
  main.tsx          root render + ThemeProvider
  App.tsx           the whole page: hero band, work band, footer
  theme.css         design tokens on :root, as light-dark() pairs
  index.css         imports + base rules
  reset.css         reset
  components/       one folder per component: index.tsx + *.module.css
    icons/          animated icons vendored from phosphor-animated.com
    ui/button/      the only Base UI primitive in use
  data/             projects.json, reading.json, and their types
  lib/              theme context, shared hooks
```

Adding a project or a reading item means editing `src/data/*.json` and pushing.

## Deploy

GitHub Actions builds and publishes `dist/` to GitHub Pages on every push to
`master`. `public/CNAME` holds the custom domain and must not be removed.

## Docs

- [docs/PRD.md](docs/PRD.md) — what the site is for and what's out of scope
- [docs/TECHNICAL_DESIGN.md](docs/TECHNICAL_DESIGN.md) — stack decisions
- [docs/PRODUCT.md](docs/PRODUCT.md) — audience, brand, design principles
- [docs/DESIGN.md](docs/DESIGN.md) — colors, type, CSS Module conventions
