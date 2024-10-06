import { Router } from "express";
import expController from "../controller/exp.controller.js";
import authorizationToken from "../middleware/auth.middleware.js";

const expRouter = Router();

expRouter.post("/create", authorizationToken, expController.createExpProfile);
expRouter.get("/fetch", authorizationToken, expController.getExpProfile);
expRouter.put("/edit", authorizationToken, expController.editExpProfile);

export default expRouter;
