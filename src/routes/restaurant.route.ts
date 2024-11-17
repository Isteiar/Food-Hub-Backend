import { Router } from "express";
import {
  createRestaurant,
  getAllRestaurants,
} from "../controllers/Restaurant.controller";

const restaurantRouter = Router();

restaurantRouter.post("/create-restaurant", createRestaurant);
restaurantRouter.get("/all-restaurants", getAllRestaurants);

export default restaurantRouter;
