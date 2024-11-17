import { Router } from "express";
import userRouter from "./user.route";
import foodRouter from "./food.route";

const router = Router();

router.use("/user", userRouter);
router.use("/foods", foodRouter);
router.use("/food-categories", foodRouter);
router.use("/restaurants");
router.use("/orders");

export default router;
