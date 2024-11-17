import { Router } from "express";
import { createFoodCategory } from "../controllers/FoodCategory.controller";

const foodCategory = Router();

foodCategory.post("/create-food-category", createFoodCategory);
