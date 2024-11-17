import { Request, Response } from "express";
import { RestaurantModel } from "../models/Restaurant.model";

// Create a new restaurant
export const createRestaurant = async (req: Request, res: Response) => {
  try {
    const {
      restaurantName,
      restaurantLogo,
      restaurantAdrress,
      restaurantReview,
      restaurantRating,
      ownerId,
    } = req.body;

    await RestaurantModel.create({
      restaurantName,
      restaurantLogo,
      restaurantAdrress,
      restaurantReview,
      restaurantRating,
      ownerId,
    });

    res.status(201).send({ message: "Restaurant created successfully" });
  } catch (err) {
    res.status(500).send({ message: "Error creating restaurant", error: err });
  }
};
