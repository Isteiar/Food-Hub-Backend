import { Document } from "mongoose";
import { IFood } from "./Food.interface";

export interface IOrder extends Document {
  orderItem: IFood;
  orderUnit: number;
  orderRating: number;
  orderReview?: string;
}
