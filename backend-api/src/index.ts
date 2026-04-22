import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

import { v1HealthRouter } from "./routes/v1/health.js";

const app = express();
const port = Number(process.env.PORT ?? 4000);

app.use(
  cors({
    origin: process.env.CORS_ORIGIN ?? "http://localhost:3000",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", v1HealthRouter);

app.listen(port, () => {
  console.log(`backend-api listening on http://localhost:${port}`);
});
