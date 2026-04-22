import { Router } from "express";

/** GET /api/v1/health */
export const v1HealthRouter = Router();

v1HealthRouter.get("/health", (_req, res) => {
  res.json({ ok: true, service: "backend-api" });
});
