import { Router } from "express";
import {
  createRestaurant,
  deleteRestaurant,
  getAllRestaurants,
  getRestaurantById,
  updateRestaurant,
} from "../controllers/Restaurant.controller";

const restaurantRouter = Router();

restaurantRouter.post("/create-restaurant", createRestaurant);
restaurantRouter.get("/all-restaurants", getAllRestaurants);
restaurantRouter.get("/restaurant", getRestaurantById);
restaurantRouter.put("/update-restaurant/:id", updateRestaurant);
restaurantRouter.put("/delete-restaurant/:id", deleteRestaurant);

export default restaurantRouter;
