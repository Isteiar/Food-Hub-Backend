import { model, Schema } from "mongoose";
import { IFood } from "../interfaces/Food.interface";

const foodSchema = new Schema<IFood>({
  foodItemName: {
    type: String,
    trim: true,
    required: [true, "Food name is required"],
  },
  foodImages: {
    type: [String],
    required: [true, "Food thumbnails are required"],
  },
  foodDescription: {
    type: String,
    required: [true, "Food description is required"],
  },
  foodPricePerUnit: {
    type: Number,
    required: [true, "Food price is required"],
  },
});

export const FoodModel = model<IFood>("Food", foodSchema);
