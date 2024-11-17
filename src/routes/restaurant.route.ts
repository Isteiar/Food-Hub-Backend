import { Router } from "express";
import {
  createRestaurant,
  deleteRestaurant,
  getAllRestaurants,
  getRestaurantById,
  updateRestaurant,
} from "../controllers/Restaurant.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { authenticateFor } from "../middlewares/roleBaseAuth.middleware";

const restaurantRouter = Router();

restaurantRouter.get("/all-restaurants", getAllRestaurants);
restaurantRouter.get("/restaurant", getRestaurantById);

restaurantRouter.post("/create-restaurant", authMiddleware, createRestaurant);

restaurantRouter.put(
  "/update-restaurant/:id",
  authMiddleware,
  authenticateFor("owner"),
  updateRestaurant
);

restaurantRouter.put(
  "/delete-restaurant/:id",
  authMiddleware,
  authenticateFor("owner"),
  deleteRestaurant
);

export default restaurantRouter;
