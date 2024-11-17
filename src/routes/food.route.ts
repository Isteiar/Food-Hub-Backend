import { Router } from "express";
import {
  createFoodItem,
  getAllFoodItems,
  getAllFoodItemsByRestaurantId,
  getFoodItemById,
  updateFoodItem,
} from "../controllers/Food.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { authenticateFor } from "../middlewares/roleBaseAuth.middleware";

const foodRouter = Router();

foodRouter.get("/all-food-items", getAllFoodItems);
foodRouter.get("/food-item/:id", getFoodItemById);
foodRouter.get("/allFoodItemsByRestaurantId", getAllFoodItemsByRestaurantId);

foodRouter.post(
  "/add-food-item",
  authMiddleware,
  authenticateFor("owner"),
  createFoodItem
);

foodRouter.put(
  "/update-food-item/:id",
  authMiddleware,
  authenticateFor("owner"),
  updateFoodItem
);

foodRouter.delete(
  "/delete-food-item/:id",
  authMiddleware,
  authenticateFor("owner"),
  updateFoodItem
);

export default foodRouter;
