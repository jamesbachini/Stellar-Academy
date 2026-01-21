# Repository Guidelines

## Project Structure & Module Organization
- `index.html` and `vite.config.js` power a Vite + React single-page app.
- `src/` contains all application code.
  - `src/main.jsx` bootstraps React.
  - `src/App.jsx` is the page shell and track selector UI.
  - `src/components/` holds reusable UI.
    - `src/components/StellarFlowChart.jsx` is the standalone flow chart component (designed for reuse).
    - `src/components/nodes/LinkNode.jsx` defines custom React Flow nodes.
  - `src/*.css` contains global and component styles.
- No `public/` assets are currently used.

## Build, Test, and Development Commands
- `npm install` — install dependencies.
- `npm run dev` — start the local dev server.
- `npm run build` — create a production build.
- `npm run preview` — locally preview the production build.

## Coding Style & Naming Conventions
- Use 2-space indentation and semicolons in JS/JSX.
- React components use `PascalCase` filenames (e.g., `StellarFlowChart.jsx`).
- Hooks follow the `useX` naming pattern.
- Keep styles in `.css` files alongside usage (`App.css`, `StellarFlowChart.css`).
- Prefer clear, descriptive IDs for flow nodes/edges (e.g., `frontend-guides`).

## Testing Guidelines
- No tests are configured yet. If you add tests, document the framework and add a `npm test` script.
- Recommended: colocate tests under `src/` and name them `*.test.jsx`.

## Commit & Pull Request Guidelines
- The Git history has no established commit convention. If adding commits, prefer concise, imperative messages (e.g., “Add frontend track layout”).
- PRs should include:
  - A short summary of the UI/flow changes.
  - Screenshots or a quick screen recording for visual changes.
  - Any relevant links (e.g., updated docs/Structure source).

## Notes for Contributors
- The flow chart is intentionally isolated to make reuse easy in other sites. Keep changes in `src/components/StellarFlowChart.jsx` and `src/components/nodes/` whenever possible.
- Node clicks should open links in a new tab; do not render raw URLs in the UI.
