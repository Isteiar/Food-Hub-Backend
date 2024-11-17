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
      orderReview
    });

    res.status(201).send({ message: "Order created successfully" });
  } catch (err) {
    res.status(500).send({ message: "Error creating order", error:err });
  }
};
