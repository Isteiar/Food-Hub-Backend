import { Router } from "express";
import {
  createFoodCategory,
  getAllFoodCategories,
  getFoodCategoryById,
  updateFoodCategory,
} from "../controllers/FoodCategory.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { authenticateFor } from "../middlewares/roleBaseAuth.middleware";

const foodCategoryRouter = Router();

foodCategoryRouter.get("/all-food-categories", getAllFoodCategories);
foodCategoryRouter.get("/food-category/:id", getFoodCategoryById);

foodCategoryRouter.post(
  "/create-food-category",
  authMiddleware,
  authenticateFor("owner"),
  createFoodCategory
);
foodCategoryRouter.put(
  "/update-food-category/:id",
  authMiddleware,
  authenticateFor("owner"),
  updateFoodCategory
);

export default foodCategoryRouter;
