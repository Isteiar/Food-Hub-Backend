import { Document, Types } from "mongoose";

export interface IFood extends Document {
  foodItemName: string;
  foodImages: string[];
  foodDescription: string;
  foodPricePerUnit: number;
  restaurantId: Types.ObjectId;
}
