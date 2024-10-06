import { Router } from "express";
import authRouter from "./auth.router.js";
import expRouter from "./exp.router.js";
import authorizationToken from "../middleware/auth.middleware.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/exp", expRouter);

export default router;
