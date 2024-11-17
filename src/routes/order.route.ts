import { Router } from "express";
import {
  createOrder,
  deleteOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
} from "../controllers/Order.controller";

const orderRouter = Router();

orderRouter.post("/create-new-order", createOrder);
orderRouter.get("/all-orders", getAllOrders);
orderRouter.get("/order", getOrderById);
orderRouter.put("/update-order/:id", updateOrder);
orderRouter.delete("/delete-order/:id", deleteOrder);

export default orderRouter;
