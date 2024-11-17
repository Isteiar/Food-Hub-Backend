import { Document } from "mongoose";

export interface IPayment extends Document {
  orderId: string;
  customerName: string;
  amount: number;
  deliveryFee: number;
  deliveryAddress: string;
  tax: number;
  paymentMethod: "card" | "cash" | "online";
  paymentStatus: "pending" | "completed" | "failed";
  transactionId?: string; // Optional for online payments
  paymentDate: Date;
}
