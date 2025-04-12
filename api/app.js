import express from "express";
import cors from "cors";

import frontControllerConvertRouter from "./routes/frontControllerConvert.js";
import frontControllerSaveRouter from "./routes/frontControllerSave.js";

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/frontControllerConvert", frontControllerConvertRouter);
app.use("/frontControllerSave", frontControllerSaveRouter);

export default app;
