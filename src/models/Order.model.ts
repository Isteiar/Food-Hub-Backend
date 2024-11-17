import { model, Schema } from "mongoose";
import { IOrder } from "../interfaces/Order.interface";
const orderSchema = new Schema<IOrder>({
  orderItem: [
    {
      type: Schema.Types.ObjectId,
      ref: "Food",
      required: [true, "Order items are required"],
    },
  ],
  orderUnit: {
    type: Number,
    required: [true, "Order unit is required"],
    min: [1, "Order unit must be at least 1"],
  },
  orderRating: {
    type: Number,
    required: [true, "Order rating is required"],
    min: [1, "Rating must be at least 1"],
    max: [5, "Rating cannot exceed 5"],
  },
  orderReview: {
    type: String,
    trim: true,
  },
});

export const OrderModel = model<IOrder>("Order", orderSchema);
