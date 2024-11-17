import { Router } from "express";
import { createFoodItem } from "../controllers/Food.controller";

const foodRouter = Router();

foodRouter.post("create-food-item",createFoodItem);

export default foodRouter;
