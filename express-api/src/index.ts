require("dotenv").config();

import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import APIRoutes from "./api";
import "./db";

const app = express();

app.use(express.json());
app.use(cors());

app.use((req: Request, _: Response, next: NextFunction) => {
  console.log("Method:", req.method);
  console.log("API URL:", req.originalUrl);
  console.log("===============");
  next();
});

app.get("/", (_: Request, res: Response) => {
  res.status(200).send("API is running");
});

app.use("/api", APIRoutes);

const port = process.env.PORT ?? 3333;
app.listen(port, () => {
  console.log(`Listen at http://localhost:${port}`);
});
