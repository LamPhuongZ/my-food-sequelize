import express from "express";
import { addRate, getRestaurantRate, getUserRate } from "../controllers/rateController.js";
const rateRouter = express.Router();
rateRouter.post("", addRate);
rateRouter.get("/res/:res_id", getRestaurantRate);
rateRouter.get("/user/:user_id", getUserRate);

export default rateRouter;