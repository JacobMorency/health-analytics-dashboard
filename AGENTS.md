# Agent guidance — Health Analytics Dashboard

Conventions for humans and AI assistants working in this repository.

## Branching and PRs

- **`dev`** — Default integration branch. Open pull requests **into `dev`** for routine feature and task work.
- **`main`** — Promote from `dev` when you want a stable snapshot (release, portfolio). Avoid merging arbitrary feature branches straight into `main` without review.
- **Task and feature branches** — Branch off **`dev`** (after `git pull`). Use clear, short-lived names, for example:
  - `task/<task-number>-<short-slug>` (e.g. `task/10-initialize-project`)
  - `feat/<area>-<short-slug>` or `fix/<area>-<short-slug>` when not tied to a numbered task
- **Commits** — Prefer **small, sequential commits** that are easy to review and revert.

## Repository layout

| Path                   | Stack / role                                                  |
| ---------------------- | ------------------------------------------------------------- |
| `frontend/`            | Next.js (App Router), TypeScript, Tailwind                    |
| `backend-api/`         | Express, TypeScript, `/api/v1`                                |
| `python-data-service/` | Python; CSV / metrics processing (wired to API in later work) |

Install Node dependencies from the **repository root** (`npm install`); workspaces are defined in the root `package.json`.

## Naming conventions

- **TypeScript / React** — `PascalCase` for React components and types that behave like components. `camelCase` for functions, variables, and hooks. Use `SCREAMING_SNAKE_CASE` for environment variable names in `.env` examples and config constants where appropriate.
- **Files** — Follow Next.js defaults under `frontend/` (`app/`, `page.tsx`, `layout.tsx`). Elsewhere prefer **kebab-case** for non-Next filenames when adding new modules (e.g. `import-wizard.tsx`); match existing files in a directory when extending them.
- **Python** — `snake_case` for modules, functions, and variables; `PascalCase` only for classes.

## Folder conventions

- **`frontend/src/app`** — App Router routes, layouts, and route-specific UI.
- **`backend-api/src`** — Application entry and modules (see API layers below).
- **`python-data-service/src`** — Python package modules and entrypoints.

## Backend API layers (Express)

Versioned HTTP paths stay under **`/api/v1/`**.

Target layout as the API grows:

| Area                        | Role                                                              |
| --------------------------- | ----------------------------------------------------------------- |
| `src/routes/`               | Routers and path wiring; attach to `app` here                     |
| `src/handlers/`             | Thin HTTP handlers (parse request, call service, set status/body) |
| `src/services/`             | Domain logic, orchestration, calls to data layer                  |
| `src/middleware/`           | Express middleware (auth, logging, errors)                        |
| `src/lib/` or `src/config/` | Shared helpers, env loading, small utilities                      |

Start simple: new endpoints get a route module under `src/routes/` first; extract handlers/services when logic grows.

## Secrets and environment

- Never commit real secrets. Use the per-package `.env.example` files and local `.env` / `.env.local` only on your machine.
- See root `README.md` for install, dev commands, and quality scripts.

## When changing behavior or APIs

- Match existing patterns in the package you touch (imports, error handling, naming).
- If you add scripts, env vars, or new services, update **root `README.md`** so the next person can run the project without guesswork.
