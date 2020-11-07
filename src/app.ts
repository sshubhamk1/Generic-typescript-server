import { config } from "./Engine/Config/constant";

import express, { Application, Router, Request, Response } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ error: false, msg: "Hello to Shubham world" });
});

const server = app.listen(config.PORT, () => {
  console.log(` app listening on port ${config.PORT}`);
});
