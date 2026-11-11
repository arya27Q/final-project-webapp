import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "success", message: "API Server running smoothly" });
});

app.listen(PORT, () => {
  console.log(`?? Backend server ready at: http://localhost:${PORT}`);
});
