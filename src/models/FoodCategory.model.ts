import { model, Schema } from "mongoose";
import { IFoodCategory } from "../interfaces/FoodCategory.interface";

const foodCategorySchema = new Schema<IFoodCategory>({
  categoryName: {
    type: [String],
    required: [true, "Food category is required"],
  },
  categoryThumbnail: {
    type: String,
    required: [true, "Category thumbnail is required"],
  },
});

export const FoodCategoryModel = model<IFoodCategory>(
  "FoodCategory",
  foodCategorySchema
);
