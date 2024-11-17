import { Router } from "express";
import { createOrder, getAllOrders, getOrderById } from "../controllers/Order.controller";

const orderRouter = Router();

orderRouter.post("/create-new-order", createOrder);
orderRouter.get("/all-orders", getAllOrders);
orderRouter.get("/order", getOrderById);

export default orderRouter;
