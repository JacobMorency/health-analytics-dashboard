# python-data-service

Python workers for CSV cleaning, validation, and analytics-ready transforms.

## Setup

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Dev dependencies (Ruff lint/format):

```bash
pip install -r requirements-dev.txt
```

## Lint and format

From `python-data-service/` with the venv activated:

```bash
ruff check .
ruff format --check .
ruff format .
```

From the **repository root**, `npm run lint:py` runs the same checks using `python-data-service/.venv/bin/ruff` (create the venv and install dev dependencies first, as above).

## Run

```bash
python -m src.main
```
