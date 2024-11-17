import { Document, Types } from "mongoose";

export interface IRestaurant extends Document {
  restaurantName: string;
  restaurantLogo: string;
  restaurantAdrress: string;
  restaurantRating: number;
  ownerId: Types.ObjectId;
}
