# Health Analytics Dashboard

Monorepo for a health analytics web app: Next.js frontend, Express API, and a Python data-processing service.

## Layout

| Path                   | Role                                                                  |
| ---------------------- | --------------------------------------------------------------------- |
| `frontend/`            | Next.js (App Router) UI                                               |
| `backend-api/`         | Express REST API (`/api/v1`)                                          |
| `python-data-service/` | CSV cleaning and metric normalization (invoked by API in later tasks) |

## Prerequisites

- Node.js 20+
- npm 10+
- Python 3.11+ (for `python-data-service`)

## Install

From the repository root:

```bash
npm install
```

Python service (optional until processing work begins):

```bash
cd python-data-service
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## Develop

Terminal 1 — web:

```bash
npm run dev:web
```

Terminal 2 — API:

```bash
npm run dev:api
```

- Frontend: [http://localhost:3000](http://localhost:3000)
- API health: [http://localhost:4000/api/v1/health](http://localhost:4000/api/v1/health)

## Environment files

Copy examples and adjust locally (never commit real secrets):

```bash
cp frontend/.env.example frontend/.env.local
cp backend-api/.env.example backend-api/.env
```

## Code quality

From the repository root:

```bash
npm run format       # Prettier — write
npm run format:check # Prettier — verify only
npm run lint         # ESLint — frontend + backend-api
npm run lint:py      # Ruff — python-data-service (requires `.venv` + `pip install -r requirements-dev.txt` there)
npm run typecheck    # TypeScript — no emit
npm run check        # format:check + lint + typecheck
```

Branching, naming, and backend folder conventions are documented in [AGENTS.md](AGENTS.md).

## Version control

Feature work should land on short-lived branches (e.g. `task/<n>-<slug>`) and merge via **pull request into `dev`**. Promote **`dev` → `main`** when you want `main` to reflect a stable snapshot. Task 10 scaffolding merged via `task/10-initialize-project`.
