import { Router } from "express";
import {
  createFoodCategory,
  getAllFoodCategories,
  getFoodCategoryById,
} from "../controllers/FoodCategory.controller";

const foodCategoryRouter = Router();

foodCategoryRouter.post("/create-food-category", createFoodCategory);
foodCategoryRouter.get("/all-food-categories", getAllFoodCategories);
foodCategoryRouter.get("/food-category", getFoodCategoryById);

export default foodCategoryRouter;
