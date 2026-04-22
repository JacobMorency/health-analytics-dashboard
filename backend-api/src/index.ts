import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

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

app.get("/api/v1/health", (_req, res) => {
  res.json({ ok: true, service: "backend-api" });
});

app.listen(port, () => {
  console.log(`backend-api listening on http://localhost:${port}`);
});
