import express from "express";
import { config as dotEnvConfig } from "dotenv";
import cors from "cors";
import { connectToDB } from "./src/config/db";
import router from "./src/routes/index.route";
dotEnvConfig();

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", router);

(async () => {
  try {
    await connectToDB();
    console.log(`Database is connected`);

    app.listen(PORT, () =>
      console.log(`Server is running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(`Server is not connected`);
  }
})();
