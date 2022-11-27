require("dotenv").config();

import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

import Card from "./models/Card";

const app = express();

const port = process.env.PORT ?? 3333;

app.use(express.json());
app.use((req: Request, _: Response, next: NextFunction) => {
  console.log("Method:", req.method);
  console.log("API URL:", req.originalUrl);
  next();
});

app.post("/cards", async (req: Request, res: Response) => {
  const data = new Card(req.body);
  const createData = await data.save();
  res.json(createData);
});

mongoose.connect(process.env.MONGO_URI!).then(() => {
  app.listen(port);
  console.log(`Listen at http://localhost:${port}/`);
});
