import { Router } from "express";
import {
  createFoodCategory,
  getAllFoodCategories,
  getFoodCategoryById,
  updateFoodCategory,
} from "../controllers/FoodCategory.controller";

const foodCategoryRouter = Router();

foodCategoryRouter.post("/create-food-category", createFoodCategory);
foodCategoryRouter.get("/all-food-categories", getAllFoodCategories);
foodCategoryRouter.get("/food-category/:id", getFoodCategoryById);
foodCategoryRouter.put("/update-food-category/:id", updateFoodCategory);

export default foodCategoryRouter;
