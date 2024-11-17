import { Response } from "express";
import { PaymentModel } from "../models/Payment.model";
import { IAuthRequest } from "../interfaces/AuthRequest.interface";

// Create a new payment
export const addPayment = async (req: IAuthRequest, res: Response) => {
  try {
    const {
      orderId,
      customerName,
      amount,
      deliveryFee,
      deliveryAddress,
      tax,
      paymentMethod,
      paymentStatus,
      paymentDate,
    } = req.body;

    if (!req.user) {
      res.status(403).send({ message: "User is not authenticated" });
      return;
    }

    const userId = req.user._id;

    
    await PaymentModel.create({
      orderId,
      customerName,
      amount,
      deliveryFee,
      deliveryAddress,
      tax,
      paymentMethod,
      paymentStatus,
      paymentDate,
    });

    res.status(201).send({ message: "Payment added successfully" });
  } catch (err) {
    res.status(500).send({ message: "Error creating payment", error: err });
  }
};
