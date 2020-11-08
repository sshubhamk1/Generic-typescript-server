import { Router } from "express";

// importing all controllers of auths
import * as authController from "../Controllers/authController";

// creating router for auths
const router = Router();

// giving routing path for different controllers
router.route("/signin").post(authController.postSignIn);

router.route("/signup").post(authController.postSignup);

export default router;
