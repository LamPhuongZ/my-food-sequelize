import express from "express";
import { likeRestaurant, deleteLikeRestaurant, getRestaurantLike, getUserLike } from "../controllers/likeController.js";
const resRouter = express.Router();
resRouter.post("", likeRestaurant);
resRouter.delete("/handle-unlike/:user_id/:res_id", deleteLikeRestaurant);
resRouter.get("/res/:res_id", getRestaurantLike);
resRouter.get("/user/:user_id", getUserLike);

export default resRouter;