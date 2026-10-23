import express from "express";
import cors from "cors";

const app = express();

let latestGameTime = 0;

app.use(cors());
app.use(express.json());

app.post("/gsi", (req, res) => {
  if (req.body.map?.clock_time !== undefined) {
    latestGameTime = req.body.map.clock_time;
  }

  res.sendStatus(200);
});

app.get("/game-time", (req, res) => {
  res.json({
    gameTime: latestGameTime
  });
});

export function startGsiServer() {
  app.listen(3000, () => {
    console.log("GSI Server started on port 3000");
  });
}