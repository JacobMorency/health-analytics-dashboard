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

## Version control

Feature work should land on short-lived branches and merge via PR into `main`. Task 10 scaffolding was introduced on branch `task/10-initialize-project`.
