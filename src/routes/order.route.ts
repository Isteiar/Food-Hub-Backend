import { Router } from "express";
import { createOrder } from "../controllers/Order.controller";

const orderRouter = Router();

orderRouter.post("/create-new-order", createOrder);

export default orderRouter;
