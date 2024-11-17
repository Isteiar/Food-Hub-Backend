import { Router } from "express";
import userRouter from "./user.route";
import foodRouter from "./food.route";
import foodCategoryRouter from "./foodCategory.route";
import orderRouter from "./order.route";
import restaurantRouter from "./restaurant.route";

const router = Router();

router.use("/user", userRouter);
router.use("/foods", foodRouter);
router.use("/food-categories", foodCategoryRouter);
router.use("/orders", orderRouter);
router.use("/restaurants", restaurantRouter);

export default router;
