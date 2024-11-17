import { Request, Response } from "express";
import { OrderModel } from "../models/Order.model";

// Create a new order
export const createOrder = async (req: Request, res: Response) => {
  try {
    const { orderItem, orderUnit, orderRating, orderReview } = req.body;

    await OrderModel.create({
      orderItem,
      orderUnit,
      orderRating,
      orderReview,
    });

    res.status(201).send({ message: "Order created successfully" });
  } catch (err) {
    res.status(500).send({ message: "Error creating order", error: err });
  }
};

// Get all orders
export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const allOrders = await OrderModel.find().populate("orderItem");

    if (!allOrders) {
      res.status(404).send({ message: "Orders are not found" });
      return;
    }

    res
      .status(200)
      .send({ message: "Orders retrieved successfully", response: allOrders });
  } catch (err) {
    res.status(500).send({ message: "Error retrieving orders", error: err });
  }
};

// Get a single order by ID
export const getOrderById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const order = await OrderModel.findById(id).populate("orderItem");

    if (!order) {
      res.status(404).send({ message: "Order is not found" });
    }

    res
      .status(200)
      .send({ message: "Order retrieved successfully", response: order });
  } catch (err) {
    res.status(500).send({ message: "Error retrieving order", error: err });
  }
};
