import { Router } from "express";
import userRouter from "./user.route";

const router = Router();

router.use("/user", userRouter);
router.use("/food");
router.use("/restaurant");
router.use("/order");
