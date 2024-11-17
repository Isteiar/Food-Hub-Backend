import { Router } from "express";
import {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
} from "../controllers/Order.controller";

const orderRouter = Router();

orderRouter.post("/create-new-order", createOrder);
orderRouter.get("/all-orders", getAllOrders);
orderRouter.get("/order", getOrderById);
orderRouter.put("/update-order/:id", updateOrder);

export default orderRouter;
