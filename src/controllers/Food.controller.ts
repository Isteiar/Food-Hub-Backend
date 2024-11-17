//create a new food item

import { Request, response, Response } from "express";
import { FoodModel } from "../models/Food.model";

export const createFoodItem = async (req: Request, res: Response) => {
  try {
    const { foodItemName, foodImages, foodDescription, foodPricePerUnit } =
      req.body;
    const newFood = await FoodModel.create({
      foodItemName,
      foodImages,
      foodDescription,
      foodPricePerUnit,
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
    res.status(201).send({
      message: "Food items retrieved successfully",
      response: allFoodItems,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error retrieving food items", error: err });
  }
};
