import { Request, Response } from "express";
import { RestaurantModel } from "../models/Restaurant.model";
import { FoodModel } from "../models/Food.model";

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
export const getAllRestaurants = async (req: Request, res: Response) => {
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

// Get a single restaurant by ID
export const getRestaurantById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const restaurant = await RestaurantModel.findById(id).populate("ownerId");

    if (!restaurant) {
      res.status(404).send({ message: "Restaurant not found" });
      return;
    }

    res.status(200).send({
      message: "Restaurant retrieved successfully",
      response: restaurant,
    });
  } catch (err) {
    res
      .status(500)
      .send({ message: "Error retrieving restaurant", error: err });
  }
};

// Update a restaurant by ID
export const updateRestaurant = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      restaurantName,
      restaurantLogo,
      restaurantAdrress,
      restaurantReview,
      restaurantRating,
    } = req.body;

    const updatedRestaurant = await RestaurantModel.findByIdAndUpdate(
      id,
      {
        restaurantName,
        restaurantLogo,
        restaurantAdrress,
        restaurantReview,
        restaurantRating,
      },
      { new: true, runValidators: true }
    );

    if (!updatedRestaurant) {
      res.status(404).send({ message: "Restaurant not found" });
      return;
    }

    res.status(200).send({
      message: "Restaurant updated successfully",
      response: updatedRestaurant,
    });
  } catch (err) {
    res.status(500).send({ message: "Error updating restaurant", error: err });
  }
};

// Delete a restaurant by ID
export const deleteRestaurant = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedRestaurant = await RestaurantModel.findByIdAndDelete(id);

    if (!deletedRestaurant) {
      res.status(404).send({ message: "Restaurant not found" });
      return;
    }

    res.status(200).send({
      message: "Restaurant deleted successfully",
      restaurant: deletedRestaurant,
    });
  } catch (err) {
    res.status(500).send({ message: "Error deleting restaurant", error: err });
  }
};
