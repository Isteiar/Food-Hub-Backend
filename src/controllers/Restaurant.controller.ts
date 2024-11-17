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

// Get all restaurants
export const getAllRestaurants = async (_req: Request, res: Response) => {
  try {
    const restaurants = await RestaurantModel.find().populate("ownerId");

    if (!restaurants) {
      res.status(404).send({ message: "Restaurants are not found" });
      return;
    }
    res
      .status(200)
      .send({ message: "Restaurants retrieved successfully", restaurants });
  } catch (err) {
    res
      .status(500)
      .send({ message: "Error retrieving restaurants", error: err });
  }
};
