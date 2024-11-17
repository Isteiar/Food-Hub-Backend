import { Router } from "express";
import {
  createFoodItem,
  getAllFoodItems,
  getFoodItemById,
  updateFoodItem,
} from "../controllers/Food.controller";

const foodRouter = Router();

foodRouter.post("/create-food-item", createFoodItem);
foodRouter.get("/all-food-items", getAllFoodItems);
foodRouter.get("/food-item/:id", getFoodItemById);
foodRouter.put("/update-food-item/:id", updateFoodItem);
foodRouter.delete("/delete-food-item/:id", updateFoodItem);

export default foodRouter;
