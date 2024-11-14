import express from "express";
import { config as dotEnvConfig } from "dotenv";
import cors from "cors";
dotEnvConfig();

const PORT = process.env.PORT ;

const app = express();

app.use(cors());

app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
