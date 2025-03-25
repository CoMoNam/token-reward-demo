import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

const logs = [];

app.post("/api/reward-log", (req, res) => {
  const { from, to, amount, channel, timestamp } = req.body;
  logs.push({ from, to, amount, channel, timestamp });
  res.status(200).json({ success: true });
});

app.get("/api/reward-log", (req, res) => {
  res.status(200).json(logs);
});

app.listen(4000, () => {
  console.log("🚀 Reward log server running on http://localhost:4000");
});
