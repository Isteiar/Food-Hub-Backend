import { Router } from "express";
import {
  createFoodCategory,
  getAllFoodCategories,
} from "../controllers/FoodCategory.controller";

const foodCategoryRouter = Router();

foodCategoryRouter.post("/create-food-category", createFoodCategory);
foodCategoryRouter.get("/all-food-categories", getAllFoodCategories);

export default foodCategoryRouter;
