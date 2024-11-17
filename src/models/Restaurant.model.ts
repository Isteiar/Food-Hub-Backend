import { model, Schema } from "mongoose";
import { IRestaurant } from "../interfaces/Restaurant.interface";

const restaurantSchema = new Schema<IRestaurant>(
  {
    restaurantName: {
      type: String,
      required: [true, "Restaurant name is reuired"],
    },
    restaurantLogo: {
      type: String,
      required: [true, "Restaurant logo is reuired"],
    },
    restaurantAdrress: {
      type: String,
      required: [true, "Restaurant address is reuired"],
    },
    restaurantRating: {
      type: Number,
      required: [true, "Restaurant restaurantLogoating is reuired"],
    },
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const RestaurantModel = model<IRestaurant>(
  "Restaurant",
  restaurantSchema
);
