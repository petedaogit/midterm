import express, { json } from "express";
import cors from "cors";
import connectDatabases from "./src/database/database.js";
import router from "./src/router/index.js";

const app = express();
const PORT = 4006;

//initialize database
connectDatabases();

app.use(cors());
app.use(express.json());

app.use("/api/v1", router);
//test
app.get("/", (req, res) => {
  res.status(200).json({ message: "OK" });
});

//run server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
