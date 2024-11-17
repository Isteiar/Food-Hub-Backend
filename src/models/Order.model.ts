import { model, Schema } from "mongoose";
import { IOrder } from "../interfaces/Order.interface";
const orderSchema = new Schema<IOrder>({
  orderItem: [{ type: Schema.Types.ObjectId, ref: "Food", required: true }],
  orderUnit: { type: Number, required: true },
  orderRating: { type: Number },
  orderReview: { type: String },
});

export const OrderModel = model<IOrder>("Order", orderSchema);
