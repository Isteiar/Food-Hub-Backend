import { Router } from "express";
import {
  createRestaurant,
  getAllRestaurants,
  getRestaurantById,
} from "../controllers/Restaurant.controller";

const restaurantRouter = Router();

restaurantRouter.post("/create-restaurant", createRestaurant);
restaurantRouter.get("/all-restaurants", getAllRestaurants);
restaurantRouter.get("/restaurant", getRestaurantById);

export default restaurantRouter;
