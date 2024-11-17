import { Request, response, Response } from "express";
import { FoodModel } from "../models/Food.model";

//create a new food item
export const createFoodItem = async (req: Request, res: Response) => {
  try {
    const {
      foodItemName,
      foodImages,
      foodDescription,
      foodPricePerUnit,
      restaurantId,
    } = req.body;


    await FoodModel.create({
      foodItemName,
      foodImages,
      foodDescription,
      foodPricePerUnit,
      restaurantId,
    });

    res.status(201).send({ message: "New food item is created" });
  } catch (err) {
    res.status(500).send({ message: "Could not create user", error: err });
  }
};

//get all food items
export const getAllFoodItems = async (req: Request, res: Response) => {
  try {
    const allFoodItems = await FoodModel.find();

    if (!allFoodItems) {
      res.status(404).send({ message: "Food items are not found" });
      return;
    }

    res.status(201).send({
      message: "Food items retrieved successfully",
      response: allFoodItems,
    });
  } catch (err) {
    res
      .status(500)
      .send({ message: "Error retrieving food items", error: err });
  }
};

// Get a single food item by ID
export const getFoodItemById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const foodItem = await FoodModel.findById(id);

    if (!foodItem) {
      res.status(404).send({ message: "Food item is not found" });
      return;
    }

    res.status(201).send({
      message: "Food item retrieved successfully",
      response: foodItem,
    });
  } catch (err) {
    res.status(500).send({ message: "Error retrieving food item", error: err });
  }
};

// Update a food item by ID
export const updateFoodItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { foodItemName, foodImages, foodDescription, foodPricePerUnit } =
      req.body;

    const updatedFood = await FoodModel.findByIdAndUpdate(
      id,
      { foodItemName, foodImages, foodDescription, foodPricePerUnit },
      { new: true, runValidators: true }
    );

    if (!updatedFood) {
      res.status(404).send({ message: "Food item is not found" });
      return;
    }

    res.status(200).send({
      message: "Food item updated successfully",
    });
  } catch (err) {
    res.status(500).send({ message: "Error updating food item", error: err });
  }
};

// Delete a food item by ID
export const deleteFoodItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedFood = await FoodModel.findByIdAndDelete(id);

    if (!deletedFood) {
      res.status(404).send({ message: "Food item is not found" });
      return;
    }

    res.status(200).send({ message: "Food item deleted successfully" });
  } catch (err) {
    res.status(500).send({ message: "Error deleting food item", error: err });
  }
};
