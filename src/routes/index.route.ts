import { Router } from "express";
import userRouter from "./user.route";
import foodRouter from "./food.route";

const router = Router();

router.use("/user", userRouter);
router.use("/food", foodRouter);
router.use("/restaurant");
router.use("/order");

export default router;
