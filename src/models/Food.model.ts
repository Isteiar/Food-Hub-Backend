import { model, Schema } from "mongoose";
import { IFood } from "../interfaces/Food.interface";

const foodSchema = new Schema<IFood>({
  name: {
    type: String,
    trim: true,
    required: [true, "Food name is required"],
  },
  thumbnails: {
    type: [String],
    required: [true, "Food thumbnails are required"],
  },
  description: {
    type: String,
    required: [true, "Food description is required"],
  },
  price_per_unit: {
    type: Number,
    required: [true, "Food price is required"],
  },
});

export const FoodModel = model<IFood>("Food", foodSchema);
