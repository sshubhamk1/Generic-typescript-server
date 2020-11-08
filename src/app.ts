import express, { Application, Router, Request, Response } from "express";
import bodyParser from "body-parser";

// exporting constants
import { config } from "./Engine/Config/constant";

// express application
const app: Application = express();

// setting up application to accept JSON and urlencoded requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// homepage route
app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ error: false, msg: "Hello to Shubham world" });
});

// exporting routes for different roles
import publicRoutes from "./Public";
import userRoutes from "./RoleUser";
// creating router for express app
const router: Router = Router();

// giveing routes to different roles
router.use("/public", publicRoutes);
router.use("/user", userRoutes);

// giving route path for router in express app
app.use("/api", router);

// starting  server and storing result for socket communication
const server = app.listen(config.PORT, () => {
  console.log(` app listening on port ${config.PORT}`);
});
