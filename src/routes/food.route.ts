import { Router } from "express";
import {
  createFoodItem,
  getAllFoodItems,
} from "../controllers/Food.controller";

const foodRouter = Router();

foodRouter.post("create-food-item", createFoodItem);
foodRouter.get("all-food-items", getAllFoodItems);

export default foodRouter;
