# Personal Site — PRD

## Summary
A personal hub site for Jeremy Walton: a short bio, a list of projects, and a curated list of articles/videos worth reading. Built as a single-page React app, deployed to GitHub Pages at www.launchtabs.com.

## Goals
- Give friends, peers, and future-self a lightweight, low-maintenance place to see what Jeremy's up to and what he's reading.
- Not a resume/portfolio play — no pressure to optimize for recruiters or formal credibility signals.

## Non-Goals
- No blog/long-form writing platform (v1).
- No headless CMS or comment system.
- No dedicated per-project pages (v1).

## Audience
Friends, peers, and Jeremy's own future self. Content can be personal/informal rather than curated for outside judgment.

## Site Structure
Single scrolling page with sections:
1. **About** — short bio only (a few sentences, no resume-style breakdown).
2. **Projects** — simple list/grid, each entry: title, one-line description, link out (repo/live site).
3. **Reading List** — curated links list: title, link, source, optional one-line note on why it's worth reading. No per-entry commentary/essays, no tagging/categorization (v1).
4. **Contact** — simple links/icons (email, GitHub, social), no contact form.

## Features
- **Theme toggle** — user-switchable dark/light mode.
- **Domain** — keep existing CNAME (www.launchtabs.com).

## Tech Stack
- React, static export/SPA (e.g. Vite + React), deployed as static files to GitHub Pages.
- Content (projects, reading list) lives in structured data files (JSON or Markdown) separate from UI components, imported at build time. Updating content means editing a data file and redeploying — no runtime CMS.

## Design Direction
No strong visual direction set yet — to be decided during implementation/design review. Must support both a dark and light theme (see Theme toggle above).

## Open Questions / Deferred
- Visual design language (minimal, dark/dev-y, warm — undecided).

## Out of Scope (v1)
- Analytics
- Contact form
- CMS
- Multi-page routing
- Per-project detail pages
- Reading list categorization/tagging
