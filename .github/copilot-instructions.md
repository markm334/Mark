Purpose
=======
This file tells AI coding agents how this repository is organized and how to make safe, useful edits quickly. Focus on the SPA structure, provider boundaries, import aliases, and styling patterns.

Quick facts
-----------
- Project: Vite + React + TypeScript single-page portfolio site.
- Start: `npm run dev` (Vite server on port 8080 by default).
- Build: `npm run build` (also `npm run build:dev`).
- Lint: `npm run lint`.
- Key dirs: `src/components/ui/`, `src/components/portfolio/`, `src/pages/`, `public/`.

Architecture & big-picture
--------------------------
- Entry: `src/main.tsx` renders `src/App.tsx`.
- Routing & providers: `src/App.tsx` composes global providers: `HelmetProvider`, `QueryClientProvider` (react-query), `TooltipProvider`, global `Toaster` components and `BrowserRouter`.
  - Important: Add new application routes in `src/App.tsx` above the catch-all `Route path="*"` comment.
- Page composition: `src/pages/Index.tsx` is a single-page composition that imports ordered section components from `src/components/portfolio/*` (e.g., `Hero`, `About`, `SelectedWork`). The order in `Index.tsx` controls visual layout and scroll order.
- UI primitives: `src/components/ui/*` contains local wrappers for UI primitives (Radix, shadcn patterns, Sonner, etc.). Prefer using these wrappers for consistent styling and behavior instead of importing Radix primitives directly.

Conventions & patterns
----------------------
- Import alias: `@/` maps to `src/` (see `tsconfig.json` and `vite.config.ts`), so use imports like `import X from "@/components/.."`.
- Styling: Tailwind CSS is used. `src/index.css` is the Tailwind entry. Use utility classes and existing component wrappers in `src/components/ui`.
- Notifications: There are two notification systems present: `Toaster` (custom wrapper) and `Sonner` (`src/components/ui/sonner`). Avoid creating duplicate toasts by reusing these.
- Data fetching: `@tanstack/react-query` is initialized in `App.tsx`. Use react-query hooks and keep data concerns localized to components or hooks (no global Redux observed).
- Accessibility: Many Radix primitives are used—follow existing patterns in `src/components/ui` to preserve ARIA behaviors.

Build / dev workflows
---------------------
- Install: `npm install` (or your package manager of choice).
- Dev server: `npm run dev` (Vite serves at `http://localhost:8080` by default; `vite.config.ts` sets `port: 8080` and `host: "::"`).
- Build: `npm run build` or `npm run build:dev` for development-mode build.
- Preview: `npm run preview`.
- Lint: `npm run lint` (ESLint configured).

Files to check when making changes
----------------------------------
- App and routing: `src/App.tsx`.
- Page layout: `src/pages/Index.tsx`.
- Section components: `src/components/portfolio/*` (each section is self-contained).
- UI primitives / wrappers: `src/components/ui/*` (follow these for consistent UX/accessibility).
- Build/dev config: `package.json`, `vite.config.ts`, `tailwind.config.ts`, `tsconfig.json`.

Integration points & external deps
---------------------------------
- Radix UI (via local wrappers in `src/components/ui`).
- Tailwind CSS + `tailwindcss-animate`.
- `@tanstack/react-query` for data fetching.
- `react-router-dom` for routing.
- `sonner` and a local `Toaster` for user notifications.
- `react-helmet-async` for page meta/tags (used in `Index.tsx`).

Common tasks examples
---------------------
- Add a route: edit `src/App.tsx` and add your `<Route path="/foo" element={<Foo/>} />` above the `*` route.
- Add a new section to the home page: create `src/components/portfolio/MySection.tsx`, export default, and import + place it in `src/pages/Index.tsx` where you want it to appear.
- Use aliases: `import MyComp from "@/components/portfolio/MySection"`.

What to avoid / gotchas
-----------------------
- Don't bypass the `src/components/ui` wrappers for UI primitives—doing so may break global styles/behaviors.
- When adding global providers, prefer adding them to `src/App.tsx` near the existing providers so their order and boundaries remain predictable.
- The repository has no test runner configured; do not add test assumptions unless you add the required config and scripts.

If uncertain or making wide changes
---------------------------------
- Run the dev server locally (`npm run dev`) and check the affected page sections.
- Inspect `src/components/ui` for examples of patterns (toasts, dialog, tooltip) before implementing similar features.

Next step
---------
If this looks correct, I will commit this file. Tell me any missing details or local workflows to include (deploy, environment variables, preview URL).
