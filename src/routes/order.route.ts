import { Router } from "express";
import {
  createOrder,
  deleteOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
} from "../controllers/Order.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { authenticateFor } from "../middlewares/roleBaseAuth.middleware";

const orderRouter = Router();

orderRouter.post("/create-new-order", authMiddleware,authenticateFor("user"), createOrder);
orderRouter.get("/all-orders", getAllOrders);
orderRouter.get("/order", getOrderById);
orderRouter.put("/update-order/:id",authMiddleware,authenticateFor("user"), updateOrder);
orderRouter.delete("/delete-order/:id",authMiddleware,authenticateFor("user"), deleteOrder);

export default orderRouter;
