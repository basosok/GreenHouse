import table from "./db_init.js";
import express from "express";
import bodyParser from "body-parser";
import findRoutes from "./routes/index.js";
import open from "open";
import cors from "cors";
await open("http://127.0.0.1:5500/start/index.html");
const app = express();
const PORT = 8000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
findRoutes(app, table);

app.listen(PORT, function () {
    console.log(`App running on port ${PORT}`);
});
