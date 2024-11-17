import { model, Schema } from "mongoose";
import { IPayment } from "../interfaces/Payment.interface";

const paymentSchema = new Schema<IPayment>({
  orderId: { type: String, required: true },
  customerName: { type: String, required: true },
  amount: { type: Number, required: true },
  deliveryFee: { type: Number, required: true },
  deliveryAddress: { type: String, required: true },
  tax: { type: Number, required: true },
  paymentMethod: {
    type: String,
    enum: ["card", "cash", "online"],
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ["pending", "completed", "failed"],
    required: true,
  },
  transactionId: {
    type: String,
    required: function () {
      return this.paymentMethod === "online";
    },
  },
  paymentDate: { type: Date, required: true, default: Date.now },
});

export const PaymentModel = model<IPayment>("Payment", paymentSchema);
