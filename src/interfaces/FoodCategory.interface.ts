import { Document } from "mongoose";

export interface IFoodCategory extends Document {
  categoryName: string[];
  categoryThumbnail: string;
}
