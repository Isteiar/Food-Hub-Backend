import { Router } from "express";
import { createOrder, getAllOrders } from "../controllers/Order.controller";

const orderRouter = Router();

orderRouter.post("/create-new-order", createOrder);
orderRouter.get("/all-orders", getAllOrders);

export default orderRouter;
