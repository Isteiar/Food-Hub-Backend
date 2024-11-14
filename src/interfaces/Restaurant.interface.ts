import { Document, Types } from "mongoose";

export interface IRestaurant extends Document {
  restaurantName: string;
  restaurantLogo: string;
  restaurantReview?: string;
  restaurantRating: number;
  ownerId: Types.ObjectId;
}
